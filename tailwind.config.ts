
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
				'sedgwick': ['Sedgwick Ave Display', 'cursive'],
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					blue: '#00ffff',
					purple: '#8a2be2',
					pink: '#ff1493',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				'fly-in-1': {
					'0%': {
						transform: 'translate(-200vw, -200vh) rotate(-180deg) scale(0.5)',
						opacity: '0'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translate(-120px, -50px) rotate(0deg) scale(1)',
						opacity: '1'
					}
				},
				'fly-in-2': {
					'0%': {
						transform: 'translate(200vw, -200vh) rotate(180deg) scale(0.5)',
						opacity: '0'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translate(0px, -50px) rotate(0deg) scale(1)',
						opacity: '1'
					}
				},
				'fly-in-3': {
					'0%': {
						transform: 'translate(200vw, 200vh) rotate(180deg) scale(0.5)',
						opacity: '0'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translate(120px, -50px) rotate(0deg) scale(1)',
						opacity: '1'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff'
					},
					'50%': {
						textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff'
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
				'particle-float': {
					'0%': {
						transform: 'translateY(100vh) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'90%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100vh) rotate(360deg)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fly-in-1': 'fly-in-1 2s ease-out forwards',
				'fly-in-2': 'fly-in-2 2.5s ease-out forwards',
				'fly-in-3': 'fly-in-3 3s ease-out forwards',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'particle-float': 'particle-float 15s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
