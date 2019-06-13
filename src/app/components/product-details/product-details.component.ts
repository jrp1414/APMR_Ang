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

      console.log(param.get("test"));
      console.log(param.get("test2"));
    });

    //  let pCode = this.route.snapshot.queryParams["productCode"];
    //  let pName = this.route.snapshot.queryParams["productName"];

    //  console.log(pCode);
    //  console.log(pName);

    // this.route.queryParams.subscribe((qParams)=>{
    //   console.log(qParams);
    // });

    // this.route.queryParamMap.subscribe((qParams2)=>{
    //   console.log(qParams2.get("productCode"));
    //   console.log(qParams2.get("productName"));
    // });


    // console.log(this.route.snapshot.fragment);

    this.route.fragment.subscribe((f)=>{
      console.log(f);
    });
   
  }

  Redirect(){
    this.router.navigate([5,{test:"Test",test2:15}],{relativeTo:this.route.parent});
  }


  Edit(){
    this.router.navigate([this.product.productId,"edit"],{relativeTo:this.route.parent});
  }

}
