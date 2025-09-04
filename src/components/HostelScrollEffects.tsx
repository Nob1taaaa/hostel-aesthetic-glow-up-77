import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HostelScrollEffects = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hostel-specific room showcase animations
      gsap.utils.toArray('.room-showcase').forEach((room: any, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: room,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(room, 
          { 
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            rotationY: 15
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out"
          }
        );
      });

      // Facility icons animation
      gsap.utils.toArray('.facility-icon').forEach((icon: any, index) => {
        gsap.fromTo(icon,
          {
            scale: 0,
            rotation: 180,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: icon,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Testimonial cards wave animation
      gsap.utils.toArray('.testimonial-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          {
            y: 50,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Continuous floating effect
        gsap.to(card, {
          y: -10,
          duration: 2,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        });
      });

      // Team member cards entrance
      gsap.utils.toArray('.team-member').forEach((member: any, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: member,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(member,
          {
            y: 80,
            opacity: 0,
            rotationX: 30,
            scale: 0.8
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.15
          }
        );
      });

      // Contact form animation
      gsap.utils.toArray('.contact-form').forEach((form: any) => {
        gsap.fromTo(form.children,
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: form,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Security badge animation
      gsap.utils.toArray('.security-badge, .safety-icon').forEach((badge: any) => {
        gsap.fromTo(badge,
          {
            scale: 0,
            rotation: 360,
            opacity: 0
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: badge,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Pricing cards animation
      gsap.utils.toArray('.price-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationY: 20
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Image gallery animations
      gsap.utils.toArray('.gallery-image').forEach((img: any, index) => {
        gsap.fromTo(img,
          {
            scale: 0.8,
            opacity: 0,
            filter: "blur(10px)"
          },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Progress bars for amenities
      gsap.utils.toArray('.progress-bar').forEach((bar: any) => {
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: "100%",
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default HostelScrollEffects;