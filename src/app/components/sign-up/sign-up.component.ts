import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  hobbies:FormArray=new FormArray([new FormControl()]);
  
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName':new FormControl(),
      'lastName':new FormControl(),
      'address':new FormGroup({
        'addLine1':new FormControl(),
        'addLine2':new FormControl(),
        'city':new FormControl(),
        'state':new FormControl()
      }),
      'hobbies':this.hobbies
    });
    // let data = {
    //   firstName:'Ram',
    //   lastName:'Patil',
    //   address:{
    //     addressLine1:'Test',
    //     addressLine2:'Test'
    //   }
    // };
  }

  AddHobby(){
    this.hobbies.push(new FormControl());
  }



  OnSubmit(){
    console.log(this.signUpForm.value);
  }

}
