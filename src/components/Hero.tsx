import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Shield, Sparkles, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-orange-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-800/40 via-orange-600/30 to-cyan-600/20"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/30 rounded-full"
            style={{
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo Section */}
          <motion.div
            className="mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              damping: 20,
              stiffness: 100
            }}
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
                  <img 
                    src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png" 
                    alt="Raksha Hostel Logo"
                    className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-2 sm:mb-3"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2">
              RAKSHA HOSTEL
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 italic mt-1 px-2">
              itself reflects security
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-2 sm:mb-3 max-w-4xl mx-auto leading-relaxed px-3">
              Experience comfort, security, and community in the heart of Greater Noida
            </p>
            
            <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-3">
              Premium student accommodation with modern amenities and 24/7 support
            </p>
          </motion.div>

          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3 mb-4 sm:mb-6 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {[
              { icon: Star, text: "4.9★ Rated", color: "from-orange-400 to-orange-500" },
              { icon: Shield, text: "24/7 Security", color: "from-teal-500 to-cyan-400" },
              { icon: Wifi, text: "High-Speed WiFi", color: "from-slate-400 to-slate-500" },
              { icon: Heart, text: "Homely Environment", color: "from-teal-400 to-teal-500" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-white flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div 
            className="flex justify-center items-center mb-4 sm:mb-6 px-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg w-full max-w-xs sm:max-w-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">Book Your Dream Paradise</span>
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 opacity-90 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {[
              { number: "500+", label: "Happy Students", icon: "🎓" },
              { number: "5", label: "Years Experience", icon: "🏆" },
              { number: "24/7", label: "Support", icon: "💎" },
              { number: "100%", label: "Satisfaction", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/20">
                  <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{stat.icon}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div 
            className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <p className="text-white/70 text-xs sm:text-sm mt-2 font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;