import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="
        w-full
        flex
        flex-col
        md:flex-row
        justify-around
        items-center
        bg-gradient-to-tr
        from-[#4b3220]
        via-[#5c4033]
        to-[#3f2a1c]
        text-white
        p-10
        md:p-12
        shadow-inner
        rounded-none
      "
    >
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-2 drop-shadow-md">
          Contact
        </h1>
        <h3 className="text-sm md:text-2xl font-normal drop-shadow-sm">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl space-y-4 md:space-y-6">
        <li className="flex gap-3 items-center hover:text-[#C49E68] transition-colors duration-300 cursor-pointer">
          <MdOutlineEmail size={24} />
          <a href="mailto:amreshnew77@gmail.com" className="no-underline">
            amreshnew77@gmail.com
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-[#C49E68] transition-colors duration-300 cursor-pointer">
          <CiLinkedin size={24} />
          <a
            href="https://www.linkedin.com/in/amresh-kumar-5a225b250/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            amresh-kumar
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-[#C49E68] transition-colors duration-300 cursor-pointer">
          <FaGithub size={24} />
          <a
            href="https://github.com/amreshgit77"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            amreshgit77
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
