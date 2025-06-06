import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Home, User, Users, MessageCircle, FileText, Shield } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLocation = () => {
    window.open("https://www.google.com/maps/search/Greater+Noida,+Pari+Chowk,+Behind+Jagat+Farm+Market", "_blank");
  };

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                <img 
                  src="/lovable-uploads/a54a5c5d-b32e-46e9-94ef-1eff409c145b.png" 
                  alt="Raksha Hostel Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">RAKSHA</span>
                <span className="text-lg sm:text-xl font-bold text-orange-400">HOSTEL</span>
                <span className="text-xs text-gray-400 italic">itself reflects security</span>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed italic text-sm">
              Raksha Hostels, a unit of NUMISHAL Pvt. Ltd., is where every student finds a 'Home' away from home. Located in the heart of Greater Noida, our hostel offers easy access to colleges, local markets, the metro, and all nearby transportation hubs.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Useful Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-orange-400 flex-shrink-0" />
                <a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Home</a>
              </li>
              <li className="flex items-center">
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-teal-400 flex-shrink-0" />
                <a href="#about" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base">About</a>
              </li>
              <li className="flex items-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-orange-400 flex-shrink-0" />
                <a href="#team" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Team</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-teal-400 flex-shrink-0" />
                <a href="#blog" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm sm:text-base">Blog</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-orange-400 flex-shrink-0" />
                <a href="#inquiry" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Inquiry</a>
              </li>
              <li className="flex items-center">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-teal-400 flex-shrink-0" />
                <button 
                  onClick={() => scrollToSection('terms')}
                  className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-300 text-left text-sm sm:text-base"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Room Types Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Room Types</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">Single Occupancy</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-sm sm:text-base">Double Sharing</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-orange-400 transition-colors cursor-pointer text-sm sm:text-base">Triple Sharing</li>
              <li className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors cursor-pointer text-sm sm:text-base">Premium Rooms</li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">Address</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 cursor-pointer" onClick={handleLocation}>
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Greater Noida, Uttar Pradesh<br />
                  Near Pari Chowk, Behind Jagat Farm Market
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div 
                  className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:text-teal-400 transition-colors" 
                  onClick={() => handlePhoneCall('8743836836')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm hover:text-teal-400 transition-colors">
                    +91 8743-836-836
                  </span>
                </div>
                <div 
                  className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:text-teal-400 transition-colors" 
                  onClick={() => handlePhoneCall('8750836836')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0 opacity-0" />
                  <span className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm hover:text-teal-400 transition-colors">
                    +91 8750-836-836
                  </span>
                </div>
              </div>
              <div 
                className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:text-orange-400 transition-colors"
                onClick={() => handleEmail('Info.rakshahostels@gmail.com')}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm hover:text-orange-400 transition-colors break-all">
                  Info.rakshahostels@gmail.com
                </span>
              </div>
            </div>
            
            {/* Follow Us Section */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm sm:text-md font-semibold mb-3 sm:mb-4 text-white dark:text-gray-200">Follow us:</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 dark:border-gray-600">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © 2024 Raksha Hostel. All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm text-center md:text-right">
              Designed with ❤️ for student comfort
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;