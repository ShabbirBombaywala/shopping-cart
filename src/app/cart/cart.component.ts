import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shared/service/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  subscription: Subscription;


  constructor(private service: ShoppingCartService) {
    this.subscription = service.cartChange$.subscribe((items) => {
      this.cartItems = items;
    });
  }
  ngOnInit(): void {
    this.cartItems = this.service.getCartItems();
  }

  removeAllItems() {
    this.service.clearCartItem();
  }

  removeItem(item){
    this.service.removeFromCart(item);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
