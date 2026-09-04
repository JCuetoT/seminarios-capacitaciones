tailwind.config = {
    theme: {
        extend: {
            colors: {
                water: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                teal: {
                    800: '#115e59',
                    900: '#134e4a',
                },
                emerald: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                    950: '#022c22',
                },
                leaf: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                earth: {
                    50: '#fdf8f6',
                    100: '#f2e8e5',
                    200: '#ebdcc3',
                    500: '#d97706',
                    600: '#b45309',
                    700: '#92400e',
                    800: '#78350f',
                    900: '#542d0c',
                    950: '#451a03',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
};

document.addEventListener('DOMContentLoaded', function () {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});