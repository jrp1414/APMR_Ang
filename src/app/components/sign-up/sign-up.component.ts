import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl()
    });
  }

  OnSubmit(){
    console.log(this.signUpForm);
  }

}
