import Image from "next/image";
import { CodeBracketIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";

type ProjectItemProps = {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  imgAlt: string;
  gitUrl: string;
  previewUrl: string;
  liveLabel: string;
  codeLabel: string;
  // Optional: Link zum Backend, wenn es in einem eigenen Repository liegt
  backendUrl?: string;
  backendLabel?: string;
};

// Ein Hauptprojekt als Zeile: links der Screenshot, rechts Titel, Text,
// Technik und Links. Die Links sind immer sichtbar, auch auf dem Handy.
export default function ProjectItem({
  title,
  description,
  tags,
  imgUrl,
  imgAlt,
  gitUrl,
  previewUrl,
  liveLabel,
  codeLabel,
  backendUrl,
  backendLabel,
}: ProjectItemProps) {
  return (
    <li className="py-10 first:pt-0">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-md border border-border bg-secondary">
            <Image
              src={imgUrl}
              alt={imgAlt}
              width={1200}
              height={600}
              sizes="(min-width: 1024px) 520px, 90vw"
              className="aspect-[2/1] w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="text-3xl">{title}</h3>
          <p className="mt-3 max-w-prose text-lg text-muted">{description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={previewUrl}
              variant="solid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${liveLabel}`}
              className="sm:w-fit"
            >
              {liveLabel}
            </Button>

            <Button
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title}: ${codeLabel}`}
            >
              <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
              {codeLabel}
            </Button>

            {backendUrl && backendLabel && (
              <Button
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}: ${backendLabel}`}
              >
                <ServerStackIcon className="h-5 w-5" aria-hidden="true" />
                {backendLabel}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </li>
  );
}
