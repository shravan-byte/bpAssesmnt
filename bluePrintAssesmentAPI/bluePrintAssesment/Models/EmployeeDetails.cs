using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace bluePrintAssesment.Models
{
    public class EmployeeDetails
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public String Id { get; set; }

        public string FullName { get; set; }

        public string Address { get; set; }

        public int PhoneNumber { get; set; }

        public string Position { get; set; }
    }
}