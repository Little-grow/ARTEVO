namespace api.Models.Dto.PortofliosDto
{
    public class FileDto
    {
        public required string Name { get; set; }

        public required Uri URL { get; set; }

        public required string ContentType { get; set; }

        public long Size { get; set; }
    }

}
