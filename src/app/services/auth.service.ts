import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false;
  constructor() { }

  SignIn(){
    this.isAuthenticated = true;
  }

  SignOut(){
    this.isAuthenticated = false;
  }
}
