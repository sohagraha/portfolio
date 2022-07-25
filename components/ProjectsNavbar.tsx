import { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
    value: Category | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer hover:text-green-400";
    if (active === value) className += " text-green-500 font-bold";

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none dark:text-white">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="mongo" {...props} />
            <NavItem value="django" {...props} />
            <NavItem value="node" {...props} />
        </div>
    );
};
export default ProjectsNavbar;