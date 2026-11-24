"use client";

import Image from "next/image";
import { motion, MotionConfig, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PlateFrame from "@/components/ui/PlateFrame";

// Werkzeuge, die unter den Buttons stehen (statt Partner-Logos)
const stack = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"];

// Einblendung nacheinander: Badge, Überschrift, Text, Buttons, Werkzeuge.
// Mit MotionConfig reducedMotion="user" wird bei "Bewegung reduzieren" im
// System nur eingeblendet und nicht verschoben.
const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-secondary text-foreground">
        {/* Hintergrund: Drehbank in der Werkstatt. Foto von Zoshua Colah,
            Unsplash (Unsplash-Lizenz, frei nutzbar). Zoomt einmal langsam heraus. */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <Image
            src="/images/werkstatt.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Abtönung in den Plattenfarben, damit der Text gut lesbar bleibt */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-secondary to-transparent"
        />

        {/* Oben Platz für die feste Navigation */}
        <Container className="w-full pb-16 pt-28 lg:pb-20 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <motion.div
              className="lg:col-span-7"
              variants={list}
              initial="hidden"
              animate="show"
            >
              {/* Glas-Badge */}
              <motion.p
                variants={item}
                className="mb-6 inline-flex items-center gap-3 rounded-full bg-foreground/10 py-1.5 pl-1.5 pr-4 ring-1 ring-foreground/15 backdrop-blur"
              >
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-ink">
                  {t("badgeLabel")}
                </span>
                <span className="text-sm font-medium">{t("badge")}</span>
              </motion.p>

              <motion.h1 variants={item}>
                <span className="block text-2xl text-muted sm:text-3xl">
                  {t("hello")}
                </span>
                <span className="mt-3 block text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                  {t("title")}
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-xl text-lg text-muted lg:text-xl"
              >
                {t("description")}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button
                  href="#contact"
                  variant="solid"
                  className="inline-flex items-center justify-center gap-2 sm:w-fit"
                >
                  {t("cta")}
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Button>

                {/* Lebenslauf in der gewählten Sprache (Datei steht in messages) */}
                <Button
                  href={t("cvFile")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/download-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                    className="invert group-hover:invert-0"
                  />
                  {t("cv")}
                </Button>
              </motion.div>

              <motion.div variants={item} className="mt-12">
                <p className="text-sm text-muted">{t("stackLabel")}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {stack.map((name) => (
                    <li
                      key={name}
                      className="rounded-full bg-foreground/5 px-3 py-1 text-sm ring-1 ring-foreground/15"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Porträt in der Platte */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            >
              <PlateFrame className="mx-auto max-w-sm shadow-2xl lg:ml-auto lg:mr-0">
                <Image
                  src="/images/me.jpeg"
                  alt={t("photoAlt")}
                  priority
                  width={400}
                  height={400}
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
              </PlateFrame>
            </motion.div>
          </div>
        </Container>
      </section>
    </MotionConfig>
  );
}
