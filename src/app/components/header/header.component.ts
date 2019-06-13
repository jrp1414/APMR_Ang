import {Component} from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector:"app-header",
    templateUrl:"./header.component.html"
})
export class HeaderComponent{
    isAuthenticated:boolean;
    constructor(private authService:AuthService){
        
    }

    SignIn(){
        this.authService.SignIn();
        this.isAuthenticated = this.authService.isAuthenticated;
    }
    
    SignOut(){
        this.authService.SignOut();
        this.isAuthenticated = this.authService.isAuthenticated;
    }
}