import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    isAuthenticated: boolean;
    constructor(private authService: AuthService, private router: Router) {

    }

    SignIn(f) {
        let data = f.value;
        this.authService.SignIn(data.EmailId, data.Password).subscribe((resp) => {
            localStorage.setItem("token", resp.toString());
            // sessionStorage.setItem("token",resp.toString());
            this.setIsAuthenticated(true);
        });
    }

    SignOut() {
        localStorage.removeItem("token");
        this.setIsAuthenticated(false);
        this.router.navigate(["home"]);

    }

    setIsAuthenticated(val: boolean) {
        this.isAuthenticated = val;
        this.authService.isAuthenticated = val;
    }


}