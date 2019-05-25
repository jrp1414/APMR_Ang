import { Component, OnInit } from '@angular/core';

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
  }

  // productList: any[] = 
}

