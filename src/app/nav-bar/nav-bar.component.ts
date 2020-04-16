import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shared/service/shopping-cart.service';
import { Product } from '../core/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
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
}
