import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { Login } from './login';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pecunia Bank';

  msg:any;
  errorMsg:string;
  loginflag:boolean=false;
  login:Login = new Login();
  userName:string;
  role:string;

  constructor(private customerService:CustomerService, private router:Router, private storageservice:StorageService){
    if (localStorage.getItem("tokenId") != null) {
    
    let userstr = localStorage.getItem("tokenId");
    
    console.log(userstr.split("-")[1]);
    
    this.userName=this.customerService.decrypt(userstr.split("-")[1]);
    
    this. loginflag=true;
    
    this.role=this.customerService.decrypt(userstr.split("-")[2]);}
  }
 
    
    ngOnInit(): void {
    
    this.storageservice.watchStorage().subscribe(data=>{
    
    console.log(data);
    
    if(data == "set"){
       
    
    let userstr = localStorage.getItem("tokenId");
    
    console.log(userstr.split("-")[2]);
    this.userName=this.customerService.decrypt(userstr.split("-")[1]);
    this.loginflag=true;
    
    }
    
    else
    
    this.loginflag=false;
    
    });}
    logout(): void {
    
    this.customerService.doLogOut().subscribe(data=>{ console.log(data); 
    this.storageservice.removeItem("tokenId");
    alert("You have logged out");
     this.loginflag=false;
    
    });}
  }
    
    