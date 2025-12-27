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
  FaQuestionCircle,
  FaFlask,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const navItems = [
  { href: "/syllabus", label: "Syllabus", icon: FaFileAlt },
  { href: "/getting-started", label: "Getting Started", icon: FaBookOpen },
  {
    href: "/setup-installation",
    label: "Setup & Installation",
    icon: FaDownload,
  },
];

const supportNav = [
  { href: "/questions", label: "Questions", icon: FaQuestionCircle },
  { href: "/lab-questions", label: "Lab Questions", icon: FaFlask },
];

const chapterNav = [
  {
    title: "1. Chapter 01: Basics of Java",
    items: [
      { href: "/chapter-01", label: "Overview" },
      { href: "/chapter-01/first-program", label: "1.1 First Program" },
      { href: "/chapter-01/architecture", label: "1.2 Architecture" },
      { href: "/chapter-01/class-paths", label: "1.3 Class Paths" },
      { href: "/chapter-01/class-object", label: "1.4 Class & Object" },
      { href: "/chapter-01/constructors", label: "1.5 Constructors" },
      { href: "/chapter-01/exception-handling", label: "1.6 Exception Handling" },
      { href: "/chapter-01/general-programs", label: "General Programs" },
      { href: "/chapter-01/class-and-objects-programs", label: "Class and Objects Programs" },
    ],
  },
  {
    title: "2. Chapter 02: OOP in Java",
    items: [
      { href: "/chapter-02", label: "Overview" },
      { href: "/chapter-02/principles", label: "2.1 Principles" },
      { href: "/chapter-02/super-sub-class", label: "2.2 Super class & Sub class" },
      { href: "/chapter-02/inheritance-types", label: "2.3 Inheritance Types" },
      { href: "/chapter-02/overriding-overloading", label: "2.4 Overriding / Overloading" },
    ],
  },
];

export default function ContentLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [openChapters, setOpenChapters] = useState(() => {
    const initialState = {};
    chapterNav.forEach((chapter) => {
      initialState[chapter.title] = true;
    });
    return initialState;
  });
  const pathname = usePathname();

  const toggleChapter = (title) => {
    setOpenChapters((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f1ea]">
      <header className="sticky top-0 z-40 flex w-full items-center justify-between px-4 py-3 bg-[#1a3c8b] text-white shadow lg:hidden">
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

            <nav className="custom-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto text-sm">
              {/* Top-level pages */}
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = href !== "#" && pathname === href;
                return (
                  <Link
                    key={href + label}
                    href={href}
                    onClick={() => setOpen(false)}
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

              {/* Chapters */}
              <div className="mt-4 border-t border-white/10 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-indigo-100/80">
                Chapters
              </div>
              <div className="mt-1 space-y-2">
                {chapterNav.map((chapter) => {
                  const isOpen = openChapters[chapter.title];
                  return (
                    <div key={chapter.title} className="text-xs">
                      <button
                        type="button"
                        onClick={() => toggleChapter(chapter.title)}
                        className="flex w-full items-center justify-between px-3 py-1 text-left text-[0.7rem] font-semibold text-indigo-100/90 hover:bg-white/10"
                      >
                        <span>{chapter.title}</span>
                        {isOpen ? (
                          <FaChevronDown className="h-3 w-3" />
                        ) : (
                          <FaChevronRight className="h-3 w-3" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="mt-0.5 space-y-0.5">
                          {chapter.items.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={chapter.title + item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`block truncate px-5 py-1 text-[0.7rem] transition-colors ${
                                  isActive
                                    ? "bg-white/10 text-white"
                                    : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                                }`}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Questions & Labs */}
              <div className="mt-4 border-t border-white/10 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-indigo-100/80">
                Practice
              </div>
              <div className="mt-1 space-y-1 text-xs">
                {supportNav.map(({ href, label, icon: Icon }) => {
                  const isActive = href !== "#" && pathname === href;
                  return (
                    <Link
                      key={href + label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-[0.7rem] font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>
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

          <nav className="custom-scrollbar flex-1 space-y-3 overflow-y-auto pr-1 text-sm">
            {/* Top-level pages */}
            <div className="space-y-1">
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
            </div>

            {/* Chapters */}
            <div className="border-t border-white/10 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-indigo-100/80">
              Chapters
            </div>
            <div className="space-y-2 text-xs">
              {chapterNav.map((chapter) => {
                const isOpen = openChapters[chapter.title];
                return (
                  <div key={chapter.title}>
                    <button
                      type="button"
                      onClick={() => toggleChapter(chapter.title)}
                      className="flex w-full items-center justify-between px-3 py-1 text-left text-[0.72rem] font-semibold text-indigo-100/90 hover:bg-white/10"
                    >
                      <span>{chapter.title}</span>
                      {isOpen ? (
                        <FaChevronDown className="h-3 w-3" />
                      ) : (
                        <FaChevronRight className="h-3 w-3" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="mt-0.5 space-y-0.5">
                        {chapter.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={chapter.title + item.label}
                              href={item.href}
                              className={`block truncate px-5 py-1 text-[0.7rem] transition-colors ${
                                isActive
                                  ? "bg-white/10 text-white"
                                  : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Questions & Labs */}
            <div className="border-t border-white/10 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-indigo-100/80">
              Practice
            </div>
            <div className="space-y-1 text-xs">
              {supportNav.map(({ href, label, icon: Icon }) => {
                const isActive = href !== "#" && pathname === href;
                return (
                  <Link
                    key={href + label}
                    href={href}
                    className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-[0.72rem] font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-100/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
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
