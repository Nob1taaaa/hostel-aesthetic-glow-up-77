import { motion } from "framer-motion";
import Cute3DTeamCard from "./Cute3DTeamCard";

const CuteTeam = () => {
  const teamMembers = [
    {
      name: "Mr. MISHAL SINGH",
      role: "Chief Managing Director",
      image: "/lovable-uploads/ec084b60-df21-48e8-8504-d9db8e43d3b8.png"
    },
    {
      name: "Mrs. NUTAN SINGH", 
      role: "Associate Director & Vice President",
      image: "/lovable-uploads/5e3d6542-3440-421e-8dd0-51e86507f418.png"
    },
    {
      name: "Er. RAKSHA SINGH",
      role: "Chief Hiring Officer", 
      image: "/lovable-uploads/92b80640-a417-464d-b653-d82c9d773183.png"
    },
    {
      name: "Mr. DEVANAND SINGH",
      role: "President",
      image: "/lovable-uploads/0d1254f5-9469-4b78-a296-3adbf6782545.png"
    },
    {
      name: "Er. SATYAM KUMAR",
      role: "CEO & CAO",
      image: "/lovable-uploads/3d7d66a1-4446-4934-a1a3-42deca215a74.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Cute floating background elements */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm border border-primary/20">
              <span className="text-2xl">👥</span>
              <span className="text-primary font-semibold">Meet Our Amazing Team</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-6">
              OUR TEAM
            </h2>
            
            <div className="w-32 h-2 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">visionary leaders</span> who make Raksha Hostel your perfect home! ✨
          </motion.p>
        </div>

        {/* Team Cards - Desktop Grid */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-6 xl:gap-8 flex-wrap max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0">
              <Cute3DTeamCard member={member} index={index} />
            </div>
          ))}
        </div>

        {/* Team Cards - Tablet Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Cute3DTeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Team Cards - Mobile Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-6">
            <div className="flex gap-6 px-4" style={{ width: 'max-content' }}>
              {teamMembers.map((member, index) => (
                <Cute3DTeamCard key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Fun stats section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏆", number: "15+", label: "Years Combined Experience" },
              { icon: "✨", number: "500+", label: "Happy Students" },
              { icon: "🌟", number: "4.9", label: "Average Rating" },
              { icon: "🎯", number: "24/7", label: "Dedicated Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CuteTeam;
