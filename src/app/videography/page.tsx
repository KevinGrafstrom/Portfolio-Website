import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Videography',
  description: 'I am also a videographer!'
};


export default function ChetPage(): React.ReactElement {
  return (
    <html className="bg-blue-950">
    <Head>
        <title>Videography</title>
        <meta name="description" content="I am also a videographer!" />
    </Head>
    <body>
    <header>
      <div className="bg-slate-100 fixed w-screen z-10">
        <div className="cool-container">
          <div className="hidden sm:inline-block py-2">
            <Image src="/grafstrom.svg" className="inline-block" alt="Grafstrom.dev Logo" width="200" height="60">
            </Image>
          </div>
          <div className="font-bold no-underline text-lg sm:text-2xl text-black/60 inline-block sm:float-end py-2">
            <Link
              className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
              href="/"
              data-twe-ripple-color="light"
            >Home</Link>
            <Link
              className="transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none px-2"
              href="/videography"
              data-twe-ripple-color="light"
            >Videography</Link>
          </div>
        </div>
      </div>
    </header>

    <div className="bg-blue-100 overflow-hidden invisible">
      <div className="cool-container">
        <div className="hidden sm:inline-block py-2">
          <Image src="/grafstrom.svg" className="inline-block" alt="Grafstrom.dev Logo" width="200" height="60">
          </Image>
        </div>
      </div>
    </div>

    <div className="overflow-hidden m-auto text-left py-8 pt-16 sm:pt-8 bg-blue-950">
      <div className="cool-container">
        <div className="text-5xl sm:text-7xl text-left font-bold text-white pt-2">
          Chet Lam <span className="text-pink-600">Rivoli</span> Show
        </div>
        <div className="text-2xl text-left pt-8 pb-4 text-white">
          December 20, 2025
        </div>
        <video width="1920" height="1080" controls preload="metadata">
          <source src="Dec202025.mp4#t=0.001" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    </body>
    </html>
  );
}