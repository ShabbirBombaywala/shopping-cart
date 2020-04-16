import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ShoppingCartService } from 'src/app/shared/service/shopping-cart.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ShoppingCartService;

  const PRODUCT_LIST = [
    {
      id: 1,
      price: 59.99,
      image: '/assets/images/vegetable1.jpg',
      category: 5,
      name: 'Vegetable 1',
      details: "It's as cool as it sounds",
      quantity: 1,
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
      id: 9,
      price: 49.99,
      image: '/assets/images/bread4.jpg',
      category: 1,
      name: 'Bread 4',
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
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      providers: [ShoppingCartService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ShoppingCartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update cart on quantity change',()=>{
    const updatedProduct = {...component.products[0]};
    updatedProduct.quantity = 5;
    component.quanityChanged(updatedProduct);
    expect(component.products[0].quantity).toBe(0);
    updatedProduct.quantity = 6;
    component.quanityChanged(updatedProduct);
    updatedProduct.quantity = 0;
    component.quanityChanged(updatedProduct);
    expect(component.products[0].quantity).toBeFalsy();
  });

  it('should filter product based on categories selected',()=>{
    expect(component.visibleProducts.length).toEqual(17);
    component.filterProduct(5);
    expect(component.visibleProducts.length).toEqual(5);
  });

  it('should get updated Product Items when user does change in cart', () => {
    component.products = PRODUCT_LIST;
    expect(component.products[0].quantity).toEqual(1);
    service.removeFromCart({id:1});
    expect(component.products[0].quantity).toEqual(0);
  });
});
