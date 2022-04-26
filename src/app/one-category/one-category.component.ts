import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesService } from '../_services/categories.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})
export class OneCategoryComponent implements OnInit {

  

  category: Category = new Category();
  // submitted = false;
  categories?: Observable<Category[]>;

  constructor(private categoryService: CategoriesService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.categories = this.categoryService.getCategoryList();
    }
  
    deleteCategory(id: any) {
      this.categoryService.deleteCategory(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

  editCategory(id: any){
    this.router.navigate(['/editCategory']);
  }

  // newCategory(): void {
  //   this.submitted = false;
  //   this.category = new Category();
  // }

  // save() {
  //   this.categoryService.createCategory(this.name)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.category = new Category();
  //   this.gotoList();
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();    
  // }

  // gotoList() {
  //   this.router.navigate(['/categories']);
  // }



}




