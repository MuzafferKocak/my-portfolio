import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";

type ProjectItemProps = {
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  gitUrl: string;
  previewUrl: string;
  liveLabel: string;
  codeLabel: string;
};

// Ein Projekt als Zeile: links der Screenshot, rechts Titel, Text und Links.
// Die Links sind immer sichtbar, damit sie auch auf dem Handy erreichbar sind.
export default function ProjectItem({
  title,
  description,
  imgUrl,
  imgAlt,
  gitUrl,
  previewUrl,
  liveLabel,
  codeLabel,
}: ProjectItemProps) {
  return (
    <li className="grid gap-6 py-10 first:pt-0 lg:grid-cols-12 lg:gap-10">
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

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
        </div>
      </div>
    </li>
  );
}
