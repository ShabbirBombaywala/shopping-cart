import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() onQuantityChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  add(product) {
    product.quantity = product.quantity ? product.quantity + 1 : 1;
    this.onQuantityChange.emit(product);
  }

  remove(product) {
    product.quantity--;
    this.onQuantityChange.emit(product);
  }
}
