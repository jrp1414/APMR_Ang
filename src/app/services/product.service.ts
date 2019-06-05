import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { ProductListComponent } from '../components/component.index';

@Injectable({
  //providedIn: ProductListComponent
  providedIn: "root"
})
export class ProductService {

  constructor(private loggingService:LoggingService) { }

  Test(){
    this.loggingService.log("Test");
  }
}
