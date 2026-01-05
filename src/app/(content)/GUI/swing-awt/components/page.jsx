import Link from "next/link";

export default function GUIComponentsPage() {
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
							href="/GUI/swing-awt"
						className="transition hover:text-indigo-700 hover:underline"
					>
							Swing and AWT GUI
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">Components</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Core Swing Components
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					This section introduces the most frequently used Swing components—
					containers like JFrame and JPanel, and controls like buttons, labels, and
					text fields—that together form the building blocks of Java desktop
					applications.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Start with Setup
				</h2>
				<p className="text-slate-700">
					Before writing component-specific programs, make sure your development
					environment is ready for GUI work (JDK installed, editor configured, and
					Swing project created). Follow the step-by-step setup guide first.
				</p>
				<div className="mt-3 flex flex-wrap items-center gap-3">
					<Link
							href="/GUI/swing-awt/components/setup"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
					>
						<span>Start with Setup</span>
					</Link>
					<p className="text-xs text-slate-500">
						Recommended reading order: Setup → JFrame → JPanel → other components.
					</p>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					High-level View of Swing Components
				</h2>
				<p className="text-slate-700">
					In Swing, every visible element on the screen is a component. Some
					components act as top-level windows, some group other components, and some
					allow user interaction (typing, clicking, selecting). The following cards
					give you a quick overview and link to detailed pages.
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
					<Link
						href="/GUI/swing-awt/components/setup"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>Setup</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jframe"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JFrame</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jpanel"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JPanel</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jlabel"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JLabel</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jbutton"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JButton</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jtextfield"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JTextField</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jtextarea"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JTextArea</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jradiobutton"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JRadioButton</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jlist"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JList</span>
					<span className="text-lg">→</span>
				</Link>
                <Link
						href="/GUI/swing-awt/components/jtable"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>JTable</span>
					<span className="text-lg">→</span>
				</Link>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					How Components Work Together
				</h2>
				<p className="text-slate-700">
					In a typical Swing application, you create a JFrame as the main window,
					set a layout manager, and then add JPanels and other components inside it.
					Each component is responsible for a specific part of the user interface,
					but they all share a common event-driven programming model.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>JFrame provides the window; JPanel organizes groups of components.</li>
					<li>
						Labels, buttons, and text components live inside panels and respond to
							user actions.
					</li>
					<li>
						Event listeners (explained later) connect user actions to Java code
							that performs some work.
					</li>
				</ul>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
						<span>Back to Swing &amp; AWT Overview</span>
				</Link>
				<Link
						href="/GUI/swing-awt/components/setup"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: Setup for Components</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}

