import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SaveProductComponent } from './components/dashboard/inner-items/save-product/save-product.component';
import { UpdateProductComponent } from './components/dashboard/inner-items/update-product/update-product.component';
import { DeleteProductComponent } from './components/dashboard/inner-items/delete-product/delete-product.component';
import { GetProductComponent } from './components/dashboard/inner-items/get-product/get-product.component';
import { GetAllProductsComponent } from './components/dashboard/inner-items/get-all-products/get-all-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/customer/inner-items/home-page/home-page.component';
import { ProductListGridComponent } from './components/customer/product-list-grid/product-list-grid.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerFooterComponent } from './components/customer/customer-footer.component';
import { AboutUsPageComponent } from './components/customer/inner-items/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './components/customer/inner-items/contact-us-page/contact-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    SaveProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    GetProductComponent,
    GetAllProductsComponent,
    HomePageComponent,
    ProductListGridComponent,
    CustomerComponent,
    CustomerFooterComponent,
    AboutUsPageComponent,
    ContactUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
