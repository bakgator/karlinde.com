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
import PasswordGate from "./components/PasswordGate";
import { isAdmin } from "./utils/adminUtils";

const queryClient = new QueryClient();

const App = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const siteUnlocked = localStorage.getItem('siteUnlocked') === 'true';
    setIsUnlocked(siteUnlocked);
  }, []);

  if (!isUnlocked) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PasswordGate onCorrectPassword={() => setIsUnlocked(true)} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation onShowPasswordModal={() => setShowPasswordModal(true)} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/about" 
              element={<About onShowPasswordModal={() => setShowPasswordModal(true)} />} 
            />
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