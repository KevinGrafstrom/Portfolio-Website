'use client';
import Image from "next/image";
import {useEffect, useRef} from "react";
import gsap from 'gsap';

// export const metadata: Metadata = {
//   title: 'Grafstrom.dev',
// }

export default function Home(): React.ReactElement {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(thirdText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: ((xPercent + 100 + 100) % 200 - 100)});
    gsap.set(fourthText.current, {xPercent: ((xPercent + 100 + 100) % 200 - 100)});
    xPercent += 0.02;
    if (xPercent > 100) {
      xPercent = -100;
    }
    requestAnimationFrame(animation);
  }

  const headerContainer: React.ReactElement = (
    <div className="cool-container">
      <div className="inline-block py-2">
        <Image src="grafstrom.svg" className="inline-block" alt="Grafstrom.dev Logo" width="200" height="60">
        </Image>
      </div>
      <div className="inline-block float-end py-2">
        <a
          className="font-bold no-underline text-2xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#!"
          data-twe-ripple-color="light"
        >Home</a
        >
        <a
          className="font-bold no-underline text-2xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#!"

          data-twe-ripple-color="light"
        >Projects</a
        >
        <div className="inline-block"><a
          className="font-bold no-underline text-2xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#!"
          data-twe-ripple-color="light"
        >Work Experience</a
        ></div>
        <a
          className="font-bold no-underline text-2xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#!"
          data-twe-ripple-color="light"
        >Education</a>
        <a
          className="font-bold no-underline text-2xl text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#!"
          data-twe-ripple-color="light"
        >Contact</a>
      </div>
    </div>
  )

  return (
    <html className="bg-blue-950">
    <body>

    <header>
      <div className="bg-slate-100 fixed w-screen z-10">
        {headerContainer}
      </div>

    </header>

    <div className="bg-blue-100 overflow-hidden invisible">
      {headerContainer}
    </div>


    <div className="overflow-hidden m-auto text-left py-8 bg-blue-950">
      <div className="cool-container">
        <div className="approach-column">
          <div className="text-7xl text-left font-bold text-white pt-2">
            An <span className="text-amber-600">Artistic</span> Approach to <span className="text-pink-600">Software Development</span>
          </div>
          <div className="text-2xl text-left pt-8 pb-4 text-white">
            I combine my experience studying computer engineering at the University of Toronto
            and working as a software developer with the creativity I developed in a rock band.
          </div>
        </div>
        <div className="creative-illustration">
          <Image src="illustration.svg" className="inline-block" alt="Grafstrom.dev Logo" width="1000" height="0">
          </Image>
        </div>
      </div>
    </div>


    <div className="text-8xl text-center bg-slate-900 text-white font-bold overflow-hidden h-32 pt-2">
      <div className="whitespace-nowrap hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block"
           ref={firstText}>👇🏻Recent PProjects👇🏻
      </div>
      <div className="relative whitespace-nowrap hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block"
           style={{bottom: "96px"}} ref={secondText}>👇🏻Recent Projects👇🏻
      </div>
      <div className="whitespace-nowrap block sm:block md:block lg:blo  ck xl:hidden 2xl:hidden"
           ref={thirdText}>Projects
      </div>
      <div className="relative whitespace-nowrap block sm:block md:block lg:block xl:hidden 2xl:hidden"
           style={{bottom: "96px"}} ref={fourthText}>Projects
      </div>
    </div>


    <div className="bg-white pt-8 overflow-hidden">
      <div className="cool-container">
        <div className="copilot-column">
          <div className="text-7xl text-left font-bold pt-4 pb-4 bg-white">
            Job Application <span className="text-pink-600">Copilot</span>
          </div>
          <div className="text-2xl text-left pb-4 text-black">

            I wrote a Python program using Selenium to automatically fill out job application forms. I still choose the
            jobs I apply to very carefully, verify everything, and enter the creative parts
            manually.

          </div>
        </div>

        <div className="apply-illustration">

          <Image src="apply.svg" alt="Grafstrom.dev Logo" width="1200" height="0"
                 style={{marginTop: '0px', marginBottom: "-10px", marginLeft: "-50px"}}>
          </Image>
        </div>

        <video width="1920" height="1080" controls>
          <source src="assistant.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-blue-950 text-white">
      <div className="cool-container">
        <div className="social-column">
          <div className="text-7xl text-left font-bold pt-8 pb-4">
            Android <span className="text-pink-600">Social</span> Application
          </div>

          <div className="text-2xl text-left pb-4 pt-8">

            A friend and I developed an Android social application for meeting people closest in proximity. It features
            in-app
            messaging, location sharing, and face verification using a machine learning model. In the process, we used
            Spring Boot, PostgreSQL, the Google Maps API, and ML Kit.

          </div>
        </div>

        <div className="social-illustration">
          <Image src="social.svg" alt="Grafstrom.dev Logo" width="800" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>

        <video width="1920" height="1080" controls>
          <source src="assistant.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-white text-black">
      <div className="cool-container">

        <div className="budget-column">
          <div className="text-7xl text-left font-bold pt-8 pb-4">
            Personal <span className="text-pink-600">Finance</span> Analyzer
          </div>

          <div className="text-2xl text-left pb-4">

            I wrote a program to parse transaction csv files from CIBC using Pandas.
            I exported the Pandas data frames into a PostgreSQL database. Then
            I created views to group the transactions into categories and calculate a total for each category.

          </div>
        </div>

        <div className="budget-illustration">
          <Image src="budget.svg" alt="Grafstrom.dev Logo" width="1000" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>

        <video width="1920" height="1080" controls>
          <source src="assistant.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-blue-950 text-white">
      <div className="cool-container">
        <div className="web-column">
          <div className="text-7xl text-left font-bold pt-8 pb-4">
            This <span className="text-pink-600">Portfolio</span> Website
          </div>

          <div className="text-2xl text-left pb-4 pt-8">

            Other than the stock images, which I got from stockphotos.com and have a license to use, I created this
            website
            entirely by myself using Next.js, React, Tailwind CSS, and TypeScript.

          </div>
        </div>

        <div className="web-illustration">
          <Image src="web.svg" alt="Grafstrom.dev Logo" width="800" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>
      </div>
    </div>

    </body>
    </html>
  )
    ;
}
