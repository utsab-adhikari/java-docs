"use client";

import { useState } from "react";

export default function SyllabusPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="syllabus-wrapper">

      {/* Main content */}
      <>
        <article className="syllabus-page">
          <h1 className="page-title">Advanced Programming with Java - Syllabus</h1>

          {/* Course Info */}
          <section id="course-info" className="course-section">
            <h2>Course Information</h2>
            <table className="course-table">
              <tbody>
                <tr><td>Course Title</td><td>Advanced Programming with Java</td></tr>
                <tr><td>Full Marks</td><td>100</td></tr>
                <tr><td>Pass Marks</td><td>45</td></tr>
                <tr><td>Nature of Course</td><td>Theory/Tutorial/Practical</td></tr>
                <tr><td>Time per Period</td><td>1 hour</td></tr>
                <tr><td>Total Periods</td><td>45</td></tr>
                <tr><td>Level</td><td>Undergraduate</td></tr>
                <tr><td>Program</td><td>BE Computer/IT/Software</td></tr>
              </tbody>
            </table>
          </section>

          {/* Description */}
          <section id="description" className="course-section">
            <h2>Course Description</h2>
            <p>
              This course provides in-depth knowledge of advanced Java programming, including Java architecture,
              object-oriented principles, GUI development, networking, database integration, web development, and advanced topics like ORM, Hibernate, and concurrency.
              Students will be equipped to build robust Java applications for diverse professional challenges.
            </p>
          </section>

          {/* Objectives */}
          <section id="objectives" className="course-section">
            <h2>General Objectives</h2>
            <ol>
              <li>Understand Java fundamentals, architecture, data types, and control structures.</li>
              <li>Master object-oriented principles: inheritance, polymorphism, abstraction.</li>
              <li>Develop GUI applications using Swing, AWT, and JavaFX.</li>
              <li>Learn networking, socket programming, URL handling, and email integration.</li>
              <li>Gain knowledge in database connectivity with JDBC and SQL operations.</li>
              <li>Create dynamic web applications using Servlets and JSP.</li>
              <li>Explore advanced topics: ORM, Hibernate, Spring Boot, concurrency, and design patterns.</li>
            </ol>
          </section>

          {/* Instruction Methods */}
          <section id="instruction" className="course-section">
            <h2>Methods of Instruction</h2>
            <p>
              The course uses lectures, practical classes, tutorials, group discussions, presentations, quizzes, and project work to ensure a balance of theory and hands-on learning.
            </p>
          </section>

          {/* Detailed Content */}
          <section id="content" className="course-section">
            <h2>Course Contents</h2>
            {[
              {
                title: "Unit 1: Basics of Programming in Java (7 hrs)",
                points: [
                  "Java Architecture, Class paths, Sample Program",
                  "Classes, Objects, Constructors",
                  "Packages and Data Types",
                  "Conditional Statements",
                  "Access Modifiers",
                  "Exception Handling",
                  "Java Collections"
                ]
              },
              {
                title: "Unit 2: Object Oriented Principles in Java (6 hrs)",
                points: [
                  "Review of object-oriented principles",
                  "Super class, sub class, inheritance, and member access",
                  "Types of inheritance",
                  "Extends and super keyword",
                  "Overriding/Overloading",
                  "Final classes and methods",
                  "Abstract classes and methods",
                  "Upcasting vs Down casting",
                  "Interfaces and Implementations"
                ]
              },
              {
                title: "Unit 3: Building Components using Swing and JavaFX (6 hrs)",
                points: [
                  "Introduction to AWT and Swing",
                  "Layout Management",
                  "GUI Controls",
                  "Menu Elements and Tooltips",
                  "Dialogs and Frames",
                  "Event Handling",
                  "JavaFX vs Swing, Layouts, and UI Controls"
                ]
              },
              {
                title: "Unit 4: Distributed Network Programming (8 hrs)",
                points: [
                  "TCP, UDP, IP Address and Ports",
                  "Socket Programming using TCP and UDP",
                  "Working with URLs and URL Connection Class",
                  "Email Handling using Java Mail API",
                  "Architecture of RMI and CORBA",
                  "Creating and Executing RMI Applications",
                  "IDL and Simple CORBA Program"
                ]
              },
              {
                title: "Unit 5: Database Connectivity with JAVA (5 hrs)",
                points: [
                  "JDBC Architecture and Driver Types",
                  "Managing Connections and Statements",
                  "Result Sets and Exception Handling",
                  "DDL and DML Operations",
                  "SQL Injection and Prepared Statements",
                  "Row Sets and Transactions",
                  "SQL Escapes"
                ]
              },
              {
                title: "Unit 6: Servlets and JSP (6 hrs)",
                points: [
                  "Overview of Web Application",
                  "HTTP Methods and Responses",
                  "Life Cycle of Web Servlets",
                  "Writing Servlet programs",
                  "Form Handling (GET/POST)",
                  "Database connectivity",
                  "Cookies and Sessions"
                ]
              },
              {
                title: "Unit 7: Advanced Topics in JAVA (7 hrs)",
                points: [
                  "Overview of ORM and Hibernate",
                  "Web Framework Introduction",
                  "Basics of Spring Boot",
                  "Concurrency and Multithreading",
                  "Design Patterns: Singleton, Factory, Abstract Factory"
                ]
              }
            ].map((unit, idx) => (
              <div key={idx} className="unit-card">
                <h3>{unit.title}</h3>
                <ul>
                  {unit.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Tutorials */}
          <section id="tutorials" className="course-section">
            <h2>Tutorials</h2>
            <ul className="syllabus-list">
              {[
                "Setting Up Java Development Environment",
                "Creating Your First Java Program",
                "Working with Classes and Objects",
                "Packages and Data Types",
                "Conditional Statements",
                "Access Modifiers",
                "Exception Handling",
                "Working with Files in Java",
                "Java Collections Framework",
                "Object-Oriented Concepts",
                "Advanced Inheritance and Interfaces",
                "GUIs with Swing",
                "Introduction to JavaFX",
                "Network Programming with Sockets",
                "Database Connectivity with JDBC",
                "Servlet Development",
                "JSP Essentials",
                "Concurrency and Multithreading",
                "Design Patterns"
              ].map((t, idx) => <li key={idx}>{t}</li>)}
            </ul>
          </section>

          {/* Practical */}
          <section id="practical" className="course-section">
            <h2>Practical Work</h2>
            <ul className="syllabus-list">
              {[
                "Basic Java Application",
                "Object-Oriented Programming",
                "GUI Application with Swing",
                "JavaFX Project",
                "Socket Programming",
                "JDBC Database Application",
                "Servlet-Based Web Application",
                "Concurrency Demonstration",
                "Hibernate Integration",
                "Spring Boot Project"
              ].map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </section>

          {/* Evaluation */}
          <section id="evaluation" className="course-section">
            <h2>Evaluation & Responsibilities</h2>
            <p>
              Internal evaluation includes quizzes, assignments, lab reports, projects, class participation, and presentations.
              Students must secure at least 45% marks and 80% attendance to appear in final exams.
            </p>
          </section>

          {/* References */}
          <section id="references" className="course-section">
            <h2>References</h2>
            <ul className="syllabus-list">
              <li>Dietel H.M and Dietel P.J., Java: How to Program, Third Edition, Pearson Education Asia</li>
              <li>Naughton, Java 2: The Complete Reference, Tata McGraw Hill</li>
              <li>Balagurusamy E., Programming in Java: 2nd Edition, Tata McGraw Hill</li>
            </ul>
          </section>
        </article>
      </>

      <style jsx>{`
        .syllabus-wrapper {
          display: flex;
          position: relative;
        }

        .sidebar-toggle {
          display: none;
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1000;
          background: #1a3c8b;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .syllabus-sidebar {
          width: 250px;
          position: sticky;
          top: 1rem;
          height: calc(100vh - 2rem);
          overflow-y: auto;
          padding: 1rem;
          background: #f0f4f8;
          border-right: 1px solid #ddd;
        }

        .syllabus-sidebar h3 {
          margin-bottom: 1rem;
        }

        .syllabus-sidebar ul {
          list-style: none;
          padding-left: 0;
        }

        .syllabus-sidebar li {
          margin: 0.5rem 0;
        }

        .syllabus-sidebar a {
          text-decoration: none;
          color: #1a3c8b;
        }

        .syllabus-page {
          flex: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .page-title {
          font-size: 2rem;
          color: #1a3c8b;
          margin-bottom: 2rem;
        }

        .course-table {
          width: 100%;
          border-collapse: collapse;
        }

        .course-table td {
          padding: 0.5rem 0.8rem;
          border-bottom: 1px solid #ddd;
        }

        .course-section {
          margin-bottom: 2rem;
        }

        .course-section h2 {
          font-size: 1.4rem;
          color: #1a3c8b;
          margin-bottom: 1rem;
          border-left: 4px solid #ffb300;
          padding-left: 0.5rem;
        }

        .unit-card {
          background: #fff;
          border-left: 4px solid #1a3c8b;
          padding: 1rem 1.2rem;
          margin: 1rem 0;
          border-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .unit-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .unit-card ul {
          margin-left: 1.2rem;
          list-style-type: disc;
        }

        .syllabus-list {
          margin-left: 1.2rem;
          list-style-type: decimal;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .syllabus-wrapper {
            flex-direction: column;
          }

          .syllabus-sidebar {
            position: fixed;
            top: 0;
            left: -100%;
            height: 100%;
            width: 70%;
            z-index: 999;
            transition: left 0.3s ease-in-out;
            box-shadow: 2px 0 8px rgba(0,0,0,0.2);
          }

          .syllabus-sidebar.open {
            left: 0;
          }

          .sidebar-toggle {
            display: block;
          }

          .syllabus-page {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
