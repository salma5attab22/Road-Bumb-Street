using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using RoadBumpAPI.Models;

namespace RoadBumpAPI.Controllers
{
    public class BumpController : ApiController
    {
        private RoadBumpAPIContext db = new RoadBumpAPIContext();

        // GET: api/Bump
        public IQueryable<BumpModels> GetBumpModels()
        {
            return db.BumpModels;
        }

        // GET BY ID: api/Bump/5
        [ResponseType(typeof(BumpModels))]
        public async Task<IHttpActionResult> GetBumpModels(int id)
        {
            BumpModels bumpModels = await db.BumpModels.FindAsync(id);
            if (bumpModels == null)
            {
                return NotFound();
            }

            return Ok(bumpModels);
        }

        // GET BY LOCATION: api/Bump/30.123/31.234
        [Route("api/Bump/{lng}/{lat}")]
        [ResponseType(typeof(BumpModels))]
        public IList<BumpModels> GetBumpModels(float lng, float lat)
        {
            var lngParameter = new SqlParameter("@lng", lng);
            var latParameter = new SqlParameter("@lat", lat);

            var result = db.Database
                .SqlQuery<BumpModels>("GetBumpsInRange @lng, @lat", lngParameter, latParameter)
                .ToList();
            return result;
        }


        // POST: api/Bump
        [ResponseType(typeof(BumpModels))]
        public async Task<IHttpActionResult> PostBumpModels(BumpModels bumpModels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BumpModels.Add(bumpModels);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = bumpModels.Id }, bumpModels);
        }


    }
}