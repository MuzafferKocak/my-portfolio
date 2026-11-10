import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
};

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg lg:bg-surface border-border">
      <div
        className="h-52 md:h-72 mt-4 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl}) no-repeat center center `,
          backgroundSize: "contain",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-surface bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-600">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 mr-4 relative rounded-full border-muted hover:border-foreground group/link"
          >
            <CodeBracketIcon className="absolute h-10 w-10 text-muted top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-foreground" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-muted hover:border-foreground group/link"
          >
            <EyeIcon className="absolute h-10 w-10 text-muted top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-foreground" />
          </Link>
        </div>
      </div>
      <div className="text-foreground rounded-b-xl bg-surface py-6 px-4 flex flex-col h-auto md:h-[250px] lg:h-[200px]">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-muted flex-grow">{description}</p>
      </div>
    </div>
  );
}
