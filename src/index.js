module.exports = function ({ addUtilities }) {
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
};
