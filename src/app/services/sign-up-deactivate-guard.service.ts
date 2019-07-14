import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpDeactivateGuardService implements CanDeactivate<SignUpComponent> {
  
  canDeactivate(component: SignUpComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, 
                nextState?: RouterStateSnapshot): boolean {
    if (component.signUpForm.dirty) {
      let firstName=component.signUpForm.get("firstName").value.length>0?component.signUpForm.get("firstName").value:"New User";
      return confirm("Hello "+firstName+", Are you sure to navigate away from current page and loose all the data?");
    }
    return true;
  }

  constructor() { }
}
