import React from "react";
import { Order } from "../types";

interface OrderTableProps {
  ordersdata: Order[];
}

const statusStyles: Record<Order["status"], { bg: string; text: string }> = {
  Processing: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  Pending: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Completed: {
    bg: "bg-gray-200",
    text: "text-gray-700",
  },
  Cancelled: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
};

export default function OrdersTable({ ordersdata }: OrderTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full">
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 border-b">
              <th className="px-4 py-3 text-left"></th>
              <th className="px-4 py-3 text-left font-medium">Order ID</th>
              <th className="px-4 py-3 text-left font-medium">Customer</th>
              <th className="px-4 py-3 text-left font-medium">Date</th>
              <th className="px-4 py-3 text-left font-medium">Total</th>
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {ordersdata.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>

                {/* Order ID */}
                <td className="px-4 py-3">
                  <p className="font-semibold text-gray-800">
                    #{order.orderNumber}
                  </p>
                  <p className="text-xs text-gray-400">#{order.id}</p>
                </td>

                {/* Customer */}
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-800">
                    {order.customer.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {order.customer.email}
                  </p>
                </td>

                {/* Date */}
                <td className="px-4 py-3 text-gray-600">{order.createdAt}</td>

                {/* Total */}
                <td className="px-4 py-3 font-semibold text-gray-800">
                  ${order.amount.total}
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusStyles[order.status].bg
                      } ${statusStyles[order.status].text}`}
                    >
                      {order.status}
                    </span>

                    <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
                      ⋯
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 mt-4">
        <span>Showing 1 to 6 of 500 entries</span>
        <div className="flex items-center gap-1">
          <button className="border rounded px-3 py-1 hover:bg-gray-100">
            ‹ Previous
          </button>
          <button className="border rounded px-3 py-1 bg-gray-100">1</button>
          <button className="border rounded px-3 py-1 hover:bg-gray-100">
            2
          </button>
          <button className="border rounded px-3 py-1 hover:bg-gray-100">
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}
