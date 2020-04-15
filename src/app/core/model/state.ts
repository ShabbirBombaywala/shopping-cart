import { Product } from './product';
import { Totals } from './total';

export interface StateTree {
    store: Product[];
    cart: Product[];
    tot: Totals,
    checkout: boolean;
  };