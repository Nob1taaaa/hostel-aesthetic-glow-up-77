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
    <div className="relative w-[290px] h-[320px] perspective-1000">
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
          className="absolute inset-2 rounded-[45px] bg-gradient-to-br from-white/20 to-white/5 border-l border-b border-white/10 transition-all duration-500"
          style={{ transform: "translate3d(0px, 0px, 25px)" }}
        />

        {/* Member Image - Top Center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2" style={{ transform: "translate(-50%, 0) translate3d(0, 0, 30px)" }}>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl bg-white">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content - Centered below image */}
        <div 
          className="absolute top-36 left-4 right-4 text-center"
          style={{ transform: "translate3d(0, 0, 26px)" }}
        >
          <h3 className="text-white font-black text-lg mb-3 drop-shadow-lg leading-tight">
            {member.name}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed drop-shadow px-2">
            {member.role}
          </p>
        </div>

        {/* Cute heart at bottom */}
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          style={{ transform: "translate(-50%, 0) translate3d(0, 0, 26px)" }}
        >
          <motion.div
            className="text-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💖
          </motion.div>
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
              className="absolute rounded-full bg-gradient-to-br from-white/20 to-white/5 shadow-lg"
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