import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play, Pause, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const CuteTestimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47b?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing hostel with great facilities! The staff is very friendly and the rooms are always clean. Perfect for students like me. 💕"
    },
    {
      name: "Rahul Kumar",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Best value for money in the area. The Wi-Fi is excellent and the location is perfect for my daily commute. Highly recommended! ⭐"
    },
    {
      name: "Sneha Patel",
      role: "Medical Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Living here has been an incredible experience. Made so many friends and the security makes my parents feel safe. 🏠"
    },
    {
      name: "Arjun Singh",
      role: "MBA Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent hostel with all modern amenities. The management is very supportive and understanding. 🌟"
    },
    {
      name: "Kavya Reddy",
      role: "IT Professional",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Perfect place for working professionals. Clean, safe, and well-maintained with great internet connectivity. 💖"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 20px rgba(234, 100, 29, 0.1)",
                "0 0 30px rgba(33, 138, 158, 0.1)", 
                "0 0 20px rgba(234, 100, 29, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold">Happy Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
            WHAT OUR GUESTS SAY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real experiences from our happy residents 💕
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll with pause functionality */}
        <div className="md:hidden">
          <div className="flex justify-center mb-6">
            <motion.button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isPaused ? 'Play' : 'Pause'} Animation
              </span>
            </motion.button>
          </div>

          <div className="overflow-x-auto pb-4">
            <motion.div
              className="flex space-x-6 px-2"
              style={{ width: 'max-content' }}
              animate={isPaused ? {} : {
                x: [0, -1200, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="w-80 flex-shrink-0"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group h-96 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 border border-primary/20 hover:border-primary/40">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Cute floating hearts */}
                      <motion.div 
                        className="absolute top-2 right-2 text-primary/60 opacity-0 group-hover:opacity-100"
                        animate={{ 
                          y: [0, -5, 0],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        💕
                      </motion.div>

                      <div className="flex items-center mb-4">
                        <Quote className="w-8 h-8 text-primary/60" />
                      </div>
                      
                      <p className="text-muted-foreground mb-6 italic leading-relaxed text-sm font-medium flex-grow group-hover:text-foreground transition-colors duration-300">
                        "{testimonial.comment}"
                      </p>

                      <div className="mt-auto">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, 0]
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1
                              }}
                            >
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                            />
                            <motion.div
                              className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-muted-foreground font-medium">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group h-80 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card to-card/80 border border-primary/20 hover:border-primary/40 relative overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rotating gradient border animation - Always visible */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'linear-gradient(180deg, #ea641d, #218a9e, #34424d)',
                        animation: 'rotBorder 3s linear infinite',
                        width: '100px',
                        height: '130%',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                    <div 
                      className="absolute inset-1 rounded-lg z-10"
                      style={{
                        background: 'hsl(var(--card))'
                      }}
                    />
                  </div>
                  
                  {/* Cute floating hearts */}
                  <motion.div 
                    className="absolute top-2 right-2 text-primary/60 opacity-0 group-hover:opacity-100"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    💕
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    
                    <p className="text-muted-foreground mb-6 italic leading-relaxed flex-grow group-hover:text-foreground transition-colors duration-300">
                      "{testimonial.comment}"
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                        />
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Cute footer message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 backdrop-blur-sm border border-primary/20">
            <span className="text-2xl">🌟</span>
            <span className="text-foreground font-semibold text-lg">Join our happy family today!</span>
            <span className="text-2xl">💖</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CuteTestimonials;