import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild{
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.canActivate(childRoute,state);
  }
  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot)
      : boolean  {
    if(this.authService.isAuthenticated){
      return true;
    }
   this.router.navigate(["home"]); 
  }

  constructor(private authService:AuthService,private router:Router) { }
}
