import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CgServiceGuard implements CanActivate {
  constructor(private router:Router, private empService: EmpService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
  
  state: import("@angular/router").RouterStateSnapshot): boolean |
  
  import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean
  
  | import("@angular/router").UrlTree> {
  
  let token = localStorage.getItem("tokenId");
  
  if (token != null) {
  
  let arr = token.split("-");
  
  let role = this.empService.decrypt(arr[2]);
  
  console.log(route.data)
  
  if (route.data.role == undefined) return true;
  
  if (route.data.role != undefined && role != null && route.data.role == role){
  
  return true;
  }
  }
  
  this.router.navigateByUrl("/error");
  
  return false;}}
  