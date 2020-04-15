import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/core/model';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: Product[] = [];
  subscription: Subscription;


  constructor(private service: ShoppingCartService) {
    this.subscription = service.cartChange$.subscribe((items) => {
      this.cartItems = items;
    });
  }
  ngOnInit(): void {
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
