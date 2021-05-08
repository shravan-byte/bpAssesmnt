import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"**",component:EmployeeComponent},  
  {path:"employee",component:EmployeeComponent},  
  {path:"addemployee",component:AddemployeeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
