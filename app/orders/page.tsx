import { Check, CircleX, Clock4, LockKeyhole } from "lucide-react";
import React from "react";
import OrdersFilter from "./components/OrdersFilter";
import Callendar from "./components/Callendar";
import OrdersTable from "./components/Orders";
import OrderCard from "./components/OrderCard";
import { Order } from "./types";

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "1049",
    customer: {
      name: "John Doe",
      email: "johndoe@email.com",
    },
    amount: {
      subtotal: 1299.97,
      total: 59.99,
    },
    status: "Processing",
    createdAt: "2024-04-23",
  },
  {
    id: "2",
    orderNumber: "1048",
    customer: {
      name: "Emma Smith",
      email: "emma.smith@email.com",
    },
    amount: {
      subtotal: 349.99,
      total: 24.99,
    },
    status: "Pending",
    createdAt: "2024-04-23",
  },
  {
    id: "3",
    orderNumber: "1047",
    customer: {
      name: "Michael Brown",
      email: "michael.brown@email.com",
    },
    amount: {
      subtotal: 199.99,
      total: 199.99,
    },
    status: "Completed",
    createdAt: "2024-04-22",
  },
  {
    id: "4",
    orderNumber: "1046",
    customer: {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
    },
    amount: {
      subtotal: 89.99,
      total: 89.99,
    },
    status: "Cancelled",
    createdAt: "2024-04-21",
  },
  {
    id: "5",
    orderNumber: "1045",
    customer: {
      name: "David Wilson",
      email: "david.w@email.com",
    },
    amount: {
      subtotal: 459.99,
      total: 39.99,
    },
    status: "Completed",
    createdAt: "2024-04-20",
  },
];

export default function Orders() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Orders</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <LockKeyhole className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">1,250</h2>
            <p className="text-sm text-gray-500">Total Orders</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
            <Clock4 className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">85</h2>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">1,100</h2>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <CircleX className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">65</h2>
            <p className="text-sm text-gray-500">Cancelled</p>
          </div>
        </div>
      </div>
      <OrdersFilter />
      <Callendar />
      <OrdersTable ordersdata={mockOrders} />
    </div>
  );
}
