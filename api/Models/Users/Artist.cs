namespace api.Models.Users
{
    public class Artist : IUser
    {
        public int id { get => id; set => id = value; }
        public string f_name { get =>f_name; set=> f_name=value; }
        public string l_name { get => l_name; set => l_name =value; }
        public string email { get => email; set => email = value; }
        public string password { get => password; set => password =value; }
        public string picter { get => picter; set => picter = value; }
        public string phone_number { get => phone_number; set => phone_number = value; }
        public bool verifted { get => verifted; set => verifted = value; }
        public string bio { get => bio; set => bio = value; }
    }
}
