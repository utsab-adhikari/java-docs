import Link from "next/link";

export default function JavaFXOverviewPage() {
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
							Java GUI Programming
						</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">JavaFX GUI</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JavaFX GUI Programming
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JavaFX is a modern Java GUI toolkit that uses a scene graph,
					layout panes, and rich controls. This section gives you a starting
					point for common layout panes and UI controls that match your
					course outline.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What you will study in JavaFX
				</h2>
				<p className="text-slate-700">
					We focus on a small but exam-relevant subset of JavaFX:
					fundamental layout panes and basic controls. This is enough to
					understand JavaFX questions in Unit 3 and to relate Swing concepts
					to JavaFX.
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
						<h3 className="mb-2 text-base font-semibold">JavaFX Controls</h3>
						<ul className="list-disc space-y-1 pl-4">
							<li>Label</li>
							<li>Button</li>
							<li>TextField</li>
							<li>PasswordField</li>
							<li>Menu (MenuBar, MenuItem)</li>
						</ul>
					</div>
					<div className="border border-purple-100 bg-purple-50 p-4 text-sm text-purple-900">
						<h3 className="mb-2 text-base font-semibold">JavaFX Layout Panes</h3>
						<ul className="list-disc space-y-1 pl-4">
							<li>FlowPane</li>
							<li>HBox</li>
							<li>VBox</li>
							<li>BorderPane</li>
							<li>GridPane</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Start with layouts or controls
				</h2>
				<p className="text-slate-700">
					Just like in Swing, a good path is to first understand how
					layout panes arrange nodes, and then see how controls are placed
					inside those panes.
				</p>
				<div className="mt-4 flex flex-wrap items-center gap-3">
					<Link
							href="/GUI/javafx/layouts"
							className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
					>
						<span>Start with JavaFX Layouts</span>
						<span className="text-lg">→</span>
					</Link>
					<Link
							href="/GUI/javafx/components"
							className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>Or view JavaFX Controls</span>
						<span className="text-lg">→</span>
					</Link>
				</div>
			</section>
		</article>
	);
}

