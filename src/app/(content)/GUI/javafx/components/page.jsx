import Link from "next/link";

export default function JavaFXComponentsPage() {
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
					<span className="font-medium text-slate-700">Controls</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Core JavaFX Controls
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					This section introduces a small set of JavaFX controls you need
					for syllabus topics: Label, Button, TextField, PasswordField, and
					Menu. Each topic has a complete program with explanation.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					High-level view of JavaFX controls
				</h2>
				<p className="text-slate-700">
					In JavaFX, every visible element is a node in the scene graph.
					Controls are nodes that allow user interaction (clicking,
					typing, choosing menu items). We focus on these basic ones:
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<Link
						href="/GUI/javafx/components/label"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>Label</span>
						<span className="text-xs text-slate-500">Read-only text</span>
					</Link>
					<Link
						href="/GUI/javafx/components/button"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>Button</span>
						<span className="text-xs text-slate-500">Click actions</span>
					</Link>
					<Link
						href="/GUI/javafx/components/textfield"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>TextField</span>
						<span className="text-xs text-slate-500">Single-line input</span>
					</Link>
					<Link
						href="/GUI/javafx/components/passwordfield"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>PasswordField</span>
						<span className="text-xs text-slate-500">Masked input</span>
					</Link>
					<Link
						href="/GUI/javafx/components/menu"
						className="inline-flex items-center justify-between gap-2 border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
					>
						<span>Menu</span>
						<span className="text-xs text-slate-500">MenuBar and MenuItem</span>
					</Link>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					How this relates to Swing controls
				</h2>
				<p className="text-slate-700">
					JavaFX controls are conceptually similar to Swing components you
					already studied (JLabel, JButton, JTextField, etc.). When you
					move from Swing to JavaFX, you write code inside the
					<code>start</code> method instead of a JFrame constructor, but the
					ideas are the same: place controls into a layout container and
					respond to events.
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
						href="/GUI/javafx/components/label"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: Label Control</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}

