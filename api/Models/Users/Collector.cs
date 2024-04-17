namespace api.Models.Users
{
    public class Collector : IUser
    {
        public uint Id { get => Id; set => Id = value; }
        public string FirstName { get => FirstName; set => FirstName = value; }
        public string LastName { get => LastName; set => LastName = value; }
        public string Email { get => Email; set => Email = value; }
        public string phonenumber { get => phonenumber; set => phonenumber = value; }
        public bool Verified { get; set; }
        public string PaymentMethod { get; set; }
        
        public string BillingAddress { get; set; }

    }
}
