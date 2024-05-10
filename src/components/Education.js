import { useRef } from "react";

// ** Framer Motion
import { motion, useScroll } from "framer-motion"

// ** Components
import EducationBox from "./EducationBox";

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">

            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>

            <div
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
                ref={ref}
            >

                <motion.div
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul
                    className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2"
                >
                    <EducationBox 
                        type="B.Sc Computer Software Engineer"
                        place="Qazvin Islamic Azad University Qazvin - Iran"
                        time="September 2020 - July 2023"
                    />
                    
                    <EducationBox 
                        type="B.Sc Computer Software Engineer"
                        place="Qazvin Islamic Azad University Qazvin - Iran"
                        time="September 2020 - July 2023"
                    />
                </ul>

            </div>

        </div>
    )
}

export default Education