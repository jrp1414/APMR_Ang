import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  hobbies:FormArray=new FormArray([new FormControl()]);
  addressArray:FormArray=new FormArray([
    new FormGroup({
      'addLine1':new FormControl(),
      'addLine2':new FormControl(),
      'city':new FormControl(),
      'state':new FormControl()
    })
  ]);
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName':new FormControl(),
      'lastName':new FormControl(),
      'addresses':this.addressArray,
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

  AddAddress(){
    this.addressArray.push(new FormGroup({
      'addLine1':new FormControl(),
      'addLine2':new FormControl(),
      'city':new FormControl(),
      'state':new FormControl()
    }))
  }

  OnSubmit(){
    console.log(this.signUpForm.value);
  }

}
