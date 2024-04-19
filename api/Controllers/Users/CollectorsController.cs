using api.Models.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
namespace api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollectorsController : ControllerBase
    {
        // create user account "registeration"
        // Store essential information for transactions(e.g., billing address, payment method) in database

        [HttpPost("register")]
        public IActionResult register(string f_name, string l_name, string email, string number,string PaymentMethod,string BillingAddress)
        {
            // not sure where password should go
            string connectionString = "\"Server=(localdb)\\\\MSSQLLocalDB;Database=Artevo;Trusted_Connection=True;MultipleActiveResultSets=true\"";
            if (email.Substring(email.Length - 10, 10).ToLower() != "@gmail.com") return Unauthorized("invaild email");
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                string sql = "INSERT INTO Collectors (FirstName, LastName, Email, PhoneNumber,PaymentMethod,BillingAddress) VALUES (@FirstName, @LastName, @Email, @PhoneNumber, @PaymentMethod, @BillingAddress)";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@FirstName", f_name);
                    command.Parameters.AddWithValue("@LastName", l_name);
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@PhoneNumber", number);
                    command.Parameters.AddWithValue("@PaymentMethod", PaymentMethod);
                    command.Parameters.AddWithValue("@BillingAddress", BillingAddress);

                    command.ExecuteNonQuery();
                    return Ok();
                }
            }

        }


        // login
        public IActionResult Login(string email, string password)
        {
            string connectionString = "your_actual_connection_string"; // Replace with your actual connection string
            Collector user = null;

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();


                string sql = "SELECT * FROM Artists WHERE Email = @Email AND password = @password";
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);
                    command.Parameters.AddWithValue("@password", password);

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            reader.Read();
                            user = new Collector()
                            {
                                Id = (uint)reader["UserId"],
                                FirstName = (string)reader["FirstName"],
                                LastName = (string)reader["LastName"],
                                Email = email,
                                phonenumber = (string)reader["PhoneNumber"],
                                Verified = (bool)reader["Verified"],
                                PaymentMethod = (string)reader["PaymentMethod"],
                                BillingAddress = (string)reader["BillingAddress"]
                            };
                        }
                    }
                }
            }

            if (user != null)
            {
                return Ok(new { user.Id, user.FirstName, user.LastName, user.Email, user.phonenumber, user.Verified ,user.BillingAddress,user.PaymentMethod});
            }
            else
            {
                return Unauthorized("Invalid email or password");
            }
        }

    }
}
}
