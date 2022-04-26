import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ProductService } from '../_services/product.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    //this.products = this.productService.getProductsList();
  }

  deleteProduct(id: String) {
    //this.productService.deleteProduct(id)
      //.subscribe(
        //data => {
          //console.log(data);
          //this.reloadData();
        //},
        //error => console.log(error));
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
