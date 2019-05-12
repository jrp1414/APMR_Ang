import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  constructor() { }

  @Input("productDetails") product:any;

  ngOnInit() {
  }

}
