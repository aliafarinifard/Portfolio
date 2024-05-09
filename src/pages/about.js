import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import ProfilePic from '../../public/images/profile/ali_afarinifard_about.jpg'
import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"



const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });


    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);


    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);


    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>Ali Afarinifard | About me</title>
                <meta name="description" content="Ali Afarinifard | Front End Developer" />
            </Head>

            <main
                className="flex w-full flex-col items-center justify-center"
            >
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />

                    <div
                        className="grid grid-cols-8 w-full gap-16"
                    >
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="font-medium">
                                I’m a passionate and young Software Engineer packing more than 3+ years of hands-on experience as a front end developer. Yet willing to work with backend technologies as well to expand my current skill set.
                            </p>

                            <p className="font-medium my-4">
                                I am always looking for new and innovative ways to bring my clients' visions to life. I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>

                            <p className="font-medium">
                                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image src={ProfilePic} alt="Ali Afarinifard Dev" className="w-full h-auto rounded-2xl" />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between">

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={15} />+
                                </span>

                                <h2 className="text-xl font-medium capitalize text-dark/75">Satisfied Clients</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={13} />+
                                </span>

                                <h2 className="text-xl font-medium capitalize text-dark/75">Projects Completed</h2>
                            </div>

                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumbers value={3} />+
                                </span>

                                <h2 className="text-xl font-medium capitalize text-dark/75">Years of experience</h2>
                            </div>

                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about