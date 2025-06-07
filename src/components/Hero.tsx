
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
      {/* Enhanced gradient background with more depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-orange-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-800/40 via-orange-600/30 to-cyan-600/20"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Enhanced floating geometric patterns */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/40 rounded-full"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Additional floating sparkles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
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
          {/* Enhanced Logo Section with more dramatic animations */}
          <motion.div
            className="mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut",
              type: "spring",
              damping: 15,
              stiffness: 100
            }}
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              <motion.div 
                className="relative group"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 15,
                  rotateX: 5,
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
                  <motion.img 
                    src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png" 
                    alt="Raksha Hostel Logo"
                    className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                    animate={{
                      boxShadow: [
                        "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        "0 25px 50px -12px rgba(20, 184, 166, 0.3)",
                        "0 25px 50px -12px rgba(251, 146, 60, 0.3)",
                        "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Enhanced glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-orange-500/30 rounded-2xl sm:rounded-3xl"
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Heading with text animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-2 sm:mb-3"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-2"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(20, 184, 166, 0.8)",
                  "0 0 40px rgba(251, 146, 60, 0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              RAKSHA HOSTEL
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 italic mt-1 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              itself reflects security
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-2 sm:mb-3 max-w-4xl mx-auto leading-relaxed px-3"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Experience comfort, security, and community in the heart of Greater Noida
            </motion.p>
            
            <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-3">
              Premium student accommodation with modern amenities and 24/7 support
            </p>
          </motion.div>

          {/* Enhanced feature badges with staggered animations */}
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
                className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 sm:py-2 border border-white/30"
                initial={{ x: 30, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.25)",
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.6,
                  delay: 1 + index * 0.15,
                  ease: "easeOut",
                  type: "spring",
                  damping: 20
                }}
              >
                <badge.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-white flex-shrink-0" />
                <span className="text-white text-xs sm:text-sm whitespace-nowrap">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA button with pulse and glow effects */}
          <motion.div 
            className="flex justify-center items-center mb-4 sm:mb-6 px-3"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 20px 40px -12px rgba(251, 146, 60, 0.3)",
                  "0 25px 50px -12px rgba(20, 184, 166, 0.4)",
                  "0 20px 40px -12px rgba(251, 146, 60, 0.3)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg w-full max-w-xs sm:max-w-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3
                  }}
                />
                <span className="flex items-center justify-center gap-2 relative z-10">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="truncate">Book Your Dream Paradise</span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with more dynamic animations */}
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
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 1.7 + index * 0.1,
                  duration: 0.6,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="bg-white/15 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-white/30"
                  animate={{
                    borderColor: [
                      "rgba(255,255,255,0.3)",
                      "rgba(20, 184, 166, 0.5)",
                      "rgba(251, 146, 60, 0.5)",
                      "rgba(255,255,255,0.3)",
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div 
                    className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with breathing animation */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10"
          animate={{
            borderColor: [
              "rgba(255,255,255,0.6)",
              "rgba(20, 184, 166, 0.8)",
              "rgba(251, 146, 60, 0.8)",
              "rgba(255,255,255,0.6)",
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0], 
              opacity: [1, 0.3, 1],
              backgroundColor: [
                "rgba(255,255,255,1)",
                "rgba(20, 184, 166, 1)",
                "rgba(251, 146, 60, 1)",
                "rgba(255,255,255,1)",
              ]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.p 
          className="text-white/70 text-xs sm:text-sm mt-2 font-medium"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
