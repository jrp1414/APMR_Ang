import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product, products } from './../../models/product-api';
import { LoggingService } from '../../services/logging.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers:[LoggingService]
})
export class ProductListComponent implements OnInit{
  ReceivedMessage:string;
  ngOnInit(): void {
    this.productList = this.productService.GetProducts();
    this.loggingService.notifyParents.subscribe((data)=>{
      this.ReceivedMessage = data;
      if (data=="Removed") {
        this.productList = this.productService.GetProducts(); 
      }
    });

    this.productService.activate.subscribe((val)=>{
      console.log(val);
    });
  }
  constructor(private loggingService:LoggingService,private productService:ProductService) {

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

  ImpurityTest(){
    this.productList.push({
      "productId": 11,
      "productName": "Hammer",
      "productCode": "GDN-0014",
      "releaseDate": "March 19, 2018",
      "description": {
          'descText': "Computer is a good thing",
          "mfdYear": 2018
      },
      "price": 19.95485968596,
      "starRating": 3,
      "imageUrl": "https://www.harrodhorticultural.com/uploads/images/products/GGT-886_Sneeboer_Leaf_Rakes_1.jpg",
      "emailId": "test@test.com"
  })
  }

  productList: Product[] = []; 
}

