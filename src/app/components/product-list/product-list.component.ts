import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, products } from './../../models/product-api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor() {

  }

  imageWidth: string = "100px";
  imageHeight: string = "100px";

  @ViewChild('filter') filter:ElementRef;
  @ViewChild('testDiv') testDiv:ElementRef;

  filterBy: string = "";
  getStyles() {
    return { width: this.imageWidth, height: this.imageHeight };
  }

  getClasses(prod) {
    //{bold:prod.starRating>3,green:prod.starRating<=3}
    // if(prod.starRating>3){
    //   return {bold:true,green:true};
    // }
    // return {};

    // if(prod.starRating>3){
    //   return ["bold","green"];
    // }
    // return [];

    if (prod.starRating > 3) {
      return "bold green";
    }
    return "";
  }

  getDataFromChild(data) {
    console.log(data);
    console.log(this.filter.nativeElement.value);
    console.log(this.testDiv);
  }

  productList: Product[] = products; 
}

