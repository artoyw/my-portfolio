import React from "react";
import { WaveText } from "../WaveText";

interface ProjectBlockProps {
    name: string;
    link: string;
    github: string;
    duration: string;
    tags: string[];
    description: string;
    imageSrc: string;
}

export const ProjectBlock: React.FC<ProjectBlockProps> = ({
    name,
    github,
    link,
    tags,
    duration,
    description,
    imageSrc,
}) => {
    return (
        <div className="group flex md:flex-row items-start justify-between gap-6 border-b p-8 transition-all duration-500 text-gray-500 group-hover:text-black shadow w-full rounded-xl">

            <div className="flex flex-col basis-full md:basis-[60%]">
                <div className="flex flex-row items-start justify-between gap-6">

                    {/*left side*/}

                    {/* info */}
                    <div className="grayscale group-hover:grayscale-0 transition-all duration-500 basis-full md:basis-[60%]">
                        <h2 className="font-bold flex items-center gap-4 mb-2 text-[clamp(1.5rem,3vw,2rem)]">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl text-gray-800 hover:bg-gray-200 transition-colors"
                                aria-label="GitHub"
                            >
                                <span className="p-2 text-black transition-transform duration-500 ease-in-out hover:scale-105">{name}</span>
                            </a>
                        </h2>

                        <div className="flex flex-row items-center gap-5 mt-0">

                            <p className="text-gray-600 font-medium italic text-[clamp(0.75rem,1.3vw,0.9rem)]">{duration}</p>

                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl text-black hover:bg-gray-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                >
                                    <path d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.207 11.385c.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.082-.73.082-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.11-.775.42-1.305.76-1.605-2.666-.304-5.466-1.335-5.466-5.933 0-1.31.467-2.382 1.235-3.222-.123-.304-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404 11.47 11.47 0 013.003.404c2.292-1.552 3.298-1.23 3.298-1.23.655 1.652.242 2.872.12 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.19.694.8.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* right side (tags) */}
                    <div>
                        <ul className="mt-1 flex flex-wrap justify-end gap-2 w-full text-[clamp(0.75rem,1.2vw,0.9rem)]">
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="inline-block group-hover:bg-gray-300 rounded-full bg-gray-200 px-3 py-1 font-semibold text-gray-800 transition-all duration-500 shadow"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
                <p className="mt-4 text-[clamp(0.8rem,1.4vw,1rem)] text-gray-700">
                    {description}
                </p>
            </div>

            {/* img */}
            <div className="basis-full md:basis-[40%] aspect-video overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow">
                <img
                    src={imageSrc}
                    alt={`${name} preview`}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );

};
