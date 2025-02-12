import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 mt-4 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl}) no-repeat center center `,
          backgroundSize: "contain",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-600">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 mr-4 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <CodeBracketIcon className="absolute h-10 w-10 text-[#adb7be] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link"
          >
            <EyeIcon className="absolute h-10 w-10 text-[#adb7be] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#121212] py-6 px-4 flex flex-col h-[360px]">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#adb7be] flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
