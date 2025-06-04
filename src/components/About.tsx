
import { CheckCircle, Users, Shield, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Community Living",
      description: "Connect with travelers from around the world in our vibrant community spaces."
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Safe & Secure",
      description: "24/7 security and CCTV monitoring ensure your safety and peace of mind."
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Comfort First",
      description: "Modern amenities and comfortable accommodations for a perfect stay."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come, <span className="text-orange-500 font-semibold">"Experience the new way of living."</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Raksha Hostels is one of luxurious yet all in one more budget that is there right located in the heart of Guntur, Delhi, are Proud of our easy access to colleges like Heritage, Red square, and all nearby educational Kala, We strive exceptionally with great and excellent smart amenities to which every youth want to be there efficiently and comfort.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group hover-scale">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-4 group-hover:bg-teal-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/da454e5e-aac2-4d8a-9922-df932df8e088.png" 
                alt="Raksha Hostel Building" 
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-sm text-gray-600">Happy Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
