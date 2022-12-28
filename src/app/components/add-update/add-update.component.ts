import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

  employee!:Employee;
  address!:Address;
  

  employeeForm = new FormGroup({
    employeeId: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    dateOfBirth:new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    designation: new FormControl(),
    role: new FormControl(),
    department: new FormControl(),
    reportingOfficerName:new FormControl(),
    reportingOfficerId:new FormControl(),
    experience: new FormControl(),
    salary:new FormControl(),
    dateOfJoining:new FormControl(),
    promotionBand: new FormControl(),
    workingMode: new FormControl(),
    address:new FormGroup({
      doorNumber:new FormControl(),
      street:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl()
     }),
     branchLocation:new FormControl(),
     projectName: new FormControl(),
     assignmentStartDate:new FormControl(),
     assignmentEndDate: new FormControl()
  })
  constructor(private _service:EmployeeService, private _router:Router, private _activatedRoute:ActivatedRoute) { }

  employeeId:string='';
  employeeById!:Employee;



  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next:(data)=>{
          this.employeeId=data["id"];
      }
    })
    this._service.getEmployeeById(this.employeeId).subscribe({
      next:(data)=>{
        this.employeeById=data;
        this.employeeForm.setValue(data);
      }
    })


  }

  onAddEmployee=(employeeForm:any)=>{
    console.log(employeeForm);
  // console.log(this.addemployeeForm.value);
  this.employee=employeeForm.value;
  console.log(this.employee);
  this._service.saveEmployee(this.employee).subscribe({
  next:(data)=>console.log(data)
  })
  }



  backToHome(){
    this._router.navigate(['/employee-view'])
  }


}
