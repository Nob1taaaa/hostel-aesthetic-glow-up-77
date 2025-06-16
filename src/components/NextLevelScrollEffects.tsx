
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NextLevelScrollEffects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Revolutionary section reveals with morphing
      gsap.utils.toArray('.premium-section').forEach((section: any, index) => {
        gsap.set(section, {
          scale: 0.85,
          opacity: 0,
          rotationY: 60,
          filter: "blur(20px) brightness(0.5)"
        });

        gsap.to(section, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          filter: "blur(0px) brightness(1)",
          duration: 2.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(section, {
                boxShadow: "0 50px 100px rgba(0,255,255,0.3)",
                duration: 1,
                ease: "power2.out"
              });
            }
          }
        });
      });

      // Next-level parallax with 3D transforms
      gsap.utils.toArray('.parallax-3d').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -70,
          rotationX: 15,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom", 
            end: "bottom top",
            scrub: 2
          }
        });
      });

      // Advanced text morphing with character splits
      gsap.utils.toArray('.morph-title').forEach((title: any) => {
        const chars = title.innerText.split('');
        title.innerHTML = chars.map((char: string) => 
          char === ' ' ? ' ' : `<span class="morph-char">${char}</span>`
        ).join('');

        gsap.set(title.querySelectorAll('.morph-char'), {
          y: 150,
          opacity: 0,
          rotationX: 90,
          scale: 0.5,
          transformOrigin: "center bottom"
        });

        gsap.to(title.querySelectorAll('.morph-char'), {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Revolutionary card stack with physics
      gsap.utils.toArray('.card-stack-3d').forEach((container: any) => {
        const cards = container.querySelectorAll('.stack-card-3d');
        
        cards.forEach((card: any, index: number) => {
          gsap.set(card, {
            y: index * 40,
            scale: 1 - (index * 0.08),
            rotationX: index * 5,
            zIndex: cards.length - index,
            transformOrigin: "center bottom"
          });

          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1.5
            }
          });
        });
      });

      // Magnetic 3D hover effects
      gsap.utils.toArray('.magnetic-3d').forEach((element: any) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(element, {
            x: x * 0.15,
            y: y * 0.15,
            rotationY: x * 0.1,
            rotationX: -y * 0.1,
            duration: 0.4,
            ease: "power2.out"
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
      });

      // Revolutionary image reveals with morphing
      gsap.utils.toArray('.morph-image').forEach((container: any) => {
        const image = container.querySelector('img');
        const overlay = container.querySelector('.morph-overlay');

        gsap.set(image, { 
          scale: 1.4, 
          rotationZ: 5,
          filter: "blur(10px)"
        });
        gsap.set(overlay, { 
          scaleX: 1,
          background: "linear-gradient(45deg, #00ffff, #ff00ff)"
        });

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
          duration: 2,
          ease: "power4.inOut",
          transformOrigin: "right center"
        })
        .to(image, {
          scale: 1,
          rotationZ: 0,
          filter: "blur(0px)",
          duration: 2.5,
          ease: "power3.out"
        }, "-=1.5");
      });

      // Next-level floating physics
      gsap.utils.toArray('.float-3d').forEach((element: any, index) => {
        gsap.to(element, {
          y: -50,
          rotationY: 360,
          rotationX: 15,
          duration: 6 + (index * 0.8),
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3
        });
      });

      // Advanced scroll-triggered transformations
      gsap.utils.toArray('.transform-scroll').forEach((element: any) => {
        gsap.to(element, {
          scale: 1.2,
          rotationY: 180,
          filter: "hue-rotate(360deg)",
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            pin: false
          }
        });
      });

    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default NextLevelScrollEffects;
