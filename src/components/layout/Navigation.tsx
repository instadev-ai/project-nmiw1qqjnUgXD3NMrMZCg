import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  HelpCircle,
} from "lucide-react";

interface NavigationItem {
  title: string;
  href: string;
  icon: React.ComponentType;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
];

export function Navigation() {
  return (
    <nav className="space-y-1">
      {navigationItems.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium rounded-md",
              "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              "focus:outline-none focus:bg-gray-100",
              "transition-colors duration-150 ease-in-out"
            )}
          >
            <Icon className="mr-3 h-5 w-5" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navigation;