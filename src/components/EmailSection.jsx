import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non incidunt
          sed, asperiores maiores dolore, cupiditate at architecto, dignissimos
          fugiat quis ipsam maxime. Vel, ratione ullam!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="Github">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
          <Link href="Linkedin">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-white block mb-1 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your mail adrress"
              className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="text-white block mb-1 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="subject"
              className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="text-white block mb-1 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#121212] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
