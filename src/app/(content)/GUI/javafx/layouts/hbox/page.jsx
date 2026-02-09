"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function HBoxBasicsPage() {
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
						href="/GUI/javafx"
						className="transition hover:text-indigo-700 hover:underline"
					>
						JavaFX GUI
					</Link>
					<span className="mx-1">›</span>
					<Link
						href="/GUI/javafx/layouts"
						className="transition hover:text-indigo-700 hover:underline"
					>
						Layouts
					</Link>
					<span className="mx-1">›</span>
					<span className="font-medium text-slate-700">HBox</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					HBox: Horizontal Linear Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					HBox is a layout pane that arranges nodes in a single horizontal row.
					It is the JavaFX equivalent of Swing's BoxLayout with horizontal orientation.
					HBox provides flexible control over spacing, alignment, and node sizing.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Three buttons arranged horizontally
				</h2>
				<p className="text-slate-700">
					This example demonstrates an HBox with a 10-pixel gap between buttons.
					Buttons are aligned to the baseline center with 5-pixel padding around the HBox.
				</p>
				<JavaCode
					CODE={`import javafx.scene.layout.HBox;
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.geometry.Insets;
import javafx.geometry.Pos;

public class HBoxDemo extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) throws Exception {
        Button b1 = new Button("button 01");
        Button b2 = new Button("button 02");
        Button b3 = new Button("button 03");
        
        HBox root = new HBox(10);
        root.setPadding(new Insets(5));
        root.setAlignment(Pos.BASELINE_CENTER);
        root.getChildren().add(b1);
        root.getChildren().add(b2);
        root.getChildren().add(b3);
    
        Scene scene = new Scene(root, 400, 400);
        primaryStage.setScene(scene);
        primaryStage.setTitle("HBox Example");
        primaryStage.show();
    }
}`}
					filename="HBoxDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/layouts/P02_HBox.java" />
				<OutputImage src="/HBox.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is HBox?
				</h2>
				<p className="text-slate-700">
					<code>HBox</code> is a built-in layout pane in JavaFX (from the
					<code>javafx.scene.layout</code> package) that arranges nodes in a single
					horizontal row. Unlike FlowPane, HBox does not wrap; instead, it arranges
					all children in a single line and expands or contracts based on the container size.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<strong>Linear Arrangement:</strong> All nodes appear in a horizontal row.
					</li>
					<li>
						<strong>Gap Control:</strong> Specifies spacing between consecutive nodes.
					</li>
					<li>
						<strong>Alignment:</strong> Supports multiple alignment options like
						<code>Pos.CENTER</code>, <code>Pos.TOP_LEFT</code>, etc.
					</li>
					<li>
						<strong>Padding:</strong> Adds space around the inside edges of the HBox.
					</li>
					<li>
						<strong>No Wrapping:</strong> Children remain in a single row regardless of
						available space.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the HBox code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Let&apos;s examine the key steps for creating and configuring an HBox.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							HBox root = new HBox(10);
						</p>
						<p className="text-sm sm:text-base">
							Creates a horizontal box layout with 10-pixel spacing between nodes.
							The constructor parameter specifies the horizontal gap between children.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setPadding(new Insets(5));
						</p>
						<p className="text-sm sm:text-base">
							Sets the padding inside the HBox to 5 pixels on all sides. This creates
							space between the HBox borders and its children.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setAlignment(Pos.BASELINE_CENTER);
						</p>
						<p className="text-sm sm:text-base">
							Aligns all children to the baseline center. This means nodes are positioned
							horizontally centered and vertically aligned at their baseline. Other options
							include <code>Pos.CENTER</code>, <code>Pos.TOP_CENTER</code>, etc.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.getChildren().add(b1); ... root.getChildren().add(b3);
						</p>
						<p className="text-sm sm:text-base">
							Adds buttons to the HBox in left-to-right order. The HBox automatically
							positions them horizontally with the specified gap between each node.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Key Constructors
				</h2>
				<p className="text-slate-700">
					The HBox class provides multiple constructors for different use cases:
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<code>HBox()</code>: Creates a default HBox with no gap between nodes.
					</li>
					<li>
						<code>HBox(Double spacing)</code>: Creates an HBox with specified spacing
						between all nodes.
					</li>
					<li>
						<code>HBox(Double spacing, Node... children)</code>: Creates an HBox with
						specified spacing and adds children immediately.
					</li>
				</ul>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use HBox
				</h2>
				<p className="text-slate-700">
					Use HBox when you need to arrange controls horizontally in a single row with
					consistent spacing and alignment. It is ideal for toolbars, button rows, menu
					items, or any layout where horizontal arrangement without wrapping is required.
					For vertical arrangement, use VBox; for more complex layouts, consider GridPane.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/javafx/layouts/flowpane"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: FlowPane</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>Back to Layouts Overview</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts/vbox"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: VBox</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
