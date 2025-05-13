'use client';
import WindowLayout from '../../components/WindowLayout';
import Image from 'next/image';
import { Typewriter } from '../../components/Typewriter/index';
import olivia1 from "@/src/assets/images/olivia1.jpg";
import { SocialLinksDemo } from '../../components/SocialLinksDemo/index';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
        <WindowLayout>
            <div className='flex flex-col space-y-4'>
                <div className="text-left text-6xl font-bold text-gray-800">
                    Hello! I'm Olivia.
                </div>

                <div className="whitespace-pre-wrap">
                    <span className="text-black text-2xl">{"I am a "}</span>
                    <Typewriter
                    text={[
                        "future Software Engineer",
                        "Longhorn🤘 in Computer Science (Hook 'em!)",
                        "work in progress (and proud of it)",
                        "someone who finds joy in the little things",
                        "HUGE foodie!!",
                    ]}
                    speed={70}
                    className="text-green-500 text-l font-bold"
                    waitTime={1500}
                    deleteSpeed={40}
                    cursorChar={"_"}
                    />
                </div>

                <div className="flex flex-row items-start space-x-6 p-6">
                    <Image
                        src={olivia1}
                        alt="Olivia smiling"
                        width={500}
                        className="rounded-xl object-cover shadow-md"
                        />
                    <div className="flex flex-col text-black space-y-4 items-start">
                        <p>💻 I'm interested in the intersection of tech, business, design, & applying them to create solutions. I also have a soft spot for hojicha🍵, taking walks at sunset🌇, and making impulse purchases💸🤭...</p>
                        <p>🌱 I believe in developing technology to make life more intuitive, inclusive, and joyful—whether that means simplifying the everyday or amplifying voices that deserve to be heard. For me, tech is a way to leave things better than I found them! 🕊️❤️ </p>
                        <p>💌 This is my corner of the web — feel free to click around and stay awhile 🌼🗺️</p>
                        <br></br>
                        <SocialLinksDemo />
                    </div>
                </div>
            </div>

        </WindowLayout>
    </main>
  );
}