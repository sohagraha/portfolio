import { services } from '../data'
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from '../animation';


const index = () => {
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h6 className="my-3 text-base font-medium dark:text-white">
        I am a full stack web developer with a passion for building beautiful, responsive websites. I have a background in web development and have worked with many different languages and frameworks. I have a strong passion for learning new technologies and constantly learning new things. I am always looking to learn new things and improve my skills.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-black "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide dark:text-white">
          What I am doing
        </h4>
      </div>
      <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger}
        initial="initial"
        animate="animate"
      >
        {services.map((service, i) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-slate-900 dark:text-white md:col-span-1 "
            key={i}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>)
}

export default index