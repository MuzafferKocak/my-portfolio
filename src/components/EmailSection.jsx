"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section
      className="grid md:grid-cols-2 my-16 md:my-16 py-24 gap-4 relative"
      id="contact"
    >
      {" "}
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
  from-green-700 to-transparent rounded-full h-60 w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 z-10 blur-lg 
  absolute top-[93%] sm:top-[80%] md:top-[75%] left-8 sm:left-8 md:left-8 transform -translate-x-1/2 -translate-1/2"
      ></div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {" "}
          I'm always open to new opportunities, collaborations, and exciting
          projects. Let's connect and create something great together!
        </p>
        <div className="socials flex flex-row gap-2">
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
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-white block mb-1 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Enter your email adrress"
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
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Subject of your message"
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
        )}
      </div>
    </section>
  );
};

export default EmailSection;
