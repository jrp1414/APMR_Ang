import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
  // encapsulation:ViewEncapsulation.None
})
export class ProductThumbnailComponent implements OnInit {
  today = new Date();
  constructor() { }

  @Input("productDetails") product:any;

  @Output("pce") prodChildEmitter: EventEmitter<string>= new EventEmitter<string>(); 

  ngOnInit() {
  }

  EmitToParent(){
    let name = prompt("Enter Name");
    this.prodChildEmitter.emit(name);
    
  }
}


enum Sample{
  val1=1,
  val2,
  val3
}