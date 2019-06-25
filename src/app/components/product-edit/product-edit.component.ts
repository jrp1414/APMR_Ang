import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import { Product } from '../../models/product-api';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private ps:ProductService,private route:ActivatedRoute) { }
  product:Product;
  @ViewChild("f") frm:NgForm;
  ngOnInit() {
    this.route.params.subscribe((param)=>{
      let id = param["id"];
      this.product = this.ps.GetProductDetails(id);
    });
  }

  Activate(){
    this.ps.activate.next(prompt("Enter a Number"));
  }

  SomeMethod(){
    console.log(this.frm);
    this.product.productCode = "Some Data";
    this.product.productName = "Some Data";
  }

  OnSubmit(f){
    console.log(f);
  }

}
