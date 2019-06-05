import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
  // providers:[LoggingService]
  // encapsulation:ViewEncapsulation.None
})
export class ProductThumbnailComponent implements OnInit {
  today = new Date();
  constructor(private loggingService:LoggingService,private productService:ProductService) { }

  @Input("productDetails") product:any;

  //@Output("pce") prodChildEmitter: EventEmitter<string>= new EventEmitter<string>(); 

  ngOnInit() {
  }

  EmitToParent(){
    // let name = prompt("Enter Name");
    //this.prodChildEmitter.emit(name);
    this.loggingService.notifyParents.emit("Emitted from Product Thumbnail");
  }

  LogMessage(){
    // let log:LoggingService = new LoggingService();
    // this.loggingService.log("Test Log");
    this.productService.Test();
  }
}


enum Sample{
  val1=1,
  val2,
  val3
}