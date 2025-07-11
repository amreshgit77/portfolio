import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#3f2a1c] via-[#5c4033] to-[#4b3220] text-white rounded-3xl p-10 md:p-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/4 md:pt-10 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-md">
            <TextChange />
          </h1>
          <p className="text-base md:text-2xl tracking-tight leading-relaxed mb-8 drop-shadow-sm">
            I am a final-year Computer Science and Engineering student with a strong passion for building web applications and developing real-world projects.
          </p>
          <a
            href="https://www.instagram.com/amresh_txt/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-gradient-to-r
              from-[#6b4c32]
              via-[#5c4033]
              to-[#4b3a29]
              hover:from-[#4b3a29]
              hover:via-[#6b4c32]
              hover:to-[#5c4033]
              text-white
              font-semibold
              rounded-3xl
              py-3
              px-8
              shadow-md
              transition-all
              duration-500
              transform
              hover:scale-105
              hover:shadow-[0_0_15px_5px_rgba(92,64,51,0.9)]
            "
          >
            Contact Me
          </a>
        </div>
        <div className="mt-10 md:mt-0 md:w-2/5 flex justify-center">
          <img
            src={avatarImg}
            alt="Avatar"
            className="
              rounded-full
              shadow-lg
              w-56
              md:w-72
              filter
              drop-shadow-xl
              animate-float
              transition-transform
              duration-700
              hover:scale-110
            "
          />
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .animate-float {
              animation: float 4s ease-in-out infinite;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;
