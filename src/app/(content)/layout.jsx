"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBookOpen,
  FaCode,
  FaLayerGroup,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";

const navItems = [
  { href: "/syllabus", label: "Syllabus", icon: FaFileAlt },
  { href: "/getting-started", label: "Getting Started", icon: FaBookOpen },
  {
    href: "/setup-installation",
    label: "Setup & Installation",
    icon: FaDownload,
  },
  { href: "#", label: "Java Fundamentals", icon: FaLayerGroup },
  { href: "#", label: "OOP Concepts", icon: FaCode },
];

export default function ContentLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f4f1ea]">
      <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-[#1a3c8b] text-white shadow lg:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open main navigation"
          className="items-center justify-center px-2.5 py-1.5 text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <FaBars className="mr-2 h-4 w-4" />
        </button>
        <span className="text-sm font-semibold tracking-wide">
          Java Documentation
        </span>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col px-4 py-4 bg-[#1a3c8b] text-slate-50 shadow-xl lg:hidden">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide">
                Java Documentation
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close main navigation"
                className="inline-flex items-center justify-center px-2 py-1 text-xs hover:bg-indigo-700"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = href !== "#" && pathname === href;
                return (
                  <Link
                    key={href + label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </nav>

            <footer className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-200/80">
              <p>Prepared by</p>
              <p className="font-semibold">Utsab Adhikari</p>
            </footer>
          </aside>
        </>
      )}
      <div className="mx-auto flex w-full max-w-6xl py-4 sm:py-8 lg:py-10">
        <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 w-64 flex-col bg-[#1a3c8b] px-5 py-6 text-slate-50 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
              Java Docs
            </h2>
            <p className="mt-1 text-xs text-indigo-100/80">
              Advanced Programming with Java
            </p>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto pr-1 text-sm">
            {navItems.map(({ href, label, icon: Icon }) => {
              const isActive = href !== "#" && pathname === href;
              return (
                <Link
                  key={href + label}
                  href={href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          <footer className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-200/80">
            <p>Prepared by</p>
            <p className="font-semibold">Utsab Adhikari</p>
          </footer>
        </aside>

        {/* Main content area */}
        <main className="min-h-[calc(100vh-4rem)] flex-1 px-4 sm:px-6 lg:ml-64 lg:px-10">
          <div className="w-full border border-slate-200 bg-white px-4 py-6 font-serif text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
