
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, X, User } from "lucide-react";

const WelcomePopup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white border-0 shadow-2xl">
        <DialogTitle className="sr-only">Welcome to Raksha Hostel - Sign In</DialogTitle>
        <DialogDescription className="sr-only">
          Welcome popup for signing in to your Raksha Hostel account
        </DialogDescription>
        
        <div className="relative p-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X size={24} />
          </button>
          
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
                alt="Raksha Hostel Logo"
                className="w-16 h-16 object-contain rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600 text-lg">Sign in to your account</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="welcome-username" className="text-gray-700 text-base font-medium">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
                  <User size={18} />
                </div>
                <Input 
                  id="welcome-username" 
                  placeholder="Enter your username" 
                  className="pl-10 border rounded-md w-full py-3 px-3 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="welcome-password" className="text-gray-700 text-base font-medium">
                Password
              </label>
              <div className="relative">
                <Input 
                  id="welcome-password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="pr-10 border rounded-md w-full py-3 px-3 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent" 
                />
                <div 
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="welcome-remember" />
                <label htmlFor="welcome-remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-teal-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
            
            <Button 
              className="w-full py-6 text-lg bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Button>
            
            <p className="text-center text-gray-600">
              Don't have an account? <a href="#" className="text-teal-600 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
