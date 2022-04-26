import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../_services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id?: String;
  name?: String;
  price?: number;
  address?: String;
  image?: String;
  description?: String;
  dateTime?: Date;
  validation = false;
  vendu = false;

  products?: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.products = this.productService.getProductList();
  }

  reloadData() {
    this.products = this.productService.getProductList();
  }

  deleteProduct(id: String) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  productDetails(id: String){
    this.router.navigate(['details', id]);
  }

}
