
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent{


  constructor(private _empService:EmployeeService, private _router:Router) {
   }

  employeeList:Employee[]=[];
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'mobile', 'email', 'designation', 'role', 'department', 'reportingOfficerName', 'reportingOfficerId', 'experience', 'salary', 'dateOfJoining', 'promotionBand', 'workingMode', 'address', 'branchLocation', 'projectName', 'assignmentStartDate', 'assignmentEndDate'];
 
  @Output()
  public selection: EventEmitter<string> = new EventEmitter<string>();

  viewModifier = 1;

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

  temp!:Employee;

  showDetails(employee:Employee){
    this.temp=employee
    this._router.navigate(['/employee-details',employee.employeeId])
  }

  addEmployee(){
    this._router.navigate(['/add-employee'])
  }
  

  

}
