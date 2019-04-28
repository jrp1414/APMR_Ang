import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  name:string = "Manish";
  num:number = 10;
  isActive:boolean = false;
  prod:Product = new Product();

  // getProductName(name:string,productCode:string):string{
  //   return ""
  // }
  getProductName():string{
    return "Mouse";
  }
}


export class Product{

}