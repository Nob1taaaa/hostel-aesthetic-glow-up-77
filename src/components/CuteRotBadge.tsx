import React from "react";

const CuteRotBadge: React.FC<{ label?: string }>= ({ label = "CARD" }) => {
  return (
    <div className="cute-rot-badge" aria-hidden="true">
      <h2>{label}</h2>
    </div>
  );
};

export default CuteRotBadge;
