"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaEnvelope,
  FaArrowRight,
  FaJava,
} from "react-icons/fa";

export default function HomePage() {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLastUpdated() {
      try {
        const res = await fetch("/api/last-updated", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to load last updated info");
        }

        const data = await res.json();
        setLastUpdated({
          date: data.date ?? null,
          message: data.message ?? null,
        });
      } catch (err) {
        setError(err?.message ?? "Unable to fetch last updated info");
      } finally {
        setLoading(false);
      }
    }

    fetchLastUpdated();
  }, []);

  const formattedDate = lastUpdated?.date
    ? new Date(lastUpdated.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="textbook-container">
      <div className="textbook-page">
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

        <section className="textbook-content">

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

          <section className="chapter-section">
            <h2 className="section-heading">Organization of the Material</h2>

            <ul className="objectives-list">
              <li>Clear explanation of core Java concepts</li>
              <li>Object-oriented programming principles</li>
              <li>Practical code examples</li>
              <li>Chapter-wise progression</li>
            </ul>
          </section>

          <div className="mt-6 text-sm text-slate-500 sm:text-sm border border-indigo-100 bg-indigo-50 px-4 py-2 text-indigo-900 shadow-sm">
            {loading && <span>Fetching latest updates...</span>}
            {!loading && error && <span>Last updated information unavailable.</span>}
            {!loading && !error && (
              <div className="space-y-0.5">
                <p>
                  <span className="font-semibold">Last updated:</span>{" "}
                  {formattedDate ?? "Recently"}
                </p>
                {lastUpdated?.message && (
                  <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-2">
                    <span className="font-medium">Latest change:</span>{" "}
                    {lastUpdated.message}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="textbook-actions mt-3">
            <a href="/getting-started" className="action-btn primary-action">
              <FaArrowRight />
              Proceed to Getting Started
            </a>
          </div>

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

          <footer className="running-footer">
            Academic Reference · Not for Commercial Distribution
          </footer>

        </section>
      </div>
    </main>
  );
}
