import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frank Li | Piano Teacher',
};

export default function Home() {
  return (
    <html className="bg-emerald-950">
    <body>
    <div className="cool-container">
      <div className="intro-column"
           style={{textShadow: "2px 2px 2px #000"}}>
        <div className="text-7xl font-bold"
             style={{lineHeight: 1.05}}>
          <span className="text-amber-400">Fluently</span> Speak the <span
          className="text-red-300">Language</span> of <span className="text-lime-300"> Music</span>
        </div>
        <div className="text-2xl pt-10 text-left">
          Hey there! I&apos;m Frank Lee. I teach modern piano with an emphasis on improvisation, songwriting, and ear
          training.
        </div>
      </div>
      <div className="piano-teacher-column">
        <Image src="piano-teacher.svg" width={1000} height={0} alt="piano teacher"></Image>
      </div>
    </div>
    <div className="piano-bg">
      <video className="piano-video" autoPlay muted loop>
        <source src="piano-bg.mp4" type="video/mp4"></source>
      </video>
    </div>
    <div className="bg-emerald-950 overflow-hidden w-screen">
    <div style={{maxWidth: "70%", margin: "auto"}}>

      <div className="mt-10 inline-block" style={{maxWidth: 400, overflow: 'hidden'}}>
        <img src="/frank.png" width={1080} height={1080} alt="Frank"></img>
      </div>
      <div className="bg-emerald-950 overflow-hidden" style={{maxWidth: 500, display: "inline-block", float: "right", marginTop: 70, color: "white"}}>
        <div className="text-7xl font-bold"
             style={{lineHeight: 1.05}}>
          <span className="text-amber-400">Who</span> I Am
        </div>
        <div className="text-2xl pt-10 text-left">
          Frank Li, the &quot;Maestro of Mayhem,&quot; was born playing a grand piano. By age six, he performed blindfolded while juggling. His lessons include trampoline arpeggios and lion serenades. Recitals feature fireworks and squirrel dancers. Frank’s students become musical daredevils, ready to conquer stages with unparalleled flair and absurdity.
        </div>
      </div>
        </div>
    </div>

    </body>
    </html>
  );
}
