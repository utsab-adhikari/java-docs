
import Link from "next/link";

export default function GUIOverviewPage() {
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
					<span className="font-medium text-slate-700">Java GUI Programming</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Java GUI Programming Overview
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					This page gives a high-level overview of Java GUI programming paths.
					For your course work and lab exams, you will primarily focus on
					classic Swing &amp; AWT programs, and later you can explore modern
					JavaFX-based GUIs.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Two Main GUI Paths in Java
				</h2>
				<p className="text-slate-700">
					Java offers more than one way to build graphical user interfaces.
					In this documentation we start with <strong>Swing and AWT</strong>
					because they are commonly used in university labs and exam questions,
					and we also introduce the idea of <strong>JavaFX</strong> for more
					modern UI design.
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900">
						<h3 className="mb-2 text-base font-semibold">Swing &amp; AWT GUI</h3>
						<ul className="list-disc space-y-1 pl-4">
							<li>Classic desktop GUI toolkit included with Java.</li>
							<li>
								Covers components like JFrame, JPanel, buttons, lists, and
									text fields.
							</li>
							<li>
								Uses layout managers such as FlowLayout, GridLayout, BorderLayout,
									and GridBagLayout.
							</li>
							<li>
								This is the <strong>main focus</strong> for your current
									syllabus and lab programs.
							</li>
						</ul>
					</div>
					<div className="border border-purple-100 bg-purple-50 p-4 text-sm text-purple-900">
						<h3 className="mb-2 text-base font-semibold">JavaFX GUI (Coming Later)</h3>
						<ul className="list-disc space-y-1 pl-4">
							<li>Modern GUI framework for richer, styled UIs.</li>
							<li>Uses FXML, CSS-like styling, and scene graphs.</li>
							<li>
								Well-suited for modern desktop apps, dashboards, and visual
									applications.
							</li>
							<li>
								We will add step-by-step JavaFX content after finishing the
									Swing &amp; AWT section.
							</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Where Should You Start?
				</h2>
				<p className="text-slate-700">
					For exams and lab-work, you should first master <strong>Swing and AWT</strong>
					programs. The dedicated Swing &amp; AWT section below contains complete
					programs, line-by-line explanations, and screenshots for output.
				</p>
				<div className="mt-4 flex flex-wrap items-center gap-3">
					<Link
							href="/GUI/swing-awt"
							className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
					>
						<span>Start with Swing &amp; AWT GUI</span>
						<span className="text-lg">→</span>
					</Link>
					<p className="text-xs text-slate-500">
						Recommended order: Setup → Components → Layouts → Questions.
					</p>
				</div>
			</section>

			<div className="mt-8 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Back to Home</span>
					</Link>
				<Link
						href="/chapter-01"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span>Start Chapter 01</span>
					</Link>
			</div>
		</article>
	);
}

