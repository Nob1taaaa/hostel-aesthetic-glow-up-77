
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Users, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background with hostel-appropriate warm colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-amber-800 via-yellow-700 to-orange-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-orange-500/20 to-yellow-500/20"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Enhanced animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-orange-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 border-2 border-yellow-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-amber-300 rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 border-2 border-red-300 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-bounce" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-orange-300 rounded-full opacity-80 animate-bounce" style={{top: '60%', left: '80%', animationDelay: '1s'}}></div>
        <div className="absolute w-3 h-3 bg-yellow-300 rounded-full opacity-40 animate-bounce" style={{top: '80%', left: '20%', animationDelay: '2s'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-amber-300 rounded-full opacity-70 animate-bounce" style={{top: '30%', left: '70%', animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Enhanced title with hostel-appropriate colors */}
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-yellow-200 mb-6 leading-tight tracking-tight">
            RAKSHA HOSTEL
            <span className="block text-4xl md:text-5xl font-light text-orange-300 mt-4 tracking-wider">
              & LUXURY SERVICES
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-100 mb-4 max-w-4xl mx-auto font-light">
            Experience the <span className="text-orange-400 font-semibold">revolutionary way</span> of living
          </p>
          
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Premium accommodation with world-class amenities designed for the modern student lifestyle
          </p>

          {/* Enhanced feature badges with hostel colors */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-white font-medium">4.9★ Premium Rating</span>
            </div>
            <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <MapPin className="w-6 h-6 text-orange-400 mr-2" />
              <span className="text-white font-medium">Prime Delhi Location</span>
            </div>
            <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Wifi className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-white font-medium">High-Speed Internet</span>
            </div>
            <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Shield className="w-6 h-6 text-amber-400 mr-2" />
              <span className="text-white font-medium">24/7 Security</span>
            </div>
          </div>

          {/* Enhanced CTA buttons with hostel-themed colors */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 border-2 border-white/20">
              Book Your Dream Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/50 text-white hover:bg-white/20 hover:text-white px-10 py-4 text-xl font-semibold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white"
            >
              Virtual Tour 360°
            </Button>
          </div>

          {/* Add trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Happy Students</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-gray-300">Years Excellence</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-gradient-to-b from-white to-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-white/70 text-sm mt-2 font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
