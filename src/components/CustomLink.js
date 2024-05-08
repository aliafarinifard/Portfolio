import Link from "next/link";
import { useRouter } from "next/router";


const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span
                className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}


export default CustomLink