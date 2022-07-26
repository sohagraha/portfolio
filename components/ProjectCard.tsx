import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import { motion } from "framer-motion";

import Image from "next/image";
import { fadeInUp, stagger } from "../animation";

const ProjectCard: FunctionComponent<{ project: IProject; showDetail: number | null; setShowDetail: (id: number | null) => void; }> = ({
    project: {
        id,
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
        status,
    },
    showDetail,
    setShowDetail,
}) => {

    return (
        <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200 dark:text-white"
            variants={fadeInUp}
        >
            <div className="border-4 border-green-300 rounded-lg">
                <Image
                    src={image_path}
                    alt={name}
                    className="object-cover transition duration-500 rounded-lg cursor-pointer hover:scale-125"
                    onClick={() => {
                        setShowDetail(id)
                    }}
                    layout="responsive"
                    height="150"
                    width="300"
                />
            </div>
            <p className="my-2 font-bold text-center hover:text-green-500">{name}</p>

            <div id="view">
                {showDetail === id && (
                    <div className="fixed left-0 z-10 grid w-full p-2 my-auto bg-gray-100 rounded-lg h-100v top-10 md:fixed md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                        <motion.div
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.div
                                className="h-fit"
                                variants={fadeInUp}>
                                <div className="border-4 border-green-200 rounded-lg">
                                    <Image
                                        src={image_path}
                                        alt={name}
                                        className="object-cover rounded-lg cursor-pointer"
                                        layout="responsive"
                                        height="150"
                                        width="300"
                                    />
                                </div>
                                <div className="flex justify-center my-4 space-x-3">
                                    <a
                                        href={github_url}
                                        className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                    >
                                        <AiFillGithub /> <span>Github</span>
                                    </a>
                                    <a
                                        href={deployed_url}
                                        className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                    >
                                        <AiFillProject /> <span>Project</span>
                                    </a>
                                </div>
                            </motion.div>
                            <motion.div
                                className="md:hidden"
                                variants={stagger}
                                initial="initial"
                                animate="animate"
                            >
                                <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-bold text-center md:text-3xl">{name}</motion.h2>
                                <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

                                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center mt-5 space-x-2 text-sm tracking-wider">
                                    {key_techs.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="hidden md:block"
                            variants={stagger}
                            initial="initial"
                            animate="animate"
                        >
                            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-bold text-center md:text-3xl">{name}</motion.h2>
                            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

                            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center mt-5 space-x-2 text-sm tracking-wider">
                                {key_techs.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 my-1 bg-gray-200 hover:bg-slate-500 dark:bg-dark-200 rounde-xl"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>

                        <button
                            onClick={() => setShowDetail(null)}
                            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                        >
                            <MdClose size={30} className="text-red-600 bg-gray-300 rounded-full" />
                        </button>
                    </div>
                )}
            </div>
        </motion.div >
    );
};

export default ProjectCard;