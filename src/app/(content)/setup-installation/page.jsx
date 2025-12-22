"use client";

import Link from "next/link";

export default function SetupInstallationPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
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
          <span className="font-medium text-slate-700">
            Setup &amp; Installation
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Java Setup &amp; Installation
        </h1>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <p className="text-slate-700">
          Before diving into advanced Java programming, it is essential to set
          up a proper development environment. This page guides you through
          installing Java on different operating systems, choosing a suitable
          code editor or IDE, and running your first Java programs confidently.
        </p>
      </section>

      {/* JDK Overview */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Java Development Kit (JDK)
        </h2>
        <p className="text-slate-700">
          The Java Development Kit (JDK) is required to develop and run Java
          applications. It includes the Java compiler (<code>javac</code>), Java
          Virtual Machine (JVM), and standard libraries.
        </p>
        <p className="text-slate-700">
          Recommended version for this course:
          <strong> JDK 17 (LTS)</strong>
        </p>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Installing Java on Different Operating Systems
        </h2>

        <div className=" border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">Windows</h3>
          <ul className="mt-2 ml-5 list-disc space-y-1.5 text-sm text-slate-700">
            <li>Download JDK from Oracle or OpenJDK distribution.</li>
            <li>Run the installer and follow on-screen instructions.</li>
            <li>Add Java to system PATH automatically (recommended).</li>
            <li>Restart the system after installation.</li>
          </ul>
        </div>

        <div className=" border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            Linux (Ubuntu / Debian-based)
          </h3>
          <pre className="mt-2 overflow-x-auto bg-slate-900 px-3 py-2 text-xs text-slate-100">
            <code>
              sudo apt update
              {"\n"}
              sudo apt install openjdk-17-jdk
            </code>
          </pre>
          <p className="mt-1 text-sm text-slate-700">
            Verify installation using the terminal.
          </p>
        </div>

        <div className=" border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">macOS</h3>
          <p className="mt-1 text-sm text-slate-700">
            Install using Homebrew (recommended).
          </p>
          <pre className="mt-2 overflow-x-auto bg-slate-900 px-3 py-2 text-xs text-slate-100">
            <code>brew install openjdk@17</code>
          </pre>
        </div>
      </section>

      {/* Verify */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Verifying Java Installation
        </h2>
        <p className="text-slate-700">
          Open a terminal or command prompt and run:
        </p>
        <pre className="overflow-x-auto bg-slate-900 px-3 py-2 text-xs text-slate-100">
          <code>
            java -version
            {"\n"}
            javac -version
          </code>
        </pre>
        <p className="text-slate-700">
          If Java is installed correctly, version information will be displayed.
        </p>
      </section>

      {/* IDEs */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Choosing a Code Editor or IDE
        </h2>
        <p className="text-slate-700">
          Selecting the right development environment improves productivity and
          learning.
        </p>

        <div className=" border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            Recommended IDEs
          </h3>
          <ul className="mt-2 ml-5 list-disc space-y-1.5 text-sm text-slate-700">
            <li>
              <strong>IntelliJ IDEA</strong> – Industry standard, powerful
              features
            </li>
            <li>
              <strong>Eclipse</strong> – Popular academic and open-source IDE
            </li>
            <li>
              <strong>NetBeans</strong> – Simple, beginner-friendly
            </li>
          </ul>
        </div>

        <div className=" border-l-4 border-indigo-700 bg-white px-4 py-3 shadow-sm">
          <h3 className="text-base font-semibold text-slate-900">
            Code Editors
          </h3>
          <ul className="mt-2 ml-5 list-disc space-y-1.5 text-sm text-slate-700">
            <li>
              <strong>VS Code</strong> – Lightweight with Java extensions
            </li>
            <li>
              <strong>Neovim / Vim</strong> – Terminal-based, advanced users
            </li>
          </ul>
        </div>
      </section>

      {/* Running Java */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          How Java Programs Are Compiled and Run
        </h2>
        <p className="text-slate-700">
          Java programs follow a two-step execution process:
        </p>
        <ol className="ml-6 list-decimal space-y-1.5 text-slate-700">
          <li>
            Compilation using <code>javac</code>
          </li>
          <li>
            Execution using <code>java</code>
          </li>
        </ol>

        <pre className="overflow-x-auto bg-slate-900 px-3 py-2 text-xs text-slate-100">
          <code>
            javac HelloWorld.java
            {"\n"}
            java HelloWorld
          </code>
        </pre>

        <p className="text-slate-700">
          The compiler converts source code into bytecode, which is executed by
          the JVM. This makes Java platform-independent.
        </p>
      </section>

      <p className="text-sm text-black text-center">"Now You are ready to write and run your first Java program!"</p>

      {/* Navigation */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/getting-started"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: Getting Started</span>
        </Link>
        <Link
          href="/first-program"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: First Java Program</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
}
