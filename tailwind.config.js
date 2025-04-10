/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-custom-green': '#f5f0e2',
      },
    },
  },
  plugins: [],
}
