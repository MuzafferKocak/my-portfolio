import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/startseite/HeroSection";
import AboutSection from "@/components/startseite/AboutSection";
import TechStack from "@/components/startseite/TechStack";
import ProjectsSection from "@/components/startseite/ProjectsSection";
import EmailSection from "@/components/startseite/EmailSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-clip">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
