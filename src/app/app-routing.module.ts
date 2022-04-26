import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';
import { AnnouncementManagmentComponent } from './announcement-managment/announcement-managment.component';
import { AuthorsComponent } from './authors/authors.component';
import { CategoryManagmentComponent } from './category-managment/category-managment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { ExploreComponent } from './explore/explore.component';
import { FAQComponent } from './faq/faq.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductComponent } from './product/product.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletConnectComponent } from './wallet-connect/wallet-connect.component';
import {AnnonceComponent} from './annonce/annonce.component';
import {AnnouncesListComponent} from './announces-list/announces-list.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'transactions', component: TransactionComponent},
  {path: 'authors', component: AuthorsComponent},
  {path: 'help', component: HelpCenterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'wallet', component: WalletConnectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profileDetails', component: ProfileDetailsComponent },
  {path: 'createItem', component: CreateItemComponent},
  {path: 'adminManagment', component: AdminManagmentComponent},
  {path: 'categoryManagment', component: CategoryManagmentComponent},
  {path: 'announcementManagment', component: AnnouncementManagmentComponent},
  {path: 'requestsManagment', component: RequestsComponent },
  {path: 'productDetails', component: ProductDetailsComponent },
  {path: 'productUpdate', component: ProductUpdateComponent },
  {path: 'myItems', component: MyItemsComponent },
  {path: 'products', component: ProductComponent },
   {path: 'announce', component: AnnonceComponent},
   {path: 'announces-list', component: AnnouncesListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
