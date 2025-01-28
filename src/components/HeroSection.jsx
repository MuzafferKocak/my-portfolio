import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
            Hallo, Ich bin Muzaffer
          </h1>
          <p className="text-[#adb7be] text-lg mb-5 lg:text-xl ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In placeat
            totam nemo nobis nesciunt quas dolor est unde, sit similique.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hier</button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 mt-4 bg-white hover:bg-slate-200 text-black">Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#121212] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
            src="/images/IMG_0759.JPG"
            alt="image"
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={200}
            height={200}
          />
        </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
