import { motion } from "framer-motion";
import { useRef } from "react";

const CuteAnimatedCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex justify-center items-center min-h-[400px] p-8">
      <div className="relative w-[400px] h-[300px] rounded-2xl">
        {/* SVG Filters */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0" />
          </filter>
          <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" />
          </filter>
          <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0" />
          </filter>
        </svg>

        {/* Animated spinning borders */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-[-30%] opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 46%, transparent 54%, hsl(var(--accent)))`,
              filter: "blur(3em) url(#unopaq)",
            }}
          />
          <motion.div
            className="absolute inset-[-0.125rem] rounded-xl opacity-90"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 65%, hsl(var(--secondary)))`,
              filter: "blur(0.5em) url(#unopaq2)",
            }}
          />
        </div>

        {/* Card border */}
        <div className="absolute inset-0 bg-muted/20 rounded-2xl backdrop-blur-sm">
          <motion.div
            className="absolute inset-[-2px] rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 65%, hsl(var(--accent)))`,
              filter: "blur(2px) url(#unopaq3)",
            }}
          />
        </div>

        {/* Main card content */}
        <motion.div 
          ref={cardRef}
          className="relative inset-[0.125rem] rounded-xl bg-card text-card-foreground overflow-hidden h-full flex flex-col shadow-xl border border-primary/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Header */}
          <div className="bg-muted/50 flex flex-col gap-1 border-b border-border/50 backdrop-blur-sm">
            <div className="bg-muted/30 flex items-center gap-2 px-3 pt-2">
              <div className="flex items-center justify-center w-6 h-6 p-1 rounded border border-border/50 fill-muted-foreground hover:bg-muted/50 transition-colors">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
                </svg>
              </div>
              <a href="#" className="flex items-center text-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 mr-2 fill-current">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
              <div className="flex items-center text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">raksha</a>
                <span className="mx-2 text-xs">/</span>
                <a href="#" className="text-foreground font-medium hover:text-primary transition-colors">hostel</a>
              </div>
              <div className="flex-1" />
              <div className="w-7 h-7 rounded-full bg-primary/10 border-2 border-primary/20 bg-cover bg-center" 
                style={{ backgroundImage: "url('/lovable-uploads/ec084b60-df21-48e8-8504-d9db8e43d3b8.png')" }} />
            </div>
            
            <div className="flex px-2 gap-2 pb-2">
              <motion.div 
                className="flex items-center gap-1 px-2 py-1 text-sm cursor-pointer rounded hover:bg-muted/50 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-muted-foreground">
                  <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z" />
                </svg>
                <span className="text-muted-foreground">Experience</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1 px-2 py-1 text-sm cursor-pointer rounded border-b-2 border-primary bg-primary/5 text-primary font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-4 h-4 fill-current">
                  <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                </svg>
                <span>Life at Raksha</span>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-3 overflow-hidden">
            <div className="space-y-1 border border-border/30 rounded-lg overflow-hidden">
              {[
                { title: "🏠 Premium Accommodation", desc: "#001 opened just now by raksha_hostel" },
                { title: "✨ Modern Amenities & Comfort", desc: "#002 opened 2 hours ago by comfort_team" },
                { title: "🔒 24/7 Security & Safety", desc: "#003 opened 1 day ago by security_team" },
                { title: "💫 Community & Friendship", desc: "#004 opened 3 days ago by community_manager" },
                { title: "🎯 Perfect Location & Connectivity", desc: "#005 opened 5 days ago by location_team" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-2 border-b border-border/20 last:border-b-0 hover:bg-muted/30 transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-3 h-3 rounded border border-border/50 hover:bg-muted/50 transition-colors" />
                  <div className="w-4 h-4 fill-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-full h-full">
                      <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-foreground hover:text-primary transition-colors truncate">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cute floating sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backdrop blur effect */}
        <div className="absolute inset-[-200%] bg-gradient-radial from-transparent via-background/50 to-background opacity-30 pointer-events-none" />
      </div>
    </div>
  );
};

export default CuteAnimatedCard;