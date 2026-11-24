"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import PlateFrame from "@/components/ui/PlateFrame";
import Section from "@/components/ui/Section";

// Die einzige Einblendung der Seite: Text und Foto kommen sanft nacheinander.
// Mit MotionConfig reducedMotion="user" wird bei "Bewegung reduzieren" im
// System nur eingeblendet und nicht verschoben.
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <MotionConfig reducedMotion="user">
      {/* Der Hero beginnt bei 0 (unter der festen Navigation), der obere Abstand
          steckt im Innenabstand. So landet "zum Seitenanfang" exakt oben. */}
      <Section innerClassName="pt-24 pb-4 lg:pt-[6.5rem] lg:pb-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div className="lg:col-span-7" {...enter(0)}>
            <h1 className="text-foreground">
              <span className="block text-2xl text-muted sm:text-3xl">
                {t("hello")}
              </span>
              <span className="mt-3 block text-4xl sm:text-5xl lg:text-6xl">
                {t("headline")}
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-muted lg:text-xl">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#contact" variant="solid" className="sm:w-fit">
                {t("cta")}
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
            </div>
          </motion.div>

          {/* Foto in der Platte */}
          <motion.div className="lg:col-span-5" {...enter(0.2)}>
            <PlateFrame className="mx-auto max-w-sm lg:ml-auto lg:mr-0">
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
      </Section>
    </MotionConfig>
  );
}
