import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, ShoppingCart, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign
  },
  {
    title: "Active Users",
    value: "2,338",
    change: "+15.3%",
    trend: "up",
    icon: Users
  },
  {
    title: "Sales",
    value: "1,229",
    change: "-5.4%",
    trend: "down",
    icon: ShoppingCart
  },
  {
    title: "Active Sessions",
    value: "443",
    change: "+12.2%",
    trend: "up",
    icon: Activity
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <stat.icon className="w-8 h-8 text-gray-400" />
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <p className={`text-sm ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <Card className="p-6">
          <h3 className="text-lg font-medium">Performance Overview</h3>
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            Chart will be implemented here
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-4" />
                <div>
                  <p className="font-medium">New user signed up</p>
                  <p className="text-sm text-muted-foreground">2 minutes ago</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;