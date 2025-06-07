
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-300 to-orange-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-300 to-slate-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-teal-600 to-orange-500 mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
            OUR TEAM
          </h2>
          <div className="w-16 sm:w-24 lg:w-32 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-teal-500 via-orange-400 to-orange-500 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full shadow-lg"></div>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-3">
            Meet the visionary leaders who transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500 font-bold">Raksha Hostel</span> into your dream home
          </p>
        </motion.div>

        {/* Mobile: Beautiful horizontal moving animation */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div 
              className="flex space-x-6 pb-4"
              animate={{ 
                x: [0, -1600, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: 'max-content' }}
            >
              {/* Duplicate the array to create seamless loop */}
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % teamMembers.length) * 0.1 }}
                  className="w-72 flex-shrink-0"
                >
                  <Card className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-96 transform hover:scale-105">
                    <CardContent className="p-0 relative h-full flex flex-col">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-15 transition-all duration-500`}></div>
                      
                      <div className="relative overflow-hidden flex-1">
                        <div className="w-full h-72 relative">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      
                      <div className="p-4 text-center bg-white flex-shrink-0 relative z-10">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                          {member.name}
                        </h3>
                        <p className={`font-semibold ${member.textColor} text-sm leading-relaxed`}>
                          {member.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: Grid layout with enhanced animations */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-96">
                <CardContent className="p-0 relative h-full flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-15 transition-all duration-500`}></div>
                  
                  <div className="relative overflow-hidden flex-1">
                    <div className="w-full h-72 relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  <div className="p-4 text-center bg-white flex-shrink-0 relative z-10">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-500 leading-tight">
                      {member.name}
                    </h3>
                    <p className={`font-semibold ${member.textColor} text-sm leading-relaxed`}>
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
