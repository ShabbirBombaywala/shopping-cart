import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent implements OnInit {
  @Input() filterOption: any[];
  @Input() filterBy: number;
  @Output() filterProduct = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(option) {
    this.filterBy = option;
    this.filterProduct.emit(option);
  }
}
