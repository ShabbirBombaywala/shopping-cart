import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { ShoppingCartService } from '../shared/service/shopping-cart.service';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
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
      declarations: [ NavBarComponent ],
      providers: [ShoppingCartService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ShoppingCartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart items when user add product', () => {
    expect(component.cartItems.length).toEqual(0);
    service.cartChange$.next(cartList);
    expect(component.cartItems.length).toEqual(1);
  });
});
