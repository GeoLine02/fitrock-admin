"use client";

import classNames from "classnames";
import { useState, useEffect } from "react";
import { routes } from "./routes";
import NavItem from "./NavItem";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track window width to detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      {!mobileOpen && (
        <button
          className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 rounded shadow text-black dark:text-white"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={classNames(
          "fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 text-white dark:border-gray-700 flex flex-col w-full transition-transform z-40",
          {
            "md:relative md:translate-x-0": true,
            "-translate-x-full": !mobileOpen && isMobile,
          },
        )}
        style={{
          width: isMobile ? "full" : isOpen ? 288 : 64, // 288px / 72px
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {/* Show project name only if desktop open or mobile */}
          {(isOpen || isMobile) && (
            <span className="font-bold text-lg">Fitrock Admin</span>
          )}
          <div className="flex items-center gap-2">
            {!isMobile && (
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronLeft /> : <ChevronRight />}
              </button>
            )}
            {/* Close button for mobile */}
            {isMobile && (
              <button onClick={() => setMobileOpen(false)}>✕</button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {routes.map((route) => (
            <NavItem
              key={route.href}
              route={route}
              // Full menu on mobile, desktop collapse based on isOpen
              isOpen={isMobile ? true : isOpen}
            />
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
