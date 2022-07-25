import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../animation";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from "framer-motion";

const projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };
    return (
        <motion.div className="px-5 overflow-y-scroll h-fit" style={{ maxHeight: "100vh" }}
            variants={routeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />
            <motion.div className="relative grid grid-cols-12 gap-4 my-3"
                variants={stagger}
                initial="initial"
                animate="animate">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        project={project}
                        showDetail={showDetail}
                        setShowDetail={setShowDetail}
                    />
                ))}
            </motion.div>
        </motion.div >

    )
}

export default projects