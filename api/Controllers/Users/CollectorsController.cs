using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient; 
using System.ComponentModel.DataAnnotations;
using api.Models.Users;
using api.Models.helper;
namespace api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectorsController : ControllerBase
    {
        private readonly string _connectionString = "Server=(localdb)\\MSSQLLocalDB;Database=Artevo;Trusted_Connection=True;MultipleActiveResultSets=true";
 
        [HttpPost("register")]
        public IActionResult CreateAccount(
            [Required] string f_name,
            [Required] string l_name,
            [Required, EmailAddress] string email,
            [Required] string number,
            [Required] string payment_method,
            [Required] string billing_address,
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

                string sql = "INSERT INTO Collectors (FirstName, LastName, Email, PhoneNumber, PaymentMethod, BillingAddress, PasswordHash) VALUES (@FirstName, @LastName, @Email, @PhoneNumber, @PaymentMethod, @BillingAddress, @PasswordHash)";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@FirstName", f_name);
                    command.Parameters.AddWithValue("@LastName", l_name);
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@PhoneNumber", number);
                    command.Parameters.AddWithValue("@PaymentMethod", payment_method);
                    command.Parameters.AddWithValue("@BillingAddress", billing_address);
                    command.Parameters.AddWithValue("@PasswordHash", hashedPassword);

                    try
                    {
                        command.ExecuteNonQuery();
                        Collector collector = new Collector { 
                            f_name = f_name,
                            l_name = l_name,
                            email = email,
                            password = hashedPassword,
                            billing_address = billing_address,
                            payment_method = payment_method,
                            phone_number =number 
                        };
                        var token = jwt.GenerateJwtToken(collector);
                        return Ok(new {token = token });
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

                string sql = "SELECT * FROM Collectors WHERE Email = @Email AND PasswordHash = @PasswordHash";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@PasswordHash", hashedPassword);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            reader.Read();
                            var collector = new Collector
                            {
                                id = (int)reader["CollectorId"], 
                                f_name = (string)reader["FirstName"],
                                l_name= (string)reader["LastName"], 
                                email = email, 
                                phone_number = (string)reader["PhoneNumber"],
                                payment_method = (string)reader["PaymentMethod"],
                                billing_address = (string)reader["BillingAddress"],
                                verifted = (bool)reader["Verified"], 
                            };
                            var token = jwt.GenerateJwtToken(collector);
                            return Ok({token=token});
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
