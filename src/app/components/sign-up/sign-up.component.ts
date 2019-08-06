import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';

function EmailMatch(c: AbstractControl): { [key: string]: boolean } | null {
  let email = c.get("email");
  let confirmEmail = c.get("confirmEmail");
  if (email.pristine || confirmEmail.pristine) {
    return null;
  }
  if (email.value == confirmEmail.value) {
    return null;
  }
  return { emailMatch: true };
}

function RangeValidator(min:number,max:number):ValidatorFn{
  return function (c: AbstractControl): { [key: string]: boolean } | null {
    if (c.pristine && c.invalid) {
      return null;
    }
    if (c.value >= min && c.value <= max) {
      return null;
    }
    return { range: true };
  };
}


// function RangeValidator(c: AbstractControl): { [key: string]: boolean } | null {
//   if (c.pristine && c.invalid) {
//     return null;
//   }
//   if (c.value >= 18 && c.value <= 40) {
//     return null;
//   }
//   return { range: true };
// }

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService ) { }
  user:User;
  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName': ["", Validators.required],
      'lastName': ["", Validators.required],
      'email': ["", [Validators.email, Validators.required]],
      'mobileNo':'',
      'password':'',
      'confirmPassword':''
    });
  }

  OnSubmit() {
    let data =this.signUpForm.value;
    this.user = new User(0,data.firstName,data.lastName,data.mobileNo,data.email,data.password);
    this.auth.Register(this.user).subscribe((resp)=>{
      console.log(resp);
    });
  }  
}