
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Advanced parallax effects
    gsap.utils.toArray('.parallax-element').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    // Fade in animations
    gsap.utils.toArray('.fade-in-up').forEach((element: any) => {
      gsap.fromTo(element, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Scale animations
    gsap.utils.toArray('.scale-in').forEach((element: any) => {
      gsap.fromTo(element,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Rotation animations
    gsap.utils.toArray('.rotate-in').forEach((element: any) => {
      gsap.fromTo(element,
        { rotation: 180, opacity: 0 },
        {
          rotation: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stagger animations
    gsap.utils.toArray('.stagger-children').forEach((parent: any) => {
      const children = parent.children;
      gsap.fromTo(children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

const ScrollAnimations = () => {
  useScrollAnimations();
  return null;
};

export default ScrollAnimations;
