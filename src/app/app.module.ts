import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes:Routes=[
  
  {path:'addaccount',component:AddAccountComponent},
  {path:'addcustomer',component:AddCustomerComponent},
  {path:'login',component:LoginComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    AddAccountComponent,
    LoginComponent,
   
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
