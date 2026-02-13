export interface AddProductData {
  name: string;
  description: string;
  categoryId: null | number;
  weight: number;
  price: number | null;
  discount: number;
  quantity: number;
}
