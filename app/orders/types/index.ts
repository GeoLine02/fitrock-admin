export type OrderStatus = "Processing" | "Pending" | "Completed" | "Cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
  };
  amount: {
    subtotal: number;
    total: number;
  };
  status: OrderStatus;
  createdAt: string; // ISO date or formatted string
}
