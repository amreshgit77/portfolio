import React from "react";

const ProjectCard = ({ title, main, demoLink, sourceLink, image }) => {
  return (
    <div
      className="
        flex-shrink-0
        w-80
        bg-gradient-to-br from-[#5c4033] via-[#4b3220] to-[#3f2a1c]
        rounded-3xl
        shadow-lg shadow-[#4b3220]
        p-6
        flex flex-col
        transition-transform
        duration-500
        hover:scale-105
        hover:shadow-[0_0_25px_5px_rgba(92,64,51,0.9)]
        cursor-pointer
        text-white
      "
    >
      <img
        src={image}
        alt={`${title} banner`}
        className="rounded-xl mb-5 drop-shadow-md hover:scale-105 transition-transform duration-500"
      />
      <h3 className="text-2xl font-extrabold mb-3 drop-shadow-lg">{title}</h3>
      <p className="text-sm md:text-md leading-relaxed flex-grow drop-shadow-sm">
        {main}
      </p>
      <div className="mt-6 flex flex-col gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-gradient-to-r from-[#6b4c32] via-[#5c4033] to-[#4b3a29]
            hover:from-[#4b3a29] hover:via-[#6b4c32] hover:to-[#5c4033]
            py-3
            rounded-3xl
            font-semibold
            shadow-md
            text-white
            text-center
            transition-all
            duration-500
            hover:scale-110
            hover:shadow-[0_0_15px_5px_rgba(92,64,51,0.9)]
            block
          "
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-gradient-to-r from-[#503721] via-[#5c4033] to-[#6b4c32]
            hover:from-[#6b4c32] hover:via-[#503721] hover:to-[#5c4033]
            py-3
            rounded-3xl
            font-semibold
            shadow-md
            text-white
            text-center
            transition-all
            duration-500
            hover:scale-110
            hover:shadow-[0_0_15px_5px_rgba(75,58,41,0.9)]
            block
          "
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
