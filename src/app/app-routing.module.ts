import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AddUpdateComponent } from './components/add-update/add-update.component';
import { EmployeeDetailsViewComponent } from './components/employee-details-view/employee-details-view.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

const routes: Routes = [
  {path:'',redirectTo:'employee-view',pathMatch:'full'},
  {path:'employee-view',component:EmployeeViewComponent,data:{roles:["manager","administer","employee"]}},
  {path:'add-employee',component:AddUpdateComponent,data:{roles:["manager"]}},
  {path:'employee-details',component:EmployeeDetailsViewComponent,data:{roles:["manager","administer","employee"]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
