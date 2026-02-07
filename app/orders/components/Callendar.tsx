import { ChevronDown, FileText } from "lucide-react";
import React from "react";

export default function Calendar() {
  return (
    <div className="p-13 flex items-center justify-between py-7 border-b border-gray-100  mb-4">
      <div className="flex items-center gap-2">
        <FileText className="w-5 h-5 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Orders</span>
      </div>

      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition">
        <span>Last 30 Days</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
