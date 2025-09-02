import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Shield, Heart, Award, Star } from "lucide-react";
import CuteAnimatedCard from './CuteAnimatedCard';

gsap.registerPlugin(ScrollTrigger);

function CuteCard({ feature, index, delay = 0 }: { feature: any, index: number, delay?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: delay + index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03,
        y: -8
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500"></div>
      
      <div className="relative bg-card border border-primary/20 rounded-3xl p-8 group-hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-xl">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <feature.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
            {feature.description}
          </p>

          {/* Cute floating element */}
          <motion.div
            className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }}
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StatsCounter({ number, label, icon, delay = 0 }: { number: string, label: string, icon: string, delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target = parseInt(number.replace(/\D/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      className="group"
    >
      <div className="relative bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 group-hover:border-primary/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative">
          <div className="text-3xl mb-3">{icon}</div>
          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
            {number.includes('+') ? `${count}+` : number.includes('%') ? `${count}%` : count}
          </div>
          <div className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const CuteAbout3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Users,
      title: "Friendly Community",
      description: "Connect with amazing friends and create lifelong memories in our cozy common spaces filled with warmth and joy."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Feel completely safe with our 24/7 security, modern surveillance, and caring staff who treat you like family."
    },
    {
      icon: Heart,
      title: "Comfort & Care",
      description: "Experience the warmth of home with our thoughtful amenities and services designed to make you smile every day."
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }} id="about"
      className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 overflow-hidden"
    >
      {/* Cute floating elements */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full" />
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full px-8 py-4 mb-8 border border-primary/20 shadow-lg">
              <Award className="w-7 h-7 text-primary" />
              <span className="text-primary font-bold text-xl">Premium Student Living</span>
              <span className="text-2xl">✨</span>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6 rounded-full"></div>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-6 leading-tight">
              Experience the New Way of Living
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover premium student accommodation where <span className="text-primary font-semibold">comfort meets community</span> in the heart of Greater Noida
            </p>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            style={{ y }}
          >
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500"></div>
              <div className="relative bg-card/90 border border-primary/20 rounded-3xl p-8 group-hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Your Home Away From Home</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">student living</span> in Greater Noida with modern amenities, 24/7 security, and a vibrant community atmosphere.
                </p>
              </div>
            </motion.div>
          </motion.div>

        {/* Visual Element - Animated Card */}
        <motion.div 
          className="relative h-96"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CuteAnimatedCard />
        </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="sc-ring rounded-3xl overflow-hidden">
              <CuteCard feature={feature} index={index} delay={0.3} />
            </div>
          ))}
        </div>

        {/* Interior Showcase */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
              Beautiful Spaces 🏡
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png",
                title: "Reception Lounge",
                description: "24/7 friendly staff assistance"
              },
              {
                image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
                title: "Study Areas",
                description: "Comfortable spaces for focused learning"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative rounded-3xl overflow-hidden border border-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 text-white z-10">
                    <h4 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-secondary-foreground">
                      {item.title}
                    </h4>
                    <p className="text-primary-foreground/90">{item.description}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 z-30">
                    {/* Super cute rotating gradient badge */}
                    <div className="cute-rot-badge"><h2>CARD</h2></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StatsCounter number="500+" label="Happy Students" icon="🎓" delay={0.2} />
          <StatsCounter number="5" label="Years Experience" icon="🏆" delay={0.4} />
          <StatsCounter number="24" label="Hour Support" icon="💎" delay={0.6} />
          <StatsCounter number="100%" label="Satisfaction" icon="✨" delay={0.8} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CuteAbout3D;
