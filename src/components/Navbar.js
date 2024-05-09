import Link from "next/link"
import Logo from "./Logo"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";


const MotionLink = motion(Link);


const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light"
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

            <div
                className="absolute left-[50%] top-2 translate-x-[-50%]"
            >
                <Logo />
            </div>

        </header>
    )
}

export default Navbar