
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const SamsungStyleRooms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const rooms = [
    {
      id: 1,
      title: "Executive Single",
      subtitle: "👑 Royal Experience",
      price: "₹8,000",
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["👤 Solo Paradise", "💻 Smart Desk", "🌐 5G WiFi", "❄️ Premium AC", "🚿 Private Bath", "🧊 Mini Fridge"],
      color: "from-purple-500 to-pink-500",
      popular: false
    },
    {
      id: 2,
      title: "Deluxe Sharing",
      subtitle: "🤝 Perfect Partnership", 
      price: "₹6,000",
      image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      features: ["👥 Twin Comfort", "📚 Study Zone", "⚡ Ultra WiFi", "🎛️ Smart AC", "✨ Designer Bath", "🔒 Secure Lockers"],
      color: "from-cyan-500 to-blue-500",
      popular: true
    },
    {
      id: 3,
      title: "Economy Triple",
      subtitle: "💰 Smart Choice",
      price: "₹4,500", 
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["👫 Triple Joy", "📖 Common Study", "📶 Free WiFi", "🌪️ AC/Fan Options", "🚿 Shared Facilities", "📦 Storage Space"],
      color: "from-green-500 to-teal-500",
      popular: false
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Samsung-style card reveals
      gsap.set(".room-card", { y: 100, opacity: 0, scale: 0.8, rotationY: 45 });
      gsap.set(".room-image", { scale: 1.2, opacity: 0 });
      gsap.set(".room-content", { y: 50, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(".section-title", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(".room-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      }, "-=0.5")
      .to(".room-image", {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.8")
      .to(".room-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6");

      // Continuous floating animation
      gsap.to(".room-card", {
        y: -10,
        duration: 3,
        stagger: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isInView]);

  const handleBookRoom = (roomTitle: string) => {
    const message = `Hi! I want to book the ${roomTitle} at Raksha Hostel. Please provide me with availability and booking details.`;
    window.open(`https://wa.me/918743836836?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ y }}
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden"
      id="rooms"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section title */}
        <motion.div 
          className="section-title text-center mb-20"
          initial={{ y: 100, opacity: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-8 py-4 mb-8 backdrop-blur-md border border-cyan-500/30"
            animate={{
              boxShadow: [
                "0 0 20px rgba(0,255,255,0.3)",
                "0 0 40px rgba(147,51,234,0.3)", 
                "0 0 20px rgba(0,255,255,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl">🏠</span>
            <span className="text-cyan-300 font-bold text-xl">Premium Spaces</span>
          </motion.div>
          
          <h2 className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
            CHOOSE YOUR
          </h2>
          <h3 className="text-6xl md:text-7xl font-black text-white mb-8">
            PARADISE
          </h3>
          
          <p className="text-2xl text-cyan-300/80 max-w-3xl mx-auto">
            Experience next-level living with our 🚀 futuristic rooms
          </p>
        </motion.div>

        {/* Room cards grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card group relative perspective-1000"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card background glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${room.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500 scale-110`} />
              
              <div className="relative bg-black/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden group-hover:border-cyan-400/60 transition-all duration-500">
                
                {/* Popular badge */}
                {room.popular && (
                  <motion.div
                    className="absolute top-6 right-6 z-20"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold px-4 py-2 text-lg shadow-lg">
                      🔥 Most Popular
                    </Badge>
                  </motion.div>
                )}

                {/* Room image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.title}
                    className="room-image w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating price tag */}
                  <motion.div
                    className="absolute top-6 left-6 bg-black/80 backdrop-blur-md rounded-2xl px-6 py-3 border border-cyan-500/50"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <div className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${room.color}`}>
                      {room.price}
                    </div>
                    <div className="text-cyan-300 text-sm">per month</div>
                  </motion.div>
                </div>

                {/* Room content */}
                <div className="room-content p-8">
                  <h3 className="text-3xl font-black text-white mb-2">{room.title}</h3>
                  <p className="text-xl text-cyan-300 mb-6">{room.subtitle}</p>

                  {/* Features with emojis */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 text-cyan-300 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + featureIndex * 0.1 }}
                      >
                        <span className="text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Book button */}
                  <Button
                    onClick={() => handleBookRoom(room.title)}
                    className={`w-full text-white font-bold py-4 text-lg rounded-2xl bg-gradient-to-r ${room.color} hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden group`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <span>Book This Paradise</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        🚀
                      </motion.span>
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Food showcase */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-white mb-4">🍽️ GOURMET EXPERIENCE</h3>
            <p className="text-2xl text-cyan-300">Delicious meals that feel like home</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                image: "/lovable-uploads/954857bf-0625-4be6-8f51-3a97f36b7195.png",
                title: "🍛 Traditional Flavors",
                desc: "Authentic home-style cooking"
              },
              {
                image: "/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png", 
                title: "🥗 Healthy Options",
                desc: "Nutrition-packed meals for students"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative h-96 rounded-3xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-3xl font-bold mb-2">{item.title}</h4>
                    <p className="text-cyan-300 text-lg">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SamsungStyleRooms;
