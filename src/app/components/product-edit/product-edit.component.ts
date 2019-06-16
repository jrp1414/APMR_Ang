import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private ps:ProductService) { }

  ngOnInit() {
  }

  Activate(){
    this.ps.activate.next(prompt("Enter a Number"));
  }

}
