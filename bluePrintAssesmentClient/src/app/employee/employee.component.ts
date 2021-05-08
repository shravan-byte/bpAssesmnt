import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { EmployeeDetails } from '../Models/employee-details';
import { EmpListService } from '../Services/emp-list.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent extends AddemployeeComponent implements OnInit {
  employees= [{
    "fullName": "John Doe",
    "address": "address1",
    "phoneNumber": "4625162736",
    "position": "position1"
}, {
    "fullName": "Roger Flynn",
    "address": "address2",
    "phoneNumber": "3424262892",
    "position": "position2"
}, {
    "fullName": "Alex Visaramy",
    "address": "adress3",
    "phoneNumber": "2435892134",
    "position": "position3"
}, {
    "fullName": "Kyle Pitt",
    "address": "address4",
    "phoneNumber": "3243122736",
    "position": "position4"
}, {
    "fullName": "Elizabeth James",
    "address": "address5",
    "phoneNumber": "3233122736",
    "position": "position5"
}, {
    "fullName": "Shelly Bell",
    "address": "address6",
    "phoneNumber": "1253122736",
    "position": "position6"
}, {
    "fullName": "Martin Ziberman",
    "address": "address7",
    "phoneNumber": "3333122736",
    "position": "position7"

}
]
  public emp: Observable<EmployeeDetails[]>;  
      // massage:String;  
      dataSaved=false;  
  hoverItem: boolean = false;
      // constructor(public router: Router,protected emprecordService:EmpListService) { }  
       Loademployee()  
       {  
          this.emp = this.emprecordService.GetEmployeeRecord();  
          console.log(this.emp);  
       }  
       EmployeeEdit(id: string) {  
       localStorage.removeItem("id");  
       localStorage.setItem("id",id.toString());  
        // this.router.navigate(['/addemployee'], { queryParams: { Id: id } });  
      }  



       Deleteemployee(id: string) {  
        if (confirm("Are You Sure To Delete this Informations")) {  

          this.emprecordService.DeleteEmployee(id).subscribe(  
            () => {  
              this.dataSaved = true;  
              this.massage = "Deleted Successfully";  
            }  
          );  
        }  
        location.reload();

      }  
      ngOnInit() {  
        localStorage.clear();
        this.Loademployee();  

      }  

      hoverListItem(flag) {
        if(flag == true){
          this.hoverItem = true;
        }
     }
}
