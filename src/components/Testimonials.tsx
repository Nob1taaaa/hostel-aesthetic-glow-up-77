
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

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
    const timer = setTimeout(startAutoScroll, 2000);

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            WHAT OUR GUESTS SAY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our happy residents
          </p>
        </div>

        {/* Mobile: Horizontal scroll with auto-scroll */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div ref={scrollRef} className="flex space-x-4 pb-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="w-[300px] flex-shrink-0 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-teal-600 opacity-60" />
                    </div>
                    
                    <div className="flex-1 mb-6">
                      <p className="text-gray-700 italic leading-relaxed text-sm line-clamp-4">
                        "{testimonial.comment}"
                      </p>
                    </div>

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
                        <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-teal-600 opacity-60" />
                  </div>
                  
                  <div className="flex-1 mb-6">
                    <p className="text-gray-700 italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                  </div>

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
