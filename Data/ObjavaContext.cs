using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASPReact.Models
{
    public class ObjavaContext : DbContext
    {
        public ObjavaContext (DbContextOptions<ObjavaContext> options)
            : base(options)
        {
        }

        public DbSet<ASPReact.Models.Objava> Objave { get; set; }
    }
}
