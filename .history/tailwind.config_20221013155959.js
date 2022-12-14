/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        // 800: "800px",
        // 580:"400px",
        // 620:"620px",
        // 122:"122px",
        // 60:"60px",
        // 94:"94px",
        // 1200:"1200px",
        // 80:"80px",
        // 238:"238px",
        // 330:"330px",
        // 40:"40px",
        // 20:"20px",
        // 30:"30px",
        // 15:"15px",
        // 500:"500px",
        // 250:"250px",
        // 125:"125px",
        // 700:"700px",
        // '40%':"40%",
        // '46%':"46%",
        // '10%':"10%",
        // '42%':"42%",
        // '75%':"75%",
        // '6%':"6%",
        // '57%':"57%",
        // '5%':"5%",
        // '64%' :"64%",
        // '20%':"20%",
        // '68%':"68%",
        // '41%':"41%",
        // '82%':"82%",
        // '18':"18%",
        
      },
      backgroundImage:{
        'slider':"url('./img/chef-bg.png')",
        'sliderPizza':"url('./img/hero_pizza.png')",
        'menudetail':"url('./img/menu_pattern3-min.png')",
      },
      opacity:{
        0.3:"0.3"
      },
      fontFamily: {
        'delius':'Delius Unicase, cursive',
        'rubik': 'Rubik, sans-serif',
        'dirt':'Rubik Dirt, cursive',
      },
      colors: {
        'primary':'#fdba74',
      },
      boxShadow: {
        'abc': '0 1px 2px 2px rgba(255, 248, 239, 1)'
      },
      screens: {
        'phone':'375px',
        
      }
      
      
    },
  },
  plugins: [],
}