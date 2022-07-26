import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }
    return (
        <div className="text-center">
            {/* <img alt="sohagraha" className="mx-auto rounded-full "
                height="128px"
                width="128px" /> */}

            <Image
                src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
                alt="avatar"
                className="mx-auto border rounded-full "
                height="128px"
                width="128px"
                layout="intrinsic"
                quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan dark:text-white">
                <span className='text-green dark:text-white'>
                    Sohag
                </span>
                Raha
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
                Web Developer
            </p>
            {/* Resume */}
            <a
                href=""
                download="Sohag Raha - Web Developer Resume.pdf"
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer"
            >
                <GiTie className="w-6 h-6" />
                <span>Download Resume</span>
            </a>

            {/* Socials */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green dark:text-white md:w-full ">
                <a href="">
                    <AiFillYoutube className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="" >
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                </a>
                <a href="">
                    <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
                </a>
            </div>

            {/* Contacts */}
            <div
                className="py-4 my-5 bg-gray-200 dark:text-white dark:bg-slate-900 rounded-2xl"
                style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
            >
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2 text-green-700" /> <span> Dhaka, Bangladesh </span>
                </div>
                <p className="my-2 "> sohagrahabd@gmail.com </p>
                <p className="my-2"> 01857665766 / 01601620162 </p>
            </div>

            <button
                className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
                onClick={() => window.open("mailto:sohagrahabd@gmail.com")}
            >
                Email me
            </button>
            <button
                className="w-8/12 px-5 py-2 my-4 text-white transition-all bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
                onClick={changeTheme}>
                {/* //TODO remove bg black */}
                Toggle Theme
            </button>
        </div>
    )
}

export default Sidebar