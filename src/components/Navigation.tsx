import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const Navigation = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-[#1A1F2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-[#D6BCFA] hover:text-[#9b87f5]">
              Home
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 text-sm font-medium text-[#D6BCFA] hover:text-[#9b87f5]">
              About
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={handleSignOut}
                className="px-3 py-2 text-sm font-medium text-[#D6BCFA] hover:text-[#9b87f5]"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/auth"
                className="px-3 py-2 text-sm font-medium text-[#D6BCFA] hover:text-[#9b87f5]"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;