"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Facebook, Github, Instagram, Linkedin, MapPin } from "lucide-react";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/ibnaabid", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mdibnaabid", label: "LinkedIn" },
  { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1Cj6eRf4U9/", label: "Facebook" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/mdibnaabid?igsh=MWhmcjB3dDV5NnBjYw==", label: "Instagram" },
];

const Hero = () => (
  <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050B18] pb-16 pt-28 md:pb-20">
    <div className="absolute inset-0">
      <div className="absolute inset-0 md:left-auto md:w-[75%]">
        <img
          src="/978615f4-16e6-4983-ac9b-ee4d0522f928.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[58%_44%] md:object-[center_60%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050B18_0%,rgba(5,11,24,0.88)_55%,rgba(5,11,24,0.48)_100%)] md:bg-[linear-gradient(90deg,#050B18_0%,rgba(5,11,24,0.94)_30%,rgba(5,11,24,0.55)_64%,rgba(5,11,24,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#050B18_0%,rgba(5,11,24,0.35)_35%,transparent_75%)] md:bg-[linear-gradient(0deg,#050B18_0%,transparent_42%,rgba(5,11,24,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,transparent_5%,rgba(5,11,24,0.12)_70%)]" />
    </div>

    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute right-[-12%] top-1/2 hidden h-[min(68vw,600px)] w-[min(68vw,600px)] -translate-y-1/2 md:block"
      fill="none"
    >
      <circle cx="300" cy="300" r="230" stroke="white" strokeOpacity=".12" />
      <circle cx="300" cy="300" r="205" stroke="#38BDF8" strokeOpacity=".16" strokeDasharray="2 9" />
      <path d="M78 360C180 190 355 150 520 255" stroke="#A78BFA" strokeOpacity=".3" />
      <path d="M95 395C215 225 365 210 520 300" stroke="#38BDF8" strokeOpacity=".22" />
    </svg>

    <div className="container relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-12 lg:gap-5">
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="order-2 grid grid-cols-2 gap-5 border-t border-white/15 pt-5 text-left lg:order-1 lg:col-span-2 lg:grid-cols-1 lg:gap-9 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0"
      >
        <div>
          <span className="mb-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/50">
            <MapPin size={12} /> Based in
          </span>
          <p className="text-sm text-white">Dinajpur, Bangladesh</p>
        </div>
        <div>
          <span className="mb-2 block text-[9px] uppercase tracking-[0.25em] text-white/50">Currently focused on</span>
          <p className="text-sm text-white">MERN &amp; Next.js</p>
        </div>
      </motion.aside>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
        className="order-1 text-left lg:order-2 lg:col-span-7 lg:col-start-3"
      >
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-slate-950/35 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/80">Available for new opportunities</span>
        </div>

        <p className="mb-2 text-xs uppercase tracking-[0.55em] text-sky-300">Hello, I&apos;m</p>
        <h1 className="font-display-xl text-7xl font-bold uppercase leading-[0.88] tracking-[-0.07em] text-white sm:text-8xl md:text-9xl">
          Abid<span className="text-sky-300">.</span>
        </h1>
        <h2 className="mt-6 max-w-2xl text-xl font-medium uppercase leading-tight tracking-[0.14em] text-white sm:text-2xl md:text-3xl">
          MERN stack developer
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200/80 sm:text-base">
          I&apos;m a CST diploma student and developer from Dinajpur, building thoughtful, responsive web experiences with React, Next.js, Node.js, and MongoDB.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-sky-100 px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-950 transition-colors hover:bg-white"
          >
            Explore my work <ArrowUpRight size={15} />
          </Link>
          <Link
            href="/MdIbna Abid resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 bg-white/[0.06] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/15"
          >
            View my resume <ArrowDown size={14} />
          </Link>
        </div>

        <div className="mt-8 flex items-center gap-5 text-white/70">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="transition-colors hover:text-sky-300"
            >
              {link.icon}
            </a>
          ))}
          <span className="h-4 w-px bg-white/20" />
          <span className="text-[9px] uppercase tracking-[0.24em] text-white/50">CST Diploma · 2023 Batch</span>
        </div>
      </motion.div>

      <motion.a
        href="https://cst-hub.vercel.app/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="order-3 flex max-w-sm items-center gap-4 rounded-2xl border border-white/15 bg-slate-950/45 p-4 text-left shadow-2xl backdrop-blur-xl transition-colors hover:border-sky-300/50 lg:col-span-3 lg:col-start-10 lg:justify-self-end"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-300/10 text-xs font-bold tracking-wider text-sky-200">
          CST
        </div>
        <div className="min-w-0 flex-1">
          <span className="block text-[8px] uppercase tracking-[0.25em] text-sky-200">Featured project</span>
          <span className="mt-1 block text-sm font-semibold text-white">CST Hub</span>
          <span className="mt-1 block text-xs text-slate-300">A shared academic space for CST students</span>
        </div>
        <ArrowUpRight size={16} className="shrink-0 text-white/60" />
      </motion.a>
    </div>
  </section>
);

export default Hero;
