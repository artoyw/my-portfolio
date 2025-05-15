import React from "react";
import { Typewriter } from "../Typewriter";
import Image from "next/image";
import insta from "../../assets/images/insta.png";
import linked from "../../assets/images/linked.png";
import email from "../../assets/images/email.png";
import { WaveText } from "../WaveText";

export const IntroSection: React.FC = () => {
  const scrollToExperience = () => {
    const section = document.getElementById("experience");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">

      <div className="text-center text-9xl font-bold text-gray-800 mb-10">
        {/* {"Olivia Wang".split("").map((char, idx) => (
          <span
            key={idx}
            //style={{ transitionDelay: `${idx * 40}ms` }}
            className="transition-transform duration-300 ease-in-out hover:scale-125 inline-block cursor-pointer"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))} */}
        <WaveText
          text="Olivia Wang"
        />

      </div>

      <div className="whitespace-pre-wrap mb-5">
        <span className="text-black text-4xl">{"I am a "}</span>
        <Typewriter
          text={[
            "Software Engineer!",
            "Longhorn🤘 in Computer Science (Hook 'em!)",
            "work in progress...",
            "someone who finds joy in the little things.",
            "proud Chinese American.",
          ]}
          speed={70}
          className="text-green-500 text-l font-bold"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </div>


      {/* <p className="mt-6 text-sm text-gray-500"> //not sure if i want this here
        Current @ CrowdStrike👩🏻‍💻
      </p> */}

      <div className="mt-6 flex gap-4 text-gray-500 text-xl">
        <a 
          href="https://instagram.com/oliviawaang" 
          aria-label="Instagram" target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform duration-500 ease-in-out hover:scale-150"
          >
          <Image src={insta.src} alt="Instagram" width={35} height={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/olivia-wang-060142246/" 
          aria-label="LinkedIn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform duration-500 ease-in-out hover:scale-150"
        >
          <Image src={linked.src} alt="LinkedIn" width={24} height={24} />
        </a>
        <a 
          href="mailto:oliviawang@utexas.edu" 
          aria-label="Email"
          className="transition-transform duration-500 ease-in-out hover:scale-150"
        >
          <Image src={email.src} alt="Email" width={30} height={24} />
        </a>
      </div>

      <button
        onClick={scrollToExperience}
        className="mt-12 animate-bounce text-3xl text-gray-400 hover:text-black transition"
        aria-label="Scroll to experience section"
      >
        ↓
      </button>
    </section>
  );
};
