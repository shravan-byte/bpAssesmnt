using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MongoDB.Driver;
using MongoDB.Bson;
using bluePrintAssesment.Models;
using System.Configuration;

namespace bluePrintAssesment.Controllers
{
    [RoutePrefix("Api/Employee")]
    public class EmployeeController : ApiController
    {
        //// GET: Employee
        //public ActionResult Index()
        //{
        //    return View();
        //}

        [Route("InsertEmployee")]
        [HttpPost]
        public object Addemployee(EmployeeDetails objVM)
        {
            try
            {   ///Insert Emoloyeee  
                #region InsertDetails  
                if (objVM.Id == null)
                {
                    string constr = ConfigurationManager.AppSettings["connectionString"];
                    var Client = new MongoClient(constr);
                    var DB = Client.GetDatabase("Employee");
                    var collection = DB.GetCollection<EmployeeDetails>("EmployeeDetails");
                    collection.InsertOne(objVM);
                    return new Status
                    { Result = "Success", Message = "Employee Details Insert Successfully" };
                }
                #endregion
                ///Update Emoloyeee  
                #region updateDetails  
                else
                {
                    string constr = ConfigurationManager.AppSettings["connectionString"];
                    var Client = new MongoClient(constr);
                    var Db = Client.GetDatabase("Employee");
                    var collection = Db.GetCollection<EmployeeDetails>("EmployeeDetails");

                    var update = collection.FindOneAndUpdateAsync(Builders<EmployeeDetails>.Filter.Eq("Id", objVM.Id), Builders<EmployeeDetails>.Update.Set("FullName", objVM.FullName).Set("Address", objVM.Address).Set("PhoneNumber", objVM.PhoneNumber).Set("Position", objVM.Position));

                    return new Status
                    { Result = "Success", Message = "Employee Details Update Successfully" };
                }
                #endregion
            }

            catch (Exception ex)
            {
                return new Status
                { Result = "Error", Message = ex.Message.ToString() };
            }

        }


        #region Getemployeedetails  
        [Route("GetAllEmployee")]
        [HttpGet]
        public object GetAllEmployee()
        {
            string constr = ConfigurationManager.AppSettings["connectionString"];
            var Client = new MongoClient(constr);
            var db = Client.GetDatabase("Employee");
            var collection = db.GetCollection<EmployeeDetails>("EmployeeDetails").Find(new BsonDocument()).ToList();
            return Json(collection);

        }
        #endregion


        #region EmpdetaisById  
        [Route("GetEmployeeById")]
        [HttpGet]
        public object GetEmployeeById(string id)
        {
            string constr = ConfigurationManager.AppSettings["connectionString"];
            var Client = new MongoClient(constr);
            var DB = Client.GetDatabase("Employee");
            var collection = DB.GetCollection<EmployeeDetails>("EmployeeDetails");
            var plant = collection.Find(Builders<EmployeeDetails>.Filter.Where(s => s.Id == id)).FirstOrDefault();
            return Json(plant);

        }
        #endregion


        #region DeleteEmployee  
        [Route("Delete")]
        [HttpGet]
        public object Delete(string id)
        {
            try
            {
                string constr = ConfigurationManager.AppSettings["connectionString"];
                var Client = new MongoClient(constr);
                var DB = Client.GetDatabase("Employee");
                var collection = DB.GetCollection<EmployeeDetails>("EmployeeDetails");
                var DeleteRecored = collection.DeleteOneAsync(
                               Builders<EmployeeDetails>.Filter.Eq("Id", id));
                return new Status
                { Result = "Success", Message = "Employee Details Delete  Successfully" };

            }
            catch (Exception ex)
            {
                return new Status
                { Result = "Error", Message = ex.Message.ToString() };
            }

        }
        #endregion
    }
}