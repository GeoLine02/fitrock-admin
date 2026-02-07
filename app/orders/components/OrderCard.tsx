import React from "react";
import { Copy, MoreHorizontal } from "lucide-react";

interface OrderCardProps {
  orderId: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  subtotal: number;
  total: number;

  status: "Processing" | "Pending" | "Completed" | "Cancelled";
}

export default function OrderCard({
  orderId,
  customerName,
  customerEmail,
  orderDate,
  subtotal,
  total,
  status,
}: OrderCardProps) {
  return (
    <tr>
      <td className="px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="font-medium text-gray-800">#{orderId}</span>
          <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
        <div className="text-xs text-gray-500 mt-1">#{orderId}</div>
      </td>

      <td className="px-4 py-3 text-center">
        <div className="font-medium text-gray-800">{customerName}</div>
        <div className="text-sm text-gray-500">{customerEmail}</div>
      </td>

      <td className="px-4 py-3 text-center">
        <div className="text-gray-800">{orderDate}</div>
        <div className="text-sm text-gray-500">${subtotal}</div>
      </td>

      <td className="px-4 py-3 text-center font-medium text-gray-800">
        ${total}
      </td>

      <td className="px-4 py-3 text-center">
        <div className="flex items-center justify-center gap-3">
          <span
            className={`inline-block rounded-md px-3 py-1 text-xs font-semibold ${
              status === "Processing"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : status === "Cancelled"
                    ? "bg-red-100 text-red-700"
                    : "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>

          <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>
      </td>
    </tr>
  );
}
