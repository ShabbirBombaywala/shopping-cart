import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { ShoppingCartService } from '../shared/service/shopping-cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: ShoppingCartService;

  const cartList = [
    {
      id: 1,
      price: 59.99,
      image: '/assets/images/vegetable1.jpg',
      category: 5,
      name: 'Vegetable 1',
      details: "It's as cool as it sounds",
      quantity: 1,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [ShoppingCartService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ShoppingCartService);
    fixture.detectChanges();
    service.getAllProducts();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart items when user add product', () => {
    expect(component.cartItems.length).toEqual(0);
    service.cartChange$.next(cartList);
    expect(component.cartItems.length).toEqual(1);
  });

  it('should call remove all service when user click remove all button',()=>{
    service.cartChange$.next(cartList);
    expect(component.cartItems.length).toEqual(1);
    component.removeAllItems();
    expect(component.cartItems.length).toEqual(0);
  });

  it('should call remove Item service when user click remove from Item list',()=>{
    service.updateCart(cartList[0]);
    expect(component.cartItems.length).toEqual(1);
    component.removeItem(cartList[0]);
    expect(component.cartItems.length).toEqual(0);
  });
});
