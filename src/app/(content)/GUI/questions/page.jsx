import Link from "next/link";

export default function GUIQuestionsPage() {
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
						href="/GUI"
						className="transition hover:text-indigo-700 hover:underline"
					>
						GUI
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">Questions</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					GUI Questions &amp; Lab Sets
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					Use this section to access lab-wise questions and solutions related to Java
					GUI programming with AWT and Swing.
				</p>
			</header>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Available GUI Question Sets
				</h2>
				<p className="text-slate-700">
					More sets will be added as labs progress. Start with Set&nbsp;01, which
					covers basic components, layouts, and a Events
				</p>
			</section>

			<section className="space-y-3">
				<h3 className="text-lg font-semibold text-slate-900">
					GUI Question Sets
				</h3>
				<div className="divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
					<Link
						href="/GUI/questions/set-01"
						className="flex items-center justify-between px-4 py-3 text-sm text-slate-800 transition hover:bg-slate-50"
					>
						<span>Set 01 &mdash; Components &amp; Layouts (Lab 04) </span>
						<span className="text-xs font-medium text-slate-500">
							Swing and AWT						</span>
					</Link>
				</div>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Back to GUI Overview</span>
					</Link>
			</div>
		</article>
	);
}

