using api.Models.Users;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api.Models.helper
{
    public class jwt
    {
        public string Key { get; set; }
        public string Issuser { get; set; }
        public string Audience { get; set; }
        public string DurationInDays { get; set; }
        static public string GenerateJwtToken(IUser user)
        {
            var secretKeyString = "!zAkW6GipC7L22XpdyJ2gPZP1tFWcbBB6JcVFL90dCgs=";
            var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKeyString));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>
{
new Claim(ClaimTypes.Name, user.f_name+" "+user.l_name),
new Claim(ClaimTypes.Email, user.email)
};

            var expires = DateTime.UtcNow.AddMinutes(30);
            var token = new JwtSecurityToken(
            issuer: "secureApi",
            audience: "SecureApiUser",
            expires: expires,
            signingCredentials: credentials,
            claims: claims
            );
            return new JwtHandler().WriteToken(token);
        }
    }
}
