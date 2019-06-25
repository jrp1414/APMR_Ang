import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tdf-example',
  templateUrl: './tdf-example.component.html',
  styleUrls: ['./tdf-example.component.css']
})
export class TdfExampleComponent implements OnInit {

  constructor() { }
  @ViewChild("f") frm: FormGroup;
  ngOnInit() {
  }

  OnSubmit(f) {
    console.log(f.value);
  }

  FillData() {
    // this.frm.setValue({
    //   name:"Ram",
    //   address:"Mumbai"
    //   // email:"ram@gmail.com"
    // });
    this.frm.patchValue({
      name: "Ram",
      address: "Mumbai"
    });

    // ({
    //   name:"Ram",
    //   address:"Mumbai"
    //   // email:"ram@gmail.com"
    // });
  }

}
