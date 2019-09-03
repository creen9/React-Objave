using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ASPReact.Models;

namespace ASPReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ObjaveController : ControllerBase
    {
        private readonly ObjavaContext _context;

        public ObjaveController(ObjavaContext context)
        {
            _context = context;
        }

        // GET: api/Objave
        [HttpGet]
        public IEnumerable<Objava> GetObjava()
        {
            return _context.Objave;
        }

        // GET: api/Objave/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetObjava([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var objava = await _context.Objave.FindAsync(id);

            if (objava == null)
            {
                return NotFound();
            }

            return Ok(objava);
        }

        // PUT: api/Objave/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutObjava([FromRoute] int id, [FromBody] Objava objava)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != objava.Id)
            {
                return BadRequest();
            }

            _context.Entry(objava).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ObjavaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Objave
        [HttpPost]
        public async Task<IActionResult> PostObjava([FromBody] Objava objava)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Objave.Add(objava);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetObjava", new { id = objava.Id }, objava);
        }

        // DELETE: api/Objave/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteObjava([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var objava = await _context.Objave.FindAsync(id);
            if (objava == null)
            {
                return NotFound();
            }

            _context.Objave.Remove(objava);
            await _context.SaveChangesAsync();

            return Ok(objava);
        }

        private bool ObjavaExists(int id)
        {
            return _context.Objave.Any(e => e.Id == id);
        }
    }
}