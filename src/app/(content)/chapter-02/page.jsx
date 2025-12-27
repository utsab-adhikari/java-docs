import Link from "next/link";

export default function Chapter02OverviewPage() {
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
						Chapter 02 · Object Oriented Principles in Java
					</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Chapter 02: Object Oriented Principles in Java
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					High-level overview of core object-oriented concepts in Java, including
					inheritance, polymorphism, abstract classes, interfaces, and casting.
				</p>
			</header>

			{/* Introduction */}
			<section className="space-y-3">
				<p className="text-slate-700">
					This chapter builds on the basics from Chapter 01 and focuses on how
					Java implements object-oriented principles in practice. You will learn
					to design related classes, reuse behavior through inheritance, and use
					polymorphism to write flexible, maintainable code.
				</p>
				<p className="text-slate-700">
					By the end of this chapter, you should be able to explain how
					inheritance works in Java, how overriding and overloading differ, and how
					abstract classes and interfaces define contracts for your designs.
				</p>
			</section>

			{/* 2.1 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.1 Review of Object-Oriented Principles
				</h2>
				<p className="text-slate-700">
					You briefly revisit the four fundamental pillars of object-oriented
					programming and see how they appear in Java syntax and real examples.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Encapsulation and information hiding</li>
					<li>Inheritance and code reuse</li>
					<li>Polymorphism and dynamic behavior</li>
					<li>Abstraction and modeling real-world concepts</li>
				</ul>
			</section>

			{/* 2.2 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.2 Super Class, Sub Class, Inheritance, and Member Access
				</h2>
				<p className="text-slate-700">
					This section explains how a subclass can extend a superclass to reuse
					fields and methods, and how access modifiers control visibility between
					classes and packages.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Defining base (super) classes and derived (sub) classes</li>
					<li>Single inheritance model in Java</li>
					<li>
						Member access with <code>public</code>, <code>protected</code>,
						{" "}
						<code>private</code>, and package-private
					</li>
					<li>When to favor composition over inheritance</li>
				</ul>
			</section>

			{/* 2.3 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.3 Types of Inheritance
				</h2>
				<p className="text-slate-700">
					You explore the different conceptual types of inheritance used in
					object-oriented design and how Java supports or restricts them.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Single, multilevel, and hierarchical inheritance</li>
					<li>Why Java does not support multiple inheritance of classes</li>
					<li>Role of interfaces in achieving multiple inheritance of type</li>
				</ul>
			</section>

			{/* 2.4 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.4 <code>extends</code> and <code>super</code> Keyword
				</h2>
				<p className="text-slate-700">
					This section focuses on the actual syntax that connects classes in an
					inheritance hierarchy and allows subclasses to refer to their
					superclass.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Using <code>extends</code> to declare a subclass</li>
					<li>
						Calling superclass constructors and methods with <code>super</code>
					</li>
					<li>Shadowing vs. overriding fields and methods</li>
				</ul>
			</section>

			{/* 2.5 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.5 Overriding and Overloading
				</h2>
				<p className="text-slate-700">
					Here you distinguish between redefining behavior in subclasses
					(overriding) and defining multiple methods with the same name but
					different parameters (overloading).
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Method overriding and dynamic dispatch at runtime</li>
					<li>Method overloading and compile-time resolution</li>
					<li>Guidelines to use overriding and overloading effectively</li>
				</ul>
			</section>

			{/* 2.6 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.6 Final Classes and Methods
				</h2>
				<p className="text-slate-700">
					This section explains how the <code>final</code> keyword is used to
					prevent inheritance or further overriding, and when such restrictions are
					useful.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Declaring final variables, methods, and classes</li>
					<li>Designing stable base classes and constants</li>
					<li>Impact of <code>final</code> on extensibility and testing</li>
				</ul>
			</section>

			{/* 2.7 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.7 Abstract Classes and Methods
				</h2>
				<p className="text-slate-700">
					You learn how abstract classes define partial implementations and shared
					structure, leaving specific details to concrete subclasses.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Declaring abstract classes and abstract methods</li>
					<li>When to choose an abstract class vs. an interface</li>
					<li>Template-style designs using abstract methods</li>
				</ul>
			</section>

			{/* 2.8 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.8 Upcasting vs Downcasting
				</h2>
				<p className="text-slate-700">
					This section discusses how references to objects can be converted
					between supertype and subtype forms and what that means for available
					methods.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Safe upcasting to treat objects as their supertype</li>
					<li>When and how to use downcasting with <code>instanceof</code></li>
					<li>Polymorphic behavior through base-class references</li>
				</ul>
			</section>

			{/* 2.9 */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					2.9 Interfaces and Implementations
				</h2>
				<p className="text-slate-700">
					Finally, you see how interfaces define contracts that multiple classes
					can implement, enabling loose coupling and flexible designs.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Declaring interfaces and implementing them in classes</li>
					<li>Multiple interface implementation as a form of multiple inheritance</li>
					<li>Using interfaces to design pluggable components</li>
				</ul>
			</section>

			{/* Navigation */}
			<div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
				<Link
						href="/chapter-01/class-and-objects-programs"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
					>
						<span className="text-lg">←</span>
						<span>Previous: Class and Objects Programs</span>
					</Link>
				<Link
						href="/chapter-02/principles"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
					>
						<span>Next: 2.1 Principles</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}

