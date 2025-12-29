import Link from "next/link";

export default function QuestionsPage() {
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
          <span className="font-medium text-slate-700">Questions</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Theory Questions &amp; Practice Programs
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Use this section to quickly find chapter-wise theory questions and
          practice programs for revision, tutorials, and exam preparation.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Chapter-wise Question Banks
        </h2>
        <p className="text-slate-700">
          Below you&apos;ll find links to chapter-wise sets of questions and
          programs. More chapters will be added as the notes grow.
        </p>
      </section>

      {/* Chapter 01 */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">
          Chapter 01: Basics of Java
        </h3>
        <p className="text-sm text-slate-600">
          Covers introductory Java concepts including classes,
          objects, and general programming questions.
        </p>
        <div className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
          <Link
            href="/chapter-01/general-programs"
            className="flex items-center justify-between px-4 py-3 text-sm text-slate-800 transition hover:bg-slate-50"
          >
            <span>General Programs</span>
            <span className="text-xs font-medium text-slate-500">
              6 Questions
            </span>
          </Link>
          <Link
            href="/chapter-01/class-and-objects-programs"
            className="flex items-center justify-between px-4 py-3 text-sm text-slate-800 transition hover:bg-slate-50"
          >
            <span>Class and Objects</span>
            <span className="text-xs font-medium text-slate-500">
              4 Questions
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}

