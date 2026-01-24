// import AboutSection from "@/components/AboutSection";
// import EmailSection from "@/components/EmailSection";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import Navbar from "@/components/Navbar";
// import ProjectsSection from "@/components/ProjectsSection";
// import TechStack from "@/components/TechStack";
// import { useTranslations } from "next-intl";

// export default function Home() {
//   const t = useTranslations("hero");
//   return (
//     <main className=" min-h-screen font-[family-name:var(--font-geist-sans)]">
//       <Navbar />
//       <div className="container mt-20 mx-auto py-6 px-12">
//         <HeroSection />
//         <AboutSection />
//         <TechStack />
//         <ProjectsSection />
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }


// src/app/page.js
// src/app/page.js
const { getRequestConfig } = require("next-intl/server");

module.exports = getRequestConfig(() => ({
  locales: ["en", "de", "tr"],
  defaultLocale: "en"
}));





