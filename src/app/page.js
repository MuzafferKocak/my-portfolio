import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
      </div>
    </main>
  );
}
