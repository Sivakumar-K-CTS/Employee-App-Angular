import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent{

  gridColumns = 4;


  constructor(private _authGuard:AuthGuard ,private _empService:EmployeeService, private _router:Router, private _authService:AuthService) {
   }

   

  employeeList:Employee[]=[];
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'mobile', 'email', 'designation', 'role', 'department', 'reportingOfficerName', 'reportingOfficerId', 'experience', 'salary', 'dateOfJoining', 'promotionBand', 'workingMode', 'branchLocation', 'projectName', 'assignmentStartDate', 'assignmentEndDate','edit','delete'];
 
  choosedColumn:string[] = [];
  records!:number;
  index!:number; 

  viewModifier = 1;
  sortOrder:boolean = true;

  ngOnInit(): void {
    this._empService.getEmployee().subscribe({
      next:(data)=>{
        this.employeeList=data.content;
        this.choosedColumn =this.displayedColumns;
        console.log(this.employeeList);
      },
      error:(error)=>{
        console.log(error);
      },
      complete:()=>{
        console.log('completed');
      }


    })
   
    this.index=1;
    this.records=5

  }

  onSelect(event:any){
    console.log(event.value);
    this.displayedColumns=event.value;
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


    this._empService.deleteEmployee(employee.employeeId)
    .subscribe(() => {
      console.log('Inside subscribe');
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
    })
  }

  viewChooser(){
    if(this.viewModifier==1){
      this.viewModifier=0;
    }else{
      this.viewModifier=1;
    }
  }

  pagination(PageSizeOptions:PageEvent){
    this.records=PageSizeOptions.pageSize;
    this.index=PageSizeOptions.pageIndex;
    console.log(this.index);
    this._empService.employeeListPagenator(this.records,this.index).subscribe({
      next:(data)=>{
        this.employeeList=data.content;
        console.log(this.employeeList);
        console.log("pagination done");
      },
      error:(error)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

  sort(field:string){
    if(this.sortOrder){
      this.sortOrder=false;
    }else{
      this.sortOrder=true
    }
    this._empService.employeePagingAndSorting(this.index, this.records, field,this.sortOrder).subscribe({
      next:(data)=>{
        this.employeeList=data.content;
        console.log(this.employeeList);
        console.log("pagination done");
      },
      error:(error)=>console.log(error),
      complete:()=>console.log("completed")
    
  });
 
  }

  

}
