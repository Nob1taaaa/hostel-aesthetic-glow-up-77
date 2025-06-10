
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Create smooth scroll effect
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Smooth scrolling configuration
      const scrollTween = gsap.to(element, {
        y: () => -(element.scrollHeight - window.innerHeight),
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      return () => {
        scrollTween?.kill();
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="smooth-scroll-wrapper fixed top-0 left-0 w-full h-full overflow-hidden">
      <div ref={scrollRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;
