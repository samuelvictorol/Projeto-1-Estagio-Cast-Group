using Cast_Initial.Models;
using Microsoft.EntityFrameworkCore;

namespace Cast_Initial.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Admin> Admins{ get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Log> Logs { get; set; }
    }
}
