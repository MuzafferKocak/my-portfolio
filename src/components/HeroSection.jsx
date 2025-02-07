"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
              Hallo, Ich bin{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Muzaffer",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Developer",
                5000,
                // "Frontend Developer",
                // 5000,
                // "Backend Developer",
                // 5000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] text-base sm:text-lg mb-5 lg:text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In placeat
            totam nemo nobis nesciunt quas dolor est unde, sit similique.
          </p>
          <div>
            
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 bg-white hover:bg-slate-400 text-black">
              <span className="block">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full border border-green-400 bg-[#121212] w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] relative">
            <Image
              src="/images/me.jpeg"
              alt="image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
