import { CheckCircle, Users, Shield, Heart, Award, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-teal-600 dark:text-teal-400" />,
      title: "Vibrant Community",
      description: "Connect with like-minded students and professionals in our beautifully designed common spaces."
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-teal-600 dark:text-teal-400" />,
      title: "Premium Security",
      description: "Advanced 24/7 security systems with biometric access and CCTV monitoring for complete peace of mind."
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-teal-600 dark:text-teal-400" />,
      title: "Luxury Comfort",
      description: "Experience hotel-grade amenities and services designed to exceed your expectations every day."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/30 dark:to-orange-900/30 rounded-full px-3 sm:px-4 lg:px-6 py-2 mb-3 sm:mb-4 lg:mb-6">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400" />
            <span className="text-teal-800 dark:text-teal-300 font-semibold text-xs sm:text-sm lg:text-base">Award-Winning Hostel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 dark:text-white mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
            ABOUT US
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-400 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4">
            Come, <span className="text-orange-500 dark:text-orange-400 font-bold bg-orange-50 dark:bg-orange-900/30 px-2 sm:px-3 py-1 rounded-lg">"Experience the new way of living."</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100 dark:border-gray-700/50">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 lg:mb-6">
                Raksha Hostels stands as one of Delhi's most luxurious yet affordable accommodations, strategically located in the heart of Guntur. We take immense pride in our proximity to prestigious institutions like Heritage College and Red Square, making us the perfect choice for ambitious students.
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We deliver exceptional smart amenities that every modern youth desires, combining comfort, technology, and style in ways that redefine student living standards.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-50 to-orange-50 dark:from-teal-900/30 dark:to-orange-900/30 rounded-lg sm:rounded-xl lg:rounded-2xl mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 lg:mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed px-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png" 
                alt="Raksha Hostel Building Exterior" 
                className="w-full h-48 sm:h-64 lg:h-80 xl:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating achievement badges */}
              <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-yellow-500" />
                  <span className="font-bold text-gray-800 dark:text-white text-xs sm:text-sm lg:text-base">4.9/5</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Student Rating</div>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-teal-600 dark:text-teal-400 mb-1">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Happy Residents</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 sm:-top-4 lg:-top-6 -right-2 sm:-right-4 lg:-right-6 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -left-2 sm:-left-4 lg:-left-6 w-10 h-10 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Add a new section showcasing hostel interior */}
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 lg:mb-4 px-2">Modern Reception & Common Areas</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 px-3">Experience luxury from the moment you step in</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png" 
                alt="Modern Reception Area" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Reception Lounge</h4>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base">24/7 friendly staff assistance</p>
              </div>
            </div>
            
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png" 
                alt="Study Area with Colorful Ambiance" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Study Areas</h4>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base">Comfortable spaces for focused learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;