import { useRef } from "react";
import Details from "./Details"
import { motion, useScroll } from "framer-motion"

const Experience = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">

            <h2 className="font-bold text-8xl mb-32 w-full text-center">
                Experience
            </h2>

            <div
                className="w-[75%] mx-auto relative"
                ref={ref}
            >

                <motion.div
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
                    style={{scaleY: scrollYProgress}}
                />

                <ul
                    className="w-full flex flex-col items-start justify-between ml-4"
                >
                    <Details
                        position="Front Developer"
                        company="Asia Startup"
                        time="October 2023 - January 2024"
                        address="Tehran, Iran"
                        work="Worked on a team responsible for developing new features including Panel and Admin Dashboard Planned, developed, tested, and maintained responsive websites and web applications. Working with TypeScript, MUI, Ant Design, TailwindCSS and REST api. Implemented Medical E-Commerce Dashboard Panel with React. Implemented Medical website with Next.js."
                    />

                    <Details
                        position="Front Developer"
                        company="Freelancer"
                        time="august 2020 - Present"
                        address="Iran"
                        work="Developing, optimizing and maintaining the websites and applications with Next JS, React JS, Typescript to meet my clients needs and goals. build a web application from start to finish."
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience