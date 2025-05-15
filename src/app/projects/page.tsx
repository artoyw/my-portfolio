'use client';

import WindowLayout from "../../components/WindowLayout";
import { ProjectBlock } from "@/src/components/ProjectBlock";
import miso from "../../assets/images/miso.png";
import trailblazer from "../../assets/images/trailblazer.png";
import research from "../../assets/images/research.jpg";
import { WaveText } from "@/src/components/WaveText";

export default function Projects() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-center">
      <WindowLayout>
        <div>
          <div className="text-center text-black font-bold text-8xl mb-5">
            <WaveText
              text="Projects"
            />
          </div>

          <ProjectBlock
            name="MISO🍜"
            link="https://ut-seller-app-miso.vercel.app/"
            github="https://github.com/Myshae-A/ut-seller-app"
            duration="FEB 2025 - APRIL 2025"
            tags={["FULL-STACK", "REACT", "NODE", "EXPRESS", "FIREBASE"]}
            description="MISO connects UT Austin students through a marketplace for buying and selling campus-specific items. Students list unused textbooks, classroom clickers, and other academic materials for fellow Longhorns to purchase, creating an affordable, sustainable ecosystem for recycling campus resources."
            imageSrc={miso.src}
          />

          <ProjectBlock
            name="TrailBlazer👢"
            link="https://drive.google.com/file/d/1bU-PykNd5A6wKfkVA2sRhLqiuB_3P4aO/view?usp=sharing"
            github="https://github.com/snehadharma/trailblazer"
            duration="FEB 2025"
            tags={["MACHINE LEARNING", "REACT", "GOOGLE MAPS API", "JSON"]}
            description="Trailblazer is a website that creates a road trip itinerary from the user's prompt. Users can save their itinerary to their account, made possible using Firebase/Firestore. Users may also discover trips other users have taken around Texas. We use OpenAI's 4o-mini model and the Google Maps API, along with React.js on the frontend and Firebase/Firestore on the backend."
            imageSrc={trailblazer.src}
          />

          <ProjectBlock
            name="Research🧠"
            link="https://drive.google.com/file/d/1uWgpju5sjoQFkpPgSCIcc_KbBZSqKoUH/view?usp=sharing"
            github="https://github.com/snehadharma/trailblazer"
            duration="JAN 2023 - DEC 2023"
            tags={["LLM", "NUMPY", "PYTHON", "TOP2VEC", "PANDAS", "BERTOPIC"]}
            description="Trailblazer is a website that creates a road trip itinerary from the user's prompt. Users can save their itinerary to their account, made possible using Firebase/Firestore. Users may also discover trips other users have taken around Texas. We use OpenAI's 4o-mini model and the Google Maps API, along with React.js on the frontend and Firebase/Firestore on the backend."
            imageSrc={research.src}
          />

        </div>
      </WindowLayout>
    </main>
  );
}