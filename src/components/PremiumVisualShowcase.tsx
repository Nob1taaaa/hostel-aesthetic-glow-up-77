
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PremiumVisualShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const visualCards = [
    {
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      title: "🏠 PREMIUM ROOMS",
      subtitle: "Luxury Redefined",
      stats: "500+",
      label: "Happy Students",
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      image: "/lovable-uploads/954857bf-0625-4be6-8f51-3a97f36b7195.png",
      title: "🍽️ GOURMET DINING",
      subtitle: "5-Star Experience",
      stats: "24/7",
      label: "Fresh Meals",
      gradient: "from-orange-500 via-yellow-500 to-red-500"
    },
    {
      image: "/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png",
      title: "🎯 STUDY ZONES",
      subtitle: "Focus Amplified",
      stats: "99%",
      label: "Success Rate",
      gradient: "from-green-500 via-emerald-500 to-teal-500"
    },
    {
      image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      title: "🛡️ SECURITY",
      subtitle: "Military Grade",
      stats: "0%",
      label: "Incidents",
      gradient: "from-blue-500 via-cyan-500 to-purple-500"
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".showcase-card", { 
        y: 300, 
        opacity: 0, 
        scale: 0.6,
        rotationY: 45 
      });

      // Staggered entrance
      gsap.to(".showcase-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power4.out"
      });

      // Continuous floating
      gsap.to(".showcase-card", {
        y: -30,
        duration: 6,
        stagger: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-8xl md:text-9xl font-black mb-8"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            VISUAL EXPERIENCE
          </motion.h2>
          <p className="text-4xl text-cyan-300 font-light">✨ See. Feel. Live the difference.</p>
        </motion.div>

        {/* Visual cards grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {visualCards.map((card, index) => (
            <motion.div
              key={index}
              className="showcase-card group relative"
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glassmorphism container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden group-hover:border-cyan-400/30 transition-all duration-700">
                
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Image section with overlay */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating stats */}
                  <motion.div
                    className="absolute top-8 right-8 backdrop-blur-md bg-black/60 rounded-2xl px-8 py-4 border border-cyan-400/30"
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${card.gradient}`}>
                      {card.stats}
                    </div>
                    <div className="text-lg text-cyan-300 font-medium">
                      {card.label}
                    </div>
                  </motion.div>
                </div>

                {/* Content section */}
                <div className="relative p-10">
                  <h3 className="text-5xl font-black text-white mb-4">{card.title}</h3>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                    {card.subtitle}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-4xl text-white mb-12 font-light"
            animate={{
              textShadow: [
                "0 0 30px rgba(0,255,255,0.5)",
                "0 0 60px rgba(255,0,255,0.8)",
                "0 0 30px rgba(0,255,255,0.5)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🌟 Ready to experience the extraordinary?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumVisualShowcase;
