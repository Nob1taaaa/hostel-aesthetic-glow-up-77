
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. MISHAL SINGH",
      role: "Chief Managing Director",
      image: "/lovable-uploads/ec084b60-df21-48e8-8504-d9db8e43d3b8.png",
      bgColor: "from-slate-400 to-slate-500",
      textColor: "text-slate-800"
    },
    {
      name: "Mrs. NUTAN SINGH",
      role: "Associate Director & Vice President",
      image: "/lovable-uploads/5e3d6542-3440-421e-8dd0-51e86507f418.png",
      bgColor: "from-orange-400 to-orange-500",
      textColor: "text-orange-800"
    },
    {
      name: "Er. RAKSHA SINGH",
      role: "Chief Hiring Officer",
      image: "/lovable-uploads/92b80640-a417-464d-b653-d82c9d773183.png",
      bgColor: "from-teal-400 to-teal-500",
      textColor: "text-teal-800"
    },
    {
      name: "Mr. DEVANAND SINGH",
      role: "President",
      image: "/lovable-uploads/0d1254f5-9469-4b78-a296-3adbf6782545.png",
      bgColor: "from-orange-500 to-orange-600",
      textColor: "text-orange-800"
    },
    {
      name: "Er. SATYAM KUMAR",
      role: "CEO & CAO",
      image: "/lovable-uploads/3d7d66a1-4446-4934-a1a3-42deca215a74.png",
      bgColor: "from-teal-500 to-cyan-500",
      textColor: "text-teal-800"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-300 to-orange-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-300 to-slate-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-teal-600 to-orange-500 mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2">
            OUR TEAM
          </h2>
          <div className="w-20 sm:w-32 lg:w-40 h-2 sm:h-3 bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500 mx-auto mb-6 sm:mb-8 lg:mb-10 rounded-full shadow-lg"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-3">
            Meet the visionary leaders who transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500 font-bold">Raksha Hostel</span> into your dream home
          </p>
        </motion.div>

        {/* Mobile: Simple horizontal scroll */}
        <div className="md:hidden">
          <motion.div
            className="flex space-x-4 pb-4 overflow-x-auto"
            animate={{ x: [0, -800, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div key={index} className="w-60 flex-shrink-0">
                <Card className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-80">
                  <CardContent className="p-0 relative h-full flex flex-col">
                    <div className="relative overflow-hidden flex-1">
                      <div className="w-full h-52 relative">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="p-4 text-center bg-white flex-shrink-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        {member.name}
                      </h3>
                      <p className={`font-semibold text-sm ${member.textColor} leading-relaxed`}>
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Single row layout */}
        <div className="hidden md:flex md:justify-center md:space-x-6 lg:space-x-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="w-full max-w-64"
            >
              <Card className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-96">
                <CardContent className="p-0 relative h-full flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                  
                  <div className="relative overflow-hidden flex-1">
                    <div className="w-full h-72 relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <div className="p-5 text-center bg-white flex-shrink-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                      {member.name}
                    </h3>
                    <p className={`font-semibold ${member.textColor} text-base leading-relaxed`}>
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
