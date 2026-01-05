"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";

export default function GUISetupMethodsPage() {
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
					<Link
							href="/GUI/swing-awt"
						className="transition hover:text-indigo-700 hover:underline"
					>
							Swing and AWT GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
							href="/GUI/swing-awt/components"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Components
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">Setup</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					Different Ways to Create a JFrame
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					Before building bigger GUIs, you should understand a few common patterns
					for creating the main window (JFrame). All three methods below are valid;
					we will primarily follow Method 2 in this documentation.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Method 1: All in main method
				</h2>
				<p className="text-slate-700">
					In the first style, everything is written inside the
					{" "}
					<code>main</code> method of a single class. This is very common in
					introductory examples and for quick testing.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;

public class FrameMethod1 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Method 1: All in main");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}`}
					filename="FrameMethod1.java"
				/>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Everything related to the GUI is inside the <code>main</code> method.</li>
					<li>Very simple to read and write for small programs.</li>
					<li>
						Becomes messy when the GUI grows (many components and event handlers
							inside one method).
					</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Method 2: Separate GUI class with constructor
				</h2>
				<p className="text-slate-700">
					In the second style, we create a separate class that extends
					{" "}
					<code>JFrame</code>. The constructor of that class sets up the window.
					The
					{" "}
					<code>main</code> method just creates an object.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;

class MyFrame2 extends JFrame {
    MyFrame2() {
        setTitle("Method 2: Constructor in separate class");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
}

public class FrameMethod2 {
    public static void main(String[] args) {
        new MyFrame2(); // call constructor
    }
}`}
					filename="FrameMethod2.java"
				/>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						GUI setup is grouped inside a dedicated class, which keeps
						responsibilities clear.
					</li>
					<li>
						Better structure for larger applications: you can put fields, helper
						methods, and event handlers inside the GUI class.
					</li>
					<li>
						This is the main pattern we will follow in the rest of the GUI
						documentation.
					</li>
				</ul>
			</section>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Method 3: Using a method to create the GUI
				</h2>
				<p className="text-slate-700">
					The third style extracts JFrame creation into a separate method (often
					called
					{" "}
					<code>createAndShowGUI</code>). The
					{" "}
					<code>main</code> method simply calls it.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;

public class FrameMethod3 {
    // Method to create JFrame
    public static void createAndShowGUI() {
        JFrame frame = new JFrame("Method 3: Method for GUI");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        createAndShowGUI(); // call method
    }
}`}
					filename="FrameMethod3.java"
				/>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						Separates GUI creation into a method so that
						<code>main</code> stays clean and easy to read.
					</li>
					<li>
						Useful if you need to call the GUI setup method from different
						contexts or for multiple windows.
					</li>
					<li>
						Also a common style in official Swing examples (often combined with the
							Event Dispatch Thread).
					</li>
				</ul>
			</section>

			<section className="space-y-4 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Comparison and Which Method We Use
				</h2>
				<p className="text-slate-700">
					All three methods create exactly the same window on the screen. The
					difference is in how we organize code. For exam answers and clean
					projects, it is important to show a good structure.
				</p>
				<div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
					<div className=" border border-slate-200 bg-slate-50 p-3">
						<h3 className="text-sm font-semibold text-slate-900">Method 1</h3>
						<ul className="mt-1.5 list-disc space-y-1 pl-4 text-slate-700">
							<li>All code in <code>main</code>.</li>
							<li>Fast to write.</li>
							<li>Hard to maintain for big GUIs.</li>
						</ul>
					</div>
					<div className=" border border-emerald-200 bg-emerald-50 p-3">
						<h3 className="text-sm font-semibold text-emerald-900">Method 2</h3>
						<ul className="mt-1.5 list-disc space-y-1 pl-4 text-emerald-900">
							<li>Separate GUI class.</li>
							<li>Good OOP style.</li>
							<li>Easy to extend and reuse.</li>
						</ul>
					</div>
					<div className=" border border-indigo-200 bg-indigo-50 p-3">
						<h3 className="text-sm font-semibold text-indigo-900">Method 3</h3>
						<ul className="mt-1.5 list-disc space-y-1 pl-4 text-indigo-900">
							<li>Dedicated GUI method.</li>
							<li>Very clean main method.</li>
							<li>Flexible for advanced patterns.</li>
						</ul>
					</div>
				</div>
				<p className="text-slate-700">
					In this documentation, we will mostly use
					{" "}
					<strong>Method 2 (separate GUI class with constructor) </strong>
					when building examples, because it matches object-oriented design and
					keeps programs organized.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/components"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Back to Components Overview</span>
				</Link>
				<Link
						href="/GUI/swing-awt/components/jframe"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: JFrame Details</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}

