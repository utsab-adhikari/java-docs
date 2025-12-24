"use client";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaArrowRight,
  FaJava,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="textbook-container">
      <div className="textbook-page">

        {/* COVER PAGE */}
        <section className="cover-front">
          <div className="cover-title-block">
            <h1 className="cover-main-title">ADVANCED PROGRAMMING</h1>

            <div className="cover-subtitle">
              <span className="cover-with">WITH</span>
              <h2 className="cover-language">JAVA</h2>
            </div>

            <p className="cover-edition">
              Based on Pokhara University Syllabus
            </p>
          </div>

          <div className="cover-logo flex items-center justify-center mt-5">
          <FaJava size={50} className="cover-java-icon text-red-600" />
          </div>

          <div className="cover-author">

            <div className="flex flex-col gap-2 text-sm text-slate-100 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:items-center sm:gap-2">
                <span className="font-semibold uppercase text-slate-200">
                  Prepared by: <br/>
                </span>
                <span className="font-medium">
                  Utsab Adhikari
                  <span className="ml-1 text-xs font-normal text-slate-200">
                    (BEIT Undergraduate)
                  </span>
                </span>
              </div>

              <div className="flex flex-col sm:items-center sm:gap-2">
                <span className="font-semibold uppercase text-slate-200">
                  Reviewed by:
                </span>
                <span className="font-medium text-slate-200">Pending</span>
              </div>
            </div>
          </div>

          <footer className="cover-footer">
            © {new Date().getFullYear()} Utsab Adhikari. All rights reserved.
          </footer>
        </section>

        {/* CONTENT */}
        <section className="textbook-content">

          {/* PREFACE */}
          <section className="chapter-section">
            <h2 className="section-heading">Preface</h2>
            <p>
              This documentation is prepared as a structured academic reference
              for the course <em>Advanced Programming with Java</em>, aligned
              strictly with the Pokhara University syllabus. It is written
              progressively during the semester to support conceptual clarity,
              examination preparation, and disciplined programming practice.
            </p>
          </section>

          {/* STRUCTURE */}
          <section className="chapter-section">
            <h2 className="section-heading">Organization of the Material</h2>

            <ul className="objectives-list">
              <li>Clear explanation of core Java concepts</li>
              <li>Object-oriented programming principles</li>
              <li>Practical code examples</li>
              <li>Chapter-wise progression</li>
            </ul>
          </section>

          {/* META / LAST UPDATED */}
          <div className="mt-6 text-xs text-slate-500 sm:text-sm border border-indigo-100 bg-indigo-50 px-4 py-2 text-indigo-900 shadow-sm">
            Last updated: December 24, 2025
          </div>

          {/* CTA */}
          <div className="textbook-actions mt-3">
            <a href="/getting-started" className="action-btn primary-action">
              <FaArrowRight />
              Proceed to Getting Started
            </a>
          </div>

          {/* AUTHOR */}
          <section className="author-section">
            <h2 className="author-section-title">About the Author</h2>

            <p>
              Utsab Adhikari is an undergraduate engineering student pursuing
              Bachelor of Engineering in Information Technology. This material
              reflects his academic learning, structured self-study, and
              coursework-aligned understanding of Java programming.
            </p>

            <div className="author-links">
              <a href="https://utsabadhikari.me" target="_blank">
                <FaGlobe /> Portfolio
              </a>
              <a href="https://github.com/utsab-adhikari" target="_blank">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/utsabadhikari" target="_blank">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:contact@utsabadhikari.me">
                <FaEnvelope /> Email
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="running-footer">
            Academic Reference · Not for Commercial Distribution
          </footer>

        </section>
      </div>
    </main>
  );
}
