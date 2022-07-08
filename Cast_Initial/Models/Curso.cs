using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cast_Initial.Models
{
    public class Curso
    {     
        public int Id { get; set; }
        [StringLength(40)]
        public string? Descricao{ get; set; }
        public DateTime DateInicio{ get; set; }
        public DateTime DateTermino { get; set; }
        public int QtdAlunos { get; set; }
        public int CategoriaId { get; set; }
        public Categoria? Categoria { get; set; }
    }
}
