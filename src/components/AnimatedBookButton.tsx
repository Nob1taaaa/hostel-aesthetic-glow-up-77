interface AnimatedBookButtonProps {
  onClick: () => void;
  className?: string;
}

const AnimatedBookButton = ({ onClick, className = "" }: AnimatedBookButtonProps) => {
  return (
    <div className={`animated-book-button-wrapper ${className}`}>
      <div className="grid" style={{ display: 'none' }}></div>
      <div id="poda">
        <div className="glow"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>
        <div className="darkBorderBg"></div>
        <div className="white"></div>
        <div className="border"></div>
        <div id="main">
          <button onClick={onClick} className="book-button">
            Book Now
          </button>
          <div id="input-mask"></div>
          <div id="pink-mask"></div>
          <div className="filterBorder"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBookButton;