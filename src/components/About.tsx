
import { CheckCircle, Users, Shield, Heart, Award, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-10 h-10 text-teal-600" />,
      title: "Vibrant Community",
      description: "Connect with like-minded students and professionals in our beautifully designed common spaces."
    },
    {
      icon: <Shield className="w-10 h-10 text-teal-600" />,
      title: "Premium Security",
      description: "Advanced 24/7 security systems with biometric access and CCTV monitoring for complete peace of mind."
    },
    {
      icon: <Heart className="w-10 h-10 text-teal-600" />,
      title: "Luxury Comfort",
      description: "Experience hotel-grade amenities and services designed to exceed your expectations every day."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-orange-100 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-teal-600" />
            <span className="text-teal-800 font-semibold">Award-Winning Hostel</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 tracking-tight">
            ABOUT US
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Come, <span className="text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-lg">"Experience the new way of living."</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Raksha Hostels stands as one of Delhi's most luxurious yet affordable accommodations, strategically located in the heart of Guntur. We take immense pride in our proximity to prestigious institutions like Heritage College and Red Square, making us the perfect choice for ambitious students.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We deliver exceptional smart amenities that every modern youth desires, combining comfort, technology, and style in ways that redefine student living standards.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-50 to-orange-50 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png" 
                alt="Raksha Hostel Building Exterior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Floating achievement badges */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-bold text-gray-800">4.9/5</span>
                </div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-black text-teal-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Residents</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Add a new section showcasing hostel interior */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Modern Reception & Common Areas</h3>
            <p className="text-xl text-gray-600">Experience luxury from the moment you step in</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png" 
                alt="Modern Reception Area" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Reception Lounge</h4>
                <p className="text-gray-200">24/7 friendly staff assistance</p>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png" 
                alt="Study Area with Colorful Ambiance" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">Study Areas</h4>
                <p className="text-gray-200">Comfortable spaces for focused learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
