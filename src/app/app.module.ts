import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './cart-details/cart/cart.component';
import { Error404Component } from './errors/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductComponent,
    CartComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
