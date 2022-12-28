import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

type EmployeeResponse={
  content:Employee[]
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _baseUrl = "/api/employee-api/employee";

  constructor(private _httpClient:HttpClient) {
    console.log("Creating an instance of Product Service");
   }

  ngOnInit(): void {
    
  }
  


  employees:Employee[]=[]
  getEmployee(){
    return this._httpClient.get<EmployeeResponse>(this._baseUrl);
  }
  getEmployeeById(empId:string){
    return this._httpClient.get<Employee>(this._baseUrl+"/"+empId);
  }

  saveEmployee=(employee:Employee):Observable<Employee>=>{
    return this._httpClient.post<Employee>(this._baseUrl,employee);
  }

}
