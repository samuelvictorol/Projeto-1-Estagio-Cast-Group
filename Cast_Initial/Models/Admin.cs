using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cast_Initial.Models
{
    public class Admin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Username { get; set; } 
        public string? Password { get; set; }
        [StringLength(35)]
        public string? NomeCompleto { get; set; }

    }
}
