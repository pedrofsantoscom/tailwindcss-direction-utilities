# tailwindcss-direction-utilities
Adds LTR and RTL utilities classes to tailwindcss

1. Run `npm i tailwindcss-direction-utilities`
2. Add lines to `tailwind.config.js`:
  ```js
  module.exports = {
    ...
    plugins: [
        require('tailwindcss-dir')(),
        require('tailwindcss-direction-utilities'),
    ]
  };
  ```
3. Usage:
  ```html
  <div class="lg:ltr lg:rtl:ltr rtl:ltr ltr:rtl md:rtl:ltr" />
  ```
  
`ltr:*` and `rtl:*` variants from [tailwindcss-dir](https://github.com/RonMelkhior/tailwindcss-dir)
