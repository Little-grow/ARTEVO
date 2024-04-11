using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace api.Models.Portoflios
{
    public class File
    {
        [Key]
        public int Id { get; set; }

        public required string Name { get; set; }

        public required Uri URL { get; set; }

        public required string ContentType { get; set; }

        public long Size { get; set; }   
    }

    public class PortoflioFile: File
    {
        public int PortoflioId { get; set; }

        //public required Portoflio Portoflio { get; set; }
    }

}
