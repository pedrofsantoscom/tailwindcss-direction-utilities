const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities(
    {
      '.ltr': {
        direction: 'ltr',
      },
      '.rtl': {
        direction: 'rtl',
      },
    },
    {
      variants: ['responsive', 'direction'],
    }
  );
});
