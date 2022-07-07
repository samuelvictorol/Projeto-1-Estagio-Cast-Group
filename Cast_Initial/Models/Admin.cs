using System.ComponentModel.DataAnnotations;

namespace Cast_Initial.Models
{
    public class Admin
    {
        public int Id { get; set; }
        [StringLength(35)]
        public string? NomeCompleto { get; set; }
        [StringLength(20)]
        public string? Username { get; set; }
        public string? Password{ get; set; }
        public string? Image { get; set; }

    }
}
