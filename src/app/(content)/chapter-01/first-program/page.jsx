"use client";

import { useState } from "react";
import Link from "next/link";

const PROGRAM_CODE = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;

const COMMANDS_CODE = `javac HelloWorld.java
java HelloWorld`;

export default function FirstProgramPage() {
	const [copied, setCopied] = useState(null);

	const handleCopy = async (type) => {
		try {
			const text = type === "program" ? PROGRAM_CODE : COMMANDS_CODE;
			await navigator.clipboard.writeText(text);
			setCopied(type);
			setTimeout(() => setCopied(null), 1500);
		} catch {
			// ignore copy errors
		}
	};
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
						href="/chapter-01"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Chapter 01
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">1.1 First Program</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					1.1 Your First Java Program
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					A step-by-step walkthrough of the classic Hello World example,
					compilation and execution commands, and a gentle explanation of each
					part of the program.
				</p>
			</header>

			{/* Code listing */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Hello World in Java
				</h2>
				<p className="text-slate-700">
					Below is a minimal but complete Java program. Type it exactly as
					shown in your editor and save it as <code>HelloWorld.java</code>.
				</p>
				<div className="border border-slate-800 bg-slate-900 text-xs text-slate-100">
					<div className="flex items-center justify-between border-b border-slate-800 bg-[#020617] px-4 py-1.5 tracking-[0.18em]">
						<span>HelloWorld.java</span>
						<button
							onClick={() => handleCopy("program")}
							className="text-[0.7rem] font-medium text-slate-300 hover:text-white"
						>
							{copied === "program" ? "Copied" : "Copy"}
						</button>
					</div>
					<pre className="overflow-x-auto bg-transparent px-4 py-3">
						<code>{PROGRAM_CODE}</code>
					</pre>
				</div>
			</section>

			{/* Commands and output */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Compiling and Running the Program
				</h2>
				<p className="text-slate-700">
					Use the terminal or command prompt to navigate to the folder where
					<code>HelloWorld.java</code> is saved, then run the following
					commands:
				</p>
				<div className="border border-slate-800 bg-slate-900 text-xs text-slate-100">
					<div className="flex items-center justify-between border-b border-slate-800 bg-[#030712] px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
						<span>Compile &amp; Run</span>
						<button
							onClick={() => handleCopy("commands")}
							className="text-[0.7rem] font-medium text-slate-300 hover:text-white"
						>
							{copied === "commands" ? "Copied" : "Copy"}
						</button>
					</div>
					<pre className="overflow-x-auto bg-transparent px-4 py-3">
						<code>{COMMANDS_CODE}</code>
					</pre>
				</div>
				<p className="text-slate-700">
					If everything is typed correctly and Java is installed properly, your
					output will look like this:
				</p>
				<pre className="overflow-x-auto border border-slate-800 bg-[#020617] px-4 py-3 text-xs text-slate-100">
					<code>{`Hello, World!`}</code>
				</pre>
			</section>

			{/* Explanation */}
			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Understanding the Program Line by Line
				</h2>
				<ul className="ml-6 list-disc space-y-2 text-slate-700">
					<li>
						<code>public class HelloWorld</code>: defines a public class named
						{" "}
						<code>HelloWorld</code>. The file name must match this class name.
					</li>
					<li>
						<code>public static void main(String[] args)</code>: entry point of
						every standalone Java program. The JVM starts execution from this
						method.
					</li>
					<li>
						<code>System.out.println("Hello, World!");</code>: prints a line of
						text to the console followed by a newline.
					</li>
					<li>
						Curly braces <code>{"{"}</code> and <code>{"}"}</code> group
						related statements into blocks (class body and method body).
					</li>
					<li>
						Each statement ends with a semicolon <code>;</code>, which tells the
						compiler where one instruction finishes.
					</li>
				</ul>
			</section>

			{/* Frequently Asked Questions */}
			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Frequently Asked Questions
				</h2>
				<p className="text-sm text-slate-600">
					These are typical conceptual questions students ask when seeing their
					first Java program. Each question will be discussed in more detail in
					later sections.
				</p>
				<div className="flex flex-col gap-2 text-sm text-indigo-900">
					<Link href="#q1" className="underline-offset-2 hover:underline">
						Q1: Why is the <code>main</code> function <code>static</code>?
					</Link>
					<Link href="#q2" className="underline-offset-2 hover:underline">
						Q2: What is the purpose of <code>String[] args</code>?
					</Link>
					<Link href="#q3" className="underline-offset-2 hover:underline">
						Q3: Why must the file name match the public class name?
					</Link>
					<Link href="#q4" className="underline-offset-2 hover:underline">
						Q4: What is the difference between <code>print</code> and
						{" "}
						<code>println</code>?
					</Link>
					<Link href="#q5" className="underline-offset-2 hover:underline">
						Q5: What happens if we remove <code>public</code> from the class or
						{" "}
						<code>main</code> method?
					</Link>
				</div>
			</section>

			{/* Navigation */}
			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/chapter-01"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
				>
					<span className="text-lg">←</span>
					<span>Previous: Chapter 01 Overview</span>
				</Link>
				<Link
					href="/chapter-01/architecture"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
				>
					<span>Next: 1.2 Java Architecture</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}

