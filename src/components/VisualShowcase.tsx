
import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisualShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const showcaseItems = [
    {
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      title: "🏠 PREMIUM ROOMS",
      subtitle: "Luxury Redefined",
      stats: "500+ Happy Students",
      color: "from-purple-500 to-pink-500"
    },
    {
      image: "/lovable-uploads/954857bf-0625-4be6-8f51-3a97f36b7195.png",
      title: "🍽️ GOURMET DINING",
      subtitle: "5-Star Experience",
      stats: "24/7 Fresh Meals",
      color: "from-orange-500 to-red-500"
    },
    {
      image: "/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png",
      title: "🎯 STUDY ZONES",
      subtitle: "Focus Amplified",
      stats: "99% Success Rate",
      color: "from-green-500 to-teal-500"
    },
    {
      image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      title: "🛡️ SECURITY",
      subtitle: "Military Grade",
      stats: "0% Incidents",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      gsap.set(".showcase-item", { 
        y: 200, 
        opacity: 0, 
        scale: 0.7,
        rotationX: 45 
      });

      gsap.to(".showcase-item", {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Continuous floating animation
      gsap.to(".showcase-item", {
        y: -20,
        duration: 4,
        stagger: 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-32 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-7xl md:text-8xl font-black mb-8"
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
          <p className="text-3xl text-cyan-300">See. Feel. Live the difference.</p>
        </motion.div>

        {/* Showcase grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className="showcase-item group relative perspective-1000"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-40 group-hover:blur-3xl transition-all duration-500 scale-110`} />
              
              <div className="relative bg-black/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden group-hover:border-cyan-400/70 transition-all duration-500">
                
                {/* Image section */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating stats */}
                  <motion.div
                    className="absolute top-6 right-6 bg-black/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-cyan-500/50"
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: index * 0.5 
                    }}
                  >
                    <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      {item.stats}
                    </div>
                  </motion.div>
                </div>

                {/* Content section */}
                <div className="p-8">
                  <h3 className="text-4xl font-black text-white mb-3">{item.title}</h3>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-3xl text-white mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(0,255,255,0.5)",
                "0 0 40px rgba(255,0,255,0.8)",
                "0 0 20px rgba(0,255,255,0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to experience the extraordinary?
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcase;
