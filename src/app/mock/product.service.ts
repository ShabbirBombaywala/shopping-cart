import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../core/model';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements InMemoryDbService {
  createDb() {
    const products: Product[] = Products;
    return { products };
  }
}

export const Products = [
  {
    id: 1,
    price: 59.99,
    image: '/assets/images/vegetable1.jpg',
    category: 5,
    name: 'Vegetable 1',
    details: "It's as cool as it sounds",
  },
  {
    id: 2,
    price: 99.99,
    image: '/assets/images/vegetable2.jpg',
    category: 5,
    name: 'Vegetable 2',
    details: "It's as cool as it sounds",
  },
  {
    id: 3,
    price: 19.99,
    image: '/assets/images/vegetable3.jpg',
    category: 5,
    name: 'Vegetable 3',
    details: "It's as cool as it sounds",
  },
  {
    id: 4,
    price: 59.99,
    image: '/assets/images/vegetable4.jpg',
    category: 5,
    name: 'Vegetable 4',
    details: "It's as cool as it sounds",
  },
  {
    id: 5,
    price: 39.99,
    image: '/assets/images/vegetable5.jpg',
    category: 5,
    name: 'Vegetable 5',
    details: "It's as cool as it sounds",
  },
  {
    id: 6,
    price: 9.99,
    image: '/assets/images/bread1.jpg',
    category: 1,
    name: 'Bread 1',
    details: "It's as cool as it sounds",
  },
  {
    id: 7,
    price: 29.99,
    image: '/assets/images/bread2.jpg',
    category: 1,
    name: 'Bread 2',
    details: "It's as cool as it sounds",
  },
  {
    id: 8,
    price: 39.99,
    image: '/assets/images/bread3.jpg',
    category: 1,
    name: 'Bread 3',
    details: "It's as cool as it sounds",
  },
  {
    id: 9,
    price: 49.99,
    image: '/assets/images/bread4.jpg',
    category: 1,
    name: 'Bread 4',
    details: "It's as cool as it sounds",
  },
  {
    id: 10,
    price: 59.99,
    image: '/assets/images/dairy1.jpg',
    category: 2,
    name: 'Dairy 1',
    details: "It's as cool as it sounds",
  },
  {
    id: 11,
    price: 39.99,
    image: '/assets/images/dairy2.jpg',
    category: 2,
    name: 'Dairy 2',
    details: "It's as cool as it sounds",
  },
  {
    id: 12,
    price: 59.99,
    image: '/assets/images/fruit1.jpg',
    category: 3,
    name: 'Fruit 1',
    details: "It's as cool as it sounds",
  },
  {
    id: 13,
    price: 39.99,
    image: '/assets/images/fruit2.jpg',
    category: 3,
    name: 'Fruit 2',
    details: "It's as cool as it sounds",
  },
  {
    id: 14,
    price: 19.99,
    image: '/assets/images/fruit3.jpg',
    category: 3,
    name: 'Fruit 3',
    details: "It's as cool as it sounds",
  },
  {
    id: 15,
    price: 79.99,
    image: '/assets/images/fruit4.jpg',
    category: 3,
    name: 'Fruit 4',
    details: "It's as cool as it sounds",
  },
  {
    id: 16,
    price: 19.99,
    image: '/assets/images/spice1.jpg',
    category: 4,
    name: 'Spice 1',
    details: "It's as cool as it sounds",
  },
  {
    id: 17,
    price: 49.99,
    image: '/assets/images/spice2.jpg',
    category: 4,
    name: 'Spice 2',
    details: "It's as cool as it sounds",
  },
];

export const Categories = [
  { key: 1, value: 'Bread' },
  { key: 2, value: 'Dairy' },
  { key: 3, value: 'Fruits' },
  { key: 4, value: 'Seasonings and Spices' },
  { key: 5, value: 'Vegetables' },
];
