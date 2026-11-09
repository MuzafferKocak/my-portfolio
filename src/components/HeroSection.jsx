"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "./ui/Button";

const HeroSection = () => {
  const t = useTranslations("Hero");

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
              {t("hello")}{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                t("type1"),
                5000,
                t("type2"),
                5000,
                t("type3"),
                5000,
                t("type4"),
                5000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "3rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#adb7be] text-base sm:text-lg mb-5 lg:text-xl">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Download CV EN */}
            <Button
              href="/cv/MuzafferKocak.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Image
                src="/download-icon.svg"
                width={24}
                height={24}
                alt="download-icon"
                className="filter invert"
              />
              {t("cv_en")}
            </Button>

            {/* Download CV DE */}
            <Button
              href="/cv/MuzafferKocak_DE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3"
            >
              <Image
                src="/download-icon.svg"
                width={24}
                height={24}
                alt="download-icon"
                className="filter invert"
              />
              {t("cv_de")}
            </Button>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-full border-2 border-green-500 bg-[#121212] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[370px] lg:h-[370px] relative"
          >
            <Image
              src="/images/me.jpeg"
              alt="image"
              priority
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
