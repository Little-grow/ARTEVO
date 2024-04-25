using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient; 
using System.ComponentModel.DataAnnotations;
using api.Models.Users;
using BCrypt;
using Microsoft.EntityFrameworkCore;
using api.Models.helper;
namespace api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistsController : ControllerBase
    {
        private readonly string _connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=Artevo;Trusted_Connection=True;MultipleActiveResultSets=true";

        [HttpPost("register")]
        public IActionResult CreateAccount(
            [Required] string f_name,
            [Required] string l_name,
            [Required, EmailAddress] string email,
            [Required] string number,
            string bio,
            [Required] string password 
        )
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(ModelState);

            }

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                string hashedPassword = BCrypt.Net.Next.HashPassword(password);

                string sql = "INSERT INTO Artists (FirstName, LastName, Email, PhoneNumber, Bio, PasswordHash) VALUES (@FirstName, @LastName, @Email, @PhoneNumber, @Bio, @PasswordHash)";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@FirstName", f_name);
                    command.Parameters.AddWithValue("@LastName", l_name);
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@PhoneNumber", number);
                    command.Parameters.AddWithValue("@Bio", bio);
                    command.Parameters.AddWithValue("@PasswordHash", hashedPassword);

                    try
                    {
                        command.ExecuteNonQuery();
                        Artist artis = new Artist {
                            f_name = f_name,
                            l_name = l_name,
                            email = email,
                            bio = bio,
                            phone_number= number,
                            password = hashedPassword
                        };
                        
                        var token = jwt.GenerateJwtToken(artis);
                        return Ok(new { token = token });
                    } 
                     
                    catch (SqlException ex)
                    {
                        return StatusCode(500, "An error occurred during registration. Please try again later.");
                    }
                }
            }
        }

        [HttpPost("login")]
        public IActionResult Login(string email, string password)
        {
            string hashedPassword = BCrypt.Net.Next.HashPassword(password); 

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                string sql = "SELECT * FROM Artists WHERE Email = @Email AND Password = @PasswordHash";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@PasswordHash", hashedPassword);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            reader.Read();
                            var artist = new Artist
                            {
                                id = (int)reader["ArtistId"], 
                                f_name = (string)reader["FirstName"],
                                l_name = (string)reader["LastName"], 
                                email = email, 
                                phone_number = (string)reader["PhoneNumber"],
                                bio = (string)reader["Bio"],
                                verifted = (bool)reader["Verified"],
                            };
                            var token = jwt.GenerateJwtToken(artist);
                            return Ok(new { token = token });
                        }
                        else
                        {
                            return Unauthorized(new { message = "Invalid username or password" });

                        }
                    }
                }
            }
        }
    }
}
