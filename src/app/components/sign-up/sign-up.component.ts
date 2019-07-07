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
  // hobbies:FormArray=new FormArray([new FormControl()]);
  // addressArray:FormArray=new FormArray([
  //   new FormGroup({
  //     'addLine1':new FormControl(),
  //     'addLine2':new FormControl(),
  //     'city':new FormControl(),
  //     'state':new FormControl()
  //   })
  // ]);
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName': ["", Validators.required],
      'lastName': ["", Validators.required],
      'emailGroup': this.fb.group({
        'email': ["", [Validators.email, Validators.required]],
        'confirmEmail': ["", [Validators.email, Validators.required]],
      },{validator:EmailMatch}),
      'mobileNo':'',
      'notification':'email',
      // 'age': [0, RangeValidator],
      'age': [0, RangeValidator(18,40)],
      'addresses': this.fb.array([this.fb.group({
        'addLine1': "",
        'addLine2': "",
        'city': "",
        'state': ""
      })
      ]),
      'hobbies': this.fb.array([this.fb.control("")])
    });

    this.signUpForm.get('notification').valueChanges.subscribe((value:string)=>{
      this.setNotificationValidation(value);
    });
  }

  AddHobby() {
    (<FormArray>this.signUpForm.get("hobbies")).push(this.fb.control(""));
  }

  AddAddress() {
    (<FormArray>this.signUpForm.get('addresses')).push(this.fb.group({
      'addLine1': "",
      'addLine2': "",
      'city': "",
      'state': ""
    }))
  }

  OnSubmit() {
    console.log(this.signUpForm);
  }

  setNotificationValidation(notificationType:string){
    let mobileNo= this.signUpForm.get('mobileNo');

    if (notificationType=='mobileNo') {
      mobileNo.setValidators(Validators.required);      
    }else{
      mobileNo.clearValidators(); 
    }
    mobileNo.updateValueAndValidity();
  }

}