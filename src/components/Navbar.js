import Link from "next/link"
import Logo from "./Logo"
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";
import CustomLink from "./CustomLink";


const MotionLink = motion(Link);


const Navbar = () => {
    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between"
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
                    className="w-6 ml-3"
                >
                    <GithubIcon />
                </MotionLink>
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