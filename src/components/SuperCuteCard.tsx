import React from "react";
import "../styles/supercute-card.css";

type Props = {
  title: string;
  description: string;
};

const SuperCuteCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="sc-cardBox">
      <div className="sc-card" role="article" aria-label={title}>
        <span className="sc-text">{title}</span>
        <div className="sc-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SuperCuteCard;
