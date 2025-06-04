
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
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      features: ["3 Cozy Beds", "Common Study Space", "Free WiFi", "AC/Fan Options", "Shared Facilities", "Storage Space"],
      popular: false,
      badge: "Best Value",
      badgeColor: "bg-green-500"
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <Bed className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">Luxury Accommodations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6 tracking-tight">
            OUR ROOMS
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our range of <span className="text-purple-600 font-bold">luxurious</span> and <span className="text-orange-600 font-bold">affordable</span> accommodation options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden bg-white border-0 shadow-xl">
              <div className="relative">
                {room.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={`${room.badgeColor} text-white font-bold px-3 py-1 text-sm shadow-lg`}>
                      {room.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-gray-800">4.9</span>
                </div>

                <div className="relative overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-gray-800 mb-1">{room.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{room.subtitle}</p>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">{room.price}</span>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400 line-through">{room.originalPrice}</span>
                      <span className="text-sm text-gray-500">{room.period}</span>
                    </div>
                  </div>
                  <div className="inline-flex bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Save {((parseInt(room.originalPrice.slice(1).replace(',', '')) - parseInt(room.price.slice(1).replace(',', ''))) / parseInt(room.originalPrice.slice(1).replace(',', '')) * 100).toFixed(0)}%
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full text-white font-bold py-3 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg ${
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

        {/* Additional CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Can't decide? Let us help!</h3>
            <p className="text-gray-600 mb-6">Schedule a virtual tour or speak with our accommodation specialist</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                Virtual Tour
              </Button>
              <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
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
