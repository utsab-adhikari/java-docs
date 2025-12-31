import Link from "next/link";

export default function CardLayoutComingSoonPage() {
	return (
		<article className="mx-auto max-w-3xl space-y-8 px-4 sm:px-0">
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
					<Link
						href="/GUI/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">CardLayout</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					CardLayout (Coming Soon)
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					CardLayout lets you switch between multiple panels ("cards") in the same
					space, similar to tabs or slides. A full example and explanation will be
					added soon.
				</p>
			</header>

			<section className="space-y-3">
				<p className="text-slate-700">
					For exams, it is enough to remember that CardLayout is used when you want
					one visible panel at a time and you switch between them.
				</p>
				<p className="text-slate-700">
					A detailed program using CardLayout (for example, switching between login
					and registration forms) will be documented here later.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/layouts/borderlayout"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Previous: BorderLayout Basics</span>
					</Link>
				<Link
						href="/GUI/layouts"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Back to Layouts Overview</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
