
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
                india: {
                    saffron: '#FF9933',
                    white: '#FFFFFF',
                    green: '#138808',
                    blue: '#000080',
                    gold: '#D4AF37',
                    red: '#FF0000',
                    maroon: '#800000',
                    cream: '#FFF5E1',
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'fade-in-up': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-in-down': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'floating': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
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
                'rotate-slow': {
                    '0%': {
                        transform: 'rotate(0deg)'
                    },
                    '100%': {
                        transform: 'rotate(360deg)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.7s ease-in forwards',
                'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
                'fade-in-down': 'fade-in-down 0.7s ease-out forwards',
                'floating': 'floating 3s ease-in-out infinite',
                'scale-in': 'scale-in 0.5s ease-out forwards',
                'rotate-slow': 'rotate-slow 20s linear infinite'
			},
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'mukta': ['Mukta', 'sans-serif'],
                'yatra': ['Yatra One', 'cursive']
            },
            backgroundImage: {
                'pattern-light': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTcgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRNMiAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtNTQtMTdjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgMTdjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0zNi0xN2MwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtMTcgMGMwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtMCAxN2MwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtLTE3IDljMC0xLjEgMC45LTIgMi0yczIgMC45IDIgMi0wLjkgMi0yIDItMi0wLjktMi0ybTE3IDBjMC0xLjEgMC45LTIgMi0yczIgMC45IDIgMi0wLjkgMi0yIDItMi0wLjktMi0yIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')",
                'pattern-dark': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgLTE3YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTcgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRNMiAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtMCAxN2MwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtNTQtMTdjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAgMTdjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0zNi0xN2MwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtMTcgMGMwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtMCAxN2MwLTEuMSAwLjktMiAyLTJzMiAwLjkgMiAyLTAuOSAyLTIgMi0yLTAuOS0yLTJtLTE3IDljMC0xLjEgMC45LTIgMi0yczIgMC45IDIgMi0wLjkgMi0yIDItMi0wLjktMi0ybTE3IDBjMC0xLjEgMC45LTIgMi0yczIgMC45IDIgMi0wLjkgMi0yIDItMi0wLjktMi0yIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4=')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
