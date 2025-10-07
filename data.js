export const navbar = [
  {
    href: "#home",
    label: "Home",
    id: 1,
  },
  {
    href: "#features",
    label: "Features",
    id: 2,
  },
  {
    href: "#shop",
    label: "Shop",
    id: 3,
  },
  {
    href: "#testimonials",
    label: "Testimonials",
    id: 4,
  },
  {
    href: "#blogs",
    label: "Blogs",
    id: 5,
  },
  {
    href: "#contact",
    label: "Contact",
    id: 6,
  },
];

// import { label } from "framer-motion/client";
import heroImg1 from "./src/Images/banner-image-1.jpg";
import heroImg2 from "./src/Images/banner-image-2.jpg";
import heroImg3 from "./src/Images/banner-image-3.jpg";
import heroImg4 from "./src/Images/banner-image-4.jpg";
import heroImg5 from "./src/Images/banner-image-5.jpg";
import heroImg6 from "./src/Images/banner-image-6.jpg";

export default [heroImg1];

export const HeroSection = [
  {
    src: heroImg1,
    id: 1,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
  {
    src: heroImg2,
    id: 2,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
  {
    src: heroImg3,
    id: 3,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
  {
    src: heroImg4,
    id: 4,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
  {
    src: heroImg5,
    id: 5,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
  {
    src: heroImg6,
    id: 6,
    alt: "A lady on jacket",
    title: "Soft leather jackets",
    description:
      "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    link: "Discover Now",
  },
];

import {
  faCalendarCheck,
  faShoppingBag,
  faCartFlatbedSuitcase,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

export const OptionSection = [
  {
    title: "Book An Appointment",
    icon: faCalendarCheck,
    id: 1,
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    title: "Pick Up In Store",
    icon: faShoppingBag,
    id: 2,
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    title: "Special Packaging",
    icon: faCartFlatbedSuitcase,
    id: 3,
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
  {
    title: "Free Global Returns",
    icon: faRotate,
    id: 4,
    description:
      "At imperdiet dui accumsan sit amet nulla risus est ultricies quis.",
  },
];

// Cart section
import cartImg1 from "./src/Images/cat-item1.jpg";
import cartImg2 from "./src/Images/cat-item2.jpg";
import cartImg3 from "./src/Images/cat-item3.jpg";

//Cart backround
import Cartbg1 from "./src/Images/cat-item1.jpg";
import Cartbg2 from "./src/Images/cat-item2.jpg";
import Cartbg3 from "./src/Images/cat-item3.jpg";

export const carts = [
  {
    background: Cartbg1,
    image: cartImg1,
    label: "SHOP FOR MEN",
    id: 1,
    alt: "A man on black",
  },
  {
    background: Cartbg2,
    image: cartImg2,
    label: "SHOP FOR WOMEN",
    id: 2,
    alt: "A woman on White",
  },
  {
    background: Cartbg3,
    image: cartImg3,
    label: "SHOP ACCESSORIES",
    alt: "An Image of Accessories",
    id: 3,
  },
];

// New arrivals
import arrivalImg1 from "./src/Images/product-item-1.jpg";
import arrivalImg2 from "./src/Images/product-item-2.jpg";
import arrivalImg3 from "./src/Images/product-item-3.jpg";
import arrivalImg4 from "./src/Images/product-item-4.jpg";
import arrivalImg5 from "./src/Images/product-item-10.jpg";

export const newArrival = [
  {
    image: arrivalImg1,
    id: 1,
    label: "Dark florish onepiece",
    price: "$95.00",
  },
  {
    image: arrivalImg2,
    id: 2,
    label: "Baggy Shirt",
    price: "$55.00",
  },
  {
    image: arrivalImg3,
    id: 3,
    label: "Cotton off-white shirt",
    price: "$65.00",
  },
  {
    image: arrivalImg4,
    id: 4,
    label: "WHITE T-SHIRT",
    price: "$50.00",
  },
  {
    image: arrivalImg5,
    id: 5,
    label: "CROP SWEATER",
    price: "$70.00",
  },
];

//Best Selling
import bestSellingImg1 from "./src/Images/product-item-4.jpg";
import bestSellingImg2 from "./src/Images/product-item-3.jpg";
import bestSellingImg3 from "./src/Images/product-item-5.jpg";
import bestSellingImg4 from "./src/Images/product-item-6.jpg";
import bestSellingImg5 from "./src/Images/product-item-9.jpg";
import bestSellingImg6 from "./src/Images/product-item-10.jpg";

export const bestSellingSection = [
  {
    image: bestSellingImg1,
    id: 6,
    label: "Dark florish onepiece",
    price: "$95.00",
  },
  {
    image: bestSellingImg2,
    id: 7,
    label: "Baggy Shirt",
    price: "$55.00",
  },
  {
    image: bestSellingImg3,
    id: 8,
    label: "Cotton off-white shirt",
    price: "$65.00",
  },
  {
    image: bestSellingImg4,
    id: 9,
    label: "Handmade crop sweater",
    price: "$50.00",
  },
  {
    image: bestSellingImg5,
    id: 10,
    label: "Dark florish onepiece",
    price: "$70.00",
  },
  {
    image: bestSellingImg6,
    id: 11,
    label: "Cotton off-white shirt",
    price: "$70.00",
  },
];

//Also Like
import alsoLikeImg1 from "./src/Images/product-item-5.jpg";
import alsoLikeImg2 from "./src/Images/product-item-6.jpg";
import alsoLikeImg3 from "./src/Images/product-item-1.jpg";
import alsoLikeImg4 from "./src/Images/product-item-7.jpg";
import alsoLikeImg5 from "./src/Images/product-item-8.jpg";

export const alsoLikeSection = [
  {
    image: alsoLikeImg1,
    id: 12,
    label: "Dark florish onepiece",
    price: "$95.00",
  },
  {
    image: alsoLikeImg2,
    id: 13,
    label: "Baggy Shirt",
    price: "$55.00",
  },
  {
    image: alsoLikeImg3,
    id: 14,
    label: "Cotton off-white shirt",
    price: "$65.00",
  },
  {
    image: alsoLikeImg4,
    id: 15,
    label: "WHITE T-SHIRT",
    price: "$50.00",
  },
  {
    image: alsoLikeImg5,
    id: 16,
    label: "CROP SWEATER",
    price: "$70.00",
  },
];

import shopImg from "./src/Images/single-image-2.jpg";

export const shopCollectionSection = [
  {
    image: shopImg,
    id: 1,
    label: "Classic winter collection",
    description:
      "Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.",
  },
];

import blogImg1 from "./src/Images/post-large-image1.jpg";
import blogImg2 from "./src/Images/post-large-image2.jpg";
import blogImg3 from "./src/Images/post-large-image3.jpg";

export const blogPostSection = [
  {
    image: blogImg1,
    id: 1,
    label: "How to look outstanding in pastel",
    year: "Fashion / jul 11, 2022",
    description:
      "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...",
  },
  {
    image: blogImg2,
    id: 2,
    label: "Top 10 fashion trend for summer",
    year: "Fashion / jul 11, 2022",
    description:
      "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
  },
  {
    image: blogImg3,
    id: 3,
    label: "Crazy fashion with unique moment",
    year: "Fashion / jul 11, 2022",
    description:
      "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
  },
];

import brandLogo1 from "./src/Images/logo1.png";
import brandLogo2 from "./src/Images/logo2.png";
import brandLogo3 from "./src/Images/logo3.png";
import brandLogo4 from "./src/Images/logo4.png";
import brandLogo5 from "./src/Images/logo5.png";

export const brandLogos = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
];

import instaImg1 from "./src/Images/insta-item1.jpg";
import instaImg2 from "./src/Images/insta-item2.jpg";
import instaImg3 from "./src/Images/insta-item3.jpg";
import instaImg4 from "./src/Images/insta-item4.jpg";
import instaImg5 from "./src/Images/insta-item5.jpg";
import instaImg6 from "./src/Images/insta-item6.jpg";

export const instagramImages = [
  instaImg1,
  instaImg2,
  instaImg3,
  instaImg4,
  instaImg5,
  instaImg6,
];

export const footerContents = {
  logo: "NEA-DEV",
  description:
    "Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.",
  section: [
    {
      title: "Quick Links",
      links: ["Home", "About", "Services", "Single item", "Contact"],
    },

    {
      title: "Help & Info",
      links: [
        "Track Your Order",
        "Returns + Exchanges",
        "Shipping + Delivery",
        "Contact Us",
        "Find us easy",
        "Faqs",
      ],
    },
    {
      title: "Contact Us",
      details: [
        {
          type: "email",
          label: "Do you have any questions or suggestions?",
          value: "nwaforebuka12@gmail.com",
        },
        {
          type: "phone",
          label: "Do you need support? Give us a call.",
          value: "+2348100655023",
        },
      ],
    },
  ],
};

export const reviews = [
  {
    description:
      "Best fitted white denim shirt more white denim than expected flexible carzy soft",
    customer: "Denim Craze",
    id: 1,
  },
  {
    description:
      "More than expected crazy soft, flexible and best fitted white simple denim shirts.",
    customer: "Confi Dence",
    id: 2,
  },
  {
    description:
      "Best fitted white denim shirt more white denim than expected flexible carzy soft",
    customer: "Joseph Dick",
    id: 3,
  },
  {
    description:
      "More than expected crazy soft, flexible and best fitted white simple denim shirts.",
    customer: "Crystal Lent",
    id: 4,
  },
  {
    description:
      "Best fitted white denim shirt more white denim than expected flexible carzy soft",
    customer: "Austine Neche",
    id: 5,
  },
];

import dhlImg from "./src/Images/dhl-logo.png";
import masterCardImg from "./src/Images/master-card.png";
import paypalImg from "./src/Images/paypal-card.png";
import visaCardImg from "./src/Images/visa-card.png";
import arctIconImg from "./src/Images/arct-icon.png";

export const footer2Images = [
  arctIconImg,
  dhlImg,
  visaCardImg,
  paypalImg,
  masterCardImg,
];
