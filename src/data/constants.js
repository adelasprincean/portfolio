import ReactIcon from "../assets/skills/react.svg";
import TypeScriptIcon from "../assets/skills/typescript.svg";
import JavaScriptIcon from "../assets/skills/javascript.svg";
import HtmlIcon from "../assets/skills/html.svg";
import CssIcon from "../assets/skills/css.svg";
import TailwindIcon from "../assets/skills/tailwindcss.svg";
import MaterialUiIcon from "../assets/skills/material-ui.svg";

import FramerMotionIcon from "../assets/skills/framer-motion.svg";

import ShopifyIcon from "../assets/skills/shopify.svg";
import LiquidIcon from "../assets/skills/liquid.svg";
import ApiIcon from "../assets/skills/api.svg";
import SeoIcon from "../assets/skills/seo.svg";
import CroIcon from "../assets/skills/cro.svg";

import GitIcon from "../assets/skills/git.svg";
import GithubIcon from "../assets/skills/github.svg";
import VSCodeIcon from "../assets/skills/vscode.svg";
import FigmaIcon from "../assets/skills/figma.svg";
import IllustratorIcon from "../assets/skills/illustrator.svg";

export const Bio = {
  name: "Adela Sprincean",
  phone: "+447341489631",
  roles: ["Front End Developer", "Web Developer", "UI/UX Designer"],
  description:
    "User-focused front end developer with an eye for design and a deep understanding of usability goals. Perfectly marries functional requirements and creative elements to produce optimal interfaces. Skilled at managing time, projects and resources to accomplish development goals. Knowledge of HTML, CSS, JavaScript, and React.",
  github: "https://github.com/adelasprincean",
  resume:
    "https://drive.google.com/file/d/1QMirkSMOV5C545gvvGQaWbecr7F6CaE6/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/adela-sprincean-64236a134/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          ReactIcon,
      },
      {
        name: "TypeScript",
        image:
          TypeScriptIcon,
      },
      {
        name: "JavaScript",
        image:
          JavaScriptIcon,
      },
      {
        name: "HTML",
        image:
          HtmlIcon,
      },
      {
        name: "CSS",
        image:
          CssIcon,
      },
      {
        name: "Tailwind CSS",
        image:
          TailwindIcon,
      },
      {
        name: "Material UI",
        image:
          MaterialUiIcon,
      },
      {
        name: "Framer Motion",
        image:
          FramerMotionIcon,
      },
    ],
  },

  {
    title: "Shopify & Ecommerce",
    skills: [
      {
        name: "Shopify",
        image:
          ShopifyIcon,
      },
      {
        name: "Liquid",
        image:
          LiquidIcon,
      },
      {
        name: "REST APIs",
        image:
          ApiIcon,
      },
      {
        name: "Metafields",
        image:
          "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "CRO",
        image:
          CroIcon,
      },
      {
        name: "SEO",
        image:
          SeoIcon,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          GitIcon,
      },
      {
        name: "GitHub",
        image:
          GithubIcon,
      },
      {
        name: "VS Code",
        image:
          VSCodeIcon,
      },
      {
        name: "Figma",
        image:
          FigmaIcon,
      },
      {
        name: "Adobe Illustrator",
        image:
          IllustratorIcon,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Front End Web Developer | Automotive Ecommerce",
    company: "EverymanDriving Experiences",
    date: "April 2024 - Present",
    desc: "Develop and maintain multiple ecommerce platforms, building custom Shopify solutions with Liquid, JavaScript, metafields and REST APIs. Built a scalable white-label website using React and TypeScript, creating reusable components and integrating APIs for dynamic content. Delivered custom event availability functionality, pre-order and back-in-stock features, responsive UX improvements, CRO enhancements and ongoing SEO implementation.",    
    skills: [
      "React",
      "TypeScript",
      "Shopify",
      "Liquid",
      "Wordpress",
      "JavaScript",
      "REST APIs",
      "Metafields",
      "HTML",
      "CSS",
      "Tailwind",
      "Git",
      "CRO",
      "SEO",
    ],
  },
  {
    id: 1,
    role: "Front End Web Developer | FinTech / Financial Services",
    company: "Calibrate Consulting",
    date: "January 2022 - January 2024",
    desc: "Converted complex designs and wireframes into robust, responsive code, developed reusable components in React to enhance development efficiency, incorporated interactive data visualizations with React, Qlik, and D3.js, designed the UI for a quiz app using Figma, and played a significant role in the development of dashboard projects for a prestigious financial institution, all while creating reusable components for Storybook.",
    skills: [
      "React",
      "Qlik",
      "D3",
      "Figma",
      "MaterialUi",
      "TypeScript",
      "Css Modules",
    ],
  },
  {
    id:2,
    role: "Ireland Export Team clerk",
    company: "Tesco",
    date: "March 2021 - December 2021",
    desc: "Ensured correct and comprehensive documentation for shipments of products of animal origin, monitored and managed freight operations throughout the export process, collaborated closely with exporters and relevant authorities to generate health certificates and required paperwork, and calculated and confirmed the optimal number of products per trailer, optimizing loading efficiency and transportation logistics, all while guaranteeing compliance with health and safety regulations.",
    skills: [
      "Regulatory Complianc",
      "Data Analysis",
      "Customer Service",
      "Organizational Skills",
    ],
  },
  {
    id: 3,
    role: "Warehouse operative",
    company: "Tesco",
    date: "August 2019 - March 2021",
    desc: "Demonstrated meticulous attention to detail in picking, checking and PI counting.",
    skills: [
      "Inventory Management",
      "Attention to Detail",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time Management",
    ],
  },
  {
    id: 4,
    role: "Front end developer | PropTech / Real Estate",
    company: "Real Estate Company - Top Imobiliare",
    date: "Feb 2018 - May 2019",
    desc: "Enhanced web content and properties, elevating user experience and engagement. Revamped website appearance with original ideas, ensuring consistent styling. Optimized image assets to achieve peak performance scores on Google Lighthouse.Streamlined databases and contributed to efficient, SEO-friendly codebase.Proficiently utilized PHP, Laravel, WordPress, MySQL",
    skills: [
      "HTML",
      "CSS",
      "WordPress",
      "Php",
      "Laravel",
      "Bootstrap",
      "JavaScript",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "STATE UNIVERSITY OF MOLDOVA",
    date: "May 2016 - May 2019",
    degree: "DIPLOMA OF HIGHER EDUCATION: CYBERNETIC AND ECONOMIC INFORMATIC",
  },
  {
    id: 1,
    school: "CODIFUN - EDUCATIONAL GAME FOR YOUTH",
    date: "Apr 2019 - May 2019",
    degree: "CERTIFICATE IN WEB DEVELOPING: FRONT END WEB DEVELOPER",
  },
];

export const projects = [
  {
    id: 0,
    title: "Meals",
    description:
      "A website showcasing delicious recipes created with Next.js and CSS Modules.",
    image:
      "https://github.com/adelasprincean/portfolio/assets/51912083/65d66737-2ffe-423f-86a2-7e8a0d9d9287",
    tags: ["Next Js", "React Js", "CSS Modules"],
    github: "https://github.com/adelasprincean/meals",
  },
  {
    id: 1,
    title: "Restaurant",
    description:
      "A website showcasing culinary adventure created with React and CSS.",
    image:
      "https://github.com/adelasprincean/portfolio/assets/51912083/f97f6598-ab3f-4051-a1de-f00c3a5402f0",
    tags: ["React Js", "CSS", "JavaScript"],
    github: "https://github.com/adelasprincean/restaurant",
  },
];

export const references = [
  {
    id: 0,
    description:
      "I strongly endorse Adela as a front end developer. She's a fast learner, enthusiastic about new tech. We worked together using the following tech stack: Laravel, MySQL, HTML, CSS, SCSS, Vue.js, and jQuery. Her remarkable ability to swiftly adapt and continually learn is truly outstanding. Adela is a team player, readily assisting colleagues. Her adaptability and technical prowess make her an invaluable asset to any development team.",
    name: "Nicolae Casir",
    role: "Full Stack Web Developer",
  },
  {
    id: 1,
    description:
      "I worked with Adela for about 1 year to deliver a very complex product for one of our financial customers. Adela supported the web development side and got actively involved in all stages of the project from design to final implementation. I was impressed by how Adela took ownership of her piece of work requiring minimal guidance yet she is not afraid of reaching out for support whenever needed. She is proactive in all that she does and works with a vision of delivering the best outcome, for instance she identified changes needed to give users the best experience even though some were not in the spec. In my c.2 decades of professional experience, Adela is the best web developer I have worked alongside, she has proven technical skills but what makes Adela different is that these are coupled with a sense of ownership and a drive for excellence.",
    name: "Ines Rodriguez Roza",
    role: "Senior Data Analyst",
  },
  // {
  //   id: 2,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   name: "Lorem Ipsum",
  //   role: "Lorem Ipsum",
  // },
  // {
  //   id: 3,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   name: "Lorem Ipsum",
  //   role: "Lorem Ipsum",
  // },
  // {
  //   id: 4,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   name: "Lorem Ipsum",
  //   role: "Lorem Ipsum",
  // },
];
