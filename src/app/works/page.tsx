"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import WorksHeader from "@/components/WorksHeader";
import { HeroFeatureCard, MetaCard, WorkGridCard } from "@/components/WorkCards";

type WorkProject = {
  title: string;
  sub: string;
  img: string;
  delay: number;
  frontendRepo: string;
  backendRepo: string;
  githubRepo?: string;
};

const workProjects: WorkProject[] = [
  {
    title: "FOODIEZONE",
    sub: "FOOD RESTAURANT PROJECT // NEXT.JS",
    img: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1920&auto=format&fit=crop",
    delay: 0.2,
    frontendRepo: "https://github.com/ibnaabid/Foodiezone",
    backendRepo: "https://github.com/ibnaabid/FoodieZone-Backend",
  },
  {
    title: "B13_HOUSE_RENT",
    sub: "HOUSE RENT PLATFORM // PROPERTY UX",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1920&auto=format&fit=crop",
    delay: 0.4,
    frontendRepo: "https://github.com/ibnaabid/B-13--A10--house-rent",
    backendRepo: "https://github.com/ibnaabid/A10--008-cat-backend",
  },
  {
    title: "CST_HUB",
    sub: "CST STUDENT HUB // NOTES & ROUTINES",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop",
    delay: 0.6,
    frontendRepo: "https://cst-hub.vercel.app/",
    backendRepo: "https://csthub-backend-dw3l.onrender.com/",
    githubRepo: "https://github.com/ibnaabid/Cst-Hub",
  },
];

export default function WorksPage() {
  const [activeRepo, setActiveRepo] = useState<{
    title: string;
    frontendRepo: string;
    backendRepo: string;
    githubRepo?: string;
  } | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Sidebar />
      
      <div className="lg:ml-20 pt-32 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <WorksHeader />
        
        <div className="grid grid-cols-12 gap-6">
          <HeroFeatureCard />
          <MetaCard />
          {workProjects.map((project) => (
            <WorkGridCard
              key={project.title}
              title={project.title}
              sub={project.sub}
              img={project.img}
              delay={project.delay}
              frontendRepo={project.frontendRepo}
              backendRepo={project.backendRepo}
              onRepoClick={() => setActiveRepo({
                title: project.title,
                frontendRepo: project.frontendRepo,
                backendRepo: project.backendRepo,
                githubRepo: project.githubRepo,
              })}
            />
          ))}
        </div>
      </div>

      {activeRepo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950 p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveRepo(null)}
              className="absolute right-5 top-5 text-slate-400 hover:text-white"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary">PROJECT LINKS</p>
                <h2 className="text-3xl font-bold text-white mt-2">{activeRepo.title}</h2>
                <p className="text-slate-400">Frontend and backend links for this project.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href={activeRepo.frontendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-primary hover:bg-primary/10"
                >
                  <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-3">Frontend Link</p>
                  <p className="font-semibold text-white break-all">{activeRepo.frontendRepo}</p>
                </a>
                <a
                  href={activeRepo.backendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-primary hover:bg-primary/10"
                >
                  <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-3">Backend Link / API</p>
                  <p className="font-semibold text-white break-all">{activeRepo.backendRepo}</p>
                </a>
                {activeRepo.githubRepo && (
                  <a
                    href={activeRepo.githubRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-primary hover:bg-primary/10"
                  >
                    <p className="text-sm text-slate-400 uppercase tracking-[0.3em] mb-3">Source Repository</p>
                    <p className="font-semibold text-white break-all">{activeRepo.githubRepo}</p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
