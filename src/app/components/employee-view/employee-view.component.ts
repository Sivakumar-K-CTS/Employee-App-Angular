
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent{


  constructor(private _empService:EmployeeService) {
   }

  employeeList:Employee[]=[];
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'mobile', 'email', 'designation', 'role', 'department', 'reportingOfficerName', 'reportingOfficerId', 'experience', 'salary', 'dateOfJoining', 'promotionBand', 'workingMode', 'address', 'branchLocation', 'projectName', 'assignmentStartDate', 'assignmentEndDate'];
 
  ngOnInit(): void {
    this._empService.getEmployee().subscribe({
      next:(data)=>{
        this.employeeList=data.content;
        console.log(this.employeeList);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log('completed');
      }


    })
   

  }

  
  

  

}
