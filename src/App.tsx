import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import AdminPanel from "./components/AdminPanel";
import PasswordModal from "./components/PasswordModal";
import { isAdmin } from "./utils/adminUtils";

const queryClient = new QueryClient();

const App = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation onShowPasswordModal={() => setShowPasswordModal(true)} />
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