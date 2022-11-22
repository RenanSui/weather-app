/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                customWeather: '0 8px 32px 0px rgba(0, 0, 0, 0.3)',
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
