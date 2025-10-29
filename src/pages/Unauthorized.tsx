import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGoBack = () => {
    if (user?.role === 'manager') {
      navigate('/dashboard');
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-6 flex justify-center"
        >
          <div className="rounded-full bg-destructive/10 p-6">
            <ShieldAlert className="h-16 w-16 text-destructive" />
          </div>
        </motion.div>

        <h1 className="mb-2 text-4xl font-bold text-foreground">
          Access Denied
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          You don't have permission to access this page.
        </p>

        <Button onClick={handleGoBack} size="lg">
          Go Back Home
        </Button>
      </motion.div>
    </div>
  );
};

export default Unauthorized;
