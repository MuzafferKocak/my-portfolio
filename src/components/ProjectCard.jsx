import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#121212] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-600">
          <Link href="" >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be]m-2 cursor-pointer hover:white"/>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#121212] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
