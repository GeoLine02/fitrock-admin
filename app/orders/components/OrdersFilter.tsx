import { Filter, Plus, Search } from "lucide-react";
import React from "react";

export default function OrdersFilter() {
  return (
    <div className="flex justify-center sm:flex-row items-center gap-3 p-0 mt-10 mb-6">
      <div className="relative w-full sm:w-4/5">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 px-5 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex-1 sm:flex-initial">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        <button className="flex items-center justify-center gap-2 px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex-1 sm:flex-initial">
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Order</span>
        </button>
      </div>
    </div>
  );
}
