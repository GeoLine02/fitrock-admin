import React from "react";

export default function ProductDeepDive() {
  return (
    <div className="px-7">
      <div className="bg-white rounded-lg p-6 max-w-md">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Product Deep Dive
        </h2>

        <div className="border-b border-gray-200 pb-3 mb-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium text-gray-900 text-sm">Feature:</div>
            <div className="font-medium text-gray-900 text-sm">
              Specification
            </div>
            <div></div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Feature</div>
            <div className="text-sm text-gray-700">Height Range</div>
            <div className="text-sm text-gray-700">Specialistus</div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Weight Range</div>
            <div className="text-sm text-gray-700">10-50 lbs</div>
            <div className="text-sm text-gray-400">--</div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Material</div>
            <div className="text-sm text-gray-400">--</div>
            <div className="text-sm text-gray-400">--</div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Dimensions</div>
            <div className="text-sm text-gray-400">--</div>
            <div className="text-sm text-gray-400">--</div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Sdrano</div>
            <div></div>
            <div></div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-sm text-gray-700">Warranty</div>
            <div className="text-sm text-gray-400">--</div>
            <div className="text-sm text-gray-400">--</div>
          </div>
        </div>
      </div>
    </div>
  );
}
