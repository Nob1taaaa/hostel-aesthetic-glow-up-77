import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: "Mr. MISHAL SINGH",
      role: "Chief Managing Director",
      image: "/lovable-uploads/ec084b60-df21-48e8-8504-d9db8e43d3b8.png",
      bgColor: "from-slate-400 to-slate-500",
      textColor: "text-slate-800"
    },
    {
      name: "Mrs. NUTAN SINGH",
      role: "Associate Director & Vice President",
      image: "/lovable-uploads/5e3d6542-3440-421e-8dd0-51e86507f418.png",
      bgColor: "from-orange-400 to-orange-500",
      textColor: "text-orange-800"
    },
    {
      name: "Er. RAKSHA SINGH",
      role: "Chief Hiring Officer",
      image: "/lovable-uploads/92b80640-a417-464d-b653-d82c9d773183.png",
      bgColor: "from-teal-400 to-teal-500",
      textColor: "text-teal-800"
    },
    {
      name: "Mr. DEVANAND SINGH",
      role: "President",
      image: "/lovable-uploads/0d1254f5-9469-4b78-a296-3adbf6782545.png",
      bgColor: "from-orange-500 to-orange-600",
      textColor: "text-orange-800"
    },
    {
      name: "Er. SATYAM KUMAR",
      role: "CEO & CAO",
      image: "/lovable-uploads/3d7d66a1-4446-4934-a1a3-42deca215a74.png",
      bgColor: "from-teal-500 to-cyan-500",
      textColor: "text-teal-800"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    const startAutoScroll = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    const stopAutoScroll = () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };

    // Start auto-scroll after a delay
    const timer = setTimeout(startAutoScroll, 3000);

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearTimeout(timer);
      stopAutoScroll();
      scrollContainer?.removeEventListener('mouseenter', stopAutoScroll);
      scrollContainer?.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* ... keep existing code (background decorations and particles) */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-300 to-orange-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300 to-slate-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-slate-300 to-teal-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full opacity-60 animate-bounce`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/40 dark:to-orange-900/40 rounded-full px-8 py-3 mb-8 backdrop-blur-sm border border-white/20">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-teal-800 dark:text-teal-300 font-bold text-lg">Leadership Excellence</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-teal-600 to-orange-500 dark:from-white dark:via-teal-400 dark:to-orange-400 mb-8 tracking-tight">
            OUR TEAM
          </h2>
          <div className="w-40 h-3 bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500 mx-auto mb-10 rounded-full shadow-lg"></div>
          <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Meet the visionary leaders who transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500 font-bold text-3xl">Raksha Hostel</span> into your dream home
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll with auto-scroll */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div ref={scrollRef} className="flex space-x-6 pb-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -20,
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="w-[280px] flex-shrink-0"
                >
                  <Card className="group relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 h-[400px]">
                    <CardContent className="p-0 relative h-full flex flex-col">
                      {/* ... keep existing code (card content with gradient effects) */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg"></div>
                      </div>
                      
                      <div className="relative overflow-hidden flex-1 rounded-t-lg">
                        <div className="w-full h-[280px] relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200">
                            <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-orange-500 rounded-full animate-pulse"></div>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300">
                              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 text-center relative z-10 bg-white dark:bg-gray-800 flex-shrink-0">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                          {member.name}
                        </h3>
                        <p className={`font-semibold mb-4 ${member.textColor} dark:text-orange-400 text-base leading-relaxed`}>
                          {member.role}
                        </p>
                        
                        <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse delay-100"></div>
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                        
                        <div className="w-0 group-hover:w-20 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mt-4 transition-all duration-700 rounded-full shadow-lg"></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Desktop: Grid layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[280px]"
            >
              <Card className="group relative overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 transform perspective-1000 h-[400px]">
                {/* ... keep existing code (card content identical to mobile) */}
                <CardContent className="p-0 relative h-full flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-lg"></div>
                  </div>
                  
                  <div className="relative overflow-hidden flex-1 rounded-t-lg">
                    <div className="w-full h-[280px] relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200">
                        <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-orange-500 rounded-full animate-pulse"></div>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-300">
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 text-center relative z-10 bg-white dark:bg-gray-800 flex-shrink-0">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-4 ${member.textColor} dark:text-orange-400 text-base leading-relaxed`}>
                      {member.role}
                    </p>
                    
                    <div className="flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-orange-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                    
                    <div className="w-0 group-hover:w-20 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mt-4 transition-all duration-700 rounded-full shadow-lg"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
