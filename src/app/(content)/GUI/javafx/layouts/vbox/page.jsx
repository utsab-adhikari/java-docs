"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function VBoxBasicsPage() {
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
					<span className="font-medium text-slate-700">VBox</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					VBox: Vertical Linear Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					VBox is a layout pane that arranges nodes in a single vertical column.
					It is the JavaFX equivalent of Swing's BoxLayout with vertical orientation.
					VBox provides flexible control over spacing, alignment, and node sizing.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Three buttons arranged vertically
				</h2>
				<p className="text-slate-700">
					This example demonstrates a VBox with a 10-pixel gap between buttons.
					Buttons are aligned to the baseline right with 5-pixel padding around the VBox.
				</p>
				<JavaCode
					CODE={`import javafx.scene.layout.VBox;
import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.geometry.Insets;
import javafx.geometry.Pos;

public class VBoxDemo extends Application {
    public static void main(String[] args) {
        launch(args);
    }

    public void start(Stage primaryStage) throws Exception {
        Button b1 = new Button("button 01");
        Button b2 = new Button("button 02");
        Button b3 = new Button("button 03");
        
        VBox root = new VBox(10);
        root.setPadding(new Insets(5));
        root.setAlignment(Pos.BASELINE_RIGHT);
        root.getChildren().add(b1);
        root.getChildren().add(b2);
        root.getChildren().add(b3);
    
        Scene scene = new Scene(root, 400, 400);
        primaryStage.setScene(scene);
        primaryStage.setTitle("VBox Example");
        primaryStage.show();
    }
}`}
					filename="VBoxDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/layouts/P03_VBox.java" />
				<OutputImage src="/VBox.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is VBox?
				</h2>
				<p className="text-slate-700">
					<code>VBox</code> is a built-in layout pane in JavaFX (from the
					<code>javafx.scene.layout</code> package) that arranges nodes in a single
					vertical column. Unlike FlowPane, VBox does not wrap; instead, it arranges
					all children in a single column and expands or contracts based on the container size.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<strong>Linear Arrangement:</strong> All nodes appear in a vertical column.
					</li>
					<li>
						<strong>Gap Control:</strong> Specifies spacing between consecutive nodes.
					</li>
					<li>
						<strong>Alignment:</strong> Supports multiple alignment options like
						<code>Pos.CENTER</code>, <code>Pos.TOP_CENTER</code>, <code>Pos.BOTTOM_RIGHT</code>,
						etc.
					</li>
					<li>
						<strong>Padding:</strong> Adds space around the inside edges of the VBox.
					</li>
					<li>
						<strong>No Wrapping:</strong> Children remain in a single column regardless of
						available space.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the VBox code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Let&apos;s examine the key steps for creating and configuring a VBox.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							VBox root = new VBox(10);
						</p>
						<p className="text-sm sm:text-base">
							Creates a vertical box layout with 10-pixel spacing between nodes.
							The constructor parameter specifies the vertical gap between children.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setPadding(new Insets(5));
						</p>
						<p className="text-sm sm:text-base">
							Sets the padding inside the VBox to 5 pixels on all sides. This creates
							space between the VBox borders and its children.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.setAlignment(Pos.BASELINE_RIGHT);
						</p>
						<p className="text-sm sm:text-base">
							Aligns all children to the baseline right. This means nodes are positioned
							on the right side and vertically aligned at their baseline. Other options
							include <code>Pos.CENTER</code>, <code>Pos.CENTER_LEFT</code>, <code>Pos.BOTTOM_CENTER</code>, etc.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							root.getChildren().add(b1); ... root.getChildren().add(b3);
						</p>
						<p className="text-sm sm:text-base">
							Adds buttons to the VBox in top-to-bottom order. The VBox automatically
							positions them vertically with the specified gap between each node.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Key Constructors
				</h2>
				<p className="text-slate-700">
					The VBox class provides multiple constructors for different use cases:
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<code>VBox()</code>: Creates a default VBox with no gap between nodes.
					</li>
					<li>
						<code>VBox(Double spacing)</code>: Creates a VBox with specified spacing
						between all nodes.
					</li>
					<li>
						<code>VBox(Double spacing, Node... children)</code>: Creates a VBox with
						specified spacing and adds children immediately.
					</li>
				</ul>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use VBox
				</h2>
				<p className="text-slate-700">
					Use VBox when you need to arrange controls vertically in a single column with
					consistent spacing and alignment. It is ideal for form layouts, menus, lists of
					controls, or any layout where vertical arrangement without wrapping is required.
					For horizontal arrangement, use HBox; for more complex layouts, consider GridPane.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/javafx/layouts/hbox"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Previous: HBox</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span>Back to Layouts Overview</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts/borderpane"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: BorderPane</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
