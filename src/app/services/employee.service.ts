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

  deleteEmployee=(employeeId:string):Observable<any>=>{


    
    // console.log('Inside deleteEmployee in Service');
    // console.log('URL-----------'+this._baseUrl+"/"+employeeId);
    // console.log(typeof(this._httpClient.delete<string>(this._baseUrl+"/"+employeeId)));
    //  console.log(this._baseUrl+"/"+employeeId);
    // this._httpClient.delete(this._baseUrl+"/"+employeeId).subscribe();

    const url:string = `${this._baseUrl}/${employeeId}`;
    return new Observable((oSearchTemplate)=>{
      this._httpClient.delete(url, {responseType: 'text'}).subscribe()}) 


  }

  // searchTemplate(parameter: any): Observable<any> {
  //   const url = config.getServiceBaseURI() + "/search";
  //   return new Observable((oSearchTemplate) => {
  //     this.http.post(url, parameter).subscribe({
  //       next: (response) => {
  //         oSearchTemplate.next(response);
  //         oSearchTemplate.complete();
  //       },
  //       error: (error) => {
  //         oSearchTemplate.error(error);
  //         oSearchTemplate.complete();
  //       },
  //     });
  //   });
  // }

}
