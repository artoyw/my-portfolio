import React from "react";

interface ExperienceBlockProps {
  company: string;
  title: string;
  duration: string;
  tags: string[];
  description: string;
  imageSrc: string;
  iconSrc: string;
  lockIcon?: boolean;
}

export const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  company,
  title,
  duration,
  tags,
  description,
  imageSrc,
  iconSrc,
  lockIcon = true,
}) => {
  return (
    <div className="group flex flex-col md:flex-row items-start justify-between gap-6 border-b py-8 transition-all duration-500 text-gray-500 group-hover:text-black w-full">
      
      {/* info */}
      <div className="grayscale group-hover:grayscale-0 transition-all duration-500 basis-full md:basis-[60%]">
        <h2 className="font-bold flex items-center gap-4 mb-2 text-[clamp(1.5rem,3vw,2rem)]">
          <img
            src={iconSrc}
            className="w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] rounded-xl shadow object-contain"
            alt={`${company} logo`}
          />
          <span className="text-black">{company}</span>
        </h2>
        <div className="inline-block rounded-full bg-gray-300 px-3 py-1 text-[clamp(0.75rem,1.5vw,0.9rem)] font-semibold text-gray-800">
          {title}
        </div>
        <p className="mt-1 text-gray-600 font-medium italic text-[clamp(0.75rem,1.3vw,0.9rem)]">{duration}</p>
        {/* <ul className="mt-1 space-y-0.5 text-[clamp(0.75rem,1.2vw,0.9rem)]">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul> */}
        <p className="mt-4 text-[clamp(0.8rem,1.4vw,1rem)] text-gray-700">
          {description}
        </p>
      </div>

      {/* img */}
      <div className="basis-full md:basis-[40%] aspect-video overflow-hidden rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow">
        <img
          src={imageSrc}
          alt={`${company} preview`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

};
