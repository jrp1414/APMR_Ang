import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
// import { ProductListComponent } from '../components/component.index';
import { Product, products } from '../models/product-api';



// {
//   //providedIn: ProductListComponent
//   // providedIn: "root"
// }
@Injectable(  
 )
export class ProductService {

  constructor(private loggingService:LoggingService) { }

  Test(){
    this.loggingService.log("Test");
  }

  productsList:Product[] = products.splice(0);

  GetProducts(){
    return this.productsList;
  }

  RemoveProduct(productId:number){
    let tempProductList:Product[] = [];
    this.productsList.forEach((val)=>{
      if (val.productId!==productId) {
         tempProductList.push(val);
      }
    });
    this.productsList = tempProductList;
  }
}
