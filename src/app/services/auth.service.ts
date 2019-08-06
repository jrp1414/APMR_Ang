import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false;
  baseUrl:string="http://localhost:51529/";
  constructor(private http:HttpClient) { 

  }

  SignIn(UserName:string,Password:string){
    return this.http.post(this.baseUrl+"Authenticate",{UserName:UserName,Password:Password});
  }

  SignOut(){
    // this.isAuthenticated = false;
  }

  Register(user:User){
    return this.http.post(this.baseUrl+"Register",user);
  }
}

