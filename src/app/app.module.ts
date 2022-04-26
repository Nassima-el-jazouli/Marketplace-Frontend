import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { WalletConnectComponent } from './wallet-connect/wallet-connect.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AuthorsComponent } from './authors/authors.component';
import { FAQComponent } from './faq/faq.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SignupComponent } from './signup/signup.component';
import { OperationComponent } from './operation/operation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { RequestsComponent } from './requests/requests.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';
import { CategoryManagmentComponent } from './category-managment/category-managment.component';
import { AnnouncementManagmentComponent } from './announcement-managment/announcement-managment.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { OneCategoryComponent } from './one-category/one-category.component';
import { TodayPickComponent } from './today-pick/today-pick.component';
import { AnnouncesListComponent } from './announces-list/announces-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnonceComponent,
    CategoryComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    ProductComponent,
    WalletConnectComponent,
    HomeComponent,
    ExploreComponent,
    TransactionComponent,
    ProfileComponent,
    ContactUsComponent,
    CreateItemComponent,
    AuthorsComponent,
    FAQComponent,
    HelpCenterComponent,
    SignupComponent,
    OperationComponent,
    ProductDetailsComponent,
    ProductUpdateComponent,
    RequestsComponent,
    MyItemsComponent,
    AdminManagmentComponent,
    CategoryManagmentComponent,
    AnnouncementManagmentComponent,
    ProfileDetailsComponent,
    OneCategoryComponent,
    TodayPickComponent,
    AnnouncesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
    timeOut: 150000, // 15 seconds
    closeButton: true,
    progressBar: true,
  }),
  AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
