import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useEnhancedScrollAnimations = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    gsap.set("html", { scrollBehavior: "smooth" });

    // Hero Section - Parallax and fade on scroll
    gsap.utils.toArray('#home').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    // Section entrance animations with beautiful easing
    gsap.utils.toArray('.premium-section').forEach((element: any, index) => {
      gsap.fromTo(element, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.95,
          rotationX: 15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Card stack animations for rooms and facilities
    gsap.utils.toArray('.stagger-children').forEach((parent: any) => {
      const children = parent.querySelectorAll('.card, .room-card, .facility-card, .team-card');
      if (children.length > 0) {
        gsap.fromTo(children,
          { 
            y: 60, 
            opacity: 0,
            scale: 0.9,
            rotation: 5
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.6,
              from: "start"
            },
            scrollTrigger: {
              trigger: parent,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Text reveal animations
    gsap.utils.toArray('h1, h2, h3, .animate-text').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Image hover effects for hostel feeling
    gsap.utils.toArray('img').forEach((img: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(img, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });

      img.addEventListener('mouseenter', () => tl.play());
      img.addEventListener('mouseleave', () => tl.reverse());
    });

    // Button hover animations
    gsap.utils.toArray('button, .btn').forEach((btn: any) => {
      const tl = gsap.timeline({ paused: true });
      
      tl.to(btn, {
        scale: 1.05,
        y: -2,
        duration: 0.3,
        ease: "power2.out"
      });

      btn.addEventListener('mouseenter', () => tl.play());
      btn.addEventListener('mouseleave', () => tl.reverse());
    });

    // Navigation scroll effect
    let lastScrollY = 0;
    const navbar = document.querySelector('nav');
    
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        if (navbar) {
          if (self.direction === -1) {
            // Scrolling up
            gsap.to(navbar, { y: 0, duration: 0.3 });
          } else if (self.direction === 1 && self.progress > 0.1) {
            // Scrolling down
            gsap.to(navbar, { y: -100, duration: 0.3 });
          }
        }
      }
    });

    // Floating animations for background elements
    gsap.utils.toArray('.float-element').forEach((element: any, index) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    });

    // Page load animation
    gsap.fromTo("body", 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

const EnhancedScrollAnimations = () => {
  useEnhancedScrollAnimations();
  return null;
};

export default EnhancedScrollAnimations;