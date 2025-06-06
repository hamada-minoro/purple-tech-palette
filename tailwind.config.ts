
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
				// Hamada Tech Palette
				hamada: {
					purple: {
						DEFAULT: '#5712b5', // Updated Primary Purple to #5712b5
						light: '#9B87F5',  // Light Purple
						dark: '#4A2082',   // Dark Purple
					},
					blue: {
						DEFAULT: '#001270', // Dense saturated blue
						light: '#0025A0',   // Light Blue
						dark: '#000A47',    // Dark Blue
					},
					tech: {
						black: '#191919',      // Tech Black
						dark: '#1A1F2C',       // Dark Tech Background
						gray: '#2D3748',       // Tech Gray
					},
					white: '#FFFFFF',          // Pure White (for contrast)
					gray: {
						light: '#F7FAFC',      // Light Gray
						DEFAULT: '#A0AEC0',    // Medium Gray
						dark: '#4A5568',       // Dark Gray
					}
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
				'pulse-purple': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 0 0 rgba(108, 56, 192, 0.7)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 0 10px rgba(108, 56, 192, 0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-purple': 'pulse-purple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			backgroundImage: {
				'tech-gradient': 'linear-gradient(135deg, #191919 0%, #1A1F2C 100%)',
				'purple-blue-gradient': 'linear-gradient(90deg, #6C38C0 0%, #001270 100%)',
				'purple-gradient': 'linear-gradient(90deg, #4A2082 0%, #6C38C0 50%, #9B87F5 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
