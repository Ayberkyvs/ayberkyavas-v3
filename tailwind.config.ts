import type { Config } from "tailwindcss";

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
  			background: {
				DEFAULT: 'var(--background)',
				100: 'var(--background-100)',
				200: 'var(--background-200)',
				300: 'var(--background-300)',
				400: 'var(--background-400)',
			},
  			foreground: 'var(--foreground)',
  			text: 'var(--text)',
  			border: 'var(--border)',
			brand: 'var(--brand)',
  		},
  		screens: {
			'xs': '475px',
			// => @media (min-width: 475px) { ... }
			'sm': '640px',
			// => @media (min-width: 640px) { ... }
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1440px',
			// => @media (min-width: 1536px) { ... }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
