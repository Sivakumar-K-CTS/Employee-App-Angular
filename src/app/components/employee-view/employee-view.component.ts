
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent{


  constructor(private _authGuard:AuthGuard ,private _empService:EmployeeService, private _router:Router, private _authService:AuthService) {
   }

   

  employeeList:Employee[]=[];
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'mobile', 'email', 'designation', 'role', 'department', 'reportingOfficerName', 'reportingOfficerId', 'experience', 'salary', 'dateOfJoining', 'promotionBand', 'workingMode', 'address', 'branchLocation', 'projectName', 'assignmentStartDate', 'assignmentEndDate','edit','delete'];
 
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

  showDetails(employee:Employee){
    this._router.navigate(['/employee-details',employee.employeeId])
  }

  addEmployee(){
    this._router.navigate(['/add-employee'])
  }

  editPage(employee:Employee){
    this._router.navigate(['/update-employee',employee.employeeId])
  }

  datasourse = new MatTableDataSource(this.employeeList);

  deleteEntry(employee:Employee){
    console.log('Inside deleteEntery() in empViewComponent.ts');
    this._empService.deleteEmployee(employee.employeeId).subscribe();
    this._empService.getEmployee().subscribe({
      next:(data)=>{
        console.log(data.content);
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
