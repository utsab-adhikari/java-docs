import Link from "next/link";

export default function Chapter03OverviewPage() {
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
					<span className="font-medium text-slate-700">
						Chapter 03 · Building Components using Swing and JavaFX
					</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Chapter 03: Building Components using Swing and JavaFX
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					High-level overview of building graphical user interfaces in Java using
					AWT, Swing, and JavaFX, including layouts, controls, menus, dialogs,
					and event handling.
				</p>
			</header>

			<section className="space-y-3">
				<p className="text-slate-700">
					This chapter moves from console-based programs to graphical user
					interfaces. You will see how Java&apos;s AWT, Swing, and JavaFX libraries
					allow you to build interactive windows, arrange components on the
					screen, and respond to user actions.
				</p>
				<p className="text-slate-700">
					By the end of this chapter, you should be comfortable creating basic
					GUI applications, managing layouts, working with common controls,
					and wiring events to listener interfaces in both Swing and JavaFX.
				</p>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.1 Introduction to AWT and Swing
				</h2>
				<p className="text-slate-700">
					You start with the foundations of Java GUI programming: the Abstract
					Window Toolkit (AWT) and Swing. This section explains the basic
					concepts, component and container hierarchy, and how applets and
					windows are structured.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Concept of AWT and evolution to Swing</li>
					<li>Swing class hierarchy and key base classes</li>
					<li>Components versus containers</li>
					<li>Historical role of applets in Java GUI development</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.2 Layout Management
				</h2>
				<p className="text-slate-700">
					This section introduces layout managers that control how components are
					arranged within containers. You learn how to choose and configure
					layouts to create responsive, well-organized windows.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Role of layout managers in Swing</li>
					<li>Common layouts such as BorderLayout, FlowLayout, and GridLayout</li>
					<li>Nesting panels to build complex interfaces</li>
					<li>Trade-offs between absolute positioning and managed layouts</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.3 GUI Controls
				</h2>
				<p className="text-slate-700">
					Here you work with the most common Swing controls used in desktop
					applications, from buttons and labels to text fields and list
					components.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Buttons, labels, and text components</li>
					<li>Combo boxes, lists, check boxes, and radio buttons</li>
					<li>Organizing controls in forms and toolbars</li>
					<li>Basic validation and user feedback patterns</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.4 Menu Elements and Tooltips
				</h2>
				<p className="text-slate-700">
					This section covers how to create application menus and provide helpful
					tooltips so users can discover functionality more easily.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Building menu bars, menus, and menu items</li>
					<li>Context menus and shortcut keys</li>
					<li>Adding tooltips to components</li>
					<li>Designing clear, consistent navigation structures</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.5 Dialogs and Frames
				</h2>
				<p className="text-slate-700">
					You learn how to work with top-level windows and dialogs to interact
					with users, present information, and collect input.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Creating and configuring frames and windows</li>
					<li>Using standard dialog boxes for messages and confirmation</li>
					<li>Custom dialogs for domain-specific input</li>
					<li>Managing window lifecycle and closing behavior</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.6 Event Handling and Listener Interfaces
				</h2>
				<p className="text-slate-700">
					This section explains the event-driven programming model used by Swing
					and JavaFX. You see how user actions generate events and how listener
					interfaces are used to respond to them.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Event sources, event objects, and listeners</li>
					<li>Registering and removing listeners</li>
					<li>Common listener interfaces for buttons and components</li>
					<li>Structuring event-handling code for clarity</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.7 Handling Action Events
				</h2>
				<p className="text-slate-700">
					Focusing on action events, you learn how to react to button clicks,
					menu selections, and other common user commands in a structured way.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Understanding the ActionEvent class</li>
					<li>Implementing ActionListener and related interfaces</li>
					<li>Separating UI code from application logic</li>
					<li>Providing feedback after actions are performed</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.8 JavaFX vs Swing
				</h2>
				<p className="text-slate-700">
					This section compares Swing with JavaFX and discusses when each
					technology is appropriate. You explore the strengths of JavaFX for
					modern, rich client interfaces.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>High-level differences between Swing and JavaFX</li>
					<li>Application architecture and threading models</li>
					<li>Styling with Look and Feel versus CSS</li>
					<li>Migrating concepts from Swing to JavaFX</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.9 JavaFX Layouts
				</h2>
				<p className="text-slate-700">
					You then focus on JavaFX layout panes and how they organize UI
					elements in a scene graph, enabling flexible, resizable interfaces.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Understanding the JavaFX scene graph</li>
					<li>Using layout panes such as BorderPane, VBox, and HBox</li>
					<li>Combining layouts to build complex screens</li>
					<li>Resizing behavior and alignment options</li>
				</ul>
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					3.10 JavaFX UI Controls
				</h2>
				<p className="text-slate-700">
					Finally, you explore JavaFX UI controls and see how to bind them to
					application data to create rich, interactive applications.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Common JavaFX controls such as Button, Label, TextField, and TableView</li>
					<li>Observables and property binding</li>
					<li>Styling controls with CSS</li>
					<li>Structuring JavaFX applications for maintainability</li>
				</ul>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
				<Link
						href="/chapter-02/inheritance-types"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
					>
						<span className="text-lg">
							←
						</span>
						<span>Previous: Chapter 02 Overview</span>
					</Link>
				<Link
						href="/chapter-03/awt-swing"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
					>
						<span>Next: 3.1 AWT and Swing</span>
						<span className="text-lg">
							→
						</span>
					</Link>
			</div>
		</article>
	);
}
