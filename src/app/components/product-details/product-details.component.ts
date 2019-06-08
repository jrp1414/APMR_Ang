import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product-api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;
  constructor(private ps:ProductService,
              private route:ActivatedRoute,
              private router:Router) {
    
   }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.params["id"]);
    // let id = +this.route.snapshot.params["id"];
    // console.log(id);
    // this.product = this.ps.GetProductDetails(id);

    // this.route.params.subscribe((param)=>{
    //  let id = +param["id"];
    //  this.product = this.ps.GetProductDetails(id);
    // });

    this.route.paramMap.subscribe((param)=>{
      let id = +param.get("id");
      this.product = this.ps.GetProductDetails(id);
     });

  }

  Redirect(){

  }

}
