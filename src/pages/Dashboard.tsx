import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: "Active Users",
      value: "2,345",
      change: "+15.3%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.8%",
      change: "-2.4%",
      isPositive: false,
      icon: Activity,
    },
    {
      title: "Avg. Session",
      value: "2m 45s",
      change: "+12.3%",
      isPositive: true,
      icon: LineChart,
    },
  ];

  return (
    <DashboardLayout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {/* Page Title */}
        <motion.div variants={item}>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="mt-2 text-gray-600">Welcome back! Here's what's happening today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <motion.div
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <stat.icon className="h-4 w-4 text-gray-400" />
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={cn(
                      "flex items-center text-sm",
                      stat.isPositive ? "text-green-600" : "text-red-600"
                    )}
                  >
                    {stat.isPositive ? (
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                    )}
                    {stat.change}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex h-full items-center justify-center text-gray-500">
                Chart placeholder - Will be implemented in next iteration
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={item}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="flex items-center space-x-4 rounded-lg border p-4"
                  >
                    <div className="h-8 w-8 rounded-full bg-gray-100" />
                    <div>
                      <p className="font-medium">New user signed up</p>
                      <p className="text-sm text-gray-500">2 minutes ago</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Dashboard;