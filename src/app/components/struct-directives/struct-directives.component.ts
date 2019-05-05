import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
export class StructDirectivesComponent{
  messageFlag:boolean;
  names:string[]=["Ram","Amol","Rajendra","Prashant","Aniket"];
  constructor() {
    // for (let key in this.names) {
    //   console.log(this.names[key]);
    // }

    // for (let name of this.names) {
    //   console.log(name);
    // }
  }

}   
