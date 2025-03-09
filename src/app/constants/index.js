export const BASE_URL = "http://localhost:1337";

// Project Images
import Woody from "../assest/Woody.png";
import HexaShop from "../assest/HexaShop.png";
import BoostEnergy from "../assest/energy.png";
import Cost from "../assest/cost.png";

// Tech Logos
import Angular from "../../../public/angular.png";
import React from "../../../public/react.png";
import Next from "../../../public/next.svg";
import Vue from "../../../public/vue.png";
import Node from "../../../public/node.png";
import Express from "../../../public/express.png";
import Nest from "../../../public/nestjs.svg";
import Tailwind from "../../../public/tailwind.svg";
import Strapi from "../../../public/strapi.svg";
import MongoDB from "../../../public/mongodb.svg";
import PostgreSQL from "../../../public/postgresql.svg";
import MySQL from "../../../public/sql.svg";
import MaterialUI from "../../../public/material_ui.svg";
import HTML5 from "../../../public/html_5.svg";
import AWS from "../../../public/aws.svg";

// Project data
export const projects = [
  {
    id: 1,
    title: "Cost Estimation App For Calculating The Cost of Software Development",
    description:
      "In this website you can calculate the cost of software development by selecting the features you want in your software. This website is built using , Next.js, MaterialUI,Express and MongoDB.",
    live: "https://www.example.com/portfolio-website",
    github: "",
    img: Cost,
    year: 2023,
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Woody Website For Selling Carpenter Services",
    description:
      "A sleek and modern website built with React.js and styled using Tailwind CSS, designed to showcase woodworking products and services. The site features an intuitive user interface with smooth navigation, responsive design for all device sizes, and a minimalist aesthetic. It allows users to browse through a range of handcrafted wooden items, view detailed product information, and get in touch with the business for custom orders.",
    live: "https://malikahad22.github.io/WooDy/",
    github: "https://github.com/malikahad22/WooDy",
    img: Woody,
    year: 2024,
    role: "Front End Developer",
  },
  {
    id: 3,
    title: "HexShop Ecommerce Website For Selling Hexagonal Products",
    description:
      "HexShop is an innovative e-commerce platform built for selling hexagonal-shaped products, ranging from home decor to office accessories. The website offers a seamless shopping experience with a modern, user-friendly interface. It features a clean and organized layout, allowing customers to easily browse through unique hexagonal designs.",
    live: "https://malikahad22.github.io/HexaShop/",
    github: "https://github.com/malikahad22/HexaShop",
    img: HexaShop,
    year: 2022,
    role: "Front End Developer",
  },
  {
    id: 4,
    title: "Landing Page for a Learning Plaform Energy",
    description:
      "This project is a modern and visually engaging landing page designed for Energy an online learning platform focused on sustainable energy education. The page offers an introduction to the platform's mission, course offerings, and key features, providing a compelling first impression to potential students.",
    live: "https://malikahad22.github.io/BoostEnergy/",
    github: "https://github.com/malikahad22/BoostEnergy",
    img: BoostEnergy,
    year: 2023,
    role: "Front End Developer",
  },
];

// About me data
export const me = {
  name: "Malik Ahad Ali",
  about:
    "A Pakistan based Software Engineer with a passion for developing innovative software solutions. I have 2 years experience and have a strong background in software development.",
  github: "https://github.com/malikahad22",
  linkedin: "https://linkedin.com/in/malikahad226",
  email: "malikahadofficial226@gmail.com",
  youtube:"https://www.youtube.com/@Code_With_Ahad",
  instagram:"https://www.instagram.com/malikahad226/",
  description:
    "Hi, I'm Malik Ahad, an Software Engineer with a BSCS degree from Lahore Garrison University. I specialize in building dynamic, user-centric digital experiences using modern technologies.With expertise in React.js, Next.js, JavaScript, Node.js, and SQL/NoSQL databases, I craft responsive, scalable, and efficient web applications. I’m skilled in both frontend (HTML, CSS, TailwindCSS, Material UI) and backend (Node.js, Express, MongoDB, PostgreSQL) development, with a keen focus on delivering intuitive interfaces and seamless user experiences.Currently, I’m focusing on leveraging React.js and TailwindCSS to create elegant and functional websites. I am passionate about OOP, DSA, and always learning to stay at the cutting edge of technology.",
};

// Skills data
export const skills = [
  {
    id: 1,
    name: "Angular",
    logo: Angular,
  },
  {
    id: 2,
    name: "React",
    logo: React,
  },
  {
    id: 3,
    name: "Vue",
    logo: Vue,
  },
  {
    id: 7,
    name: "Next.js",
    logo: Next,
  },
  {
    id: 4,
    name: "Node.js",
    logo: Node,
  },
  {
    id: 5,
    name: "Express.js",
    logo: Express,
  },
  {
    id: 6,
    name: "NestJS",
    logo: Nest,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    logo: Tailwind,
  },
  {
    id: 9,
    name: "Strapi",
    logo: Strapi,
  },
  {
    id: 10,
    name: "MongoDB",
    logo: MongoDB,
  },
  {
    id: 11,
    name: "PostgreSQL",
    logo: PostgreSQL,
  },
  {
    id: 12,
    name: "MySQL",
    logo: MySQL,
  },
  {
    id: 13,
    name: "Material UI",
    logo: MaterialUI,
  },
  {
    id: 14,
    name: "HTML5",
    logo: HTML5,
  },
  {
    id: 15,
    name: "AWS",
    logo: AWS,
  },
];

// Services data
export const services = [
  {
    id: 1,
    name: "Landing Page Development",
    description:
      "Designing and developing high-converting, visually appealing landing pages using modern technologies like React, Tailwind CSS, and more.",
    svg: ["/path/to/landing-page-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 2,
    name: "Business Websites",
    description:
      "Building professional and functional business websites with a focus on performance, scalability, and user experience, utilizing React, Node.js, and Tailwind CSS.",
    svg: ["/path/to/business-website-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 3,
    name: "Portfolio Websites",
    description:
      "Creating personal portfolio websites that showcase your skills, projects, and expertise, using React, Next.js, and Tailwind CSS for a modern look.",
    svg: ["/path/to/portfolio-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 4,
    name: "Ecommerce Websites",
    description:
      "Developing ecommerce websites with seamless user experiences, payment gateway integration, and product management systems using React, Node.js, and MongoDB.",
    svg: ["/path/to/ecommerce-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 5,
    name: "Website Customization",
    description:
      "Offering website customization services for existing websites, including UI/UX improvements, feature additions, and functionality enhancements.",
    svg: ["/path/to/customization-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 6,
    name: "API & Integration Services",
    description:
      "Integrating third-party APIs and building custom APIs to connect different services, enhance functionality, and improve the overall experience.",
    svg: ["/path/to/api-integration-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 7,
    name: "Web Applications Development",
    description:
      "Developing dynamic web applications with React, Node.js, and modern technologies, ensuring scalability, performance, and security.",
    svg: ["/path/to/web-app-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 8,
    name: "Bug Fixes & Performance Optimization",
    description:
      "Identifying and fixing bugs, improving website performance, and optimizing code for better speed and user experience.",
    svg: ["/path/to/bug-fix-icon.svg"], // Replace with your actual path to the icon
  },
  {
    id: 9,
    name: "Mobile Responsive Design",
    description:
      "Ensuring that websites and web applications are fully responsive and optimized for mobile devices, providing a seamless experience across all screen sizes.",
    svg: ["/path/to/responsive-design-icon.svg"], // Replace with your actual path to the icon
  },
];
