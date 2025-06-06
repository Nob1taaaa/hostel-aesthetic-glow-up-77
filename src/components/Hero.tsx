
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Users, Shield, Sparkles, Heart, Crown, ArrowRight } from "lucide-react";
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
      {/* Revolutionary Background Design */}
      <div className="absolute inset-0">
        {/* Primary gradient with official colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-orange-800"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/80 via-teal-500/60 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-teal-600/70 via-orange-500/50 to-orange-900/80"></div>
        
        {/* Mesh gradient overlay for depth */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-400/30 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-teal-400/30 via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Floating Background Images with Professional Animations */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {/* Strategic floating images */}
        <motion.div
          className="absolute w-64 h-40 sm:w-80 sm:h-56 lg:w-96 lg:h-64 rounded-3xl overflow-hidden"
          style={{ top: '8%', left: '2%' }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img 
            src="/lovable-uploads/ac0eaa11-4de5-4675-8e74-85a7c07634aa.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/40 to-orange-500/40"></div>
        </motion.div>

        <motion.div
          className="absolute w-56 h-36 sm:w-72 sm:h-48 lg:w-88 lg:h-60 rounded-3xl overflow-hidden"
          style={{ top: '50%', right: '5%' }}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            rotate: [0, -4, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <img 
            src="/lovable-uploads/0280c22c-7236-4ab4-a268-9008bf8fb916.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-orange-500/40 to-teal-500/40"></div>
        </motion.div>

        <motion.div
          className="absolute w-48 h-32 sm:w-64 sm:h-44 lg:w-80 lg:h-56 rounded-3xl overflow-hidden"
          style={{ bottom: '10%', left: '10%' }}
          animate={{
            y: [0, -35, 0],
            x: [0, 25, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <img 
            src="/lovable-uploads/4962d889-e7ac-40b9-a27e-444405a109e8.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-500/40 to-orange-500/40"></div>
        </motion.div>

        <motion.div
          className="absolute w-60 h-40 sm:w-76 sm:h-52 lg:w-92 lg:h-64 rounded-3xl overflow-hidden"
          style={{ top: '25%', right: '20%' }}
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -2, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img 
            src="/lovable-uploads/6998ef2c-16ef-432e-8304-660e4866705d.png" 
            alt="Hostel Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-teal-500/40"></div>
        </motion.div>

        <motion.div
          className="absolute w-44 h-30 sm:w-60 sm:h-42 lg:w-76 lg:h-54 rounded-3xl overflow-hidden"
          style={{ bottom: '35%', right: '8%' }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 3, 0],
            scale: [1, 1.07, 1],
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
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-teal-500/40 to-orange-500/40"></div>
        </motion.div>

        <motion.div
          className="absolute w-52 h-34 sm:w-68 sm:h-46 lg:w-84 lg:h-58 rounded-3xl overflow-hidden"
          style={{ top: '65%', left: '35%' }}
          animate={{
            y: [0, 28, 0],
            x: [0, -18, 0],
            rotate: [0, -3, 0],
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
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/40 to-teal-500/40"></div>
        </motion.div>
      </div>
      
      {/* Professional Geometric Patterns */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/30 rounded-full"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Floating Particles System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'rounded-full' : 
              i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-sm rotate-12'
            } ${
              i % 4 === 0 ? 'bg-white/60' :
              i % 4 === 1 ? 'bg-teal-300/70' :
              i % 4 === 2 ? 'bg-orange-400/70' : 'bg-slate-300/60'
            }`}
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.8, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Mind-Blowing Title */}
          <motion.div 
            className="mb-8 sm:mb-12"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-tight tracking-tight relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-orange-200 blur-lg opacity-50">
                  RAKSHA
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-orange-100">
                  RAKSHA
                </span>
                
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
                  animate={{ 
                    rotate: [0, 360], 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Crown className="w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-300" />
                </motion.div>
              </span>
              
              <motion.span 
                className="block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-orange-300 to-orange-400 mt-4 sm:mt-8 tracking-[0.15em] sm:tracking-[0.25em]"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 1.5 }}
              >
                LUXURY PARADISE
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-orange-400" />
            </motion.div>
          </motion.div>
          
          {/* Captivating Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/95 mb-6 max-w-6xl mx-auto font-light leading-relaxed">
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl">ultimate lifestyle revolution</span> in luxury living
            </p>
            
            <p className="text-base sm:text-xl md:text-2xl text-white/80 mb-8 max-w-5xl mx-auto leading-relaxed">
              Where dreams meet reality in the most premium student accommodation designed for extraordinary living
            </p>
          </motion.div>

          {/* Premium Feature Showcase */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          >
            {[
              { icon: Star, text: "4.9★ Excellence", color: "from-orange-400 to-orange-500", bg: "bg-orange-500/20" },
              { icon: Shield, text: "Ultimate Security", color: "from-teal-500 to-cyan-400", bg: "bg-teal-500/20" },
              { icon: Wifi, text: "Lightning WiFi", color: "from-slate-400 to-slate-500", bg: "bg-slate-500/20" },
              { icon: Heart, text: "Home Away", color: "from-orange-500 to-orange-600", bg: "bg-orange-500/20" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className={`flex items-center ${badge.bg} backdrop-blur-xl rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 border border-white/20 hover:border-white/40 group relative overflow-hidden cursor-pointer`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ transitionDelay: `${3 + index * 0.3}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <badge.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 mr-3 sm:mr-4 bg-gradient-to-r ${badge.color} rounded-full p-1.5`} />
                <span className="text-white font-bold text-sm sm:text-base lg:text-xl">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Revolutionary CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.5 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.15, 
                y: -12,
                boxShadow: "0 25px 50px rgba(251, 146, 60, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 sm:gap-4">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  <span>Book Your Dream Paradise</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.08, 
                y: -8,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white/60 text-white hover:bg-white/20 hover:text-white px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold rounded-full backdrop-blur-xl hover:border-white transition-all duration-500 relative group overflow-hidden w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center justify-center gap-3 sm:gap-4">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  <span>Virtual Tour 360°</span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stunning Statistics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 opacity-95"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 1.5, delay: 4 }}
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
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">{stat.icon}</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-300 mb-2 sm:mb-3">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-10 h-16 sm:w-12 sm:h-20 border-3 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/5 relative overflow-hidden group cursor-pointer">
          <motion.div 
            className="w-2 h-6 sm:w-2.5 sm:h-8 bg-gradient-to-b from-white via-teal-400 to-orange-400 rounded-full mt-3 sm:mt-4"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
        <p className="text-white/90 text-sm sm:text-base mt-3 sm:mt-4 font-semibold tracking-wide">Scroll to explore paradise</p>
      </motion.div>
    </section>
  );
};

export default Hero;
