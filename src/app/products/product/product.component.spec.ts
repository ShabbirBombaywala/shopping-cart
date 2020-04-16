import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const PRODUCT = {
    id: 1,
    price: 59.99,
    image: '/assets/images/vegetable1.jpg',
    category: 5,
    name: 'Vegetable 1',
    details: "It's as cool as it sounds",
    quantity: 1,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = PRODUCT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call quantity change and add quantity', () => {
    spyOn(component.onQuantityChange, 'emit');
    const newProduct = {
      id: 1,
      quantity: 0,
    };
    component.add(newProduct);
    expect(component.onQuantityChange.emit).toHaveBeenCalledWith(newProduct);
  });

  it('should call quantity change event in case user add quantity', () => {
    spyOn(component.onQuantityChange, 'emit');
    const newProduct = {
      id: 1,
      quantity: 4,
    };

    component.add(newProduct);

    expect(component.onQuantityChange.emit).toHaveBeenCalled();
  });

  it('should call quantity change event in case user reduce quantity', () => {
    spyOn(component.onQuantityChange, 'emit');
    const newProduct = {
      id: 1,
      quantity: 2,
    };

    component.remove(newProduct);

    expect(component.onQuantityChange.emit).toHaveBeenCalled();
  });
});
