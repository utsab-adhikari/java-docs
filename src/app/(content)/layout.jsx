"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaCode,
  FaLayerGroup,
  FaBars,
  FaTimes,
  FaFileAlt,
} from "react-icons/fa";

export default function ContentLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="mobile-header">
        <button
          className="menu-btn"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
        <span className="mobile-title">Java Documentation</span>
      </header>

      {/* Overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      <div className="docs-shell">

        {/* SIDEBAR */}
        <aside className={`docs-sidebar ${open ? "open" : ""}`}>
          <div className="sidebar-top">
            <h2 className="sidebar-title">Java Documentation</h2>
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="sidebar-nav">
            <Link href="/syllabus" onClick={() => setOpen(false)}>
              <FaFileAlt />
              Syllabus
            </Link>
            <Link href="/getting-started" onClick={() => setOpen(false)}>
              <FaBookOpen />
              Getting Started
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              <FaLayerGroup />
              Java Fundamentals
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              <FaCode />
              OOP Concepts
            </Link>
          </nav>

          <footer className="sidebar-footer">
            <p>Prepared by</p>
            <strong>Utsab Adhikari</strong>
          </footer>
        </aside>

        {/* CONTENT */}
        <main className="docs-content">
          {children}
        </main>

      </div>
    </>
  );
}
