import { Injectable } from '@angular/core';
import { Products, Categories } from 'src/app/mock/product.service';
import { Product } from 'src/app/core/model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor() {}

  cart: Product[] = [];
  store: Product[] = [];

  cartChange$ = new Subject<Product[]>();
  productChange$ = new Subject<Product[]>();

  getAllProducts() {
    this.store = Products;
    return Products;
  }

  getCartItems(){
    return this.cart;
  }

  getAllCategories(): any {
    return [{ key: -1, value: 'All Categories' }, ...Categories];
  }

  updateCart(product: Product) {
    if (product.quantity === 0) {
      this.cart = [...this.cart.filter(i => i.id !== product.id)];
    } else {
      const selectedProduct = this.cart.find((p) => p.id === product.id);
      if (selectedProduct) {
        selectedProduct.quantity = product.quantity;
      } else {
        this.cart = [...this.cart, product]
      }
    }
    this.cartChange$.next(this.cart);
  }

  clearCartItem() {
    this.cart = [];
    this.store.forEach(p => p.quantity = 0);
    this.cartChange$.next(this.cart);
    this.productChange$.next(this.store);
  }

  removeFromCart({ id }) {
    this.cart = [...this.cart.filter(i => i.id !== id)];
    const selectedProduct = this.store.find((p) => p.id === id);
    selectedProduct.quantity = 0;
    this.cartChange$.next(this.cart);
    this.productChange$.next(this.store);
  }
}
