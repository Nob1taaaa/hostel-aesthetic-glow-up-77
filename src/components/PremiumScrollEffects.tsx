
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PremiumScrollEffects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Apple-style section reveals with morphing
      gsap.utils.toArray('.premium-section').forEach((section: any, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(section, {
                scale: 1,
                opacity: 1,
                rotationY: 0,
                filter: "blur(0px)",
                duration: 1.5,
                ease: "power4.out"
              });
            },
            onLeave: () => {
              gsap.to(section, {
                scale: 0.95,
                opacity: 0.8,
                filter: "blur(2px)",
                duration: 0.8,
                ease: "power2.out"
              });
            }
          }
        });

        gsap.set(section, {
          scale: 0.9,
          opacity: 0,
          rotationY: 45,
          filter: "blur(10px)"
        });
      });

      // Samsung-style parallax elements
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

      // Premium text reveals with morphing
      gsap.utils.toArray('.morph-text').forEach((text: any) => {
        const chars = text.innerText.split('');
        text.innerHTML = chars.map((char: string) => 
          char === ' ' ? ' ' : `<span class="char">${char}</span>`
        ).join('');

        gsap.set(text.querySelectorAll('.char'), {
          y: 100,
          opacity: 0,
          rotationX: 90,
          transformOrigin: "center bottom"
        });

        gsap.to(text.querySelectorAll('.char'), {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Apple-style card stack effect
      gsap.utils.toArray('.card-stack').forEach((container: any) => {
        const cards = container.querySelectorAll('.stack-card');
        
        cards.forEach((card: any, index: number) => {
          gsap.set(card, {
            y: index * 20,
            scale: 1 - (index * 0.05),
            zIndex: cards.length - index
          });

          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1
            }
          });
        });
      });

      // Magnetic hover effects
      gsap.utils.toArray('.magnetic').forEach((element: any) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)"
          });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      // Premium image reveals
      gsap.utils.toArray('.reveal-image').forEach((container: any) => {
        const image = container.querySelector('img');
        const overlay = container.querySelector('.image-overlay');

        gsap.set(image, { scale: 1.3 });
        gsap.set(overlay, { scaleX: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        tl.to(overlay, {
          scaleX: 0,
          duration: 1.5,
          ease: "power4.inOut",
          transformOrigin: "right center"
        })
        .to(image, {
          scale: 1,
          duration: 2,
          ease: "power3.out"
        }, "-=1");
      });

      // Floating elements with physics
      gsap.utils.toArray('.float-physics').forEach((element: any, index) => {
        gsap.to(element, {
          y: -30,
          rotation: 360,
          duration: 4 + (index * 0.5),
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default PremiumScrollEffects;
