import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { EmployeeDetailsViewComponent } from './components/employee-details-view/employee-details-view.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';


const routes: Routes = [
  {path:'',redirectTo:'employee-view', pathMatch:'full'},
  {path:'employee-view',component:EmployeeViewComponent, canActivate:[AuthGuard],data:{roles:["manager","admin","employee"]}},
  {path:'add-employee',component:AddUpdateComponent, canActivate:[AuthGuard],data:{roles:["admin"]}},
  {path:'update-employee/:id',component:AddUpdateComponent, canActivate:[AuthGuard],data:{roles:["admin","manager"]}},
  {path:'employee-details/:id',component:EmployeeDetailsViewComponent, canActivate:[AuthGuard],data:{roles:["manager","admin","employee"]}},
  {path:'employee-grid',component:EmployeeGridComponent, canActivate:[AuthGuard],data:{roles:["manager","admin","employee"]}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
