
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">RAKSHA HOSTEL</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the new way of living with comfort, security, and community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-teal-400 transition-colors">Rooms</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-teal-400 transition-colors">Facilities</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Room Types</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Single Occupancy</li>
              <li className="text-gray-300">Double Sharing</li>
              <li className="text-gray-300">Triple Sharing</li>
              <li className="text-gray-300">Premium Rooms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5" />
                <span className="text-gray-300 text-sm">Guntur, Delhi<br />Near Heritage College</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300 text-sm">info@rakshahostel.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Raksha Hostel. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed with ❤️ for student comfort
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
