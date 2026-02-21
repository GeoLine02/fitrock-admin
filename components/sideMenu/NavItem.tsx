"use client";

import { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { Route } from "@/types/sideMenu";

interface NavItemProps {
  route: Route;
  isOpen: boolean;
}

export default function NavItem({ route, isOpen }: NavItemProps) {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = () => {
    if (route.subRoutes.length > 0) {
      setCollapsed(!collapsed);
    }
  };

  const firstHref =
    route.subRoutes.length > 0 ? route.subRoutes[0].href : route.href;
  const Icon = route.icon;

  return (
    <div>
      <Link
        href={firstHref}
        className={classNames(
          "flex items-center p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors rounded",
          { "justify-center": !isOpen },
        )}
        onClick={handleClick}
      >
        <Icon className="w-5 h-5" />
        {isOpen && <span className="ml-3">{route.name}</span>}

        {isOpen && route.subRoutes.length > 0 && (
          <span className="ml-auto">{collapsed ? "▾" : "▴"}</span>
        )}
      </Link>

      {/* SubRoutes */}
      {route.subRoutes.length > 0 && !collapsed && isOpen && (
        <div className="ml-8 mt-1 flex flex-col space-y-1">
          {route.subRoutes.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="text-sm p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
