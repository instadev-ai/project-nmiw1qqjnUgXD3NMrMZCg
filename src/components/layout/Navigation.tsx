import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle 
} from "lucide-react";

const navigationItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard"
  },
  {
    title: "Analytics",
    icon: BarChart2,
    href: "/analytics"
  },
  {
    title: "Users",
    icon: Users,
    href: "/users"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings"
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help"
  }
];

const Navigation = () => {
  return (
    <nav className="flex-1 p-4">
      <motion.ul 
        className="space-y-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {navigationItems.map((item, index) => (
          <motion.li
            key={item.href}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Link
              to={item.href}
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.title}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;