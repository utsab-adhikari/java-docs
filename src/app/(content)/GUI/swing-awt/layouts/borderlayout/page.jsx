"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function BorderLayoutBasicsPage() {
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
							href="/GUI/swing-awt/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">BorderLayout</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					BorderLayout: Five-Region Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					BorderLayout divides the container into five regions: NORTH, SOUTH, EAST,
					WEST, and CENTER.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Buttons in BorderLayout regions
				</h2>
				<p className="text-slate-700">
					This example creates five buttons and places each into a different
					BorderLayout region.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
	MyFrame() {
		setTitle("Layouts - Borderlayout");

		BorderLayout B1 = new BorderLayout(20, 20);
		 // here 20 and 20 is horizontal and Vertical gap/space
		 /*
		BorderLayout(int hgap, int vgap);
		 */
		setLayout(B1);		

		JButton b1 = new JButton("Button 01");
		JButton b2 = new JButton("Button 02");
		JButton b3 = new JButton("Button 03");
		JButton b4 = new JButton("Button 04");
		JButton b5 = new JButton("Button 05");

		add(b1, BorderLayout.EAST);
		add(b2, BorderLayout.WEST);
		add(b3, BorderLayout.NORTH);
		add(b4, BorderLayout.SOUTH);
		add(b5, BorderLayout.CENTER);

		setVisible(true);
		setSize(500, 500);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}

public class BorderLayoutDemo {
	public static void main(String arr[]) {
		new MyFrame();
	}
}`}
					filename="BorderLayoutDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/BorderLayout.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is BorderLayout?
				</h2>
				<p className="text-slate-700">
					<code>BorderLayout</code> is the default layout for JFrame&apos;s content
					pane. It has five regions and is useful for building typical application
					windows.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Regions: NORTH, SOUTH, EAST, WEST, CENTER.</li>
					<li>Only one component per region is allowed.</li>
					<li>Gaps between regions can be controlled with hgap and vgap.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the BorderLayout code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					We focus on how the layout and regions are configured.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							BorderLayout B1 = new BorderLayout(20, 20);
							<br />setLayout(B1);
						</p>
						<p className="text-sm sm:text-base">
							Creates a BorderLayout with 20-pixel gaps horizontally and
							vertically between regions, then applies it to the frame.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							add(b1, BorderLayout.EAST); ... add(b5, BorderLayout.CENTER);
						</p>
						<p className="text-sm sm:text-base">
							Adds each button to a specific region so you can visually see where
							each area is located.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use BorderLayout
				</h2>
				<p className="text-slate-700">
					Use BorderLayout for typical application windows: toolbars at the top,
					status bar at the bottom, navigation on the left, and main content in the
					center.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/layouts/gridbaglayout"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Previous: GridBagLayout Basics</span>
					</Link>
				<Link
							href="/GUI/swing-awt/layouts/cardlayout"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: CardLayout (Coming Soon)</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
