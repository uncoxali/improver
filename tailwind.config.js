const colors = require('tailwindcss/colors');

module.exports = {
    future: {
        purgeLayersByDefault: true,
        applyComplexClasses: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
        extend: {
            zIndex: {},
            keyframes: {
                opacity: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },

                spinner: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: ' rotate(360deg)',
                    },
                },
                fadeLeft: {
                    '0%': {
                        transform: 'translateX(-50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
                fadeRight: {
                    '0%': {
                        transform: 'translateX(50px)',
                        opacity: 0,
                    },
                    '100%': {
                        transform: 'translateX(0px)',
                        opacity: 1,
                    },
                },
            },
            animation: {
                spinner: ' spinner 1s linear infinite',
                button: ' bounce 2s infinite;',
                opacity: 'opacity 0.2s ease-in-out',
                fadeLeft: 'fadeLeft 3s ease-in-out',
                fadeRight: 'fadeRight 5s ease-in-out',
                ping: 'ping 1s cubic-bezier(0, 0.3, 0.4, 1) infinite',
                pingTouch: 'ping 1s cubic-bezier(0, 0.5, 0.8, 1.5) infinite',
                scale: 'scale 1s scale(0,2) infinite',
            },
            width: {
                'max-content': 'max-content',
                '10rem': '10rem',
                '100': '54.13rem',
                '98': '40rem',
                '46': '45.875rem',
                '17': '4.5rem',
                '97': '35rem',
                '95': '26rem',
                '93': '30rem',
                '86': '22rem',
                '120': '60rem',
                '81': '21rem',
            },
            height: {
                '110': '33rem',
                '100': '30rem',
                '90': '36.951rem',
                '91': '34rem',
                '27': '27rem',
                '45': '10.5rem',
                '85': '30rem',
                '101': '44rem',
                '18': '4.5rem',
                '120': '79rem',
                '115': '40rem',
                '92': '35.5rem',
                '93': '34.5rem',
                '125': '50rem',
                '116': '54rem',
                '105': '45rem',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            spacing: {
                '5.7rem': '5.7rem',
                '5.4rem': '5.4rem',
                '11': '0.40rem',
                '15': '12.5rem',
                '17': '13.5rem',
                '25': '6.6rem',
                '26': '6.3rem',
                '53': '14rem',
                '17': '4.5rem',
                '45': '11.5rem',
                '21': '5.6rem',
                '22': '5.3rem',
                '4.5': '4.3rem',
                '53': '-13.5rem',
                '0.5': '0.125rem',
                '23': '5.6rem',
                '81': '21rem',
                '68': '17rem',
                '13': '3.2rem',
                '100': '30rem',
                '-34': '-8.5rem',
                '0.6': '0.6rem',
                '30': '7.3rem',
                '0.1': '0.10rem',
                '-0.72': '-0.68rem',
            },

            transitionDelay: {
                '900': '900ms',
                '1100': '1100ms',
                '1300': '1300ms',
                '1500': '1500ms',
                '1700': '1700ms',
                '1900': '1900ms',
                '2000': '2000ms',
            },

            borderRadius: {
                BottomRight: '2rem',
            },
            screens: {
                'xm': '300px',
                // => @media (min-width: 300px) { ... }
                'xs': '330px',
                // => @media (min-width: 330px) { ... }

                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
                '3xl': '1750px',
                // => @media (min-width: 1750px) { ... }
            },
            boxShadow: {
                sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'custom': '0 36px 60px -20px rgba(0, 0, 0, 0.4)',
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                none: 'none',
            },
            colors: {
                gray: {
                    ...colors.gray,
                    250: '#f5f5f5',
                },
                green: {
                    ...colors.green,
                    550: '#23c0b5',
                },
            },
            textColor: {},
            boxShadow: {
                'outline-2': '0 0 0 2px var(--accents-2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
