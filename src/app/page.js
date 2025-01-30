import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="container mt-28 mx-auto py-4 px-12">
        <HeroSection />
      </div>
    </main>
  );
}
