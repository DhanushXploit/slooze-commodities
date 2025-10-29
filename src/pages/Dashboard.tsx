import { motion } from 'framer-motion';
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { getCommodities } from '@/data/mockData';

const Dashboard = () => {
  const commodities = getCommodities();
  const totalProducts = commodities.length;
  const lowStockItems = commodities.filter((c) => c.stock < 20);
  const totalValue = commodities.reduce((sum, c) => sum + c.price * c.stock, 0);
  const avgPrice = commodities.reduce((sum, c) => sum + c.price, 0) / commodities.length;

  const stats = [
    {
      title: 'Total Products',
      value: totalProducts,
      icon: Package,
      description: 'Active commodities',
      color: 'text-primary',
    },
    {
      title: 'Low Stock Alerts',
      value: lowStockItems.length,
      icon: AlertTriangle,
      description: 'Items below 20 units',
      color: 'text-destructive',
    },
    {
      title: 'Total Inventory Value',
      value: `₹${totalValue.toLocaleString()}`,
      icon: DollarSign,
      description: 'Current market value',
      color: 'text-accent',
    },
    {
      title: 'Average Price',
      value: `₹${avgPrice.toFixed(2)}`,
      icon: TrendingUp,
      description: 'Per unit',
      color: 'text-primary',
    },
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground">
                Overview of your commodities inventory
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        {stat.title}
                      </CardTitle>
                      <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                      <div className={`text-2xl font-bold font-mono ${stat.color}`}>
                        {stat.value}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {lowStockItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-6"
              >
                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Low Stock Alerts
                    </CardTitle>
                    <CardDescription>
                      These items need restocking soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {lowStockItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-lg bg-muted p-3"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              ₹{item.price} per unit
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-mono text-lg font-bold text-destructive">
                              {item.stock}
                            </p>
                            <p className="text-xs text-muted-foreground">units left</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
