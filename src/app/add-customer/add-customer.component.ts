import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CustomerForm } from '../customer-form';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor(private customerService:CustomerService) { }
  userName:string=undefined;
  message:string;
  role:string;
  token:string;
  customerId:string;
  customerform:CustomerForm=new CustomerForm();
  msg:String;
  errorMsg:string;
  flag:string;
  customer:Customer[]=[];
  roleType:string[]=['customer'];
  ngOnInit() {}
  addCustomer(){
    this.customerService.addCustomer(this.customerform).subscribe(data=>{
      this.msg=data.message;
      this.errorMsg=undefined;
      this.customerform=new CustomerForm();
    },error=>{
      this.errorMsg=error.error.message;
      this.msg=undefined;
      console.log(this.errorMsg);
    });
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

}
