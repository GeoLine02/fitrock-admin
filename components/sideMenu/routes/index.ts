import { LayoutDashboard, Package } from "lucide-react";

export const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    subRoutes: [],
  },
  {
    name: "Products",
    href: "/products",
    icon: Package,
    subRoutes: [
      { name: "List", href: "/products/list" },
      { name: "Create", href: "/products/create" },
    ],
  },
];
