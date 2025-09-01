import { motion } from "framer-motion";

const CuteFacilities = () => {
  const facilities = [
    { icon: "📶", title: "High-Speed WiFi", description: "Free unlimited internet" },
    { icon: "🚗", title: "Parking", description: "Secure bike & car parking" },
    { icon: "🍽️", title: "Mess Facility", description: "Delicious home-style meals" },
    { icon: "👕", title: "Laundry", description: "Washing & drying services" },
    { icon: "🛡️", title: "24/7 Security", description: "CCTV & guard protection" },
    { icon: "🕒", title: "24/7 Access", description: "No time restrictions" },
    { icon: "❄️", title: "AC Rooms", description: "Climate controlled comfort" },
    { icon: "🚿", title: "Clean Washrooms", description: "Hygienic facilities" },
    { icon: "🚌", title: "Bus Service", description: "Transportation facility" },
    { icon: "🍱", title: "Tiffin Service", description: "Home-style meal delivery" },
    { icon: "🏊", title: "Swimming Pool", description: "Recreational facility" },
    { icon: "🏏", title: "Sports Ground", description: "Open area for activities" }
  ];

  return (
    <section id="facilities" className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 20px rgba(234, 100, 29, 0.1)",
                "0 0 30px rgba(33, 138, 158, 0.1)", 
                "0 0 20px rgba(234, 100, 29, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-2xl">✨</span>
            <span className="text-primary font-bold">Amazing Facilities</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
            FACILITIES & SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a comfortable and happy stay ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {facilities.map((facility, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <div className="relative bg-card rounded-3xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 group-hover:border-primary/30">
                {/* Cute glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  className="relative mb-4 w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </span>
                </motion.div>
                
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {facility.title}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {facility.description}
                </p>

                {/* Cute floating sparkles */}
                <motion.div
                  className="absolute -top-1 -right-1 text-primary/60 opacity-0 group-hover:opacity-100"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cute footer message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-8 py-4 backdrop-blur-sm border border-primary/20">
            <span className="text-2xl">🏠</span>
            <span className="text-foreground font-semibold text-lg">Your comfort is our priority!</span>
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CuteFacilities;
