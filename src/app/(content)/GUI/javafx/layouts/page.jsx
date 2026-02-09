import Link from "next/link";

export default function JavaFXLayoutsPage() {
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
							href="/GUI/javafx"
							className="transition hover:text-indigo-700 hover:underline"
						>
							JavaFX GUI
						</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">Layout Panes</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JavaFX Layout Panes
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					These layout panes control how JavaFX nodes are arranged inside
					a window. You will use them together with controls like Label,
					Button, and TextField.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Layout panes you should know
				</h2>
				<p className="text-slate-700">
					We focus on five important JavaFX layout panes that appear in
					your syllabus and most exam problems:
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<Link
						href="/GUI/javafx/layouts/flowpane"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>FlowPane</span>
						<span className="text-xs text-slate-500">Wraps nodes in rows</span>
					</Link>
					<Link
						href="/GUI/javafx/layouts/hbox"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>HBox</span>
						<span className="text-xs text-slate-500">Horizontal row</span>
					</Link>
					<Link
						href="/GUI/javafx/layouts/vbox"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>VBox</span>
						<span className="text-xs text-slate-500">Vertical column</span>
					</Link>
					<Link
						href="/GUI/javafx/layouts/borderpane"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>BorderPane</span>
						<span className="text-xs text-slate-500">Top/Bottom/Left/Right/Center</span>
					</Link>
					<Link
						href="/GUI/javafx/layouts/gridpane"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>GridPane</span>
						<span className="text-xs text-slate-500">Rows and columns</span>
					</Link>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Compare with Swing layout managers
				</h2>
				<p className="text-slate-700">
					If you already studied FlowLayout, BorderLayout, and GridLayout
					in Swing, JavaFX layout panes will feel familiar. The main
					difference is that everything is a node and you work with the
					<code>Scene</code> graph instead of directly with a
					<code>JFrame</code>.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/javafx"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Back to JavaFX Overview</span>
					</Link>
				<Link
						href="/GUI/javafx/layouts/flowpane"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: FlowPane</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}

