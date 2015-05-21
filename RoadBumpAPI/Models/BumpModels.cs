using System;

namespace RoadBumpAPI.Models
{
    public class BumpModels
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public float Long { get; set; }
        public float Lat { get; set; }
        public float X { get; set; }
        public float Y { get; set; }
        public float Z { get; set; }
        public float Magnitude { get; set; }
        public string Rating { get; set; }
    }

}
