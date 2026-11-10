import Ft1 from "./Ft1.jpg";
import Ft2 from "./Ft2.jpg";
import Ft3 from "./Ft3.jpg";
import Ft4 from "./Ft4.jpg";
import Ft5 from "./Ft5.jpg";
import Ft6 from "./Ft6.jpg";
import about from "./about.jpg";
import home from "./home.jpg";
import logo from "./Logo.jpg";
import hero_img from "./hero.png";
import Kbt1 from "./Kbt1.jpg";
import Kbt2 from "./Kbt2.jpg";
import Kbt3 from "./Kbt3.jpg";
import Kgt1 from "./Kgt1.jpg";
import Ms1 from "./Ms1.jpg";
import Ms2 from "./Ms2.jpg";
import Ms3 from "./Ms3.jpg";
import Ms4 from "./Ms4.jpg";
import Ms5 from "./Ms5.jpg";
import Ms6 from "./Ms6.jpg";
import Mt1 from "./Mt1.jpg";
import Mt2 from "./Mt2.jpg";
import Mt3 from "./Mt3.jpg";
import Mt4 from "./Mt4.jpg";
import Mt5 from "./Mt5.jpg";
import Mt6 from "./Mt6.jpg";
import Ws1 from "./Ws1.jpg";
import Ws2 from "./Ws2.jpg";
import Ws3 from "./Ws3.jpg";
import Ws4 from "./ws4.jpg";
import Ws5 from "./Ws5.jpg";
import Ws6 from "./Ws6.jpg";

const svgDataUri = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const cart_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="19" r="1.5" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="19" r="1.5" fill="currentColor" stroke="none"/>
    <path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L19 7H7"/>
  </svg>
`);
const dropdown_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 10l5 5 5-5"/>
  </svg>
`);
const exchange_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 7h10l-2-2M17 17H7l2 2"/>
    <path d="M17 7H7l2-2M7 17h10l-2 2"/>
  </svg>
`);
const profile_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c1.7-3.2 5-4.8 8-4.8S18.3 16.8 20 20"/>
  </svg>
`);
const quality_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 0l-5.3 2.8 1-5.8L3.5 8.2l5.9-.9L12 2z"/>
  </svg>
`);
const search_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="5"/>
    <path d="M16 16l4 4"/>
  </svg>
`);
const star_dull_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2.8l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9L12 2.8z"/>
  </svg>
`);
const star_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.8l2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9L12 2.8z"/>
  </svg>
`);
const bin_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 7h16"/>
    <path d="M9 7V4h6v3"/>
    <path d="M6 7l1 13h10l1-13"/>
    <path d="M10 11v6M14 11v6"/>
  </svg>
`);
const support_image = home;
const menu_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M3 6h18M3 12h18M3 18h18"/>
  </svg>
`);
const about_img = about;
const razorpay_logo = home;
const stripe_logo = home;
const cross_icon = svgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>
`);

export const assets = {
  logo,
  hero_img,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_image,
  menu_icon,
  about_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
};

export const products = [
  {
    _id: "aaaaa",
    name: "Women T-shirt",
    description: "A comfortable and stylish t-shirt for women.",
    price: 100,
    image: [Ft1, Ft2, Ft3, Ft4, Ft5, Ft6],
    category: "women",
    subCategory: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "aaaab",
    name: "MenT-shirt",
    description: "A comfortable and stylish t-shirt for men.",
    price: 100,
    image: [Mt1, Mt2, Mt3, Mt4, Mt5, Mt6],
    category: "men",
    subCategory: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "aaaac",
    name: "Women Short",
    description: "A comfortable and stylish Short for women.",
    price: 100,
    image: [Ws1, Ws2, Ws3, Ws4, Ws5, Ws6],
    category: "women",
    subCategory: "Short",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "aaaad",
    name: "men Short",
    description: "A comfortable and stylish short for men.",
    price: 100,
    image: [Ms1, Ms2, Ms3, Ms4, Ms5, Ms6],
    category: "men",
    subCategory: "short",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestSeller: true,
  },
  {
    _id: "aaaae",
    name: "Woment T-shirt",
    description: "A comfortable and stylish t-shirt for women.",
    price: 100,
    image: [Ft1],
    category: "women",
    subCategory: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    bestSeller: true,
  },
];