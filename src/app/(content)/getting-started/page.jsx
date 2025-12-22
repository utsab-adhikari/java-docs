import Link from "next/link";

export default function GettingStartedPage() {
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
          <span className="font-medium text-slate-700">Getting Started</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Getting Started with Java
        </h1>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Why Java?
        </h2>
        <p className="text-slate-700">
          Java is one of the most widely used programming languages in academic,
          enterprise, and systems development. Its strong object-oriented
          foundation, platform independence, and rich standard library make it
          an ideal language for understanding core programming principles.
        </p>

        <p className="text-slate-700">
          For engineering students, Java serves as a bridge between theoretical
          concepts and real-world software development, encouraging disciplined
          coding practices and design-oriented thinking.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Course Orientation
        </h2>
        <p className="text-slate-700">
          This documentation follows the <em>Pokhara University syllabus</em> and
          is prepared alongside classroom instruction. Topics are introduced
          progressively, ensuring alignment with lectures, examinations, and
          laboratory sessions.
        </p>

        <p className="text-slate-700">
          Each section emphasizes conceptual clarity before implementation,
          helping students develop both analytical and practical skills.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What You Will Learn
        </h2>

        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>Core syntax and semantics of Java</li>
          <li>Object-oriented programming concepts</li>
          <li>Exception handling and memory management</li>
          <li>Foundations for data structures and frameworks</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          How to Use This Documentation
        </h2>
        <p className="text-slate-700">
          This material is intended to be read sequentially. Code examples,
          explanations, and definitions are structured for revision, reference,
          and examination preparation.
        </p>

        <p className="mt-3 border-l-2 border-slate-200 pl-3 text-sm italic text-slate-500">
          Faculty feedback and reviews, when included, are explicitly stated and
          acknowledged.
        </p>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/syllabus"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
        >
          <span className="text-lg">←</span>
          <span>Previous: Syllabus</span>
        </Link>
        <Link
          href="/setup-installation"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md "
        >
          <span>Next: Setup &amp; Installation</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
