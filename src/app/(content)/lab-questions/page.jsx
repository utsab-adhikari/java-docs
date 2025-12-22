import Link from "next/link";

export default function LabQuestionsPage() {
  return (
    <div className="space-y-6">
      <header className="border-b border-slate-200 pb-4">
        <nav className="mb-2 text-xs font-medium text-slate-500">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-700">Lab Questions</li>
          </ol>
        </nav>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Lab / Practical Questions
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Hands-on programming exercises to practice Java concepts in the lab.
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-sm text-slate-700">
          This section will include lab sheets and practical questions organised
          by chapter. Each exercise will focus on implementing the concepts you
          study in theory.
        </p>
        <p className="text-sm text-slate-700">
          Upcoming: basic programs (printing, input/output), control structures,
          classes and objects, inheritance, and exception handling tasks.
        </p>
      </section>
    </div>
  );
}
