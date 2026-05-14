import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ProjectHeader from "@/components/ProjectHeader";
import VideoPlayer from "@/components/VideoPlayer";
import ProjectDetails from "@/components/ProjectDetails";

export default function ProjectPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Sidebar />

      <div className="md:ml-20 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <ProjectHeader />
          <VideoPlayer />
          <ProjectDetails />
        </div>
      </div>

      <Footer />
    </main>
  );
}
