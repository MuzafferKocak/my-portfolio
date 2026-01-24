"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const t = useTranslations("Email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    });

    if (response.status === 200) setEmailSubmitted(true);
  };

  return (
    <section
      className="grid md:grid-cols-2 scroll-mt-16 py-16 gap-4 relative"
      id="contact"
    >
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
        from-green-700 to-transparent rounded-full h-60 w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 
        z-10 blur-lg absolute top-[93%] sm:top-[80%] md:top-[75%] left-8 transform
        -translate-x-1/2 -translate-1/2"
      ></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2">{t("title")}</h5>

        <p className="text-[#adb7be] mb-4 max-w-md">{t("desc")}</p>

        <div className="flex flex-row gap-2">
          <Link href="https://github.com/MuzafferKocak" target="_blank">
            <div className="w-12 h-12 bg-[#121212] rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-300">
              <Image
                src={GithubIcon}
                alt="GitHub Icon"
                width={48}
                height={48}
              />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/muzaffer-kocak/"
            target="_blank"
          >
            <div className="w-12 h-12 bg-[#121212] rounded-lg flex items-center justify-center hover:bg-green-500 transition-all duration-300">
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width={48}
                height={48}
              />
            </div>
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">{t("success")}</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="text-white block mb-1 text-sm font-medium">
                {t("form.email")}
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder={t("form.emailPlaceholder")}
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9]
                text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="text-white block mb-1 text-sm font-medium">
                {t("form.subject")}
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder={t("form.subjectPlaceholder")}
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9]
                text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="text-white block mb-1 text-sm font-medium">
                {t("form.message")}
              </label>
              <textarea
                name="message"
                placeholder={t("form.messagePlaceholder")}
                className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9]
                text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {t("form.send")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
