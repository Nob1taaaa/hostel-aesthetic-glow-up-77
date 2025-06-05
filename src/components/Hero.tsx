
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Enhanced gradient background with hostel official colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-teal-800 via-cyan-700 to-orange-600"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/60 via-orange-500/40 via-cyan-400/30 to-orange-500/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-600/20 via-orange-500/30 to-orange-600/40"></div>
      <div className="absolute inset-0 bg-black/15"></div>
      
      {/* Floating Background Images with Beautiful Animations */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* First floating image */}
        <motion.div
          className="absolute w-48 h-32 sm:w-72 sm:h-48 lg:w-96 lg:h-64 rounded-3xl overflow-hidden blur-sm"
          style={{ top: '10%', left: '5%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/lovable-uploads/ac0eaa11-4de5-4675-8e74-85a7c07634aa.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Second floating image */}
        <motion.div
          className="absolute w-40 h-28 sm:w-60 sm:h-40 lg:w-80 lg:h-56 rounded-3xl overflow-hidden blur-sm"
          style={{ top: '60%', right: '10%' }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <img 
            src="/lovable-uploads/0280c22c-7236-4ab4-a268-9008bf8fb916.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Third floating image */}
        <motion.div
          className="absolute w-36 h-24 sm:w-52 sm:h-36 lg:w-72 lg:h-48 rounded-3xl overflow-hidden blur-sm"
          style={{ bottom: '15%', left: '15%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 2, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <img 
            src="/lovable-uploads/4962d889-e7ac-40b9-a27e-444405a109e8.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Fourth floating image */}
        <motion.div
          className="absolute w-44 h-30 sm:w-64 sm:h-44 lg:w-88 lg:h-60 rounded-3xl overflow-hidden blur-sm"
          style={{ top: '35%', right: '25%' }}
          animate={{
            y: [0, 35, 0],
            x: [0, -25, 0],
            rotate: [0, -4, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img 
            src="/lovable-uploads/6998ef2c-16ef-432e-8304-660e4866705d.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Fifth floating image */}
        <motion.div
          className="absolute w-32 h-22 sm:w-48 sm:h-32 lg:w-64 lg:h-44 rounded-3xl overflow-hidden blur-sm"
          style={{ bottom: '40%', right: '5%' }}
          animate={{
            y: [0, -28, 0],
            x: [0, 18, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <img 
            src="/lovable-uploads/b6f33b75-a6dc-4a97-ab55-d58b526da20f.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Sixth floating image */}
        <motion.div
          className="absolute w-38 h-26 sm:w-56 sm:h-38 lg:w-76 lg:h-52 rounded-3xl overflow-hidden blur-sm"
          style={{ top: '70%', left: '40%' }}
          animate={{
            y: [0, 22, 0],
            x: [0, -12, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.09, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          <img 
            src="/lovable-uploads/7a50c0bb-73ef-45cf-b58d-5bffef746488.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      {/* Advanced animated background patterns */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border-2 border-white rounded-full`}
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Mesmerizing floating particles with official colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 4 === 0 ? 'rounded-full' : 
              i % 4 === 1 ? 'rounded-lg rotate-45' :
              i % 4 === 2 ? 'rounded-full' : 'rounded-sm rotate-12'
            } ${
              i % 5 === 0 ? 'bg-white' :
              i % 5 === 1 ? 'bg-teal-300' :
              i % 5 === 2 ? 'bg-orange-400' :
              i % 5 === 3 ? 'bg-slate-300' : 'bg-cyan-300'
            }`}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Ultra Premium Title with official colors - Mobile optimized */}
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 leading-tight tracking-tight relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-orange-200 blur-sm">
                RAKSHA HOSTEL
              </span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-orange-100">
                RAKSHA HOSTEL
              </span>
              {/* Magical sparkle effects */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-300" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4"
                animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-orange-400" />
              </motion.div>
            </span>
            
            <motion.span 
              className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-orange-300 to-orange-400 mt-3 sm:mt-6 tracking-[0.1em] sm:tracking-[0.2em]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              & LUXURY PARADISE
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 dark:text-gray-200 mb-4 sm:mb-6 max-w-5xl mx-auto font-light leading-relaxed">
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">revolutionary dimension</span> of living
            </p>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Premium luxury accommodation with world-class amenities designed for the extraordinary student lifestyle
            </p>
          </motion.div>

          {/* Enhanced Premium feature badges with official colors - Mobile optimized */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {[
              { icon: Star, text: "4.9★ Premium", color: "from-orange-400 to-orange-500" },
              { icon: MapPin, text: "Prime Location", color: "from-teal-500 to-cyan-400" },
              { icon: Wifi, text: "High-Speed WiFi", color: "from-slate-400 to-slate-500" },
              { icon: Shield, text: "24/7 Security", color: "from-orange-500 to-orange-600" },
              { icon: Heart, text: "Home Away", color: "from-teal-400 to-teal-500" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-3 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border border-white/30 hover:bg-white/30 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ transitionDelay: `${2.5 + index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 mr-2 sm:mr-3 bg-gradient-to-r ${badge.color} rounded-full p-1`} />
                <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Ultra Premium CTA buttons with official colors - Mobile optimized */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-8 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-teal-500 via-orange-500 to-orange-600 hover:from-teal-600 hover:via-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-2xl font-bold rounded-full shadow-2xl hover:shadow-orange-500/50 border-2 border-white/30 backdrop-blur-sm overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="whitespace-nowrap">Book Your Dream Paradise</span>
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white/60 text-white hover:bg-white/25 hover:text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-2xl font-bold rounded-full backdrop-blur-lg hover:border-white transition-all duration-300 hover:shadow-2xl relative group overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="whitespace-nowrap">Virtual Tour 360°</span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced trust indicators with official colors - Mobile optimized */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12 opacity-90 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            {[
              { number: "500+", label: "Happy Students", icon: "🎓" },
              { number: "5", label: "Years Excellence", icon: "🏆" },
              { number: "24/7", label: "Premium Support", icon: "💎" },
              { number: "100%", label: "Satisfaction Rate", icon: "❤️" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20 group-hover:bg-white/25 transition-all duration-300 group-hover:shadow-xl">
                  <div className="text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-300 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra Enhanced scroll indicator with official colors */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 sm:w-10 sm:h-16 border-3 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-white/10 relative overflow-hidden group">
          <motion.div 
            className="w-1.5 h-4 sm:w-2 sm:h-6 bg-gradient-to-b from-white via-teal-400 to-orange-400 rounded-full mt-2 sm:mt-3"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
        <p className="text-white/80 dark:text-white/90 text-xs sm:text-sm mt-2 sm:mt-3 font-semibold tracking-wide">Scroll to explore</p>
      </motion.div>
    </section>
  );
};

export default Hero;
