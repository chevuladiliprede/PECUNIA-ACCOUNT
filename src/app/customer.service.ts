import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountForm } from './account-form';
import { CustomerForm } from './customer-form';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  
 
  constructor(private http:HttpClient) { }

  public doLogin(userId:string,pwd:string):Observable<any>{
    let postData=new FormData();
    postData.append("userid",userId);
    postData.append("password",pwd);
    return this.http.post("http://localhost:8038/cgbank/login",postData,{responseType:'text'});
  }

  public decrypt(token:string){
    let str="";
    for(let i=0;i<token.length;++i){
      str=str+String.fromCharCode(token.charCodeAt(i)-3);
    }
    console.log(str);
    return str;
  }
  public doLogOut(){
    let utoken=localStorage.getItem("token");
   if(utoken==null) utoken="";
   const httpHeaders=new HttpHeaders({"tokenid": utoken});
   

   return this.http.get("http://localhost:8038/cgbank/logout",{headers:httpHeaders,responseType:'text'});
 }
 
  public addAccount(accountform:AccountForm):Observable<any>{
    return this.http.post("http://localhost:8038/cgbank/addaccount",accountform);
  }
  public addCustomer(customerform:CustomerForm):Observable<any>{
    console.log(customerform);
    return this.http.post("http://localhost:8038/cgbank/addcustomer",customerform);
  }

  
}