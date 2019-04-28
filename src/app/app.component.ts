import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  // template:"<h1>Hello World</h1><h2>How are you doing?</h2>",
  // template:`<h1>Hello World</h1>
  // <h2>How are you doing {{name}}?</h2>
  // <h3>I am fine, how about you?</h3>
  // `,
  templateUrl:"./app.component.html",
  // styles:[
  //   "h1{color: blue}"    
  // ]
  styleUrls:[
    "./app.component.css"
  ]
})
export class AppComponent {
 name:string="Rajendra"; 
}
