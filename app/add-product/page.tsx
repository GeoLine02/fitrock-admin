import React from "react";
import ProductDeepDive from "./components/DeepDive";

export default function AddProduct() {
  return (
    <div className="min-h-screen bg-gray-50  flex items-center justify-center p-4">
      <form className="bg-white rounded-lg shadow-sm p-6 w-full max-w-[1000px]">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create New Product
        </h1>

        {/* Product Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}

        {/* Additional Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Lorem ipsum delis toelis to ay exderias..."
          />
        </div>

        {/* Price */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price (USD)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="$99.99"
            />
            <button
              type="button"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors border border-gray-300"
            >
              Browse Files
            </button>
          </div>
        </div>

        {/* Upload Images */}
        <div className="flex">
          <div className="mb-6 w-1/2">
            <label className="block text-sm font-bold text-gray-900 mb-3">
              Upload Images
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:border-gray-400 transition-colors">
              <div className="w-full">
                <div className="space-y-2  ">
                  <div className="flex justify-center ">
                    <svg
                      className="w-12 h-50 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                  />

                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-gray-600 hover:text-gray-800"
                  >
                    Click to upload or drag and drop
                  </label>
                </div>
              </div>
            </div>
          </div>
          <ProductDeepDive />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-orange-500 text-white py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Save Product
          </button>
          <button
            type="button"
            className="flex-1 bg-white text-gray-700 py-2.5 px-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
