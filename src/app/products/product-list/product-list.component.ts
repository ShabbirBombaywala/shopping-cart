import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterOption: any;
  filterBy = -1;
  subscription: Subscription;
  visibleProducts: Product[] = [];

  constructor(private service: ShoppingCartService) {
    this.subscription = service.productChange$.subscribe((products) => {
      this.products = products;
      this.filterProduct(this.filterBy);
    });
  }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
    this.filterOption = this.service.getAllCategories();
    this.filterProduct(this.filterBy);
  }

  quanityChanged(product) {
    this.service.addToCart(product);
  }

  filterProduct(filter) {
    this.filterBy = filter;
    if (filter === -1) {
      this.visibleProducts = this.products.slice(0);
    } else {
      this.visibleProducts = this.products.filter((product) => {
        return product.category === filter;
      });
    }
  }
}
