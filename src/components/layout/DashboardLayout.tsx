import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isMobile, sidebarOpen, setSidebarOpen } = useMobile();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          x: sidebarOpen ? 0 : -280,
          width: "16rem"
        }}
        className={cn(
          "fixed inset-y-0 left-0 z-30 bg-white shadow-lg",
          "lg:transform-none lg:opacity-100 lg:translate-x-0"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col h-full"
        >
          <div className="p-6">
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          <Navigation />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b">
          <div className="flex items-center px-6 py-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;