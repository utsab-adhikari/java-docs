"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function FlowLayoutBasicsPage() {
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
					<span className="font-medium text-slate-700">FlowLayout</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					FlowLayout: Simple Left-to-Right Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					FlowLayout arranges components in a row, one after another, wrapping to
					new lines when there is not enough horizontal space.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Five buttons in a FlowLayout
				</h2>
				<p className="text-slate-700">
					This example uses <code>FlowLayout.CENTER</code> with horizontal and
					vertical gaps of 10 pixels between buttons.
				</p>
				<JavaCode
					CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Layouts - FLowLayout");

        setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));

        /*
        Here FlowLayout can be called as: 
            1) FLowlayout(): General flow;
            2)FlowLayout(int allign): specific allignment of items
                    allignment can be done in two ways: 

                    0 or LEFT
                    1 or CENTER
                    2 or RIGHT
                    3 or LEADING
                    4 or TRALING

    FlowLayout(1) or FlowLayout(FlowLayout.CENTER) is same

            3) FlowLayout(int align, int hgap, int vgap): 
                giving specific horizontal gap and Vertical gap between items
        */

        JButton b1 = new JButton("Button 01");
        JButton b2 = new JButton("Button 02");
        JButton b3 = new JButton("Button 03");
        JButton b4 = new JButton("Button 04");
        JButton b5 = new JButton("Button 05");

        add(b1);
        add(b2);
        add(b3);
        add(b4);
        add(b5);

        setVisible(true);
        setSize(500, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class FlowLayoutDemo {
    public static void main(String arr[]) {
        new MyFrame();
    }
}`}
					filename="FlowLayoutDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java" />
				<OutputImage src="/FlowLayout.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is FlowLayout?
				</h2>
				<p className="text-slate-700">
					<code>FlowLayout</code> is the simplest layout manager. Components are
					placed in a row from left to right, then wrap to the next line.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>Good for small toolbars or simple test programs.</li>
					<li>Supports alignment: LEFT, CENTER, RIGHT, LEADING, TRAILING.</li>
					<li>Can set horizontal and vertical gaps between components.</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the FlowLayout code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					We focus on how the layout is set and how components are added.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							setLayout(new FlowLayout(FlowLayout.CENTER, 10, 10));
						</p>
						<p className="text-sm sm:text-base">
							Uses FlowLayout with CENTER alignment and 10-pixel gaps horizontally
							and vertically between components.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
							JButton b1 = new JButton("Button 01"); ...
							<br />add(b1); add(b2); add(b3); add(b4); add(b5);
						</p>
						<p className="text-sm sm:text-base">
							Creates five buttons and adds them to the frame. FlowLayout decides
							where they appear.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use FlowLayout
				</h2>
				<p className="text-slate-700">
					Use FlowLayout for quick demos, simple forms, or when you only have a few
					components in a row. For more control, use GridLayout or other managers.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
						href="/GUI/swing-awt/layouts"
						className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
					>
						<span className="text-lg">←</span>
						<span>Back to Layouts Overview</span>
					</Link>
				<Link
							href="/GUI/swing-awt/layouts/gridlayout"
						className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
					>
						<span>Next: GridLayout</span>
						<span className="text-lg">→</span>
					</Link>
			</div>
		</article>
	);
}
