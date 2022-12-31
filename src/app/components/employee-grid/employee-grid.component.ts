import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent {


  constructor(private _service:EmployeeService, private _router:Router){}
  employeeList:Employee[]=[];
  index!:number;
  records!:number;

  ngOnInit(): void {
    this._service.getEmployee().subscribe({
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
   
    this.index=1;
    this.records=5

  }

  showDetails(employee:Employee){
    this._router.navigate(['/employee-details',employee.employeeId])
  }



}
