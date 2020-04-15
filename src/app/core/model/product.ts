export interface Product {
  price: number;
  image: string;
  name: string;
  details: string;
  id: number;
  remove?: boolean;
  category: number;
  quantity?: number;
}
