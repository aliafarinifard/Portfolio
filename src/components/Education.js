import { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import EducationBox from "./EducationBox";

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">

            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Education
            </h2>

            <div
                className="w-[75%] mx-auto relative"
                ref={ref}
            >

                <motion.div
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
                    style={{ scaleY: scrollYProgress }}
                />

                <ul
                    className="w-full flex flex-col items-start justify-between ml-4"
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