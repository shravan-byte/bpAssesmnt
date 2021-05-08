import { Injectable } from '@angular/core';  
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";  
import { EmployeeDetails } from '../Models/employee-details';
@Injectable({  
  providedIn: 'root'  
})  
export class EmpListService {  
   Url="https://localhost:44353/Api/Employee/";  
  constructor(private http:HttpClient) { }  
   InsertEmployee(employee:EmployeeDetails)  
   {  
     debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<EmployeeDetails[]>(this.Url+'/InsertEmployee/', employee,httpOptions)  
   }  
   GetEmployeeRecord():Observable<EmployeeDetails[]>  
   {  
     debugger;  
    return this.http.get<EmployeeDetails[]>(this.Url+"/GetAllEmployee")  
   }  
   DeleteEmployee(id:string):Observable<number>  
   {  
     debugger;  
    return this.http.get<number>(this.Url + '/Delete/?id='+id);  
   }  
   GetEmployeeById(id:string)  
   {  
    return this.http.get<EmployeeDetails>(this.Url + '/GetEmployeeById/?id=' + id);  
   }  
   UpdatEmplouee(employee:EmployeeDetails)  
   {  
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<EmployeeDetails[]>(this.Url+'/UpdateEmployee/', employee,httpOptions)  
   }  

}  