import { useRef } from "react";

// ** Framer Motion
import { motion, useScroll } from "framer-motion"

// ** Components
import Details from "./Details"

const Experience = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className="my-64">

            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
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
                    <Details
                        position="Front End Developer"
                        company="Asia Startup"
                        time="November 2023 - January 2024"
                        address="Tehran, Iran"
                        work="Planned, developed, tested, and maintained responsive websites and web applications. Working with TypeScript, Material UI (MUI), Ant Design, TailwindCSS, REST API, React Query. Implemented ecommerce Dashboard Panel with React. Implemented website with Next.js. Collaborated effectively with web designer, back-end developers, and UX designers to ensure the
                        seamless design, development testing, and improvement of web products. Built reusable components to improve development efficiency across multiple projects."
                    />

                    <Details
                        position="Front End Developer"
                        company="Freelancer"
                        time="august 2020 - Present"
                        address="Iran"
                        work="Developing, optimizing and maintaining the websites and applications with Next.js, React.js,
                        Typescript, TailwindCSS to meet my clients needs and goals. Presence and interaction with team members to developing websites. Collaborated with clients to meet specific project requirements and deliver high-quality products."
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience