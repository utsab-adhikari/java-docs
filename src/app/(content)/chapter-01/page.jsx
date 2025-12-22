import Link from "next/link";

export default function Chapter01OverviewPage() {
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
						Chapter 01 · Basics of Programming with Java
					</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Chapter 01: Basics of Programming with Java
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					High-level overview of your first Java programs and the core
					building blocks you will use throughout the course.
				</p>
			</header>

			{/* Introduction */}
			<section className="space-y-3">
				<p className="text-slate-700">
					This chapter introduces you to the essential elements required to
					write, understand, and structure Java programs. Instead of going deep
					into every feature, the focus here is on building an overall mental
					model of how Java code is written, compiled, executed, and organized
					in real projects.
				</p>
				<p className="text-slate-700">
					After completing this chapter, you should feel comfortable reading a
					simple Java program, identifying its parts, and explaining how it is
					executed by the Java platform.
				</p>
			</section>

			{/* First Program */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.1 Writing Your First Java Program
				</h2>
				<p className="text-slate-700">
					We start with the classic <code>HelloWorld</code> example to
					illustrate the structure of a minimal Java application. You will see
					how the <code>class</code> keyword, <code>main</code> method, and
					basic output statements fit together.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Understanding the role of the <code>main</code> method</li>
					<li>Compiling with <code>javac</code> and running with <code>java</code></li>
					<li>Observing how source code becomes bytecode</li>
				</ul>
			</section>

			{/* Architecture */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.2 Java Architecture &amp; the JVM
				</h2>
				<p className="text-slate-700">
					Here we look at how Java achieves platform independence through the
					Java Virtual Machine (JVM) and the Java Runtime Environment (JRE).
					You will connect the commands you use in the terminal with the
					internal architecture that actually executes your programs.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Role of JDK, JRE, and JVM</li>
					<li>Compilation vs. interpretation in Java</li>
					<li>Concept of bytecode and the class loader</li>
				</ul>
			</section>

			{/* Classes & Objects */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.3 Classes, Objects, and Constructors
				</h2>
				<p className="text-slate-700">
					Java is a fully object-oriented language. In this section you will
					see how real-world entities are modeled as classes and how objects
					are created from those classes.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Defining classes with fields and methods</li>
					<li>Creating objects using the <code>new</code> keyword</li>
					<li>Understanding constructors and default initialization</li>
				</ul>
			</section>

			{/* Packages, Data Types */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.4 Packages, Class Paths, and Data Types
				</h2>
				<p className="text-slate-700">
					To keep code organized, Java uses packages and the class path. At the
					same time, every variable in Java must have a clear data type. This
					section summarizes how these ideas work together.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Declaring and importing packages</li>
					<li>Configuring the class path for multi-file projects</li>
					<li>Primitive vs. reference data types</li>
				</ul>
			</section>

			{/* Control Flow & Access Modifiers */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.5 Conditional Statements &amp; Access Modifiers
				</h2>
				<p className="text-slate-700">
					Real programs make decisions and enforce boundaries. Conditional
					statements control the flow of execution, while access modifiers
					control which parts of your code can be seen or changed from the
					outside.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li><code>if</code>, <code>else if</code>, and <code>switch</code></li>
					<li>
						Visibility keywords: <code>public</code>, <code>private</code>,
						{" "}
						<code>protected</code>, and package-private
					</li>
					<li>Designing simple, readable decision logic</li>
				</ul>
			</section>

			{/* Exception Handling */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					1.6 Introduction to Exception Handling
				</h2>
				<p className="text-slate-700">
					Programs rarely run in perfect conditions. Files may be missing,
					network connections may fail, or user input may be invalid. Java uses
					exceptions to signal and handle such abnormal situations.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Difference between errors and exceptions</li>
					<li>Checked vs. unchecked exceptions</li>
					<li>Basic <code>try</code>, <code>catch</code>, and <code>finally</code> pattern</li>
				</ul>
				<p className="text-sm text-slate-500">
					In later chapters, you will revisit exception handling with more
					advanced patterns and best practices.
				</p>
			</section>

			{/* Summary */}
			<section className="space-y-3 border-t border-slate-200 pt-4 text-sm text-slate-700">
				<h2 className="border-l-4 border-amber-400 pl-3 text-lg font-semibold text-indigo-900">
					Chapter Summary
				</h2>
				<p>
					Chapter 01 provides the foundation on which the rest of this Java
					course is built. Make sure you are comfortable with the overall
					structure of a Java program, how it is compiled and run, and how
					classes, objects, packages, and basic control flow fit together.
				</p>
			</section>

			{/* Navigation */}
			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/setup-installation"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
				>
					<span className="text-lg">←</span>
					<span>Previous: Setup &amp; Installation</span>
				</Link>
				<Link
					href="/chapter-01/first-program"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
				>
					<span>Next: 1.1 First Program</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}

