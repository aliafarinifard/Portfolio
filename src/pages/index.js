// ** Next
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// ** Image
import ProfilePic from '../../public/images/profile/ali_afarinifard.png'

// ** Components
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/Icons";
import CustomLink from "@/components/CustomLink";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Afarinifard Dev</title>
        <meta name="description" content="Ali Afarinifard | Front End Developer (Next.js, React.js)" />
      </Head>

      <TransitionEffect />

      <main
        className="flex items-center text-dark w-full min-h-screen dark:text-light"
      >
        <Layout className='pt-0 md:pt-16 sm:pt-8'>

          <div
            className="flex items-center justify-between w-full gap-14 lg:flex-col"
          >
            <div className="w-1/2 md:w-full lg:w-[70%]">
              <Image
                src={ProfilePic}
                alt="ADev"
                className="animate-profileAnimate"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Ali Afarinifard | Front End Developer | Next.js, React.js" className="!text-5xl !text-left !leading-[3.8rem] xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl" />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs !leading-6">
                I'm a Front-End developer with a strong background in JavaScript, React, and Next, with about 3 years of experience. Development of custom web pages. Using Current technologies and libraries of the labor field.
              </p>

              <div className="flex items-center self-start mt-2 gap-8 lg:self-center">
                <Link
                  href={'/ali-afarinifard-resume.pdf'}
                  target="_blank"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-[background] ease duration-500 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>

                <CustomLink
                  href={'mailto:aliafarinifard@outlook.com'}
                  title={"Contact"}
                  className="text-lg font-[600] capitalize text-dark dark:text-light md:text-base"
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
