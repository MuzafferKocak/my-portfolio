import SkipLink from "@/components/layout/SkipLink";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/startseite/HeroSection";
import AboutSection from "@/components/startseite/AboutSection";
import TechStack from "@/components/startseite/TechStack";
import ProjectsSection from "@/components/startseite/ProjectsSection";
import EmailSection from "@/components/startseite/EmailSection";

// Navigation und Footer liegen außerhalb von <main>, damit Screenreader
// die Bereiche der Seite richtig erkennen.
export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-clip focus:outline-none">
        <HeroSection />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <EmailSection />
      </main>
      <Footer />
    </>
  );
}
