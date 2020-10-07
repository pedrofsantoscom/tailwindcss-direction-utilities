const plugin = require('tailwindcss/plugin');

module.exports = {
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.ltr': {
          direction: 'ltr',
        },
        '.rtl': {
          direction: 'rtl',
        },
      });
    }),
  ],
};
