
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            RAKSHA HOSTEL
            <span className="block text-3xl md:text-4xl font-normal text-orange-300 mt-2">
              & HOTEL SERVICES
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto">
            Experience the new way of living
          </p>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Modern accommodation with world-class amenities. Your comfort is our priority.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white">4.8 Rating</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-white">Prime Location</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Wifi className="w-5 h-5 text-teal-400 mr-2" />
              <span className="text-white">Free WiFi</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg hover-scale">
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-teal-700 px-8 py-3 text-lg"
            >
              Take a Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
