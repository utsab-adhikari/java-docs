import Link from "next/link";

export default function SyllabusPage() {
  return (
    <article className="mx-auto max-w-4xl space-y-10">
      <header className="border-b border-slate-200 pb-6">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center text-xs text-slate-500 sm:text-sm"
        >
          <Link
            href="/"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Home
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">Syllabus</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Advanced Programming with Java - Syllabus
        </h1>
      </header>

      {/* Course Info */}
      <section id="course-info" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Course Information
        </h2>
        <table className="w-full border-collapse text-sm text-slate-700">
          <tbody>
            <tr className="border-b border-slate-200">
              <td className="w-1/3 py-2 pr-3 font-medium text-slate-600">
                Course Title
              </td>
              <td className="py-2 text-slate-800">Advanced Programming with Java</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Full Marks</td>
              <td className="py-2 text-slate-800">100</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Pass Marks</td>
              <td className="py-2 text-slate-800">45</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Nature of Course</td>
              <td className="py-2 text-slate-800">Theory/Tutorial/Practical</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Time per Period</td>
              <td className="py-2 text-slate-800">1 hour</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Total Periods</td>
              <td className="py-2 text-slate-800">45</td>
            </tr>
            <tr className="border-b border-slate-200">
              <td className="py-2 pr-3 font-medium text-slate-600">Level</td>
              <td className="py-2 text-slate-800">Undergraduate</td>
            </tr>
            <tr>
              <td className="py-2 pr-3 font-medium text-slate-600">Program</td>
              <td className="py-2 text-slate-800">BE Computer/IT/Software</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Description */}
      <section id="description" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Course Description
        </h2>
        <p className="text-slate-700">
          This course provides in-depth knowledge of advanced Java programming, including Java architecture,
          object-oriented principles, GUI development, networking, database integration, web development, and advanced topics like ORM, Hibernate, and concurrency.
          Students will be equipped to build robust Java applications for diverse professional challenges.
        </p>
      </section>

      {/* Objectives */}
      <section id="objectives" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          General Objectives
        </h2>
        <ol className="ml-6 list-decimal space-y-1.5 text-slate-700">
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
      <section id="instruction" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Methods of Instruction
        </h2>
        <p className="text-slate-700">
          The course uses lectures, practical classes, tutorials, group discussions, presentations, quizzes, and project work to ensure a balance of theory and hands-on learning.
        </p>
      </section>

      {/* Detailed Content */}
      <section id="content" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Course Contents
        </h2>
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
          <div
            key={idx}
            className="border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">
              {unit.title}
            </h3>
            <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-slate-700">
              {unit.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Tutorials */}
      <section id="tutorials" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Tutorials
        </h2>
        <ul className="ml-6 list-decimal space-y-1.5 text-slate-700">
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
              ].map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </section>

      {/* Practical */}
      <section id="practical" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Practical Work
        </h2>
        <ul className="ml-6 list-decimal space-y-1.5 text-slate-700">
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
              ].map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </section>

      {/* Evaluation */}
      <section id="evaluation" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Evaluation & Responsibilities
        </h2>
        <p className="text-slate-700">
          Internal evaluation includes quizzes, assignments, lab reports, projects, class participation, and presentations.
          Students must secure at least 45% marks and 80% attendance to appear in final exams.
        </p>
      </section>

      {/* References */}
      <section id="references" className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          References
        </h2>
        <ul className="ml-6 list-decimal space-y-1.5 text-slate-700">
          <li>
            Dietel H.M and Dietel P.J., Java: How to Program, Third Edition, Pearson
            Education Asia
          </li>
          <li>Naughton, Java 2: The Complete Reference, Tata McGraw Hill</li>
          <li>Balagurusamy E., Programming in Java: 2nd Edition, Tata McGraw Hill</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: Home</span>
        </Link>
        <Link
          href="/getting-started"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: Getting Started</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
