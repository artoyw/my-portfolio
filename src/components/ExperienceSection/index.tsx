import React from "react";
import { ExperienceBlock } from "../ExperienceBlock";
import crowdstrike from "@/src/assets/images/crowdstrike.png";
import crowdstrike2 from "@/src/assets/images/crowdstrike2.jpg";
import tpeo from "@/src/assets/images/tpeo.png";
import tpeo2 from "@/src/assets/images/tpeo2.jpeg";

export const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="min-h-screen w-[80vw] mx-auto pt-20">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="w-[80vw] mx-auto flex flex-col space-y-4">
                <ExperienceBlock
                    company="CrowdStrike 🛡️🔐"
                    title="SOFTWARE ENGINEER INTERN"
                    duration="SUMMER '25 INTERNSHIP / CURRENT"
                    tags={[""]}
                    description="Building the platform and tools to process and identify potentially harmful activity through trillions of events per day, and growing."
                    imageSrc={crowdstrike2.src}
                    iconSrc={crowdstrike.src}
                />

                <ExperienceBlock
                    company="Texas Product Engineering Organization 💡💻"
                    title="ENGINEERING FELLOW"
                    duration="FALL '24 - PRESENT"
                    tags={[""]} //not sure if I want to put this in but would be like skills ?
                    description="Collaborating with a small team of engineers, designers, and product managers to create non-profit software for local Austin businesses."
                    imageSrc={tpeo2.src}
                    iconSrc={tpeo.src}
                />

            </div>
            
        </section>
    );
};
