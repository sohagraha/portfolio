import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react"

const NavItem: FunctionComponent<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
}> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name ? (
        <Link href={route}>
            <a className="px-1 dark:text-white hover:text-green-600" onClick={() => {
                setActiveItem(name)
            }}>{name}</a>
        </Link>
    ) : <Link href={route}>
        <a className="text-xl px-2 text-green-600" onClick={() => {
            setActiveItem(name)
        }}>{name}</a>
    </Link>

}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('About');
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('About');
        }
        else if (pathname === '/projects') {
            setActiveItem('Projects');
        }
        else if (pathname === '/resume') {
            setActiveItem('Resume');
        }
    }, []);

    return (
        <div className="flex justify-between px-5 mx-2 py-3 my-2 bg-gray-200 rounded-2xl dark:bg-slate-800">
            <div>
                <span className="font-bold text-xl text-green-600 border-b-4 border-green-600">{activeItem}</span>
            </div>
            <div className="font-bold">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
            </div>
        </div>
    )
}

export default Navbar