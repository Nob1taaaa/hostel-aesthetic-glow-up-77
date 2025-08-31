import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Cute3DTeamCardProps {
  member: TeamMember;
  index: number;
}

const Cute3DTeamCard = ({ member, index }: Cute3DTeamCardProps) => {
  return (
    <div className="relative w-[290px] h-[300px] perspective-1000">
      <motion.div 
        className="relative h-full rounded-[50px] bg-gradient-to-br from-primary via-secondary to-accent transition-all duration-500 shadow-lg hover:shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          rotateX: 15,
          rotateY: 15,
          scale: 1.05,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
      >
        {/* Glass overlay */}
        <div 
          className="absolute inset-2 rounded-[45px] bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border-l border-b border-white/20 transition-all duration-500"
          style={{ transform: "translate3d(0px, 0px, 25px)" }}
        />

        {/* Content */}
        <div 
          className="absolute top-[100px] left-8 right-16"
          style={{ transform: "translate3d(0, 0, 26px)" }}
        >
          <span className="block text-white font-black text-xl mb-4 drop-shadow-lg">
            {member.name} 💫
          </span>
          <span className="block text-white/90 text-sm leading-relaxed drop-shadow">
            {member.role}
          </span>
        </div>

        {/* Social buttons */}
        <div 
          className="absolute bottom-5 left-5 flex gap-2"
          style={{ 
            transformStyle: "preserve-3d",
            transform: "translate3d(0, 0, 26px)" 
          }}
        >
          {[
            { icon: "📧", delay: "0.4s" },
            { icon: "📱", delay: "0.6s" }, 
            { icon: "💼", delay: "0.8s" }
          ].map((social, idx) => (
            <motion.button
              key={idx}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-white"
              whileHover={{ 
                scale: 1.2,
                rotate: 15,
                transform: "translate3d(0, 0, 50px)"
              }}
              style={{
                transitionDelay: social.delay
              }}
            >
              {social.icon}
            </motion.button>
          ))}
        </div>

        {/* View more */}
        <motion.div 
          className="absolute bottom-5 right-5 flex items-center text-white/80 text-xs font-bold cursor-pointer"
          style={{ transform: "translate3d(0, 0, 26px)" }}
          whileHover={{ 
            scale: 1.1,
            transform: "translate3d(0, 0, 10px)"
          }}
        >
          <span className="mr-1">View more</span>
          <svg className="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>

        {/* Member Image - Centered and Visible */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translate3d(0, 0, 30px)" }}>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl bg-white">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Animated decorative circles */}
        <div className="absolute right-0 top-0" style={{ transformStyle: "preserve-3d" }}>
          {[
            { size: 60, z: 15, delay: 0 },
            { size: 45, z: 25, delay: 0.2 },
            { size: 30, z: 35, delay: 0.4 }
          ].map((circle, idx) => (
            <motion.div
              key={idx}
              className="absolute rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm shadow-lg"
              style={{
                width: circle.size,
                height: circle.size,
                top: 15 + idx * 10,
                right: 15 + idx * 10,
                transform: `translate3d(0, 0, ${circle.z}px)`,
                transitionDelay: `${circle.delay}s`
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 6 + idx * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Cute floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[50px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              {i % 2 === 0 ? "✨" : "💖"}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cute3DTeamCard;