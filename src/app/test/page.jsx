"use client";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaBook, FaUniversity, FaGraduationCap, FaPrint, FaBookmark, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("preface");

  const tocSections = [
    { id: "preface", title: "Preface", page: "v" },
    { id: "toc", title: "Table of Contents", page: "vii" },
    { id: "ch1", title: "Chapter 1: Java Fundamentals", page: "1" },
    { id: "ch2", title: "Chapter 2: Object-Oriented Programming", page: "25" },
    { id: "ch3", title: "Chapter 3: Inheritance & Polymorphism", page: "53" },
    { id: "ch4", title: "Chapter 4: Exception Handling", page: "89" },
    { id: "ch5", title: "Chapter 5: Collections Framework", page: "121" },
    { id: "ch6", title: "Chapter 6: Multithreading", page: "157" },
    { id: "ch7", title: "Chapter 7: GUI Programming", page: "193" },
    { id: "ch8", title: "Chapter 8: File I/O & Serialization", page: "229" },
    { id: "ch9", title: "Chapter 9: Networking", page: "265" },
    { id: "ch10", title: "Chapter 10: JDBC & Database Connectivity", page: "301" },
    { id: "appendix", title: "Appendix A: Quick Reference", page: "337" },
    { id: "index", title: "Index", page: "359" }
  ];

  return (
    <div className="textbook-container">
      <div className="textbook-page">
        {/* Front Cover */}
        <section className="cover-front">
          
          <div className="cover-title-block">
            <h1 className="cover-main-title">ADVANCED PROGRAMMING</h1>
            <div className="cover-subtitle">
              <span className="cover-with">WITH</span>
              <h2 className="cover-language">JAVA</h2>
            </div>
            <div className="cover-edition">
              <span className="edition-text">Based on POKHARA UNIVERSITY syllabus</span>
            </div>
          </div>

          <div className="cover-author">
            <div className="author-line"></div>
            <div className="author-info">
              <h3 className="author-name">Utsab Adhikari</h3>
              <p className="author-cred">BEIT 2024 Batch - NCIT</p>
            </div>
          </div>

          <div className="cover-footer">
            Copyright © 2025 by Utsab Adhikari. All rights reserved.
          </div>
        </section>

        {/* Inside Pages */}
        <div className="textbook-spine"></div>
        
        <div className="textbook-content">

          {/* Dedication */}
          <section className="dedication">
            <p className="dedication-text">
              <em>
                To the students of Pokhara University,<br />
                whose curiosity drives the creation of this material.
              </em>
            </p>
          </section>

          {/* Preface */}
          <section id="preface" className="chapter-section">
            <h2 className="section-heading">Structure</h2>
            <p>
              The textbook is organized into ten chapters, each building upon concepts 
              introduced in previous chapters. Each chapter includes:
            </p>
            
            <div className="features-grid">
              <div className="feature-box">
                <div className="feature-icon">📘</div>
                <h4>Learning Objectives</h4>
                <p>Clear goals at the beginning of each chapter</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">💻</div>
                <h4>Code Examples</h4>
                <p>Practical, runnable Java programs</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">📝</div>
                <h4>Review Questions</h4>
                <p>End-of-chapter assessment questions</p>
              </div>
              <div className="feature-box">
                <div className="feature-icon">🔍</div>
                <h4>Exercises</h4>
                <p>Hands-on programming assignments</p>
              </div>
            </div>
          </section>

           {/* Textbook Action Buttons */}
          <div className="textbook-actions">
            <button className="action-btn primary-action">
              <FaArrowRight />
              <span>Begin Reading Chapter 1</span>
            </button>
          </div>

          {/* Author Information */}
          <section className="author-section">
            <h2 className="author-section-title">About the Author</h2>
            
            <div className="author-details">
              <div className="author-portrait">
                <div className="portrait-placeholder">UA</div>
              </div>
              
              <div className="author-bio">
                <h3>Utsab Adhikari</h3>
                <p className="author-title">Instructor & Software Developer</p>
                
                <p>
                  Utsab Adhikari holds a Master's degree in Computer Science and has been 
                  teaching programming courses at the university level for over five years. 
                  His research interests include software engineering, distributed systems, 
                  and computer science education.
                </p>
                
                <div className="author-links">
                  {[
                    { icon: <FaGlobe />, href: "https://utsabadhikari.me  ", label: "Portfolio" },
                    { icon: <FaGithub />, href: "https://github.com/utsab-adhikari  ", label: "GitHub" },
                    { icon: <FaLinkedin />, href: "https://linkedin.com/in/utsabadhikari  ", label: "LinkedIn" },
                    { icon: <FaEnvelope />, href: "mailto:contact@utsabadhikari.me", label: "Email" }
                  ].map((link, idx) => (
                    <a key={idx} href={link.href} className="author-link">
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Footer with page number */}
          <div className="flex justify-center items-center running-footer">
            <span className="">Academic Reference - Not for Commercial Distribution</span>
          </div>
        </div>
      </div>

      {/* Textbook Styling */}
      <style jsx>{`
        .textbook-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f1e8 0%, #e8e2d5 100%);
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #2c3e50;
          padding: 2rem;
          position: relative;
        }

        .textbook-page {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          box-shadow: 
            0 4px 8px rgba(0,0,0,0.1),
            0 10px 40px rgba(0,0,0,0.15),
            inset 0 0 100px rgba(0,0,0,0.03);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          min-height: 90vh;
        }

        /* Cover Styling */
        .cover-front {
          background: linear-gradient(145deg, #1a3c8b 0%, #2c5aa0 100%);
          color: white;
          padding: 4rem 3rem;
          text-align: center;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cover-university {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.9rem;
          opacity: 0.9;
          margin-bottom: 3rem;
        }

        .cover-icon {
          font-size: 1.2rem;
        }

        .cover-title-block {
          margin: 3rem 0;
        }

        .cover-main-title {
          font-family: 'Garamond', serif;
          font-size: 2.8rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .cover-subtitle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .cover-with {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        .cover-language {
          font-family: 'Georgia', serif;
          font-size: 3.5rem;
          font-weight: 300;
          letter-spacing: 1px;
          color: #ffd166;
        }

        .cover-edition {
          margin-top: 2rem;
        }

        .edition-text {
          font-size: 1rem;
          border-top: 1px solid rgba(255,255,255,0.3);
          border-bottom: 1px solid rgba(255,255,255,0.3);
          padding: 0.5rem 2rem;
          letter-spacing: 1px;
        }

        .cover-author {
          margin: 3rem 0;
        }

        .author-line {
          width: 200px;
          height: 2px;
          background: rgba(255,255,255,0.5);
          margin: 0 auto 1rem;
        }

        .author-name {
          font-size: 1.8rem;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .author-cred {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .cover-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.2);
        }

        .publisher-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .publisher-icon {
          font-size: 1rem;
        }

        /* Content Area */
        .textbook-content {
          padding: 3rem 4rem;
          position: relative;
          min-height: 600px;
        }

        /* Running Headers/Footers */
        .running-header, .running-footer {
          position: absolute;
          left: 4rem;
          right: 4rem;
          display: flex;
          justify-content: center;
          font-size: 0.8rem;
          color: #666;
          padding: 0.5rem 0;
        }

        .running-header {
          top: 0;
          border-bottom: 1px solid #e0dcd1;
        }

        .running-footer {
          bottom: 0;
          border-top: 1px solid #e0dcd1;
        }

        .page-number {
          font-variant-numeric: oldstyle-nums;
          font-family: 'Times New Roman', serif;
        }

        /* Copyright Page */
        .copyright-page {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e0dcd1;
        }

        .copyright-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #1a3c8b;
        }

        .copyright-content {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .copyright-warning {
          background: #fff8e1;
          padding: 1rem;
          border-left: 3px solid #ffb300;
          margin: 1.5rem 0;
          font-style: italic;
        }

        .publication-info {
          margin-top: 2rem;
          font-size: 0.85rem;
        }

        /* Dedication */
        .dedication {
          text-align: center;
          margin: 4rem 0;
          padding: 2rem;
          font-style: italic;
          color: #555;
          border-top: 1px dashed #e0dcd1;
          border-bottom: 1px dashed #e0dcd1;
        }

        .dedication-text {
          font-size: 1.1rem;
          line-height: 1.8;
        }

        /* Chapter Styles */
        .chapter-title {
          font-family: 'Garamond', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #1a3c8b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e0dcd1;
        }

        .drop-cap::first-letter {
          font-size: 3em;
          float: left;
          line-height: 1;
          margin: 0.1em 0.1em 0 0;
          color: #1a3c8b;
          font-weight: bold;
        }

        .chapter-intro {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* Textbook Note */
        .textbook-note {
          background: #e8f4fd;
          border-left: 4px solid #2196f3;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .note-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .note-content {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Section Headings */
        .section-heading {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2c3e50;
          margin: 2rem 0 1rem;
          padding-left: 0.5rem;
          border-left: 3px solid #ffb300;
        }

        /* Lists */
        .objectives-list {
          margin: 1.5rem 0 2rem 2rem;
          list-style-type: none;
        }

        .objectives-list li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .objectives-list li:before {
          content: "▸";
          color: #1a3c8b;
          position: absolute;
          left: 0;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .feature-box {
          background: #f9f7f3;
          border: 1px solid #e0dcd1;
          padding: 1.5rem;
          text-align: center;
          border-radius: 4px;
          transition: transform 0.2s;
        }

        .feature-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature-box h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #1a3c8b;
        }

        .feature-box p {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
        }

        /* Author Section */
        .author-section {
          margin: 4rem 0;
          padding: 2rem;
          background: linear-gradient(to right, #f9f7f3, #ffffff);
          border-radius: 4px;
          border: 1px solid #e0dcd1;
        }

        .author-section-title {
          font-size: 1.5rem;
          color: #1a3c8b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e0dcd1;
        }

        .author-details {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .author-portrait {
          flex-shrink: 0;
        }

        .portrait-placeholder {
          width: 120px;
          height: 150px;
          background: linear-gradient(135deg, #1a3c8b, #2c5aa0);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .author-bio {
          flex: 1;
        }

        .author-bio h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .author-title {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .author-bio p {
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .author-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .author-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid #e0dcd1;
          border-radius: 4px;
          text-decoration: none;
          color: #2c3e50;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .author-link:hover {
          background: #1a3c8b;
          color: white;
          transform: translateY(-1px);
        }

        /* Action Buttons */
        .textbook-actions {
          display: flex;
          gap: 1.5rem;
          margin: 3rem 0;
          justify-content: center;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem 2rem;
          border: none;
          border-radius: 4px;
          font-family: 'Georgia', serif;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        .primary-action {
          background: linear-gradient(135deg, #1a3c8b, #2c5aa0);
          color: white;
        }

        .secondary-action {
          background: white;
          color: #1a3c8b;
          border: 2px solid #1a3c8b;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .textbook-container {
            padding: 1rem;
          }
          
          .textbook-content {
            padding: 2rem;
          }
          
          .cover-main-title {
            font-size: 2rem;
          }
          
          .cover-language {
            font-size: 2.5rem;
          }
          
          .author-details {
            flex-direction: column;
            text-align: center;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .textbook-actions {
            flex-direction: column;
          }
          
          .running-header, .running-footer {
            display: none;
          }
        }

        /* Print Styles */
        @media print {
          .textbook-container {
            background: white;
            padding: 0;
          }
          
          .textbook-page {
            box-shadow: none;
          }
          
          .textbook-actions,
          .author-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
