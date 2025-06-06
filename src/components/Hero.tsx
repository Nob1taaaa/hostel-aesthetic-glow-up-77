
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
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] py-8"
        >
          {/* Logo Section */}
          <motion.div
            className="mb-8 lg:mb-12"
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
            <div className="flex justify-center mb-6">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 relative">
                  <img 
                    src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png" 
                    alt="Raksha Hostel Logo"
                    className="w-full h-full object-contain rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
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
            className="mb-8 lg:mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4">
              RAKSHA HOSTEL
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-green-200 italic">
              itself reflects security
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-4 max-w-4xl mx-auto">
              Experience comfort, security, and community in the heart of Greater Noida
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Premium student accommodation with modern amenities and 24/7 support
            </p>
          </motion.div>

          {/* Feature badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4"
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
                className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-4 py-2 lg:px-6 lg:py-3 border border-white/20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <badge.icon className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-white" />
                <span className="text-white text-sm sm:text-base lg:text-lg">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div 
            className="flex justify-center items-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-8 py-4 lg:px-12 lg:py-6 text-lg lg:text-xl font-semibold rounded-full shadow-lg flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6" />
              Book Your Dream Paradise
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 opacity-90 w-full max-w-5xl mx-auto"
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
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 lg:p-6 border border-white/20">
                  <div className="text-2xl lg:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm lg:text-base text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <p className="text-white/70 text-xs mt-2 font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
