import { useRef } from "react"

// ** Components
import LiIcon from "./LiIcon"

// ** Framer Motion
import { motion } from "framer-motion";

const EducationBox = ({ type, time, place }) => {

    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex flex-col gap-3"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}
                </h3>

                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {place} <span className="font-bold">|</span> {time}
                </span>
            </motion.div>
        </li>
    )
}

export default EducationBox