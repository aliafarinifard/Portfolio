import { useRef } from "react"

// ** Framer Motion
import { motion } from "framer-motion";

// ** Components
import LiIcon from "./LiIcon"

const Details = ({ position, company, time, address, work }) => {

    const ref = useRef(null);

    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{y:0}}
                transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;<span className="text-primary capitalize dark:text-primaryDark">@{company}</span>
                </h3>

                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>

                <p className="font-medium w-full md:text-sm">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

export default Details