import React from "react";
import leetLogo from "../../assets/leetcode.png";
import gfgLogo from "../../assets/gfg.png";
import csLogo from "../../assets/ninza.jpeg";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      problemsSolved: 223,
      description: "Solved 200+ problems on arrays, graphs, and DP.",
      link: "https://leetcode.com/u/Ak_45/",
      logo: leetLogo,
    },
    {
      name: "GeeksforGeeks",
      problemsSolved: 182,
      description: "Solved 150+ problems on arrays, graphs, and DP.",
      link: "https://www.geeksforgeeks.org/user/amresh_45/",
      logo: gfgLogo,
    },
    {
      name: "CodeStudio",
      problemsSolved: 102,
      description: "Solved 100+ problems on CodeStudio by Coding Ninjas.",
      link: "https://www.naukri.com/code360/profile/amreshcode",
      logo: csLogo,
    },
  ];

  return (
    <section className="bg-[#2a1c13] rounded-3xl py-12 px-6 md:px-12 shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        Coding Profiles
        <span className="block w-16 h-1 bg-[#d1a679] mt-2 rounded"></span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {profiles.map((p, i) => (
          <div
            key={i}
            className="bg-[#3a2518] hover:bg-[#4b2f1f] text-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              className="h-12 mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2 text-center">{p.name}</h3>
            <p className="text-sm mb-1">
              <strong>Problems Solved:</strong> {p.problemsSolved}
            </p>
            <p className="text-sm text-gray-300 mb-4">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#5c4033] hover:bg-[#6b4c32] px-4 py-2 rounded-xl transition-colors duration-300 font-medium"
            >
              View Profile →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
