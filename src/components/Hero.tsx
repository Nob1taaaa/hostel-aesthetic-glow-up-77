
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Users, Shield, Sparkles, Heart, Crown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Enhanced gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-800 via-cyan-700 to-orange-700"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/60 via-emerald-500/40 via-cyan-400/30 to-orange-500/50"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 via-pink-500/30 to-orange-600/40"></div>
      <div className="absolute inset-0 bg-black/15"></div>
      
      {/* Advanced animated background patterns */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute border-2 border-white rounded-full`}
            style={{
              width: `${120 + i * 20}px`,
              height: `${120 + i * 20}px`,
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

      {/* Mesmerizing floating particles with different shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 4 === 0 ? 'rounded-full' : 
              i % 4 === 1 ? 'rounded-lg rotate-45' :
              i % 4 === 2 ? 'rounded-full' : 'rounded-sm rotate-12'
            } ${
              i % 5 === 0 ? 'bg-white' :
              i % 5 === 1 ? 'bg-teal-300' :
              i % 5 === 2 ? 'bg-orange-300' :
              i % 5 === 3 ? 'bg-emerald-300' : 'bg-cyan-300'
            }`}
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
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

      {/* Magical aurora effect */}
      <div className="absolute inset-0 opacity-60">
        <motion.div 
          className="absolute w-full h-full bg-gradient-to-r from-teal-400/30 via-transparent to-orange-400/30"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute w-full h-full bg-gradient-to-l from-purple-400/20 via-transparent to-cyan-400/20"
          animate={{
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Ultra Premium Title with multiple gradient layers */}
          <motion.h1 
            className="text-7xl md:text-9xl font-black mb-8 leading-tight tracking-tight relative"
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
                className="absolute -top-4 -right-4"
                animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Crown className="w-6 h-6 text-orange-300" />
              </motion.div>
            </span>
            
            <motion.span 
              className="block text-4xl md:text-6xl font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-orange-300 mt-6 tracking-[0.2em]"
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
            <p className="text-3xl md:text-4xl text-gray-100 mb-6 max-w-5xl mx-auto font-light leading-relaxed">
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 font-bold text-4xl md:text-5xl">revolutionary dimension</span> of living
            </p>
            
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Premium luxury accommodation with world-class amenities designed for the extraordinary student lifestyle
            </p>
          </motion.div>

          {/* Enhanced Premium feature badges with icons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            {[
              { icon: Star, text: "4.9★ Premium Rating", color: "from-yellow-400 to-orange-400" },
              { icon: MapPin, text: "Prime Delhi Location", color: "from-teal-400 to-cyan-400" },
              { icon: Wifi, text: "High-Speed Internet", color: "from-blue-400 to-purple-400" },
              { icon: Shield, text: "24/7 Security", color: "from-green-400 to-emerald-400" },
              { icon: Heart, text: "Home Away From Home", color: "from-pink-400 to-red-400" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/30 hover:bg-white/30 group relative overflow-hidden"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                delay={2.5 + index * 0.2}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}} />
                <badge.icon className={`w-7 h-7 mr-3 bg-gradient-to-r ${badge.color} rounded-full p-1`} />
                <span className="text-white font-semibold text-lg">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Ultra Premium CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button size="lg" className="relative bg-gradient-to-r from-teal-500 via-emerald-500 to-orange-500 hover:from-teal-600 hover:via-emerald-600 hover:to-orange-600 text-white px-12 py-6 text-2xl font-bold rounded-full shadow-2xl hover:shadow-teal-500/50 border-2 border-white/30 backdrop-blur-sm overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Book Your Dream Paradise
                  <Heart className="w-6 h-6" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-3 border-white/60 text-white hover:bg-white/25 hover:text-white px-12 py-6 text-2xl font-bold rounded-full backdrop-blur-lg hover:border-white transition-all duration-300 hover:shadow-2xl relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <Crown className="w-6 h-6" />
                  Virtual Tour 360°
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced trust indicators with animations */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-12 opacity-90"
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
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 group-hover:bg-white/25 transition-all duration-300 group-hover:shadow-xl">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
                {index < 3 && <div className="hidden lg:block w-px h-16 bg-white/40 absolute top-1/2 -right-6 transform -translate-y-1/2"></div>}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Ultra Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-10 h-16 border-3 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-white/10 relative overflow-hidden group">
          <motion.div 
            className="w-2 h-6 bg-gradient-to-b from-white via-teal-400 to-orange-400 rounded-full mt-3"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
        <p className="text-white/80 text-sm mt-3 font-semibold tracking-wide">Scroll to explore paradise</p>
      </motion.div>

      {/* Background video overlay effect simulation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-20"></div>
    </section>
  );
};

export default Hero;
