'use client';
import Image from "next/image";
import {useEffect, useRef} from "react";
import gsap from 'gsap';
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'Grafstrom.dev',
// }

export default function Home(): React.ReactElement {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);

  const fifthText = useRef(null);
  const sixthText = useRef(null);
  const seventhText = useRef(null);
  const eighthText = useRef(null);
  const ninthText = useRef(null);
  const tenthText = useRef(null);

  const eleventhText = useRef(null);
  const twelfthText = useRef(null);
  const thirteenthText = useRef(null);
  const fourteenthText = useRef(null);
  const fifteenthText = useRef(null);

  const sixteenthText = useRef(null);
  const seventeenthText = useRef(null);
  const eighteenthText = useRef(null);
  const nineteenthText = useRef(null);
  const twentiethText = useRef(null);

  let xPercent = 0;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    for (const alignedElement of [firstText, thirdText, fifthText, seventhText, ninthText,
      eleventhText, thirteenthText, fifteenthText, sixteenthText, eighteenthText, twentiethText]) {
      gsap.set(alignedElement.current, {xPercent: xPercent});
    }
    for (const misalignedElement of [secondText, fourthText, sixthText, eighthText, tenthText,
      twelfthText, fourteenthText, seventeenthText, nineteenthText]) {
      gsap.set(misalignedElement.current, {xPercent: ((xPercent + 100 + 100) % 200 - 100)});
    }
    xPercent += 0.07;
    if (xPercent > 100) {
      xPercent = -100;
    }
    requestAnimationFrame(animation);
  }

  const headerContainer: React.ReactElement = (
    <div className="cool-container">
      <div className="hidden sm:inline-block py-2">
        <Image src="grafstrom.svg" className="inline-block" alt="Grafstrom.dev Logo" width="200" height="60">
        </Image>
      </div>
      <div className="font-bold no-underline text-lg sm:text-2xl text-black/60 inline-block float-end py-2">
        <Link
          className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#home"
          data-twe-ripple-color="light"
        >Home</Link
        >
        <Link
          className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#projects"

          data-twe-ripple-color="light"
        >Projects</Link
        >
        <div className="inline-block"><Link
          className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#work"
          data-twe-ripple-color="light"
        >Work Experience</Link
        ></div>
        <Link
          className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#education"
          data-twe-ripple-color="light"
        >Education</Link>
        <Link
          className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
          href="#contact"
          data-twe-ripple-color="light"
        >Contact</Link>
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

    <div className="bg-blue-100 overflow-hidden invisible" id="home">
      {headerContainer}
    </div>


    <div className="overflow-hidden m-auto text-left py-8 bg-blue-950">
      <div className="cool-container">
        <div className="approach-column">
          <div className="text-5xl sm:text-7xl text-left font-bold text-white pt-2">
            An <span className="text-amber-600">Artistic</span> Approach to <span className="text-pink-600">Software Development</span>
          </div>
          <div className="text-2xl text-left pt-8 pb-4 text-white">
            My name is <span className="text-pink-600">Kevin Grafstrom</span>. I combine my experience studying computer
            engineering at the University of Toronto
            and working as a software developer with the creativity I developed in a rock band.
          </div>
        </div>
        <div className="creative-illustration">
          <Image src="illustration.svg" className="inline-block" alt="Grafstrom.dev Logo" width="1000" height="0">
          </Image>
        </div>
      </div>
    </div>

    <div id="projects" className="relative" style={{bottom: "60px"}}></div>


    <div className="text-8xl text-center bg-slate-900 text-white font-bold overflow-hidden h-32 pt-2">
      <div className="whitespace-nowrap hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block"
           ref={firstText}>👇🏻Recent Projects👇🏻
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


    <div className="bg-white pt-0 overflow-hidden">
      <div className="cool-container">
        <div className="copilot-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4 bg-white">
            Job Application <span className="text-pink-600">Copilot</span>
          </div>
          <div className="text-2xl text-left pb-4 text-black">

            I wrote a Python program using Selenium to automatically fill out job application forms. I still choose the
            jobs I apply to very carefully, verify everything, and enter the creative parts
            manually.

          </div>
        </div>

        <div className="apply-illustration">

          <Image src="apply.svg" alt="Grafstrom.dev Logo" width="1200" height="0">
          </Image>
        </div>

        <video width="1920" height="1080" controls preload="metadata">
          <source src="copilot.mp4#t=0.001" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-blue-950 text-white">
      <div className="cool-container">
        <div className="social-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4">
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

        <video width="1920" height="1080" controls preload="metadata">
          <source src="quick-meet.mp4#t=0.001" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-white text-black">
      <div className="cool-container">

        <div className="budget-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4">
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

        <video width="1920" height="1080" controls preload="metadata">
          <source src="analyzer.mp4#t=0.001" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="bg-blue-950 text-white">
      <div className="cool-container">
        <div className="web-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4">
            This <span className="text-pink-600">Portfolio</span> Website
          </div>

          <div className="text-2xl text-left pb-4 pt-8">

            Other than the stock images, which I got from stockphotos.com and have a license to use, I created this
            website
            entirely by myself using Next.js, React, Tailwind CSS, TypeScript, and NGINX.

          </div>
        </div>

        <div className="web-illustration">
          <Image src="web.svg" alt="Grafstrom.dev Logo" width="800" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>
      </div>
    </div>

    <div className="bg-white text-black overflow-hidden" style={{width: "100%"}}>
      <div className="cool-container">

        <div className="music-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4">
            <span className="text-pink-600">Music</span> Trends <span
            className="text-pink-600">Prediction</span> Database
            {/*Personal <span className="text-pink-600">Finance</span> Analyzer*/}
          </div>

          <div className="text-2xl text-left pb-4">

            A friend and I queried the Spotify API to transfer data for the most popular artists into a PostgreSQL
            database.
            We used linear regression to determine the fastest growing artists and genres.

          </div>
        </div>

        <div className="music-illustration">
          <Image src="music.svg" alt="Grafstrom.dev Logo" width="1000" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>
      </div>
    </div>

    <div className="bg-blue-950 text-white overflow-hidden pb-12">
      <div className="cool-container">
        <div className="processor-column">
          <div className="text-5xl sm:text-7xl text-left font-bold pt-8 pb-4">
            {/*This <span className="text-pink-600">Portfolio</span> Website*/}
            FPGA <span className="text-pink-600">Processor</span> in Verilog
          </div>

          <div className="text-2xl text-left pt-8 mb-10 lg:mb-0">

            In a computer hardware course I took at U of T, there was a competition that involved
            implementing a processor on an FPGA using Verilog. Designs were ranked by the number of assembly
            instructions they completed per second.
            My teammate and I scored second place, which gave us a bonus 4.5% on each of our final grades.

          </div>
        </div>

        <div className="processor-illustration">
          <Image src="processor.svg" alt="Grafstrom.dev Logo" width="800" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>
      </div>
    </div>

    <div id="work" className="relative" style={{bottom: "60px"}}></div>

    <div className="text-8xl text-center bg-slate-900 text-white font-bold overflow-hidden h-32 pt-2">
      <div className="whitespace-nowrap hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block"
           ref={fifthText}>👇🏻Work Experience👇🏻
      </div>
      <div className="relative whitespace-nowrap hidden sm:hidden md:hidden lg:hidden xl:block 2xl:block"
           style={{bottom: "96px"}} ref={sixthText}>👇🏻Work Experience👇🏻
      </div>
      <div className="whitespace-nowrap hidden sm:hidden md:block lg:block xl:hidden 2xl:hidden"
           ref={seventhText}>Work Exp.
      </div>
      <div className="relative whitespace-nowrap hidden sm:hidden md:block lg:block xl:hidden 2xl:hidden"
           style={{bottom: "96px"}} ref={eighthText}>Work Exp.
      </div>
      <div className="whitespace-nowrap block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
           ref={ninthText}>Work
      </div>
      <div className="relative whitespace-nowrap block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"
           style={{bottom: "96px"}} ref={tenthText}>Exp.
      </div>
    </div>
    {/*bg-blue-950*/}
    <div className="bg-white text-black overflow-hidden" style={{width: "100%"}}>
      <div className="cool-flex-container">

        <div className="chatkitty-column overflow-hidden lg:order-2">

          <div className={"flex items-center"}>
            <div className="inline-block" style={{marginLeft: "-10px", marginBottom: "-5px"}}>
                <Image src="/chatkitty.webp" alt="Grafstrom.dev Logo" width="90" height="0">
                </Image>
              </div>
            <div className="text-6xl inline-block">
              <b>ChatKitty</b>
            </div>
          </div>

          <div className="text-2xl leading-9 text-left mb-7 overflow-hidden">
            <div className="inline-block float-left mr-4"><b>Full Stack Developer</b></div>

            <div className="indigo-date"><b>March 2025 - Present</b></div>

          </div>

          <div className="text-2xl text-left pb-4 mt-4">

            I ported the ChatKitty application to allow embedding it in all major mobile SDKs and web frameworks.
            I also implemented a user interface in Vue and a backend in Spring for modifying the chat room membership settings.
            I added endpoints for asynchronous message delivery using the STOMP protocol while ensuring the accuracy of
            concurrent database transactions using locks with the Java Persistence API. I created an automated test suite
            using K6 to verify the functionality of ChatKitty&apos;s real time messaging infrastructure.

          </div>
        </div>

        <div className="chat-illustration order-1">
          <Image src="group-chat.svg" alt="Grafstrom.dev Logo" width="1000" height="0">
          </Image>
        </div>
      </div>
    </div>

    <div className="bg-blue-950 text-white overflow-hidden" style={{width: "100%"}}>
      <div className="cool-flex-container">
        <div className="trainer-column overflow-hidden">
          <div className="mb-7 mt-0 text-6xl">
            <b>Self Employed</b>
          </div>

          <div className="text-2xl leading-9 text-left mb-7 overflow-hidden">
            <div className="inline-block float-left mr-4"><b>AI Data Trainer</b></div>

            <div className="indigo-date"><b>May 2024 - March 2025</b></div>

          </div>

          <div className="text-2xl text-left pb-4 mt-4">

            I compared and evaluated code outputted by AI models on <a href="https://www.dataannotation.tech"
                                                                        className="text-pink-600">www.dataannotation.tech</a>.
            To verify the accuracy of the
            AI generated code, I executed it locally. I&apos;ve verified programs written with Python, Angular + TypeScript,
            and PHP. Then, I wrote explanations and gave ratings for the relative quality of different AI models&apos; coding
            outputs.
          </div>
        </div>

        <div className="ai-illustration">
          <Image src="ai training.svg" alt="Grafstrom.dev Logo" width="600" height="0">
          </Image>
        </div>
      </div>
    </div>

    <div className="bg-white text-black overflow-hidden" style={{width: "100%"}}>
      <div className="cool-flex-container">

        <div className="forma-column overflow-hidden lg:order-1">
          <div className="mb-4">
            <div className="inline-block" style={{marginLeft: "-10px"}}>
              <Image src="/forma-ai.webp" alt="Grafstrom.dev Logo" width="90" height="0">
              </Image>
            </div>
            <div className="text-6xl text-left font-bold inline-block overflow-hidden pb-4 pl-2">
              FORMA.AI
            </div>
          </div>

          <div className="text-2xl text-left mb-7 overflow-hidden leading-9">
            <div className="inline-block float-left mr-4"><b>Software Engineer</b></div>

            <div className="forma-date"><b>May 2022 - Aug. 2023</b></div>

          </div>

          <div className="text-2xl text-left">

            I replicated a client&apos;s data pipeline from Danube into an Oracle implementation with PostgreSQL. I also
            reduced load times
            for the calculations table by 80% with React, TypeScript, and Django. When one of our clients transitioned
            from a data warehouse to a data lake, I adapted our internal ETL pipeline so that our results remained
            accurate and consistent. During this process, I built and debugged Docker containers running on Amazon Web
            Services EC2 and ECS. I also implemented a user interface for adding manual adjustments to commissions paid.
            For other clients, I wrote Spark data transformations to run on the Databricks Lakehouse Platform.

          </div>
        </div>

        <div className="commission-illustration">
          <Image src="commission.svg" alt="Grafstrom.dev Logo" width="1100" height="0">
          </Image>
        </div>
      </div>
    </div>

    <div className="bg-blue-950 text-white overflow-hidden" style={{width: "100%"}}>
      <div className="cool-container">

        <div className="indigo-column overflow-hidden">
          <div className="mb-4 mt-4">
            <div className="inline-block" style={{marginLeft: "0px"}}>
              <Image src="/indigo.png" alt="Grafstrom.dev Logo" width="180" height="0">
              </Image>
            </div>
          </div>

          <div className="text-2xl leading-9 text-left mb-7 overflow-hidden">
            <div className="inline-block float-left mr-4"><b>Junior QA Developer</b></div>

            <div className="indigo-date"><b>July 2017 - Aug. 2018</b></div>

          </div>

          <div className="text-2xl text-left pb-4 mt-4">

            I wrote more than 30 automated tests for the Indigo website using Java and
            Selenium.
            I collaborated with other developers to choose the best test cases. I also performed A/B testing
            on internal search ordering, increasing the search click through rate 15%. During this time, I
            wrote more than 20 articles on Confluence explaining our testing methodology.
          </div>
        </div>

        <div className="indigo-illustration">
          <Image src="books.svg" alt="Grafstrom.dev Logo" width="600" height="0"
                 style={{marginTop: '0px', marginBottom: "10px"}}>
          </Image>
        </div>
      </div>
    </div>

    <div id="education" className="relative" style={{bottom: "60px"}}></div>

    <div className="text-8xl text-center bg-slate-900 text-white font-bold overflow-hidden h-32 pt-2">
      <div className="whitespace-nowrap hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
           ref={eleventhText}>👇🏻Education👇🏻
      </div>
      <div className="relative whitespace-nowrap hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
           style={{bottom: "96px"}} ref={twelfthText}>👇🏻Education👇🏻
      </div>
      <div className="whitespace-nowrap hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden"
           ref={thirteenthText}>Education
      </div>
      <div className="relative whitespace-nowrap hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden"
           style={{bottom: "96px"}} ref={fourteenthText}>Education
      </div>
      <div className="whitespace-nowrap block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
           ref={fifteenthText}>Education
      </div>
    </div>

    <div className="bg-white text-black overflow-hidden" style={{width: "100%"}}>
      <div className="cool-flex-container">

        <div className="uoft-column lg:order-1">
          <div className="py-3">
            <div className="inline-block">
              <Image src="/uoft.png" alt="Grafstrom.dev Logo" width="500" height="0">
              </Image>
            </div>
          </div>

          <div className="text-2xl text-left mb-7 overflow-hidden leading-9">
            <div className="mr-4"><b>Bachelor&apos;s in Computer Engineering</b></div>

            <div><b>Graduated June 2022</b></div>

          </div>

          <div className="text-2xl text-left mb-10 lg:mb-0">

            My favourite course was &quot;Communication and Design&quot; because we made a
            Google Maps clone and wrote documents explaining our design choices. This allowed us
            to develop our technical and writing skills in the same course. I also found &quot;
            Computer Networks&quot; very useful for understanding server and client communication
            in web development.

          </div>
        </div>

        <div className="uoft-illustration">
          <Image src="student.svg" alt="Grafstrom.dev Logo" width="1100" height="0">
          </Image>
        </div>
      </div>
    </div>

    <div id="contact" className="relative" style={{bottom: "60px"}}></div>

    <div className="text-8xl text-center bg-slate-900 text-white font-bold overflow-hidden h-32 pt-2">
      <div className="whitespace-nowrap hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
           ref={sixteenthText}>👇🏻Contact👇🏻
      </div>
      <div className="relative whitespace-nowrap hidden sm:hidden md:hidden lg:block xl:block 2xl:block"
           style={{bottom: "96px"}} ref={seventeenthText}>👇🏻Contact👇🏻
      </div>
      <div className="whitespace-nowrap hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden"
           ref={eighteenthText}>Contact
      </div>
      <div className="relative whitespace-nowrap hidden sm:block md:block lg:hidden xl:hidden 2xl:hidden"
           style={{bottom: "96px"}} ref={nineteenthText}>Contact
      </div>
      <div className="whitespace-nowrap block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
           ref={twentiethText}>Contact
      </div>
    </div>

    <div className="bg-blue-950 text-white overflow-hidden">
      <div className="cool-flex-container-bottom">
        <div className="contact-column flex items-center">
          <div style={{height: "max-content"}}>
            <div className="text-5xl sm:text-7xl text-left font-bold">
              Let&apos;s Create the <span className="text-pink-600">Next Big Thing</span>!
            </div>

            <div className="text-2xl text-left pt-8">

              You can email me with any inquiries at <Link href="mailto:kevin.grafstrom@gmail.com"
                                                           className="text-pink-600">kevin.grafstrom@gmail.com</Link>

            </div>
          </div>
        </div>

        <div className="kevin-centerer flex justify-center">
          <div className="kevin-illustration">
            <Image src="/kevin-transparent.png" alt="Grafstrom.dev Logo" width="800" height="0">
            </Image>
          </div>
        </div>
      </div>
    </div>


    </body>
    </html>
  )
    ;
}
