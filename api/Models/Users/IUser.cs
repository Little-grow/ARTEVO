namespace api.Models.Users
{
    public interface IUser
    {
        public uint Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string phonenumber { get; set; }
        public bool Verified { get; set; }
    }
}
