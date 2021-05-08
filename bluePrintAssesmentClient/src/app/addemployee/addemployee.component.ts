import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeDetails } from '../Models/employee-details';
import { EmpListService } from '../Services/emp-list.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  test: string;
  Position: any = ['Production Engineer', 'HR Director']
  massage: string;  
      dataSaved = false;  
      Addemployee:FormGroup;  
      EmployeeIdUpdate = "0";   
      constructor(public router: Router,protected emprecordService:EmpListService) { }  

      InsertEmployee(employee:EmployeeDetails)  
      {   
        if (this.EmployeeIdUpdate != "0") employee.Id=this.EmployeeIdUpdate;  
          this.emprecordService.InsertEmployee(employee).subscribe(  
            ()=>  
            {  
              if (this.EmployeeIdUpdate == "0") {  
                this.massage = 'Saved Successfully';  

              }  
              else  
              {  
                this.massage = 'Update Successfully';  
              }  
              this.dataSaved = true;  
              this.router.navigate(['/employee']);  
            })  
      }  
      onFormSubmit() {  
        console.log(this.Addemployee)
        if (this.Addemployee?.valid){
          const Emp = this.Addemployee.value;  
          this.InsertEmployee(Emp);  
          location.reload();
        }else{
          alert("Form is invalid, please re-enter")
        }
      }  

      EmployeeEdit(id: string) {  
        this.emprecordService.GetEmployeeById(id).subscribe(emp => {  
          this.massage = null;  
          this.dataSaved = false;  
          this.EmployeeIdUpdate=id;  
          this.Addemployee.controls['FullName'].setValue(emp.FullName);  
          this.Addemployee.controls['Address'].setValue(emp.Address);  
          this.Addemployee.controls['PhoneNumber'].setValue(emp.PhoneNumber);  
          this.Addemployee.controls['Position'].setValue(emp.Position);  
        });  
      }  
      clearform() {  
        this.Addemployee.controls['FullName'].setValue("");  
        this.Addemployee.controls['Address'].setValue("");  
        this.Addemployee.controls['PhoneNumber'].setValue("");  
        this.Addemployee.controls['Position'].setValue("");  
      }  
      ngOnInit() {  
        this.Addemployee = new FormGroup({  

          FullName: new FormControl('',{
            validators: Validators.required
          }),  
          Address:new FormControl('',{
            validators: Validators.required
          }),  
          PhoneNumber:new FormControl('',{
            validators: Validators.required
          }), 
          Position:new FormControl('',{
            validators: Validators.required
          }), 
      });  
      let Id = localStorage.getItem("id");  
    if(Id!=null)  
    {  
      this.EmployeeEdit(Id) ;  
     }}  
     

     changePos(e) {
      // this.Position.setValue(e.target.value, {
      //   onlySelf: true
      // })
    }

}
