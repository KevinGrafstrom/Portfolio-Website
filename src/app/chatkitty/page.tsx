'use client';
import Image from "next/image";
import Link from "next/link";

export default function ChatKittyPage(): React.ReactElement {
  return (
    <html className="bg-blue-950">
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
              href="/chatkitty"
              data-twe-ripple-color="light"
            >ChatKitty</Link>
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
          ChatKitty <span className="text-pink-600">Vue</span> Demo
        </div>
        <div className="text-2xl text-left pt-8 pb-4 text-white">
          The easist way to add a chat to your Vue application.
        </div>
        <video width="1920" height="1080" controls preload="metadata">
          <source src="chatkitty-vue-demo.mp4#t=0.001" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    </body>
    </html>
  );
}