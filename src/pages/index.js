import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import ProfilePic from '../../public/images/profile/ali_afarinifard.png'
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import CustomLink from "@/components/CustomLink";
import HireMe from "@/components/HireMe";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Afarinifard Dev</title>
        <meta name="description" content="Ali Afarinifard | Front End Developer (Next.js, React.js)" />
      </Head>

      <main
        className="flex items-center text-dark w-full min-h-screen dark:text-light"
      >
        <Layout className='pt-0'>

          <div
            className="flex items-center justify-between w-full gap-14"
          >
            <div className="w-1/2">
              <Image src={ProfilePic} alt="ADev" className="animate-profileAnimate" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Ali Afarinifard | Front End Developer | Next.js, React.js" className="!text-5xl !text-left !leading-[3.8rem]" />

              <p className="my-4 text-base font-medium">
                I'm a Front-End developer with a strong background in JavaScript, React, and Next, with about 3 years of experience. Development of custom web pages. Using Current technologies and libraries of the labor field.
              </p>

              <div className="flex items-center self-start mt-2 gap-8">
                <Link
                  href={'/ali_afarinifard_resume.pdf'}
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-[background] ease duration-500 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <CustomLink
                  href={'mailto:aliafarinifard@outlook.com'}
                  title={"Contact"}
                  className="text-lg font-[600] capitalize text-dark dark:text-light"
                />
              </div>
            </div>
          </div>

        </Layout>

        <HireMe />
      </main>
    </>
  );
}
