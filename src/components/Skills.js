import { motion } from "framer-motion"
import Skill from "./Skill"

const Skills = () => {
    return (
        <>
            <h2
                className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32"
            >
                Skills
            </h2>

            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
            >
                <motion.dev
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{scale:1.05}}
                >
                    Web
                </motion.dev>

                <Skill name="NextJS" x={'22vw'} y={'6vw'} />
                <Skill name="MUI" x={'-31vw'} y={'11vw'} />
                <Skill name="HTML" x={'-26vw'} y={'-13vw'} />
                <Skill name="ReactJS" x={'0vw'} y={'13vw'} />
                <Skill name="SASS" x={'22vw'} y={'-18vw'} />
                <Skill name="Tailwind CSS" x={'-10vw'} y={'-18vw'} />
                <Skill name="CSS" x={'36vw'} y={'-4vw'} />
                <Skill name="Figma" x={'9vw'} y={'-20vw'} />
                <Skill name="TypeScript" x={'-20vw'} y={'2vw'} />
                <Skill name="JavaScript" x={'7vw'} y={'-11vw'} />
            </div>
        </>
    )
}

export default Skills