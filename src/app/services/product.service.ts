import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
// import { ProductListComponent } from '../components/component.index';
import { Product, products } from '../models/product-api';
import * as Obs from "./rxjs.index";



// {
//   //providedIn: ProductListComponent
//   // providedIn: "root"
// }
@Injectable(  
 )
export class ProductService {

  constructor(private loggingService:LoggingService) { }
  activate:Obs.Subject<string>= new Obs.Subject();
  Test(){
    this.loggingService.log("Test");
  }

  productsList:Product[] = products.splice(0);

  GetProducts(){
    return this.productsList;
  }

  GetProductDetails(id:number){
    
    let result:Product; 
    this.productsList.forEach((val)=>{
      if(val.productId==id){
        result = val;
      }
    });

    return result;
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
