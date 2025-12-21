"use client";


export default function SyllabusPage() {
  return (
<>
      <article className="syllabus-page">
        <h1 className="page-title">Advanced Programming with Java - Syllabus</h1>

        {/* Course Info */}
        <section className="course-info">
          <table className="course-table">
            <tbody>
              <tr>
                <td>Course No.</td>
                <td>–</td>
              </tr>
              <tr>
                <td>Course Title</td>
                <td>Advanced Programming with Java</td>
              </tr>
              <tr>
                <td>Full Marks</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Pass Marks</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Nature of Course</td>
                <td>Theory/Tutorial/Practical</td>
              </tr>
              <tr>
                <td>Time per period</td>
                <td>1 hour</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>–</td>
              </tr>
              <tr>
                <td>Total periods</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Level</td>
                <td>Undergraduate</td>
              </tr>
              <tr>
                <td>Program</td>
                <td>BE Computer/IT/Software</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Course Description */}
        <section className="course-section">
          <h2>1. Course Description</h2>
          <p>
            This comprehensive course provides students with an in-depth understanding of advanced Java programming,
            covering theoretical and practical aspects. Topics include Java architecture, object-oriented principles,
            GUI development, networking, database integration, web development, and advanced topics like ORM, Hibernate,
            and concurrency. By the end, students will be proficient in Java programming and ready for diverse professional challenges.
          </p>
        </section>

        {/* General Objectives */}
        <section className="course-section">
          <h2>2. General Objectives</h2>
          <ol>
            <li>Understand Java fundamentals, architecture, data types, and control structures.</li>
            <li>Master object-oriented principles: inheritance, polymorphism, abstraction.</li>
            <li>Develop GUI applications with Swing, AWT, and JavaFX.</li>
            <li>Learn networking, socket programming, URL handling, and email integration.</li>
            <li>Gain knowledge in database connectivity using JDBC and SQL operations.</li>
            <li>Create dynamic web applications using Servlets and JSP.</li>
            <li>Explore advanced topics: ORM, Hibernate, Spring Boot, concurrency, and design patterns.</li>
          </ol>
        </section>

        {/* Instruction Methods */}
        <section className="course-section">
          <h2>3. Methods of Instruction</h2>
          <p>
            This course adopts diverse instructional methods: lectures for theory, practical classes for hands-on programming,
            tutorials for discussion, group work, presentations, quizzes, and project assignments to reinforce learning.
          </p>
        </section>

        {/* Detailed Content */}
        <section className="course-section">
          <h2>4. Contents in Detail with Specific Objectives</h2>

          <div className="unit-card">
            <h3>Unit 1: Basics of Programming in Java (7 hrs)</h3>
            <ul>
              <li>Java Architecture, Class paths, Sample Program</li>
              <li>Classes, Objects, Constructors</li>
              <li>Packages and Data Types</li>
              <li>Conditional Statements</li>
              <li>Access Modifiers</li>
              <li>Exception Handling</li>
              <li>Java Collections</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 2: Object Oriented Principles in Java (6 hrs)</h3>
            <ul>
              <li>Review of object-oriented principles</li>
              <li>Super class, sub class, inheritance, and member access</li>
              <li>Types of inheritance</li>
              <li>Extends and super keyword</li>
              <li>Overriding/Overloading</li>
              <li>Final classes and methods</li>
              <li>Abstract classes and methods</li>
              <li>Upcasting vs Down casting</li>
              <li>Interfaces and Implementations</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 3: Building Components using Swing and JavaFX (6 hrs)</h3>
            <ul>
              <li>Introduction to AWT and Swing</li>
              <li>Layout Management</li>
              <li>GUI Controls</li>
              <li>Menu Elements and Tooltips</li>
              <li>Dialogs and Frames</li>
              <li>Event Handling</li>
              <li>JavaFX vs Swing, Layouts, and UI Controls</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 4: Distributed Network Programming (8 hrs)</h3>
            <ul>
              <li>TCP, UDP, IP Address and Ports</li>
              <li>Socket Programming using TCP and UDP</li>
              <li>Working with URLs and URL Connection Class</li>
              <li>Email Handling using Java Mail API</li>
              <li>Architecture of RMI and CORBA</li>
              <li>Creating and Executing RMI Applications</li>
              <li>IDl and Simple CORBA Program</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 5: Database Connectivity with JAVA (5 hrs)</h3>
            <ul>
              <li>JDBC Architecture and Driver Types</li>
              <li>Managing Connections and Statements</li>
              <li>Result Sets and Exception Handling</li>
              <li>DDL and DML Operations</li>
              <li>SQL Injection and Prepared Statements</li>
              <li>Row Sets and Transactions</li>
              <li>SQL Escapes</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 6: Servlets and JSP (6 hrs)</h3>
            <ul>
              <li>Overview of Web Application</li>
              <li>HTTP Methods and Responses</li>
              <li>Life Cycle of Web Servlets</li>
              <li>Writing Servlet programs</li>
              <li>Form Handling (GET/POST)</li>
              <li>Database connectivity</li>
              <li>Cookies and Sessions</li>
            </ul>
          </div>

          <div className="unit-card">
            <h3>Unit 7: Advanced Topics in JAVA (7 hrs)</h3>
            <ul>
              <li>Overview of ORM and Hibernate</li>
              <li>Web Framework Introduction</li>
              <li>Basics of Spring Boot</li>
              <li>Concurrency and Multithreading</li>
              <li>Design Patterns: Singleton, Factory, Abstract Factory</li>
            </ul>
          </div>
        </section>

        {/* Tutorials */}
        <section className="course-section">
          <h2>5. List of Tutorials</h2>
          <ul className="syllabus-list">
            <li>Setting Up Java Development Environment</li>
            <li>Creating Your First Java Program</li>
            <li>Working with Classes and Objects</li>
            <li>Packages and Data Types</li>
            <li>Conditional Statements</li>
            <li>Access Modifiers</li>
            <li>Exception Handling</li>
            <li>Working with Files in Java</li>
            <li>Java Collections Framework</li>
            <li>Object-Oriented Concepts</li>
            <li>Advanced Inheritance and Interfaces</li>
            <li>GUIs with Swing</li>
            <li>Introduction to JavaFX</li>
            <li>Network Programming with Sockets</li>
            <li>Database Connectivity with JDBC</li>
            <li>Servlet Development</li>
            <li>JSP Essentials</li>
            <li>Concurrency and Multithreading</li>
            <li>Design Patterns</li>
          </ul>
        </section>

        {/* Practical Works */}
        <section className="course-section">
          <h2>6. Practical Work</h2>
          <ul className="syllabus-list">
            <li>Basic Java Application</li>
            <li>Object-Oriented Programming</li>
            <li>GUI Application with Swing</li>
            <li>JavaFX Project</li>
            <li>Socket Programming</li>
            <li>JDBC Database Application</li>
            <li>Servlet-Based Web Application</li>
            <li>Concurrency Demonstration</li>
            <li>Hibernate Integration</li>
            <li>Spring Boot Project</li>
          </ul>
        </section>

        {/* Evaluation */}
        <section className="course-section">
          <h2>7. Evaluation System & Student Responsibilities</h2>
          <p>
            Internal evaluation: quizzes, assignments, lab reports, projects, class participation, presentations.
            Minimum 45% in internal assessment and 80% attendance required to appear in final exam.
          </p>
        </section>

        {/* References */}
        <section className="course-section">
          <h2>8. Prescribed Books & References</h2>
          <ul className="syllabus-list">
            <li>Dietel H.M and Dietel P.J., Java: How to Program, Third Edition, Pearson Education Asia</li>
            <li>Naughton, Java 2: The Complete Reference, Tata McGraw Hill</li>
            <li>Balagurusamy E., Programming in Java: 2nd Edition, Tata McGraw Hill</li>
          </ul>
        </section>
      </article>

      <style jsx>{`
        .syllabus-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 1rem;
        }
        .page-title {
          font-size: 2rem;
          color: #1a3c8b;
          margin-bottom: 1.5rem;
        }
        .course-info {
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
          margin-bottom: 0.8rem;
          border-left: 4px solid #ffb300;
          padding-left: 0.5rem;
        }
        .unit-card {
          background: #f7f7f7;
          border-left: 4px solid #1a3c8b;
          padding: 1rem 1.2rem;
          margin: 1rem 0;
          border-radius: 4px;
        }
        .unit-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #1a3c8b;
        }
        .unit-card ul {
          margin-left: 1.2rem;
          list-style-type: disc;
        }
        .syllabus-list {
          margin-left: 1.2rem;
          list-style-type: decimal;
        }
      `}</style>
    </>
  );
}
