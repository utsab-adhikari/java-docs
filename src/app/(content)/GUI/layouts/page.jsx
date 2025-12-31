import Link from "next/link";

export default function GUILayoutsPage() {
	return (
		<article className="mx-auto max-w-3xl space-y-10 px-4 sm:px-0">
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
						GUI Programming with AWT and Swing
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">Layouts</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Swing Layout Managers
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					Layouts decide where each component goes in your window. Swing uses
					layout managers like FlowLayout, GridLayout, GridBagLayout, and
					BorderLayout to automatically arrange components.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Before layouts: understand components
				</h2>
				<p className="text-slate-700">
					If you have not yet studied the basic Swing components (JFrame, JPanel,
					buttons, labels, text fields), go through the components section first. The
					layout managers here will then make much more sense.
				</p>
				<div className="mt-3 flex flex-wrap items-center gap-3">
					<Link
						href="/GUI/components"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>Go to Components</span>
						<span className="text-lg">→</span>
					</Link>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Common Swing layout managers
				</h2>
				<p className="text-slate-700">
					Each layout manager arranges components in a different way. Use these
					cards to jump into examples and line-by-line explanations.
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<Link
						href="/GUI/layouts/flowlayout"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>FlowLayout</span>
						<span className="text-xs text-slate-500">Simple left-to-right flow</span>
					</Link>
					<Link
						href="/GUI/layouts/gridlayout"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>GridLayout</span>
						<span className="text-xs text-slate-500">Equal-sized grid of cells</span>
					</Link>
					<Link
						href="/GUI/layouts/gridbaglayout"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>GridBagLayout</span>
						<span className="text-xs text-slate-500">Flexible, constraint-based grid</span>
					</Link>
					<Link
						href="/GUI/layouts/borderlayout"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>BorderLayout</span>
						<span className="text-xs text-slate-500">North / South / East / West / Center</span>
					</Link>
					<Link
						href="/GUI/layouts/cardlayout"
						className="inline-flex items-center justify-between gap-2 border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-100"
					>
						<span>CardLayout</span>
						<span className="text-xs text-slate-500">Coming soon</span>
					</Link>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Why layout managers matter
				</h2>
				<p className="text-slate-700">
					Instead of giving pixel-perfect positions, Swing lets layout managers
					adapt your UI when the window is resized, fonts change, or components are
					added/removed. For exams, you mostly need to recognize and write small
					programs using each manager.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Back to GUI Overview</span>
					</Link>
				<Link
						href="/GUI/layouts/flowlayout"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: FlowLayout</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
