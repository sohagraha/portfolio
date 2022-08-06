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
        <div className="flex w-full overflow-x-scroll bg-gray-200 dark:text-white dark:bg-slate-800 rounded-xl">
            <div className="flex justify-center px-2 py-2 mx-auto space-x-3 list-none bg-gray-200 w-max dark:text-white dark:bg-slate-800">
                <NavItem value="all" {...props} />
                <NavItem value="React" {...props} />
                <NavItem value="MongoDB" {...props} />
                <NavItem value="django" {...props} />
                <NavItem value="JavaScript" {...props} />
            </div>
        </div>
    );
};
export default ProjectsNavbar;