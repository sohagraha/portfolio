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
        name: "Tweeter Clone5",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
        status: "complete",
    },

    {
        id: 6,
        name: "Color Classification using tf.js6",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
        status: "complete",
    },
    {
        id: 7,
        name: "YouTube using YouTube 7",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
        status: "complete",
    },
    {
        id: 8,
        name: "Football App8",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
        status: "complete",
    },
    {
        id: 9,
        name: "Football App8",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
        status: "complete",
    },
    {
        id: 10,
        name: "Football App8",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
        status: "complete",
    },
    {
        id: 11,
        name: "Football App8",
        image_path: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react", "Redux", "Firebase Auth"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
        status: "complete",
    },
];