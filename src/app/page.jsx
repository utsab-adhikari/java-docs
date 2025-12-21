"use client";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaArrowRight,
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

          <div className="cover-author">
            <div className="author-line" />
            <h3 className="author-name">Utsab Adhikari</h3>
            <p className="author-cred">
              Bachelor of Engineering in Information Technology (BEIT)
            </p>
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

          {/* CTA */}
          <div className="textbook-actions">
            <a href="/getting-started" className="action-btn primary-action">
              <FaArrowRight />
              Proceed to Chapter 1
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
