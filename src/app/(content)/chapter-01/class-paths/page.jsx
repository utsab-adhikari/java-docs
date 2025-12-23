import Link from "next/link";

export default function ClassPathsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
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
          <Link
            href="/chapter-01"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 01
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            1.3 Class Paths
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          1.3 PATH and CLASSPATH Variables
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How environment variables connect your tools, compiler, and operating
          system, and when you actually need to set them.
        </p>
      </header>

      {/* Concept overview */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Why PATH and CLASSPATH matter
        </h2>
        <p className="text-slate-700">
          In Java development, environment variables act as mediators between
          you, the compiler, and the operating system. Understanding the
          difference between <strong>PATH</strong> and <strong>CLASSPATH </strong> 
          helps you control how programs are compiled and executed.
        </p>
        <div className="space-y-4">
          <div className="rounded border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-semibold text-indigo-900">PATH</h3>
            <p className="text-sm text-slate-700">
              Tells the operating system where to find executable programs like
              <code className="mx-1 text-xs">javac</code> and
              <code className="mx-1 text-xs">java</code>. It points to the
              <strong> bin directory</strong> of your JDK/JRE.
            </p>
          </div>
          <div className="rounded border border-slate-200 bg-slate-50 p-4">
            <h3 className="mb-1 font-semibold text-indigo-900">CLASSPATH</h3>
            <p className="text-sm text-slate-700">
              Tells the Java compiler and JVM where to look for
              <strong> user-defined classes and libraries</strong> referenced in
              your source code.
            </p>
          </div>
        </div>
      </section>

      {/* When they are needed */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          When do you need to set them?
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-slate-300 bg-slate-50 p-4">
            <h3 className="font-semibold text-slate-800">Command Prompt / Terminal</h3>
            <p className="text-sm text-slate-700">
              To compile and run Java programs from a plain terminal, the
              system must know where <code className="text-xs">javac</code> and 
              <code className="ml-1 text-xs">java</code> live. This is why
              <strong> PATH (and sometimes CLASSPATH)</strong> need to be
              configured.
            </p>
          </div>
          <div className="border-l-4 border-indigo-400 bg-indigo-50 p-4 text-indigo-900">
            <h3 className="font-semibold">Inside IDEs</h3>
            <p className="text-sm">
              IDEs like Eclipse or IntelliJ usually manage PATH and CLASSPATH 
              internally. You typically do not need to set these variables
              manually when compiling and running from an IDE.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-01/architecture"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: 1.2 Architecture</span>
        </Link>
        <Link
          href="/chapter-01/class-object"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
        >
          <span>Next: 1.4 Class &amp; Object</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}