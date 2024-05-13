import { Category } from './category';
export interface Article {
    id: number;
  name: string;
  quantity: number;
  price: number;
  category:Category;
}
