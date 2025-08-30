import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				brand: {
					orange: 'hsl(var(--brand-orange))',
					grey: 'hsl(var(--brand-grey))',
					green: 'hsl(var(--brand-green))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			perspective: {
				'1000': '1000px',
				'2000': '2000px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'hologram': {
					'0%, 100%': {
						transform: 'rotateY(0deg) rotateX(0deg)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': {
						transform: 'rotateY(5deg) rotateX(2deg)',
						filter: 'hue-rotate(90deg)'
					},
					'50%': {
						transform: 'rotateY(0deg) rotateX(5deg)',
						filter: 'hue-rotate(180deg)'
					},
					'75%': {
						transform: 'rotateY(-5deg) rotateX(2deg)',
						filter: 'hue-rotate(270deg)'
					}
				},
				'matrix': {
					'0%': {
						transform: 'translateY(0px)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100vh)',
						opacity: '0'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor, 0 0 20px currentColor'
					},
					'50%': {
						textShadow: '0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor, 0 0 12px currentColor'
					}
				},
				'cyber-glitch': {
					'0%, 100%': {
						transform: 'translate(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': {
						transform: 'translate(2px, 2px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': {
						transform: 'translate(2px, -2px)',
						filter: 'hue-rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'hologram': 'hologram 4s ease-in-out infinite',
				'matrix': 'matrix 3s linear infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.hover-scale': {
					'transition': 'transform 0.3s ease-in-out',
					'&:hover': {
						'transform': 'scale(1.05)'
					}
				},
				'.hover-glow': {
					'transition': 'box-shadow 0.3s ease-in-out',
					'&:hover': {
						'box-shadow': '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 30px rgba(59, 130, 246, 0.3)'
					}
				},
				'.gradient-text': {
					'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent'
				},
				'.perspective-1000': {
					'perspective': '1000px'
				},
				'.perspective-2000': {
					'perspective': '2000px'
				},
				'.transform-gpu': {
					'transform': 'translateZ(0)'
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden'
				},
				'.preserve-3d': {
					'transform-style': 'preserve-3d'
				}
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;