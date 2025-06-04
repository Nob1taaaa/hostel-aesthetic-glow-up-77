
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wifi, 
  Car, 
  Utensils, 
  Shirt, 
  Shield, 
  Clock, 
  Gamepad2, 
  BookOpen,
  Coffee,
  AirVent,
  Tv,
  Bath
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    { icon: <Wifi className="w-8 h-8" />, title: "High-Speed WiFi", description: "Free unlimited internet access" },
    { icon: <Car className="w-8 h-8" />, title: "Parking", description: "Secure parking for bikes & cars" },
    { icon: <Utensils className="w-8 h-8" />, title: "Mess Facility", description: "Nutritious meals available" },
    { icon: <Shirt className="w-8 h-8" />, title: "Laundry", description: "Washing & drying services" },
    { icon: <Shield className="w-8 h-8" />, title: "24/7 Security", description: "CCTV monitoring & guards" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 Access", description: "No time restrictions" },
    { icon: <Gamepad2 className="w-8 h-8" />, title: "Recreation", description: "Games room & entertainment" },
    { icon: <BookOpen className="w-8 h-8" />, title: "Study Area", description: "Quiet spaces for studying" },
    { icon: <Coffee className="w-8 h-8" />, title: "Common Kitchen", description: "Fully equipped kitchen" },
    { icon: <AirVent className="w-8 h-8" />, title: "AC Rooms", description: "Climate controlled comfort" },
    { icon: <Tv className="w-8 h-8" />, title: "Entertainment", description: "TV lounge & streaming" },
    { icon: <Bath className="w-8 h-8" />, title: "Clean Washrooms", description: "Hygienic facilities" }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            FACILITIES & SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-orange-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform text-teal-600">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
