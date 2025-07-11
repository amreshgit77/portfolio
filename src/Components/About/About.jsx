import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="
        max-w-7xl
        mx-auto
        px-6 md:px-12
        text-white
        md:flex
        overflow-hidden
        items-center
        justify-center
        bg-gradient-to-br
        from-[#3f2a1c]
        via-[#5c4033]
        to-[#4b3220]
        shadow-lg
        rounded-3xl
        p-12
        gap-12
      "
    >
      <div className="flex justify-center md:w-1/2">
        <img
          src={AboutImg}
          alt="About"
          className="
            rounded-2xl
            shadow-xl
            w-full
            max-w-sm
            filter
            drop-shadow-2xl
            animate-float
            transition-transform
            duration-700
            hover:scale-105
          "
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 drop-shadow-md">
          About
        </h2>

        <ul className="space-y-8">
          <li className="flex gap-5">
            <IoArrowForward size={32} className="mt-2 text-[#C49E68]" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-2">
                FULL-STACK Developer
              </h3>
              <p className="text-sm md:text-md leading-relaxed text-[#d9cbb6]">
                I have practical experience as a Full Stack Developer working with the MERN stack. Through projects like Wanderlust and Krishi Care, I built responsive user interfaces, developed RESTful APIs, implemented JWT-based authentication, and managed databases with MongoDB. This experience strengthened my skills in both frontend and backend development, version control, and collaborative coding.
              </p>
            </div>
          </li>

          <li className="flex gap-5">
            <IoArrowForward size={32} className="mt-2 text-[#C49E68]" />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold leading-snug mb-2">
                Object Oriented Programming
              </h3>
              <p className="text-sm md:text-md leading-relaxed text-[#d9cbb6]">
                I have solid experience in Object-Oriented Programming using C++ and Python. I’ve applied OOP principles like encapsulation, inheritance, polymorphism, and abstraction to build clean, modular, and reusable code. Through hands-on problem-solving and projects, I’ve gained a strong understanding of designing class structures and implementing real-world logic using OOP concepts.
              </p>
            </div>
          </li>
        </ul>
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
  );
};

export default About;
