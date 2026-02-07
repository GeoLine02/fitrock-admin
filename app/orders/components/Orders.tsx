import React from "react";
import { Order } from "../types";

interface OrderTableProps {
  ordersdata: Order[];
}

export default function OrdersTable({ ordersdata }: OrderTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-400">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="px-4 py-3 text-center font-medium">Order ID</th>
              <th className="px-4 py-3 text-center font-medium">Customer</th>
              <th className="px-4 py-3 text-center font-medium">Date</th>
              <th className="px-4 py-3 text-center font-medium">Total</th>
              <th className="px-4 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersdata.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 text-center">{order.id}</td>
                <td className="px-4 py-3 text-center">{order.orderNumber}</td>
                <td className="px-4 py-3 text-center">{order.createdAt}</td>
                <td className="px-4 py-3 text-center">${order.amount.total}</td>
                <td className="px-4 py-3 text-center">
                  <button className="px-2 py-1 border rounded hover:bg-gray-100">
                    Actions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {ordersdata.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order ID:</span>
              <span>{order.id}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Customer:</span>
              <span>{order.orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Email:</span>
              <span>{order.customer.email}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Date:</span>
              <span>{order.createdAt}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Total:</span>
              <span>${order.amount.total}</span>
            </div>
            <button className="mt-2 w-full border rounded px-3 py-1.5 hover:bg-gray-100">
              Actions
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 mt-4">
        <span className="text-center sm:text-left">
          Showing 1 to 6 of 600 entries
        </span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-3 py-1.5 hover:bg-gray-100 transition">
            Previous
          </button>
          <button className="border rounded px-3 py-1.5 bg-gray-100">1</button>
          <button className="border rounded px-3 py-1.5 hover:bg-gray-100 transition">
            2
          </button>
          <button className="border rounded px-3 py-1.5 hover:bg-gray-100 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
