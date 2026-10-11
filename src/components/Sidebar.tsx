"use client";

import Link from "next/link";
import { BriefcaseBusiness, Code2, House, Mail, UserRound, Wrench, type LucideIcon } from "lucide-react";

const sections: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Home", href: "/#home", icon: House },
  { label: "About", href: "/#about", icon: UserRound },
  { label: "Skills", href: "/#skills", icon: Wrench },
  { label: "Projects", href: "/#projects", icon: Code2 },
  { label: "Experience", href: "/#experience", icon: BriefcaseBusiness },
  { label: "Contact", href: "/#contact", icon: Mail },
];

const Sidebar = () => (
  <aside className="fixed left-0 top-0 z-40 hidden h-full w-20 flex-col items-center border-r border-white/[0.08] bg-slate-950/65 py-20 backdrop-blur-2xl lg:flex">
    <span className="mb-8 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/30 [writing-mode:vertical-rl]">
      Sections
    </span>
    <nav aria-label="Page sections" className="flex w-full flex-col items-center gap-3">
      {sections.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="group relative flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-300/10 hover:text-sky-200 focus-visible:bg-sky-300/10 focus-visible:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-300"
        >
          <Icon size={18} strokeWidth={1.7} />
          <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 translate-x-1 whitespace-nowrap rounded-lg border border-white/10 bg-slate-950/95 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white opacity-0 shadow-xl transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
