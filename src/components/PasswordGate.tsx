import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

interface PasswordGateProps {
  onCorrectPassword: () => void;
}

const PasswordGate = ({ onCorrectPassword }: PasswordGateProps) => {
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bakgator123') {
      onCorrectPassword();
      localStorage.setItem('siteUnlocked', 'true');
    } else {
      toast({
        title: "Incorrect Password",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Site is Paused</h2>
        <p className="text-gray-600 mb-6 text-center">Please enter the password to access the site.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Unlock Site
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;