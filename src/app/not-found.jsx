import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
          Java Docs
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or may be under construction as we build out the textbook.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
          >
            <span>Back to Home</span>
          </Link>
          <Link
            href="/getting-started"
            className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
          >
            <span>Go to Getting Started</span>
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          If you followed a sidebar link, that section may still be in
          development.
        </p>
      </div>
    </main>
  );
}
