import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeeDetailsViewComponent } from './components/employee-details-view/employee-details-view.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeViewComponent,
    EmployeeDetailsViewComponent,
    AddUpdateComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
