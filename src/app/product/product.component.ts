import { Component, OnInit } from '@angular/core';
import{IProduct} from '../interfaces/product'
import {ProductService} from '../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public value:string="";
  products : IProduct[]=[{name: 'Node js', image: 'assets/asset-0.png', money:2000},
  {name: 'Lâp trình c', image: 'assets/asset-2.png', money: 10000},
  {name: 'Angular', image: 'assets/asset-3.png',  money: 20000},
  {name: 'Monggo', image: 'assets/asset-5.png',  money: 20000},
  {name: 'Front end cơ bản', image: 'assets/asset-1.png',  money: 20000},
  {name: 'Node js', image: 'assets/asset-0.png', money:2000}]
  constructor(private productService : ProductService) { }

  ngOnInit() {
  }
  getData(value){
    this.value=value;
  }
}
