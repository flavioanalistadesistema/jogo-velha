import { type Config } from 'tailwindcss';


const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
        colors: {
            primary: {
                400: '#65E9E4',
                500: '#31C3BD',
                600: '#218C87',
            },
            secondary: {
                400: '#FCC860',
                500: '#F3F136',
                600: '#CC8B13',
            },
            dark: {
                400: '#1F3641',
                500: '#1F3641',
                600: '#10212A',
            },
            ligth: {
                400: '#DBE8ED',
                500: '#S8BFC9',
                600: '#6B8997',
            }
        },
        },
    },
    safelist:[
        { pattern: /^bg-primary/, variants: ['hover'] },
        { pattern: /^bg-secondary/, variants: ['hover'] },
        { pattern: /^text-dark/, variants: ['hover'] },
        { pattern: /^text-light/, variants: ['hover'] },
    ],
    plugins: [],
}


