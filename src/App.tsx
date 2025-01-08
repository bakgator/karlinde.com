import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import AdminPanel from "./components/AdminPanel";
import PasswordModal from "./components/PasswordModal";
import { isAdmin } from "./utils/adminUtils";

const queryClient = new QueryClient();

const App = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [lastKeyPress, setLastKeyPress] = useState({ key: '', time: 0 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        const now = Date.now();
        if (
          e.metaKey && 
          lastKeyPress.key === 'Enter' && 
          now - lastKeyPress.time < 500
        ) {
          setShowPasswordModal(true);
        }
        setLastKeyPress({ key: 'Enter', time: now });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lastKeyPress]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/admin" 
              element={isAdmin() ? <AdminPanel /> : <Index />} 
            />
          </Routes>
          {showPasswordModal && (
            <PasswordModal onClose={() => setShowPasswordModal(false)} />
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;