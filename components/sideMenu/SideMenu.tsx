"use client";

import classNames from "classnames";
import { useState } from "react";
import { routes } from "./routes";
import NavItem from "./NavItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={classNames(
        "h-screen bg-white dark:bg-gray-800 border-r border-gray-200 w-full flex flex-col transition-all text-white",
        {
          "max-w-72": isOpen,
          "max-w-16": !isOpen,
        },
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        {isOpen && <span className="font-bold text-lg">Fitrock Admin</span>}
        <button
          className="material-icons cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {routes.map((route) => (
          <NavItem key={route.href} route={route} isOpen={isOpen} />
        ))}
      </nav>
    </div>
  );
}
