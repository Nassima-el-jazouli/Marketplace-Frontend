import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from '../_services/categories.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id?: String;
  name?: String;

  categories?: Observable<Category[]>;

  constructor(private categoryService: CategoriesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.categories = this.categoryService.getCategoryList();
  }

  reloadData() {
    this.categories = this.categoryService.getCategoryList();
  }

  deleteProduct(id: String) {
    this.categoryService.deleteCategory(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}

