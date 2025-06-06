
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Home, User, Users, MessageCircle, FileText, Shield } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <img 
                  src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
                  alt="Raksha Hostel Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">RAKSHA</span>
                <span className="text-xl font-bold text-orange-400 ml-1">HOSTELS</span>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed italic text-sm">
              Raksha Hostels, a unit of NUMISHAL Pvt. Ltd., is where every student finds a 'Home' away from home. Located in the heart of Greater Noida, our hostel offers easy access to colleges, local markets, the metro, and all nearby transportation hubs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Useful Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Home className="w-4 h-4 mr-3 text-orange-400" />
                <a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300">Home</a>
              </li>
              <li className="flex items-center">
                <User className="w-4 h-4 mr-3 text-teal-400" />
                <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300">About</a>
              </li>
              <li className="flex items-center">
                <Users className="w-4 h-4 mr-3 text-orange-400" />
                <a href="#team" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300">Team</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-teal-400" />
                <a href="#blog" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300">Blog</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-orange-400" />
                <a href="#inquiry" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300">Inquiry</a>
              </li>
              <li className="flex items-center">
                <Shield className="w-4 h-4 mr-3 text-teal-400" />
                <button 
                  onClick={() => scrollToSection('terms')}
                  className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Room Types Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Room Types</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Single Occupancy</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">Double Sharing</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Triple Sharing</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">Premium Rooms</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Address</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                  Greater Noida, Uttar Pradesh<br />
                  Near Pari Chowk, Behind Jagat Farm Market
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <div className="text-gray-300 dark:text-gray-400 text-sm">
                  <div>+91 8743-836-836</div>
                  <div>+91 8750-836-836</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400 text-sm">Info.rakshahostels@gmail.com</span>
              </div>
            </div>
            
            {/* Follow Us Section */}
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-4 text-white dark:text-gray-200">Follow us:</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2024 Raksha Hostel. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 md:mt-0">
              Designed with ❤️ for student comfort
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
