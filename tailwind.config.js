/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#a93ddb",
        
"secondary": "#ed362d",
        
"accent": "#2ebab5",
        
"neutral": "#18161D",
        
"base-100": "#F9F8FB",
        
"info": "#6080E2",
        
"success": "#22A571",
        
"warning": "#F5B105",
        
"error": "#EE655D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
