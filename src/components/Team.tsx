
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Rakesh Sharma",
      role: "Hostel Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "10+ years experience"
    },
    {
      name: "Mrs. Priya Gupta",
      role: "Assistant Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47b?w=300&h=300&fit=crop&crop=face",
      experience: "5+ years experience"
    },
    {
      name: "Mr. Suresh Kumar",
      role: "Security Supervisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "8+ years experience"
    },
    {
      name: "Ms. Kavya Singh",
      role: "Housekeeping Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "6+ years experience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make your stay comfortable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
