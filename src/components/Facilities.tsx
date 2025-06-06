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
    <section id="facilities" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            FACILITIES & SERVICES
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto px-3">
            Everything you need for a comfortable and convenient stay
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-2 sm:mb-3 lg:mb-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <div className={`text-teal-600 text-lg sm:text-xl lg:text-2xl facility-icon ${facility.icon}`}>
                  {getIconForFacility(facility.icon)}
                </div>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight px-1">{facility.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">{facility.description}</p>
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