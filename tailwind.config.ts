import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			title: 'var(--title-color)',
  			paragraph: 'var(--paragraph-color)',
  			muted: 'var(--muted-text)',
  			brand: {
  				'50': '#F3E8FF',
  				'100': '#E0CFFF',
  				'200': '#C299FF',
  				'300': '#A366FF',
  				'400': '#8840FF',
  				'500': '#7214FF',
  				'600': '#5E0EDC',
  				'700': '#4909B9',
  				'800': '#360495',
  				'900': '#220071',
  				DEFAULT: '#7214FF'
  			},
  			card: {
  				bg: 'var(--card-bg)',
  				hover: 'var(--card-bg-hover)',
  				border: 'var(--card-border)'
  			},
  			button: {
  				primary: {
  					bg: 'var(--button-primary-bg)',
  					hover: 'var(--button-primary-hover)',
  					text: 'var(--button-primary-text)',
  					shadow: 'var(--button-primary-shadow)'
  				},
  				secondary: {
  					bg: 'var(--button-secondary-bg)',
  					hover: 'var(--button-secondary-hover)',
  					text: 'var(--button-secondary-text)',
  					border: 'var(--button-secondary-border)',
  					shadow: 'var(--button-secondary-shadow)'
  				}
  			},
  			border: {
  				soft: 'var(--border-soft)',
  				strong: 'var(--border-strong)'
  			}
  		},
  		fontFamily: {
  			inter: [
  				'var(--font-inter)'
  			],
  			outfit: [
  				'var(--font-outfit)'
  			]
  		},
  		screens: {
  			xs: '475px',
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1440px'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    scrollbarHide,
  ],
} satisfies Config;
