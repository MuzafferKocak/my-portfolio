import Image from "next/image";
import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import Tag from "@/components/ui/Tag";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  imgAlt: string;
  gitUrl: string;
  previewUrl: string;
  liveLabel: string;
  codeLabel: string;
};

const linkClasses =
  "inline-flex min-h-11 items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline";

// Kleine Karte für "Weitere Projekte": Bild, Titel, ein Satz, Technik, Links.
export default function ProjectCard({
  title,
  description,
  tags,
  imgUrl,
  imgAlt,
  gitUrl,
  previewUrl,
  liveLabel,
  codeLabel,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-secondary">
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={1200}
        height={600}
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
        className="aspect-[16/9] w-full object-cover object-top"
      />

      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-2xl">{title}</h4>
        <p className="mt-2 text-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>

        {/* mt-auto schiebt die Links bei allen Karten an den unteren Rand */}
        <div className="mt-auto flex gap-5 pt-5">
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}: ${liveLabel}`}
            className={linkClasses}
          >
            {liveLabel}
            <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}: ${codeLabel}`}
            className={linkClasses}
          >
            <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
            {codeLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
