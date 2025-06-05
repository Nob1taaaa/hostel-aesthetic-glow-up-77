
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Rooms", href: "#rooms" },
    { name: "Facilities", href: "#facilities" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200/50 dark:border-slate-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Hostel Logo */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative group">
                  <img 
                    src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
                    alt="Raksha Hostel Logo"
                    className="w-full h-full object-contain rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-sm sm:text-lg lg:text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500">
                  RAKSHA HOSTEL
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full p-0 border-gray-300 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {theme === "light" ? (
                <Moon className="h-3 w-3 lg:h-4 lg:w-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-3 w-3 lg:h-4 lg:w-4 text-gray-600 dark:text-gray-400" />
              )}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm lg:text-base px-4 lg:px-6"
            >
              Book Now
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="w-7 h-7 rounded-full p-0 border-gray-300 dark:border-slate-600"
            >
              {theme === "light" ? (
                <Moon className="h-3 w-3 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-3 w-3 text-gray-600 dark:text-gray-400" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-gray-200/50 dark:border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
