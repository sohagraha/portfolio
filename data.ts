import { RiComputerLine } from "react-icons/ri";
import { FaBeer, FaPython, FaReact, FaServer } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from './type'
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { SiAdobephotoshop, SiC, SiCplusplus, SiExpress, SiFigma, SiGitkraken, SiMongodb, SiNetlify, SiOracle, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "handle database, server, api using <b>Express </b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
    },
    {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
            "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
    },
    {
        Icon: RiComputerLine,
        title: "Whatever",
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
    },
];

export const languages: ISkill[] = [
    {
        Icon: SiC,
        name: "C",
        level: "96",
    },
    {
        Icon: SiCplusplus,
        name: "C++",
        level: "88",
    },
    {
        Icon: TbBrandJavascript,
        name: "Java Script",
        level: "95",
    },
    {
        Icon: FaReact,
        name: "React",
        level: "92",
    },
    {
        Icon: DiNodejs,
        name: "Node js",
        level: "88",
    },
    {
        Icon: SiExpress,
        name: "Express JS",
        level: "82",
    },
    {
        Icon: TbBrandReactNative,
        name: "React Native",
        level: "76",
    },
    {
        Icon: TbBrandNextjs,
        name: "Next JS",
        level: "82",
    },
    {
        Icon: SiTypescript,
        name: "Typescript",
        level: "70",
    },
    {
        Icon: FaPython,
        name: "Python",
        level: "72",
    },
    {
        Icon: SiMongodb,
        name: "MongoDB",
        level: "86",
    },
    {
        Icon: SiOracle,
        name: "Oracle",
        level: "90",
    },
    {
        Icon: BsBootstrapFill,
        name: "Bootstrap",
        level: "94",
    },
    {
        Icon: SiTailwindcss,
        name: "TailWind CSS",
        level: "90",
    },
];

export const tools: ISkill[] = [
    {
        Icon: BsGithub,
        name: "Github",
        level: "94",
    },
    {
        Icon: SiFigma,
        name: "Figma",
        level: "85",
    },
    {
        Icon: SiGitkraken,
        name: "Gitkraken",
        level: "78",
    },
    {
        Icon: SiAdobephotoshop,
        name: "Adobe Photoshop",
        level: "68",
    },
    {
        Icon: SiNetlify,
        name: "Netlify",
        level: "88",
    },
    {
        Icon: SiVercel,
        name: "Vercel",
        level: "80",
    },
];

export const projects: IProject[] = [
    {
        id: 1,
        name: "RGB Color Generator Pro",
        description:
            "This Project made with pure javascript. Here user can generate random color and save it in local storage. User can make custom color by using RGB color slider. At a time user can copy the hex form or RGB form of a color. User add Color on Custom Color option. Preset Color contains some collection of a color anyone can easily get the color code by clicking on particular color. User can also reset the color from Custom Color option. User can set background image and customize the image using the site. Sweet alert is used for alerting the user which color code is copied on clipboard. ",
        image_path: "https://i.ibb.co/bsy88T1/Color-Generator-1.jpg",
        deployed_url: "https://color-generator-pro-sr.netlify.app/",
        github_url: "https://github.com/sohagraha/Dom-Projects/tree/main/3.%20RGB%20Color%20Generator%20pro%20v3.0",
        category: ["JavaScript"],
        key_techs: ["HTML", "CSS", "Javascript"],
        status: "complete",
    },
    {
        id: 2,
        name: "Random Quote Generator",
        image_path: "https://i.ibb.co/ng8ngXy/Random-Quote-Generator.jpg",
        deployed_url: "https://app.netlify.com/sites/random-quote-generator-sr",
        github_url: "https://github.com/sohagraha/Dom-Projects/tree/main/4.%20Random%20Quotes%20Generator",
        category: ["JavaScript"],
        description:
            "A application made with vanilla javascript. This application will generate random quote when any user click on new Quote button.",
        key_techs: ["HTML", "CSS", "Javascript"],
        status: "complete",
    },

    {
        id: 3,
        name: "Counter app with custom Increment and Decrement Feature",
        image_path: "https://i.ibb.co/hYgY49h/counter-app.jpg",
        deployed_url: "https://counter-app-sr.netlify.app/",
        github_url: "https://github.com/sohagraha/Dom-Projects/tree/main/6.%20Counter%20Application",
        category: ["JavaScript"],
        description:
            "In this application I made two field for input value which indicate the increment and decrement value.Here I use vanilla javascript to make this application. By clicking on increment button the value of the field will increase by the value of increment field. By clicking on decrement button the value of the field will decrease by the value of decrement field.",
        key_techs: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        status: "complete",
    },

    {
        id: 4,
        name: "Multiple Converter",
        image_path: "https://i.ibb.co/vxvZ1NH/multiple-converter.jpg",
        deployed_url: "https://multiple-converter-sr.netlify.app/",
        github_url: "https://github.com/sohagraha/Dom-Projects/tree/main/6.%20Counter%20Application",
        category: ["JavaScript"],
        description:
            "This application is made with vanilla javascript. This application will convert any number into different unit. User can select the unit and get the result. This is made for testing purpose and practice purpose. Here some unit are missing but I will add them soon.",
        key_techs: ["HTML", "CSS", "Javascript"],
        status: "complete",
    },

    {
        id: 5,
        name: "Recipe Site Front Page",
        image_path: "https://i.ibb.co/Pmb8Hgv/screencapture-sohagraha-github-io-assignment-one-2022-08-06-11-13-45.png",
        deployed_url: "https://sohagraha.github.io/assignment-one/",
        github_url: "https://github.com/sohagraha/assignment-one",
        category: ["HTML", "CSS"],
        description:
            "Front page for a recipes site, Here I use HTML and design with css. Here we try to add some various section to practice the design. This project is made for practice purpose and testing purpose.When i start learn HTML and CSS I create this Project.",
        key_techs: ["HTML", "CSS"],
        status: "complete",
    },

    {
        id: 6,
        name: "Football Team Site Landing Page Design",
        image_path: "https://i.ibb.co/fFrBTx9/screencapture-sohagraha-github-io-responsive-football-2022-08-06-11-29-33.png",
        deployed_url: "https://sohagraha.github.io/responsive-football/",
        github_url: "https://github.com/sohagraha/responsive-football",
        category: ["HTML", "CSS"],
        description:
            "Front page for a Football Team Or best Players list, Here I use HTML and design with css. Here we try to add some various section to practice the design. This project is made for practice purpose and testing purpose.When I start learn HTML and CSS I create this Project. Player Card is the main part here and video are embed in this project.",
        key_techs: ["HTML", "CSS"],
        status: "complete",
    },
    {
        id: 7,
        name: "Leader board Site Front Page Design",
        image_path: "https://i.ibb.co/c8ry0R1/screencapture-leaderboard-figma-netlify-app-2022-08-06-11-40-34.png",
        deployed_url: "https://leaderboard-figma.netlify.app/",
        github_url: "https://github.com/sohagraha/leaderboard",
        category: ["HTML", "CSS"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: ["HTML", "CSS"],
        status: "complete",
    },
    {
        id: 8,
        name: "Product with variation and cart",
        image_path: "https://i.ibb.co/R6MfHXt/screencapture-macbookpro-sohag-netlify-app-2022-08-06-13-08-04.png",
        deployed_url: "https://macbookpro-sohag.netlify.app/",
        github_url: "https://github.com/sohagraha/Macbook-Pro-Variation-Price",
        category: ["HTML", "CSS", "JavaScript"],
        description:
            "Shopping cart with variation and price. Update the variation of the product and price will be updated automatically. Apply coupon code and get discount. The discount will be applied on the total price. The updated price will be shown in the cart. Here I use vanilla javascript to make this application. HTML and CSS is used for this application.",
        key_techs: ["HTML", "CSS", "JavaScript"],
        status: "complete",
    },
    {
        id: 9,
        name: "Avengers - Service Website Landing Page Design",
        image_path: "https://i.ibb.co/S62ZrwZ/screencapture-sohagraha-github-io-avengers-multipurpose-Html-Css-Bootstrap-2022-08-06-13-56-29.png",
        deployed_url: "https://sohagraha.github.io/avengers-multipurpose-Html-Css-Bootstrap/",
        github_url: "https://github.com/sohagraha/avengers-multipurpose-Html-Css-Bootstrap",
        category: ["HTML", "CSS"],
        description:
            "Avengers - Service Website Landing Page Design. This project is made for practice purpose and testing purpose.When I start learn HTML and CSS I create this Project. Service section and price card include in this project.",
        key_techs: ["HTML", "CSS"],
        status: "complete",
    },
    {
        id: 10,
        name: "E-commerce Website Home Page Design",
        image_path: "https://i.ibb.co/6Hthytq/screencapture-sohagraha-github-io-panda-store-2022-08-06-14-03-33.png",
        deployed_url: "https://sohagraha.github.io/panda-store/",
        github_url: "https://github.com/sohagraha/panda-store",
        category: ["HTML", "CSS"],
        description:
            "Panda Store is a e-commerce website. This project is made for practice purpose and testing purpose.When I start learn HTML and CSS I create this Project. Product card include in this project.",
        key_techs: ["HTML", "CSS"],
        status: "complete",
    },
    {
        id: 11,
        name: "Modern CV",
        image_path: "https://i.ibb.co/fGqP8fR/screencapture-sohagraha-github-io-modern-cv-2022-08-06-15-11-54.png",
        deployed_url: "https://sohagraha.github.io/modern-cv/",
        github_url: "https://github.com/sohagraha/modern-cv",
        category: ["HTML", "CSS", "JavaScript"],
        description:
            "Modern CV. Personal CV Website. This project is made for practice purpose and testing purpose.When I start learn HTML and CSS I create this Project. CV section include in this project.",
        key_techs: ["HTML", "CSS", "JavaScript"],
        status: "complete",
    },
    {
        id: 12,
        name: "Camera Shop Website - E-commerce Website",
        image_path: "https://i.ibb.co/b7VZ1zq/screencapture-camera-zone-e18aa-web-app-2022-08-06-15-28-37.png",
        deployed_url: "https://camera-zone-e18aa.web.app/",
        github_url: "https://github.com/sohagraha/Camera-Shop-Client",
        category: ["HTML", "CSS", "JavaScript", "React", "Firebase", "NodeJS", "MongoDB", "ExpressJS"],
        description:
            "Camera Zone is Camera selling site. Any user can buy from Here.Here I am using HTML,CSS,Javascript,React,Node JS, Mongo DB,Firebase etc. Here any user can buy new camera before buying user must login to this website. When Any of user want to buy a camera simple they place the order and user also can delete their order. Different Dashboard for user and admin After valid Login user can view their name on the navbar. Every services contains Buy Now button. By clicking Buy Now user can see the specific details. Admin make another admin, add product, Manage Order",
        key_techs: ["HTML", "CSS", "JavaScript", "React", "Firebase", "NodeJS", "MongoDB", "ExpressJS"],
        status: "complete",
    },
    {
        id: 13,
        name: "Traveliya - Travel Agency Website",
        image_path: "https://i.ibb.co/w0q1hJG/screencapture-travel-agency-cee2d-web-app-home-2022-08-06-15-36-38.png",
        deployed_url: "https://travel-agency-cee2d.web.app/",
        github_url: "https://github.com/sohagraha/Travel-Agency-Package-Details-Client",
        category: ["HTML", "CSS", "React", "Firebase", "NodeJS", "MongoDB", "ExpressJS"],
        description:
            "Here I am using HTML,CSS,Bootstrap,Javascript,React,Node JS, Mongo DB,Firebase etc. Traveliya is a Travel agency which help you to explore everywhere. Here any user can booking sit for going to travel before booking user must login to this website. When Any of user want to go a specific place simple they place the order and user also can delete their order When any user place an order the admin will update the order status from pending to Approved. After valid Login user can view their name on the navbar. Every services contains details button. By clicking Details button user can see the specific details.",
        key_techs: ["HTML", "CSS", "JavaScript", "React", "Firebase", "NodeJS", "MongoDB", "ExpressJS"],
        status: "complete",
    },
    {
        id: 14,
        name: "Bright IT - Tech Service Provider Website",
        image_path: "https://i.ibb.co/6wM7TJy/screencapture-react-router-training-netlify-app-services-2022-08-06-15-41-27.png",
        deployed_url: "https://react-router-training.netlify.app/",
        github_url: "https://github.com/sohagraha/Training-Institute-Bright-IT",
        category: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
        description:
            "his is an official website for promoting Bright-IT's Courses. Basically here displayed all runninng courses and anybody can directly enroll any course by paying the course fee. If any user have any question they can use contact us form and Office Address with phone number are also given in this site also.",
        key_techs: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
        status: "complete",
    },
    {
        id: 15,
        name: "Distribute Money and Spend Tracker",
        image_path: "https://i.ibb.co/zrjmLXD/screencapture-react-sohag-netlify-app-2022-08-06-15-46-05.png",
        deployed_url: "https://react-sohag.netlify.app/",
        github_url: "https://github.com/sohagraha/Distribute-Money-To-Your-Organization",
        category: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
        description:
            "This is simple project for manage and distribution of money to the DIU Faculty Members. Here the system will help us to track total transaction and total amount. It also make a list as a transection history. So, when we need to check the previous inserted data we can easily find it.",
        key_techs: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
        status: "complete",
    },
];