import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagmentComponent } from './category-managment.component';

describe('CategoryManagmentComponent', () => {
  let component: CategoryManagmentComponent;
  let fixture: ComponentFixture<CategoryManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
