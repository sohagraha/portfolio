import Link from "next/link";
import { useEffect, useState } from "react"

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('About');

    useEffect(() => {
        const pathname = window.location.pathname;
        if (pathname.includes('/')) {
            setActiveItem('About');
        }
        else if (pathname.includes('/projects')) {
            setActiveItem('Projects');
        }
        else if (pathname.includes('/resume')) {
            setActiveItem('Resume');
        }
    }, []);

    return (
        <div className="flex justify-between px-2 py-2">
            <div>
                <span className="font-bold text-green-600">{activeItem}</span>
            </div>
            <div className="font-bold text-red-500">
                {activeItem !== 'About' &&
                    <Link href="/">
                        <a className="px-1" onClick={() => {
                            setActiveItem('About')
                        }}>About</a>
                    </Link>}
                {activeItem !== 'Projects' &&
                    <Link href="/projects">
                        <a className="px-1" onClick={() => {
                            setActiveItem('Projects')
                        }}>Projects</a>
                    </Link>}
                {activeItem !== 'Resume' &&
                    <Link href="/resume">
                        <a className="px-1" onClick={() => {
                            setActiveItem('Resume')
                        }}>Resume</a>
                    </Link>}
            </div>
        </div>
    )
}

export default Navbar