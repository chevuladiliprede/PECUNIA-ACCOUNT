import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AccountForm } from '../account-form';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  
  userName:string=undefined;
  role:string;
  token:string;
  customerId:string;
  accountForm:AccountForm=new AccountForm();
  accType:string[];
  num:number=55;
  customers:Customer[]=[];
  msg:string;
  errorMsg:string;

  ngOnInit() {

    console.log("errorMsg "+this.errorMsg);
    
    this.accType=['saving','current','salaried'];
    console.log(this.accType);
     }

  addAccount(){
    console.log(this.accountForm);
    this.customerService.addAccount(this.accountForm).subscribe(data=>{
      this.msg=data.message;
      this.errorMsg=undefined;
    },error=>{
      this.errorMsg=error.error.message;
      this.msg=undefined;
      console.log("Error h +"+error.error.message);
    });
      
  }

}
