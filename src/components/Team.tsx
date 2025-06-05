
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. MISHAL SINGH",
      role: "Chief Managing Director",
      image: "/lovable-uploads/ec084b60-df21-48e8-8504-d9db8e43d3b8.png",
      experience: "15+ years experience",
      bgColor: "from-purple-400 to-pink-400",
      textColor: "text-purple-800"
    },
    {
      name: "Mrs. NUTAN SINGH",
      role: "Associate Director & Vice President",
      image: "/lovable-uploads/5e3d6542-3440-421e-8dd0-51e86507f418.png",
      experience: "12+ years experience",
      bgColor: "from-orange-400 to-red-400",
      textColor: "text-orange-800"
    },
    {
      name: "Er. RAKSHA SINGH",
      role: "Chief Hiring Officer",
      image: "/lovable-uploads/92b80640-a417-464d-b653-d82c9d773183.png",
      experience: "10+ years experience",
      bgColor: "from-teal-400 to-blue-400",
      textColor: "text-teal-800"
    },
    {
      name: "Mr. DEVANAND SINGH",
      role: "President",
      image: "/lovable-uploads/0d1254f5-9469-4b78-a296-3adbf6782545.png",
      experience: "18+ years experience",
      bgColor: "from-green-400 to-emerald-400",
      textColor: "text-green-800"
    },
    {
      name: "Er. SATYAM KUMAR",
      role: "CEO & CAO",
      image: "/lovable-uploads/3d7d66a1-4446-4934-a1a3-42deca215a74.png",
      experience: "14+ years experience",
      bgColor: "from-blue-400 to-indigo-400",
      textColor: "text-blue-800"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-orange-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-orange-100 dark:from-teal-900/30 dark:to-orange-900/30 rounded-full px-6 py-2 mb-6">
            <span className="text-teal-800 dark:text-teal-300 font-semibold">Leadership Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 tracking-tight">
            OUR TEAM
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-teal-500 via-orange-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders who make <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500 font-bold">Raksha Hostel</span> a home away from home
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-0 relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-80 relative">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating badge */}
                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 text-center relative z-10">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-orange-500 transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className={`font-semibold mb-2 ${member.textColor} dark:text-orange-400 text-sm`}>
                      {member.role}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
                      {member.experience}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="w-0 group-hover:w-16 h-0.5 bg-gradient-to-r from-teal-500 to-orange-400 mx-auto mt-4 transition-all duration-500"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Years Combined Experience" },
            { number: "1000+", label: "Students Guided" },
            { number: "15+", label: "Awards Won" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
