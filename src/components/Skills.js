import { motion } from "framer-motion"
import Skill from "./Skill"

const Skills = () => {
    return (
        <>
            <h2
                className="font-bold text-8xl mt-64 w-full text-center"
            >
                Skills
            </h2>

            <div
                className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight"
            >
                <motion.dev
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{scale:1.05}}
                >
                    Web
                </motion.dev>

                <Skill name="NextJS" x={'22vw'} y={'6vw'} />
                <Skill name="MUI" x={'-29vw'} y={'5vw'} />
                <Skill name="HTML" x={'-25vw'} y={'-15vw'} />
                <Skill name="ReactJS" x={'0vw'} y={'13vw'} />
                <Skill name="SASS" x={'22vw'} y={'-12vw'} />
                <Skill name="Tailwind CSS" x={'-10vw'} y={'-16vw'} />
                <Skill name="CSS" x={'36vw'} y={'-4vw'} />
                <Skill name="Figma" x={'8vw'} y={'-20vw'} />
                <Skill name="TypeScript" x={'-18vw'} y={'2vw'} />
                <Skill name="JavaScript" x={'7vw'} y={'-6vw'} />
            </div>
        </>
    )
}

export default Skills