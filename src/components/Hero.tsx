
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Users, Shield, Sparkles, Heart, Crown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Simplified gradient background with calm colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-orange-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-800/40 via-orange-600/30 to-cyan-600/20"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Enhanced floating background images with faster animations and more images */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Original set of floating images with faster animations */}
        <motion.div
          className="absolute w-32 h-24 sm:w-48 sm:h-32 lg:w-64 lg:h-48 rounded-2xl overflow-hidden"
          style={{ top: '15%', left: '8%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 25, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/lovable-uploads/ac0eaa11-4de5-4675-8e74-85a7c07634aa.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-36 h-28 sm:w-52 sm:h-36 lg:w-72 lg:h-52 rounded-2xl overflow-hidden"
          style={{ top: '55%', right: '12%' }}
          animate={{
            y: [0, 35, 0],
            x: [0, -20, 0],
            rotate: [0, -4, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img 
            src="/lovable-uploads/0280c22c-7236-4ab4-a268-9008bf8fb916.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-28 h-20 sm:w-44 sm:h-32 lg:w-60 lg:h-44 rounded-2xl overflow-hidden"
          style={{ bottom: '20%', left: '20%' }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <img 
            src="/lovable-uploads/4962d889-e7ac-40b9-a27e-444405a109e8.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-40 h-32 sm:w-56 sm:h-40 lg:w-76 lg:h-56 rounded-2xl overflow-hidden"
          style={{ top: '30%', right: '30%' }}
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <img 
            src="/lovable-uploads/6998ef2c-16ef-432e-8304-660e4866705d.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-32 h-24 sm:w-48 sm:h-32 lg:w-64 lg:h-44 rounded-2xl overflow-hidden"
          style={{ bottom: '35%', right: '8%' }}
          animate={{
            y: [0, -35, 0],
            x: [0, 22, 0],
            rotate: [0, 4, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <img 
            src="/lovable-uploads/b6f33b75-a6dc-4a97-ab55-d58b526da20f.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-36 h-28 sm:w-52 sm:h-36 lg:w-68 lg:h-48 rounded-2xl overflow-hidden"
          style={{ top: '65%', left: '35%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, -18, 0],
            rotate: [0, -3, 0],
            scale: [1, 1.09, 1],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <img 
            src="/lovable-uploads/7a50c0bb-73ef-45cf-b58d-5bffef746488.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-30 h-22 sm:w-44 sm:h-30 lg:w-56 lg:h-40 rounded-2xl overflow-hidden"
          style={{ top: '10%', right: '5%' }}
          animate={{
            y: [0, -28, 0],
            x: [0, 18, 0],
            rotate: [0, 4, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <img 
            src="/lovable-uploads/ce037bc4-a758-472e-a820-0d156b239400.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-34 h-26 sm:w-50 sm:h-34 lg:w-64 lg:h-46 rounded-2xl overflow-hidden"
          style={{ bottom: '10%', right: '25%' }}
          animate={{
            y: [0, 25, 0],
            x: [0, -12, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          <img 
            src="/lovable-uploads/d29a3b98-ea3c-438c-8f34-e0d485802137.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        {/* Duplicate set for more coverage with different positions and faster animations */}
        <motion.div
          className="absolute w-24 h-18 sm:w-40 sm:h-28 lg:w-52 lg:h-36 rounded-2xl overflow-hidden"
          style={{ top: '5%', left: '50%' }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            rotate: [0, 6, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <img 
            src="/lovable-uploads/ac0eaa11-4de5-4675-8e74-85a7c07634aa.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-38 h-30 sm:w-48 sm:h-34 lg:w-60 lg:h-44 rounded-2xl overflow-hidden"
          style={{ top: '45%', left: '5%' }}
          animate={{
            y: [0, 45, 0],
            x: [0, -25, 0],
            rotate: [0, -6, 0],
            scale: [1, 1.14, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4.5,
          }}
        >
          <img 
            src="/lovable-uploads/0280c22c-7236-4ab4-a268-9008bf8fb916.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-26 h-20 sm:w-42 sm:h-30 lg:w-54 lg:h-38 rounded-2xl overflow-hidden"
          style={{ bottom: '45%', right: '15%' }}
          animate={{
            y: [0, -32, 0],
            x: [0, 20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          <img 
            src="/lovable-uploads/4962d889-e7ac-40b9-a27e-444405a109e8.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>

        <motion.div
          className="absolute w-42 h-34 sm:w-54 sm:h-42 lg:w-70 lg:h-54 rounded-2xl overflow-hidden"
          style={{ top: '75%', right: '45%' }}
          animate={{
            y: [0, 38, 0],
            x: [0, -28, 0],
            rotate: [0, -4, 0],
            scale: [1, 1.13, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5.5,
          }}
        >
          <img 
            src="/lovable-uploads/6998ef2c-16ef-432e-8304-660e4866705d.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover filter blur-sm"
          />
        </motion.div>
      </div>
      
      {/* Enhanced animated background patterns with faster movement */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/40 rounded-full"
            style={{
              width: `${60 + i * 12}px`,
              height: `${60 + i * 12}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* More floating particles with faster movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-white/40' :
              i % 3 === 1 ? 'bg-teal-300/50' : 'bg-orange-300/50'
            }`}
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Enhanced title with left-to-right scroll animation on mobile */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 1.5, 
                ease: "easeOut",
                type: "spring",
                damping: 20,
                stiffness: 100
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-orange-200">
                RAKSHA HOSTEL
              </span>
            </motion.h1>
            
            <motion.span 
              className="block text-lg sm:text-2xl md:text-3xl lg:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-300 mt-2 sm:mt-4 tracking-wider"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3,
                ease: "easeOut",
                type: "spring",
                damping: 20,
                stiffness: 100
              }}
            >
              Your Home Away From Home
            </motion.span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
              damping: 25,
              stiffness: 120
            }}
          >
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-3 sm:mb-4 max-w-3xl mx-auto font-light leading-relaxed">
              Experience comfort, security, and community in the heart of Greater Noida
            </p>
            
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Premium student accommodation with modern amenities and 24/7 support
            </p>
          </motion.div>

          {/* Feature badges with staggered left-to-right animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { icon: Star, text: "4.9★ Rated", color: "from-orange-400 to-orange-500" },
              { icon: Shield, text: "24/7 Security", color: "from-teal-500 to-cyan-400" },
              { icon: Wifi, text: "High-Speed WiFi", color: "from-slate-400 to-slate-500" },
              { icon: Heart, text: "Homely Environment", color: "from-teal-400 to-teal-500" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/15 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 sm:py-2.5 border border-white/20 hover:bg-white/25 group"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1.4 + index * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  damping: 20
                }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-white" />
                <span className="text-white font-medium text-xs sm:text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons with enhanced mobile animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 2.2,
              ease: "easeOut",
              type: "spring",
              damping: 20
            }}
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 2.4,
                ease: "easeOut",
                type: "spring",
                damping: 25
              }}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full shadow-lg border border-white/20 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Book Your Dream Paradise
                  <Heart className="w-4 h-4" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              transition={{ 
                duration: 1,
                delay: 2.6,
                ease: "easeOut",
                type: "spring",
                damping: 25
              }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/50 text-white hover:bg-white/20 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-full backdrop-blur-md hover:border-white/70 w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Virtual Tour 360°
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators with enhanced mobile scrolling animation */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 opacity-90 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            {[
              { number: "500+", label: "Happy Students", icon: "🎓" },
              { number: "5", label: "Years Experience", icon: "🏆" },
              { number: "24/7", label: "Support", icon: "💎" },
              { number: "100%", label: "Satisfaction", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                initial={{ x: index % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
                animate={{ x: "0%", opacity: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 3 + index * 0.1,
                  ease: "easeOut",
                  type: "spring",
                  damping: 20
                }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-lg sm:text-xl mb-1">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with faster animation */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
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
