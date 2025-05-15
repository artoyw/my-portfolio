'use client';
import WindowLayout from '../../components/WindowLayout';
import Image from 'next/image';
import olivia1 from "@/src/assets/images/olivia1.jpg";
import {WaveText} from '../../components/WaveText';


export default function About() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
        <WindowLayout>
            <div className='flex flex-col space-y-4 w-[80vw] mx-auto flex flex-col'>
                <div className="text-left text-8xl font-bold text-gray-800 mt-10 mb-5">
                    <WaveText
                        text="Hi, I'm Olivia!"
                    />
                </div>

                <div className="flex flex-row items-start space-x-6">
                    <Image
                        src={olivia1}
                        alt="Olivia smiling"
                        width={500}
                        className="rounded-xl object-cover shadow-md"
                        />
                    <div className="flex flex-col text-black text-xl space-y-4 items-start">
                        <span className="text-black font-bold text-2xl">Computer Science major and Business minor @ UT Austin 🤘🧡 </span>
                        <br></br>
                        <p>💻 I'm interested in the <strong>intersection</strong> of tech, business, design, & applying them to create solutions. I also have a soft spot for hojicha🍵, taking walks at sunset🌇, and making impulse purchases💸🤭...</p>
                        <p>🌱 I believe in developing technology to make life more intuitive, inclusive, and joyful—whether that means simplifying the everyday or amplifying voices that deserve to be heard. For me, tech is a way to leave things better than I found them! 🕊️❤️ </p>
                        <p>💌 This is my corner of the web — feel free to click around and stay awhile 🌼🗺️</p>
                    </div>
                </div>

                <hr className="my-8 border-t border-gray-300" />

                <br></br>
                
                {/* community involvement */}
                <div className="flex flex-col space-y-4">
                    <div className="text-left text-5xl font-bold text-gray-800">
                        Community Involvement 🫶💞 
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="text-black">(The people who make life worth it!)</span>
                    </div>
                </div>
           
            </div>

        </WindowLayout>
    </main>
  );
}