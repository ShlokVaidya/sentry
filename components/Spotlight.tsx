"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { ProfilePic } from "@/components/ProfilePic";
import { FaGithub, FaReddit, FaTwitter } from "react-icons/fa";

export function SpotlightNew() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center --black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <img
        src="/grahpic.svg"
        alt="Background Graphic"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full md:pt-0 text-center">
        <ProfilePic />
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-900 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 pt-2 pb-4  border-t border-l border-r border-b border-neutral-300 dark:border-neutral-600">
          Hey, I'm Shlok! <br />
          Welcome to my corner of the internet!
        </h1>
        <p className="mt-3 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-center mx-auto border-t border-l border-r border-b border-neutral-300 dark:border-neutral-600">
          I’m Currently learning Next.js and working to strengthen my skills as
          a beginner web developer. I’m passionate about creating websites that
          offer seamless, user-friendly experiences while also focusing on
          visually appealing designs.
        </p>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Blog
          </button>
          <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Projects
          </button>
        </div>
        {/* Oval container for social media icons */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center justify-between w-56 h-16 bg-neutral-200 dark:bg-neutral-800 rounded-full shadow-md px-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={32} /> {/* Increased size */}
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            >
              <FaReddit size={32} /> {/* Increased size */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition"
            >
              <FaTwitter size={32} /> {/* Increased size */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
