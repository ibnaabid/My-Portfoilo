import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LudoSkills from "@/components/LudoSkills";
import DetailedProjects from "@/components/DetailedProjects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import TeamStructure from "@/components/TeamStructure";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Sidebar />
      <div className="ml-0 lg:ml-20">
        <div id="home"><Hero /></div>
        <div id="about">
          <About />
          <div className="container mx-auto px-6 md:px-12 mb-24">
            <TeamStructure />
          </div>
        </div>
        <Stats />
        <div id="skills"><LudoSkills /></div>
        <div id="projects"><DetailedProjects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
