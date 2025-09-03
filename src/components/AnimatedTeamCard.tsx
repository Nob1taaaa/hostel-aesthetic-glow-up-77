import { Mail, Instagram, Twitter, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface AnimatedTeamCardProps {
  member: TeamMember;
  index: number;
}

const AnimatedTeamCard = ({ member, index }: AnimatedTeamCardProps) => {
  return (
    <div className="animated-team-card">
      <button className="mail-button">
        <Mail className="mail-icon" />
      </button>
      <div className="profile-pic">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">{member.name}</span>
          <span className="about-me">{member.role}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <Instagram className="social-icon" />
            <Twitter className="social-icon" />
            <Github className="social-icon" />
          </div>
          <button className="contact-button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTeamCard;