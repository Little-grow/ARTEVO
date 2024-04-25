namespace api.Models.Users
{
    public interface IUser
    {
        public int id { get; set; }
        public string f_name { get; set; }
        public string l_name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string picter { get; set; }
        public string phone_number { get; set;}
        public bool verifted { get; set;}
    }
}
