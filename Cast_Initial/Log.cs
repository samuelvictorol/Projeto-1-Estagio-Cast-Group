using Cast_Initial.Models;
using System.ComponentModel.DataAnnotations;
namespace Cast_Initial
{
    public class Log
    {
        [Key]
        public int Id { get; set; }
        public string? User { get; set; } // vai receber o user do admin
        public string? NomeLog { get; set; } // (adicionado, editado, deletado)
        public int CursoId { get; set; }
        public Curso? Curso { get; set; }
        public DateTime LogTime { get; set; }
    }
}
