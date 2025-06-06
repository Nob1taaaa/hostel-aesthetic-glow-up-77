
import { Card, CardContent } from "@/components/ui/card";

const Facilities = () => {
  const facilities = [
    { icon: "wifi", title: "High-Speed WiFi", description: "Free unlimited internet access" },
    { icon: "car", title: "Parking", description: "Secure parking for bikes & cars" },
    { icon: "utensils", title: "Mess Facility", description: "Nutritious meals available" },
    { icon: "tshirt", title: "Laundry", description: "Washing & drying services" },
    { icon: "shield", title: "24/7 Security", description: "CCTV monitoring & guards" },
    { icon: "clock", title: "24/7 Access", description: "No time restrictions" },
    { icon: "ac", title: "AC Rooms", description: "Climate controlled comfort" },
    { icon: "bath", title: "Clean Washrooms", description: "Hygienic facilities" },
    { icon: "bus", title: "Bus Service", description: "Transportation facility" },
    { icon: "tiffin", title: "Tiffin Service", description: "Home-style meal delivery" },
    { icon: "pool", title: "Swimming Pool", description: "Recreational swimming facility" },
    { icon: "sports", title: "Sports Ground", description: "Open area for sports & activities" }
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center shadow-sm">
                <div className={`text-teal-600 text-xl sm:text-2xl facility-icon ${facility.icon}`}>
                  {getIconForFacility(facility.icon)}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{facility.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getIconForFacility = (iconName: string) => {
  switch (iconName) {
    case 'wifi': return '📶';
    case 'car': return '🚗';
    case 'utensils': return '🍴';
    case 'tshirt': return '👕';
    case 'shield': return '🛡️';
    case 'clock': return '🕒';
    case 'ac': return '❄️';
    case 'bath': return '🚿';
    case 'bus': return '🚌';
    case 'tiffin': return '🍱';
    case 'pool': return '🏊';
    case 'sports': return '🏏';
    default: return '✨';
  }
};

export default Facilities;
