
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../category/category';
import { CategoriesService } from '../_services/categories.service';

@Component({
  selector: 'app-category-managment',
  templateUrl: './category-managment.component.html',
  styleUrls: ['./category-managment.component.css']
})
export class CategoryManagmentComponent implements OnInit {

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

  editCategory(id: number){
    this.router.navigate(['update', id]);
  }
}


