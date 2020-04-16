import { Product } from './product';

export interface StateTree {
    store: Product[];
    cart: Product[];
  };