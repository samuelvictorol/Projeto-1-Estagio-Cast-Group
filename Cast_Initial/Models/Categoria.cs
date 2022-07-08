using System.ComponentModel.DataAnnotations;

namespace Cast_Initial.Models
{
    public class Categoria
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string? NomeCategoria { get; set; }

    }
}
