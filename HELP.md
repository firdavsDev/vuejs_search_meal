YT video tutorial: https://youtu.be/cfiN8lCA3RM

# Create Project:

    npm create vite@latest

# Install dependencies:

    npm install

# Install additional dependencies:

    npm install axios
    npm install vue-router
    npm install vuex
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p // create tailwind.config.js and postcss.config.js
    npm install -D @tailwindcss/forms

## Modify tailwind.config.js:
    ```js
    module.exports = {
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
        darkMode: false, // or 'media' or 'class'
        theme: {
            extend: {},
        },
        variants: {
            extend: {},
        },
        plugins: [],
    }
    ```
## Modify style.css:
    ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```


# Run the app:

    npm run dev
