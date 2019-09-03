using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASPReact.Models
{
    public class Objava
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Naslov { get; set; }

        [Required]
        public string Avtor { get; set; }

        [Required]
        public string Telo { get; set; }

        public DateTime DatumNastanka { get; set; }
        public Objava()
        {
            DatumNastanka = DateTime.Now;
        }
    }
}
