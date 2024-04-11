namespace api.Models.Portoflios
{
    public class Portoflio
    {
        public int Id { get; set; }

        public required List<File> Files { get; set; }
    }
}
