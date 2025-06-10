import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47b?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing hostel with great facilities! The staff is very friendly and the rooms are always clean. Perfect for students like me."
    },
    {
      name: "Rahul Kumar",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Best value for money in the area. The Wi-Fi is excellent and the location is perfect for my daily commute. Highly recommended!"
    },
    {
      name: "Sneha Patel",
      role: "Medical Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Living here has been an incredible experience. Made so many friends and the security makes my parents feel safe about me staying here."
    },
    {
      name: "Arjun Singh",
      role: "MBA Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent hostel with all modern amenities. The management is very supportive and understanding."
    },
    {
      name: "Kavya Reddy",
      role: "IT Professional",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Perfect place for working professionals. Clean, safe, and well-maintained with great internet connectivity."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            WHAT OUR GUESTS SAY
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-3">
            Real experiences from our happy residents
          </p>
        </div>

        {/* Mobile: Horizontal scroll with pause functionality */}
        <div className="md:hidden">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-orange-400 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isPaused ? 'Play' : 'Pause'} Animation
              </span>
            </button>
          </div>

          <div className="overflow-x-auto pb-4">
            <motion.div
              className="flex space-x-4 px-2"
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
                <div key={index} className="w-72 flex-shrink-0">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 h-80">
                    <CardContent className="p-4 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <Quote className="w-6 h-6 text-teal-600 opacity-60" />
                      </div>
                      
                      <p className="text-gray-700 mb-4 italic leading-relaxed text-sm font-medium flex-grow">
                        "{testimonial.comment}"
                      </p>

                      <div className="mt-auto">
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        <div className="flex items-center gap-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                            <p className="text-xs text-gray-600 font-medium">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-teal-600 opacity-60" />
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;