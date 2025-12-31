"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JButtonBasicsPage() {

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
						href="/GUI"
						className="transition hover:text-indigo-700 hover:underline"
					>
						GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
						href="/GUI/components"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Components
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">JButton</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					JButton: Clickable Actions in Swing
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					JButton represents a clickable button. When the user presses it, an
					action can be performed (handled via event listeners in later sections).
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Multiple JButtons in a Frame
				</h2>
				<p className="text-slate-700">
					This example creates three buttons and adds them to the frame using
					<code>FlowLayout</code>, which arranges them in a horizontal row.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JButton");

        // Defining Buttons using JButton
        JButton b1 = new JButton("Button 01");
        JButton b2 = new JButton("Button 02");
        JButton b3 = new JButton("Button 03");

        // adding buttons to the frame:

        add(b1);
        add(b2);
        add(b3);

        // Default Frame:
        setLayout(new FlowLayout()); // General Flow Layout
        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JButtonDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
					filename="JButtonDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
 <OutputImage src="/JButton.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is JButton?
				</h2>
				<p className="text-slate-700">
					<code>JButton</code> is a push button that users can click to trigger an
					action. We will later attach event listeners to respond when a button is
					pressed.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Can contain text, icons, or both.</li>
					<li>Often used for actions like Submit, Cancel, Next, etc.</li>
					<li>Generates events that your code can handle using listeners.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the JButton example
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Again, the JFrame setup is the same pattern. Here we look at how the
					buttons are created and laid out.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JButton b1 = new JButton("Button 01");
							<br />
							JButton b2 = new JButton("Button 02");
							<br />
							JButton b3 = new JButton("Button 03");
						</p>
						<p className="text-sm sm:text-base">
							Creates three separate button objects with different labels. Each
							button can later have its own behavior.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							add(b1);
							<br />
							add(b2);
							<br />
							add(b3);
						</p>
						<p className="text-sm sm:text-base">
							Adds all three buttons to the frame. The layout manager determines
							where and how they appear.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							setLayout(new FlowLayout());
						</p>
						<p className="text-sm sm:text-base">
							Uses <code>FlowLayout</code>, which places the buttons next to each
							other in a row, wrapping to the next line if there is not enough
							space.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Buttons in real applications
				</h2>
				<p className="text-slate-700">
					In real projects, buttons are connected to event listeners. For exam
					programs, it&apos;s enough to show how to create and place buttons. In later
					sections we will handle clicks and perform actions.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/components/jlabel"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: JLabel Basics</span>
				</Link>
				<Link
					href="/GUI/components/jtextfield"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: JTextField Basics</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
