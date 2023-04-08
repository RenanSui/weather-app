/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './srcExTracker/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                customWeather: '0 8px 32px 0px rgba(0, 0, 0, 0.3)',
            },
            fontFamily: {
                Inter: 'Inter, sans-serif',
                Arial: 'Arial, sans-serif',
            },
            colors: {
                'custom-dark': {
                    900: '#121212',
                    800: '#1a191e',
                    700: '#1f1e24',
                    600: '#2e2d31',
                },
                'custom-blue': { 500: '#4b99ff', 400: '#65a7ff' },
                'custom-white': {
                    500: '#f2f2f2',
                    400: '#bdbdbd',
                    300: '#E0E0E0',
                },
                'custom-green': { 900: '#6fcf971a', 500: '#6fcf97' },
                'custom-red': { 900: '#eb57571a', 500: '#eb5757' },
            },
        },
        animation: {
            'alert-error': 'alertError 2s cubic-bezier(.24,.24,0,1)',
        },
        keyframes: {
            alertError: {
                '0%': { top: '-208px' },
                '80%': { top: '180px', opacity: 1 },
                '99%': { top: '250px', opacity: 0 },
                '100%': { top: '-208px', opacity: 0 },
            },
        },
    },
    plugins: [],
};
