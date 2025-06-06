
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, X, User } from "lucide-react";

const LoginPopup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white">
        <div className="relative p-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600 text-lg">Sign in to your account</p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-gray-700 text-base font-medium">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <User size={18} />
                </div>
                <Input 
                  id="username" 
                  placeholder="Enter your username" 
                  className="pl-10 border rounded-md w-full py-2 px-3 text-gray-700" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700 text-base font-medium">
                Password
              </label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  className="pr-10 border rounded-md w-full py-2 px-3 text-gray-700" 
                />
                <div 
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-teal-600 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
            
            <Button 
              className="w-full py-6 text-lg bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600"
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

export default LoginPopup;
