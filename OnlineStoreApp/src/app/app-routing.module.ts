import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { AboutUsPageComponent } from './components/customer/inner-items/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './components/customer/inner-items/contact-us-page/contact-us-page.component';
import { HomePageComponent } from './components/customer/inner-items/home-page/home-page.component';
import { ProductDetailsComponent } from './components/customer/product-details/product-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'login', component: LoginPageComponent},
  // {path: 'signup', component: SignupPageComponent},
  // {path: 'customer', component: CustomerComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutUsPageComponent},
  {path: 'contact', component: ContactUsPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  // {path: 'category/t-shirt', component: ProductDetailsComponent},
  // {path: 'category/shoes', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
