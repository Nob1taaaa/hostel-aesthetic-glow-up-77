import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Crown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CuteSamsungStyleRooms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const rooms = [
    {
      id: 1,
      title: "Executive Single",
      subtitle: "👑 Royal Experience",
      price: "₹8,000",
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["👤 Solo Paradise", "💻 Smart Desk", "🌐 5G WiFi", "❄️ Premium AC", "🚿 Private Bath", "🧊 Mini Fridge"],
      color: "from-brand-orange to-brand-orange/80",
      popular: false,
      icon: Crown
    },
    {
      id: 2,
      title: "Deluxe Sharing",
      subtitle: "🤝 Perfect Partnership", 
      price: "₹6,000",
      image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      features: ["👥 Twin Comfort", "📚 Study Zone", "⚡ Ultra WiFi", "🎛️ Smart AC", "✨ Designer Bath", "🔒 Secure Lockers"],
      color: "from-brand-green to-brand-green/80",
      popular: true,
      icon: Sparkles
    },
    {
      id: 3,
      title: "Economy Triple",
      subtitle: "💰 Smart Choice",
      price: "₹4,500", 
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["👫 Triple Joy", "📖 Common Study", "📶 Free WiFi", "🌪️ AC/Fan Options", "🚿 Shared Facilities", "📦 Storage Space"],
      color: "from-brand-grey to-brand-grey/80",
      popular: false,
      icon: Star
    }
  ];

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      gsap.set(".room-card", { y: 80, opacity: 0, scale: 0.9 });
      gsap.set(".room-image", { scale: 1.1, opacity: 0 });
      gsap.set(".room-content", { y: 30, opacity: 0 });

      const tl = gsap.timeline();

      tl.to(".section-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(".room-card", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.4")
      .to(".room-image", {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6")
      .to(".room-content", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");

      gsap.to(".room-card", {
        y: -8,
        duration: 3,
        stagger: 0.3,
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
      className="py-20 bg-gradient-to-br from-background to-secondary/5 relative overflow-hidden"
      id="rooms"
    >
      {/* Cute floating elements */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Section title */}
        <motion.div 
          className="section-title text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-8 backdrop-blur-sm border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 20px rgba(234, 100, 29, 0.2)",
                "0 0 30px rgba(33, 138, 158, 0.2)", 
                "0 0 20px rgba(234, 100, 29, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-3xl">🏠</span>
            <span className="text-primary font-bold text-lg">Premium Spaces</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
            CHOOSE YOUR
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            PARADISE
          </h3>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience cozy living with our 🌟 beautiful rooms
          </p>
        </motion.div>

        {/* Room cards grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="room-card group relative"
              whileHover={{ 
                scale: 1.03,
                y: -10
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Card glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${room.color} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 group-hover:blur-2xl transition-all duration-500 scale-110`} />
              
              <div className="relative bg-card backdrop-blur-sm border border-primary/20 rounded-3xl overflow-hidden group-hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-xl">
                
                {/* Popular badge */}
                {room.popular && (
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-3 py-1 text-sm shadow-md">
                      Most Popular ✨
                    </Badge>
                  </motion.div>
                )}

                {/* Room image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.title}
                    className="room-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating price tag */}
                  <motion.div
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-primary/20 shadow-md"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${room.color}`}>
                      {room.price}
                    </div>
                    <div className="text-muted-foreground text-xs text-center">per month</div>
                  </motion.div>

                  {/* Cute icon */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <room.icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Room content */}
                <div className="room-content p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{room.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{room.subtitle}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      >
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Book button */}
                  <Button
                    onClick={() => handleBookRoom(room.title)}
                    className={`w-full text-white font-semibold py-3 text-base rounded-2xl bg-gradient-to-r ${room.color} hover:scale-105 transition-all duration-300 shadow-md relative overflow-hidden group`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <span>Book This Room</span>
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
>
                        ✨
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
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">🍽️ DELICIOUS MEALS</h3>
            <p className="text-xl text-muted-foreground">Tasty food that feels like home</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/lovable-uploads/954857bf-0625-4be6-8f51-3a97f36b7195.png",
                title: "🍛 Home-Style Cooking",
                desc: "Authentic flavors with love"
              },
              {
                image: "/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png", 
                title: "🥗 Healthy & Fresh",
                desc: "Nutritious meals for active minds"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative h-80 rounded-3xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-primary-foreground/90 text-lg">{item.desc}</p>
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

export default CuteSamsungStyleRooms;
