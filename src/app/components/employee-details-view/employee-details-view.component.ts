import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
type EmployeeResponse={
  content:Employee[]
}


@Component({
  selector: 'app-employee-details-view',
  templateUrl: './employee-details-view.component.html',
  styleUrls: ['./employee-details-view.component.css']
})
export class EmployeeDetailsViewComponent implements OnInit {

   employee!:Employee;
  constructor(
    private _employeeService:EmployeeService ,private _activatedRoute: ActivatedRoute
  ) {
  }
  employeeId:string='';
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=>{
          this.employeeId=data["id"];
      }
    })
    this._employeeService.getEmployeeById(this.employeeId).subscribe({
      next:(data)=>{
        this.employee=data;
        console.log("EMPLOYEE--------"+this.employee.firstName);
      }
    })
  }
}
