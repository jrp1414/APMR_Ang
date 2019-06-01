import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product-api';

@Pipe({
  name: 'filterProduct',
  pure:false
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], filterValue:string): any {
    let filteredProductList:Product[] = [];
    if(filterValue.length<3){
      return value;
    }
    // value.forEach(function(val){
    //   if ((val.productName.toLocaleLowerCase()).indexOf(filterValue.toLocaleLowerCase()) !=-1)  {
    //     filteredProductList.push(val);
    //   }
    // });

    value.forEach((val)=>{
      if ((val.productName.toLocaleLowerCase()).indexOf(filterValue.toLocaleLowerCase()) !=-1)  {
        filteredProductList.push(val);
      }
    });

    return filteredProductList;
  }

}
