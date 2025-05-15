'use client';
import WindowLayout from '../../components/WindowLayout';
import { WaveText } from '../../components/WaveText';
import { PhotoGallery } from '@/src/components/PhotoGallery';
import tpeo1 from "../../assets/images/tpeo1.jpeg";
import tpeo6 from "../../assets/images/tpeo6.jpeg";
import tpeo3 from "../../assets/images/tpeo3.jpeg";
import tpeo4 from "../../assets/images/tpeo4.jpeg";
import tpeo5 from "../../assets/images/tpeo5.jpeg";
import spo1 from "../../assets/images/spo1.jpeg";
import spo2 from "../../assets/images/spo2.jpeg";
import spo3 from "../../assets/images/spo3.jpeg";
import spo4 from "../../assets/images/spo4.jpeg";
import spo5 from "../../assets/images/spo5.jpeg";

export default function About() {
    const spophotos = [
        { src: spo1.src, alt: "Me and my cat", label: "Greek Showcase 🎭🌟" },
        { src: spo2.src, alt: "Friends in NYC", label: "Service!! 🤝💖" },
        { src: spo3.src, alt: "Graduation", label: "PIE A SIGMA 🥧😂" },
        { src: spo4.src, alt: "Friends in NYC", label: "Longhorn Run 🏃‍♀️🤘" },
        { src: spo5.src, alt: "Graduation", label: "Formals 👗✨" },
    ];

    const tpeophotos = [
        { src: tpeo1.src, alt: "Me and my cat", label: "Barge 2025! 🎉🛥️" },
        { src: tpeo6.src, alt: "Friends in NYC", label: "Engineering 🤖📚" },
        { src: tpeo3.src, alt: "Graduation", label: "SIX FLAGS 🎢🌟" },
        { src: tpeo4.src, alt: "Friends in NYC", label: "Barge again...🍸✨" },
        { src: tpeo5.src, alt: "Graduation", label: "Formals 💃🕺" },
    ];

    return (
        <main className="min-h-screen bg-white flex justify-center items-center">
            <WindowLayout>
                <div className="flex flex-col space-y-8 w-full max-w-6xl px-4 mx-auto">
                    <div className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 mt-10">
                        <WaveText text="Hi, I'm Olivia!" />
                    </div>
                    <PhotoGallery />

                    {/* lil intro */}
                    <div className="flex flex-col lg:flex-row items-start lg:space-x-6 space-y-6 lg:space-y-0">

                        <div className="mt-10 flex flex-col text-black text-base sm:text-lg md:text-xl space-y-4 items-start">
                            <span className="text-black font-bold text-xl sm:text-2xl">
                                Computer Science major and Business minor @ UT Austin 🤘🧡
                            </span>
                            <p>
                                💻 I'm interested in the <strong>intersection</strong> of tech, business, design, & applying them to create solutions. I also have a soft spot for hojicha🍵, taking walks at sunset🌇, and making impulse purchases💸🤭...
                            </p>
                            <p>
                                🌱 I believe in developing technology to make life more <strong>intuitive, inclusive, and joyful</strong>—whether that means simplifying the everyday or amplifying voices that deserve to be heard. For me, tech is a way to leave things better than I found them! 🕊️❤️
                            </p>
                            <p>
                                💌 This is my corner of the web — feel free to click around and stay awhile! 🌼🗺️
                            </p>
                        </div>
                    </div>

                    <hr className="my-8 border-t border-gray-300" />

                    {/* Community Involvement */}
                    <div className="flex flex-col space-y-4">
                        <div className="text-left text-8xl sm:text-4xl md:text-6xl font-bold text-gray-800">
                            Community Involvement 🫶💞
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-black">(The people who make life worth it!)</span>
                        </div>

                        {/*sigmuzzzz*/}
                        <div>
                            <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-20">
                                Sigma Phi Omega Sorority Inc.
                            </div>
                            <div className="text-center text-lg sm:text-xl md:text-xl text-gray-800 mt-4">
                                The Oldest Asian-Interest Sorority at the University of Texas at Austin.

                            </div>
                            <div className="flex gap-6 items-center justify-center overflow-x-auto p-4">
                                {spophotos.map((photo, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-sm shadow-lg p-2 pt-2 pb-6 w-40 h-52 relative transform rotate-[2deg] hover:-rotate-1 transition duration-300"
                                    >
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-[90%] object-cover rounded-sm"
                                        />
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700 text-center w-full">
                                            {photo.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center text-md sm:text-md md:text-md text-gray-800 italic mt-4">
                                As Social Chair and prev. Graphics Chair, I have the opportunity to contribute to the sorority's mission of sisterhood, service, and scholarship. I love being part of a community that values diversity and empowerment!

                            </div>
                        </div>
                    </div>

                    {/*tpeo!!!!!!*/}
                    <div>
                        <div className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-20">
                            Texas Product Engineering Organization (TPEO)
                        </div>
                        <div className="text-center text-lg sm:text-xl md:text-xl text-gray-800 mt-4">
                            We build tech for good. We are TPEO.

                        </div>
                        <div className="flex gap-6 items-center justify-center overflow-x-auto p-4">
                            {tpeophotos.map((photo, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-sm shadow-lg p-2 pt-2 pb-6 w-40 h-52 relative transform rotate-[2deg] hover:-rotate-1 transition duration-300"
                                >
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-[90%] object-cover rounded-sm"
                                    />
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700 text-center w-full">
                                        {photo.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center text-md sm:text-md md:text-md text-gray-800 italic mt-4 mb-8">
                            As Social Chair and Engineering Fellow, I help build a community of engineers who are passionate about using technology to make a positive impact (and have plenty of fun along the way!).

                        </div>
                    </div>

                    <div className="text-center text-sm text-gray-500 italic mt-10">
                        Now playing: <span className="font-medium">"Heaven is a Home..." by Kali Uchis 🎶</span>
                    </div>

                </div>
            </WindowLayout>
        </main>
    );
}
