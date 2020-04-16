import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/error-404.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart-details/cart/cart.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
