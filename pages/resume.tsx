import { languages, tools } from "../data";
import Bar from "../components/Bar";

const resume = () => {
    return (
        <div className="px-6 py-2">
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-1 dark:text-white">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Computer Science & Engineering
                        </h5>
                        <p className="font-semibold">Daffodil International University (2018-2022) - <small className="font-thin">CGPA 3.88 out of 4.00 </small></p>

                        <p className="my-3">
                            I complete my studies in Computer Science and Engineering at the Daffodil International University. I have a strong passion for learning new technologies and constantly learning new things. I am always looking to learn new things and improve my skills.
                        </p>
                    </div>
                    <div className="">
                        <h5 className="my-2 text-xl font-bold">
                            Higher Secondary School Certificate(Science)
                        </h5>
                        <p className="font-medium">Govt. Bnagabandhu College, Gopalganj (2015-2017) - <small className="font-thin">GPA 4.17 out of 5.00 </small></p>

                        <p className="my-3">
                            I complete my studies in Computer Science and Engineering at the Daffodil International University. I have a strong passion for learning new technologies and constantly learning new things. I am always looking to learn new things and improve my skills.
                        </p>
                    </div>
                </div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-1 dark:text-white">
                <div className="">
                    <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
                    <div className="grid my-2 gap-x-2 md:grid-cols-2 xl:grid-cols-3">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="grid gap-x-2 md:grid-cols-2 xl:grid-cols-3">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;