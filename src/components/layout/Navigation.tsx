import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function Navigation() {
  const location = useLocation();

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-1"
    >
      {navigationItems.map((navItem) => {
        const Icon = navItem.icon;
        const isActive = location.pathname === navItem.href;

        return (
          <motion.div key={navItem.href} variants={item}>
            <Link
              to={navItem.href}
              className={cn(
                "flex items-center px-4 py-2 text-sm font-medium rounded-md relative overflow-hidden",
                "transition-colors duration-150 ease-in-out",
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-indigo-50"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              <span className="relative flex items-center">
                <Icon className={cn(
                  "mr-3 h-5 w-5",
                  isActive ? "text-indigo-600" : "text-gray-400"
                )} />
                {navItem.title}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

export default Navigation;