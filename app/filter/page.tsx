import { Pencil } from "lucide-react";
import React from "react";

export default function FilterSection() {
  return (
    <div className="flex justify-center items-start min-h-screen p-4 sm:p-6 lg:p-10">
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 w-full max-w-[1000px]">
        <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
          All Filters
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-lg border-gray-900 border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="px-4 py-3 text-center font-medium">
                  Filter Name
                </th>
                <th className="px-4 py-3 text-center font-medium">Status</th>
                <th className="px-4 py-3 text-center font-medium">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {[
                "Category",
                "Weight",
                "Price",
                "Brand",
                "Color",
                "Material",
                "Adjustable",
                "In Stock",
              ].map((item) => (
                <tr key={item}>
                  <td className="px-4 py-3 font-medium text-gray-800 text-center">
                    {item}
                  </td>

                  <td className="px-4 py-3 text-center">
                    <span className="inline-block rounded-md bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                      Active
                    </span>
                  </td>

                  <td className="px-4 py-3 text-center">
                    <button className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50 transition">
                      <Pencil className="w-4 h-4" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {[
            "Category",
            "Weight",
            "Price",
            "Brand",
            "Color",
            "Material",
            "Adjustable",
            "In Stock",
          ].map((item) => (
            <div key={item} className="border border-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">{item}</span>
                <span className="inline-block rounded-md bg-green-100 text-green-700 px-3 py-1 text-xs font-semibold">
                  Active
                </span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50 transition">
                <Pencil className="w-4 h-4" /> Edit
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 mt-4">
          <span className="text-center sm:text-left">
            Showing 1 to 8 of 8 entries
          </span>

          <div className="flex items-center gap-1">
            <button className="border rounded px-3 py-1.5 hover:bg-gray-100 transition">
              Previous
            </button>
            <button className="border rounded px-3 py-1.5 bg-gray-100">
              1
            </button>
            <button className="border rounded px-3 py-1.5 hover:bg-gray-100 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
