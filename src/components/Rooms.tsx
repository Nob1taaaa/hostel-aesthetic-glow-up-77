import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, AirVent, Car, Coffee, Star, CheckCircle } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Executive Single",
      subtitle: "Premium Solo Living",
      price: "₹8,000",
      originalPrice: "₹10,000",
      period: "per month",
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["King Size Bed", "Personal Study Desk", "High-Speed WiFi", "Premium AC", "Private Washroom", "Mini Fridge"],
      popular: false,
      badge: "Premium",
      badgeColor: "bg-purple-500"
    },
    {
      id: 2,
      title: "Deluxe Sharing",
      subtitle: "Perfect Partnership",
      price: "₹6,000",
      originalPrice: "₹8,000",
      period: "per month",
      image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      features: ["2 Comfortable Beds", "Shared Study Area", "Ultra-Fast WiFi", "Smart AC", "Designer Washroom", "Locker Facility"],
      popular: true,
      badge: "Most Popular",
      badgeColor: "bg-orange-500"
    },
    {
      id: 3,
      title: "Economy Triple",
      subtitle: "Budget Friendly",
      price: "₹4,500",
      originalPrice: "₹6,000",
      period: "per month",
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["3 Cozy Beds", "Common Study Space", "Free WiFi", "AC/Fan Options", "Shared Facilities", "Storage Space"],
      popular: false,
      badge: "Best Value",
      badgeColor: "bg-green-500"
    }
  ];

  const handleBookRoom = (roomTitle: string) => {
    // WhatsApp booking with room details
    const message = `Hi! I want to book the ${roomTitle} at Raksha Hostel. Please provide me with availability and booking details.`;
    window.open(`https://wa.me/918743836836?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCallExpert = () => {
    window.location.href = "tel:+918743836836";
  };

  return (
    <section id="rooms" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-40 left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-3 sm:px-4 lg:px-6 py-2 mb-3 sm:mb-4 lg:mb-6">
            <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold text-xs sm:text-sm lg:text-base">Luxury Accommodations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
            OUR ROOMS
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4">
            Choose from our range of <span className="text-purple-600 font-bold">luxurious</span> and <span className="text-orange-600 font-bold">affordable</span> accommodation options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:hover:-translate-y-4 overflow-hidden bg-white border-0 shadow-xl">
              <div className="relative">
                {room.badge && (
                  <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 z-10">
                    <Badge className={`${room.badgeColor} text-white font-bold px-2 sm:px-3 py-1 text-xs sm:text-sm shadow-lg`}>
                      {room.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 shadow-lg">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-bold text-gray-800">4.9</span>
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-40 sm:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <CardContent className="p-3 sm:p-4 lg:p-6">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-800 mb-1 leading-tight">{room.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mb-2 sm:mb-3">{room.subtitle}</p>
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">{room.price}</span>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm text-gray-400 line-through">{room.originalPrice}</span>
                      <span className="text-xs sm:text-sm text-gray-500">{room.period}</span>
                    </div>
                  </div>
                  <div className="inline-flex bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Save {((parseInt(room.originalPrice.slice(1).replace(',', '')) - parseInt(room.price.slice(1).replace(',', ''))) / parseInt(room.originalPrice.slice(1).replace(',', '')) * 100).toFixed(0)}%
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 lg:mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={() => handleBookRoom(room.title)}
                  className={`w-full text-white font-bold py-2 sm:py-3 text-sm sm:text-base lg:text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
                    room.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 hover:shadow-orange-500/50' 
                      : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 hover:shadow-teal-500/50'
                  }`}
                >
                  Book This Room →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Food Services Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-2">Delicious Mess Facility</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 px-3">Nutritious and tasty meals prepared with love</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/954857bf-0625-4be6-8f51-3a97f36b7195.png" 
                alt="Delicious Food Options" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Traditional Meals</h4>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base">Authentic flavors from home</p>
              </div>
            </div>
            
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png" 
                alt="Healthy Meal Options" 
                className="w-full h-48 sm:h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Healthy Options</h4>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base">Balanced nutrition for students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA section with working call expert */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-purple-100">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 px-2">Can't decide? Let us help!</h3>
            <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base px-2">Schedule a virtual tour or speak with our accommodation specialist</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center max-w-md mx-auto">
              <Button 
                onClick={() => window.open('https://wa.me/918743836836?text=Hi! I would like to schedule a virtual tour of Raksha Hostel facilities.', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Virtual Tour
              </Button>
              <Button 
                onClick={handleCallExpert}
                variant="outline" 
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Call Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
