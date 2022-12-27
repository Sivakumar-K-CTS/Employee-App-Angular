import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

type EmployeeResponse={
  content:Employee[]
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _getUrl = "/api/employee-api/employee";

  constructor(private _httpClient:HttpClient) {
    console.log("Creating an instance of Product Service");
   }

  ngOnInit(): void {
    
  }
  


  employees:Employee[]=[]
  getEmployee(){
    return this._httpClient.get<EmployeeResponse>(this._getUrl);
  }
}
