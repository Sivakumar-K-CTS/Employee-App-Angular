import { Address } from "./address";

export class Employee {
    constructor(
        public employeeId:string,
	
	    public firstName:string,
	
	public lastName:string,
	
	public gender:string,
	
	public dateOfBirth:Date,
	
	public mobile:number,
	
	public email:string,
	 			
	public designation:string,
	 			
	public role:string,
	 			
	public department:string,
				
	public reportingOfficerName:string,
	 		
	public reportingOfficerId:number,
	 			
	public experience:number,
	 			
	public salary:number,
	 			
	public dateOfJoining:Date,
	 			
	public promotionBand:Text ,
	 			
	public workingMode:string,
	 			
	public address:Address,
	 		
	public branchLocation:string,
	 			
	public projectName:string,
	 			
	public assignmentStartDate:Date,
	 			
	public assignmentEndDate:Date
    ){}
}
