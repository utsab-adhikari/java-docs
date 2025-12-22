import Link from "next/link";

export default function QuestionsPage() {
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
            <li className="text-slate-700">Questions</li>
          </ol>
        </nav>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Theory Questions
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Review questions from each chapter to test your understanding.
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-sm text-slate-700">
          This section will collect conceptual and short-answer questions from all
          chapters. Use it for revision, tutorials, and exam preparation.
        </p>
        <p className="text-sm text-slate-700">
          Upcoming: chapter-wise question banks for Chapter 01 (Basics of Java),
          Chapter 02 (OOP in Java), and more.
        </p>
      </section>
    </div>
  );
}
