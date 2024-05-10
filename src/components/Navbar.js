import { useState } from "react";

// ** Next
import Link from "next/link"

// ** Components
import Logo from "./Logo"

// ** Icons
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";

// ** Framer Motion
import { motion } from "framer-motion";

// ** Components
import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";

// ** Hooks
import useThemeSwitcher from "@/hooks/useThemeSwitcher";


const MotionLink = motion(Link);


const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header
            className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8"
        >

            <button className="flex-col justify-center items-center hidden md:flex" onClick={handleClickMenu}>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-[0.5rem]" : "-translate-y-0.5"}`}
                ></span>

                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
                ></span>

                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-[-0.01rem]" : "translate-y-0.5"}`}
                ></span>
            </button>

            <div
                className="w-full flex justify-between items-center md:hidden"
            >
                <nav>
                    <CustomLink href={'/'} title={"Home"} className="mr-4" />
                    <CustomLink href={'/about'} title={"About"} className="mx-4" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <MotionLink
                        href={'https://linkedin.com/in/ali-afarinifard'}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </MotionLink>

                    <MotionLink
                        href={'https://github.com/aliafarinifard'}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GithubIcon />
                    </MotionLink>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                    >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen
                    ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="min-w-[70vw] flex flex-col gap-8 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop:blur-md py-32"
                    >
                        <nav
                            className="flex items-center justify-center flex-col gap-6 text-xl"
                        >
                            <CustomMobileLink href={'/'} title={"Home"} toggle={handleClickMenu} />
                            <CustomMobileLink href={'/about'} title={"About"} toggle={handleClickMenu} />
                        </nav>

                        <nav className="flex items-center justify-center flex-wrap">
                            <MotionLink
                                href={'https://linkedin.com/in/ali-afarinifard'}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 mr-3"
                            >
                                <LinkedInIcon />
                            </MotionLink>

                            <MotionLink
                                href={'https://github.com/aliafarinifard'}
                                target="_blank"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-8 mx-3 bg-light dark:bg-dark rounded-full"
                            >
                                <GithubIcon />
                            </MotionLink>

                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark !w-7"} /> : <MoonIcon className={"fill-dark !w-7"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    :
                    null
            }

            <div
                className="absolute left-[50%] top-2 translate-x-[-50%]"
            >
                <Logo />
            </div>

        </header>
    )
}

export default Navbar