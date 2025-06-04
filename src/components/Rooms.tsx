
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, Wifi, AirVent, Car, Coffee } from "lucide-react";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "Single Occupancy",
      price: "₹8,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      features: ["Single Bed", "Study Desk", "Free WiFi", "AC", "Attached Washroom"],
      popular: false
    },
    {
      id: 2,
      title: "Double Sharing",
      price: "₹6,000",
      period: "per month",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      features: ["2 Beds", "Study Area", "Free WiFi", "AC", "Shared Washroom"],
      popular: true
    },
    {
      id: 3,
      title: "Triple Sharing",
      price: "₹4,500",
      period: "per month",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      features: ["3 Beds", "Common Study", "Free WiFi", "Fan/AC", "Shared Washroom"],
      popular: false
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR ROOMS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of comfortable and affordable accommodation options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {room.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-orange-500 text-white">Most Popular</Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{room.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-teal-600">{room.price}</span>
                    <span className="text-gray-500">{room.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${room.popular 
                    ? 'bg-orange-500 hover:bg-orange-600' 
                    : 'bg-teal-600 hover:bg-teal-700'
                  } text-white`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
