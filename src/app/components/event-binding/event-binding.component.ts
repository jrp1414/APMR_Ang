import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent{

  constructor() { }

  message:string;
  textboxMessage:string;
  twoWayMessage:string;
  OnButtonClicked(){
    let name= prompt("Please Enter Name");
    this.message = "Hello, "+name+", how are you doing?";
    // this.message = `Hello, $(name), how are you doing?`;
  }

  OnChange(data){
    this.textboxMessage = data.target.value;
  }

  OneWayTest(){
    this.textboxMessage ="Some Dummy Data";
  }

  TwoWayTest(){
    this.twoWayMessage = ("Two Way test successful").toLocaleUpperCase();
  }

  textChange(data:string){
    this.twoWayMessage = data.toLocaleLowerCase();    
  }

}
