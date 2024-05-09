import { useRef } from "react"
import LiIcon from "./LiIcon"
import { motion } from "framer-motion";

const EducationBox = ({ type, time, place }) => {

    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col gap-3"
            >
                <h3 className="capitalize font-bold text-2xl">
                    {type}
                </h3>

                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {place} <span className="font-bold">|</span> {time}
                </span>
            </motion.div>
        </li>
    )
}

export default EducationBox