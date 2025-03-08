"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Muzaffer",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Frontend Developer",
                5000,
                "a Backend Developer",
                5000,
                "a Full Stack Developer",
                5000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-5 lg:text-xl ">
            I am a passionate <strong>Full Stack Developer</strong> specializing
            in building modern web applications. With expertise in{" "}
            <strong>React, Next.js, Express, MongoDB, and Node.js</strong>, I
            create scalable and user-friendly solutions. Let's build something
            amazing together!
          </p>
          <div>
            <Link
              href="/cv/En_MuzafferKocak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-300 to-green-900 hover:bg-green-500 text-white mt-3"
            >
              <span className="flex items-center gap-3 bg-[#121212] hover:bg-green-400 rounded-full px-5 py-2">
                <Image
                  src="/download-icon.svg"
                  width={24}
                  height={24}
                  alt="download-icon"
                  className="filter invert"
                />
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-full border-2 border-green-500 bg-[#191919] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[370px] lg:h-[370px] relative"
          >
            <Image
              src="/images/me.jpeg"
              alt="image"
              className="mix-blend-difference rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
