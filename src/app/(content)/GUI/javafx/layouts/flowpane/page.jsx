"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function FlowPaneBasicsPage() {
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
					<span className="font-medium text-slate-700">FlowPane</span>
				</nav>

				<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
					FlowPane: Automatic Wrapping Layout
				</h1>
				<p className="mt-2 text-sm text-slate-500">
					FlowPane is a layout pane that positions nodes in a row or column,
					automatically wrapping them to a new line or column when they cannot fit in
					the current space. It is the JavaFX equivalent of Swing's FlowLayout.
				</p>
			</header>

			<section className="space-y-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Example: Three buttons in a horizontal FlowPane
				</h2>
				<p className="text-slate-700">
					This example demonstrates a horizontal FlowPane with 10-pixel gaps between
					buttons. When the window is resized, buttons automatically wrap to new lines
					as needed.
				</p>
				<JavaCode
					CODE={`import javafx.application.Application;
import javafx.stage.Stage;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.FlowPane;
import javafx.geometry.Orientation;

public class FlowPaneDemo extends Application {
    public static void main(String arr[]) {
        launch(arr);
    }

    public void start(Stage primaryStage) throws Exception {
        Button b1 = new Button("Button 01");
        Button b2 = new Button("Button 02");
        Button b3 = new Button("Button 03");
        
        // Create a horizontal FlowPane with 10px horizontal and vertical gaps
        FlowPane root = new FlowPane(Orientation.HORIZONTAL, 10, 10);
        root.getChildren().add(b1);
        root.getChildren().add(b2);
        root.getChildren().add(b3);
    
        Scene s1 = new Scene(root, 400, 400);
        primaryStage.setScene(s1);
        primaryStage.setTitle("JavaFX FlowPane Example");
        primaryStage.show();
    }
}`}
					filename="FlowPaneDemo.java"
				/>
				<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/JavaFX/layouts/P01_FlowPane.java" />
				<OutputImage src="/FlowPane.png" />
			</section>

			<section className="space-y-3">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					What is FlowPane?
				</h2>
				<p className="text-slate-700">
					<code>FlowPane</code> is a built-in layout pane in JavaFX (from the
					<code>javafx.scene.layout</code> package) that arranges nodes in a single
					row or column. When nodes exceed the available space, they automatically wrap
					to a new line or column.
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<strong>Default Orientation:</strong> Horizontal (nodes flow left to right).
					</li>
					<li>
						<strong>Dynamic Arrangement:</strong> Automatically repositions nodes as the
						window is resized.
					</li>
					<li>
						<strong>Gap Management:</strong> Supports horizontal and vertical gaps
						between nodes.
					</li>
					<li>
						<strong>Wrapping:</strong> Nodes wrap to the next line or column when space
						is insufficient.
					</li>
				</ul>
			</section>

			<section className="space-y-6">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
					Line-by-line: Understanding the FlowPane code
				</h2>
				<p className="text-slate-700 text-sm sm:text-base">
					Let&apos;s examine the key steps for creating and configuring a FlowPane.
				</p>

				<div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							FlowPane root = new FlowPane(Orientation.HORIZONTAL, 10, 10);
						</p>
						<p className="text-sm sm:text-base">
							Creates a horizontal FlowPane with 10-pixel gaps between nodes
							horizontally and vertically. <code>Orientation.HORIZONTAL</code> means
							nodes flow left-to-right before wrapping to a new line.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							Button b1 = new Button("Button 01"); ... root.getChildren().add(b1);
						</p>
						<p className="text-sm sm:text-base">
							Creates buttons and adds them to the FlowPane using
							<code>getChildren().add()</code>. The FlowPane automatically arranges
							them in the specified orientation.
						</p>
					</div>

					<div className="space-y-1">
						<p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2">
							Scene s1 = new Scene(root, 400, 400);
						</p>
						<p className="text-sm sm:text-base">
							Creates a scene with the FlowPane as the root node. When the window is
							resized, the FlowPane dynamically repositions its children.
						</p>
					</div>
				</div>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					Key Constructors
				</h2>
				<p className="text-slate-700">
					The FlowPane class provides multiple constructors for different use cases:
				</p>
				<ul className="ml-6 list-disc space-y-1.5 text-slate-700">
					<li>
						<code>FlowPane()</code>: Creates a default horizontal FlowPane.
					</li>
					<li>
						<code>FlowPane(Double hgap, Double vgap)</code>: Creates a horizontal
						FlowPane with specified gaps.
					</li>
					<li>
						<code>FlowPane(Orientation orientation, Double hgap, Double vgap)</code>:
						Explicitly sets orientation (Horizontal or Vertical) with custom gaps.
					</li>
				</ul>
			</section>

			<section className="space-y-3 border-t border-slate-200 pt-4">
				<h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
					When to use FlowPane
				</h2>
				<p className="text-slate-700">
					Use FlowPane when you want a simple, automatically-wrapping layout for buttons,
					icons, or other uniform-sized controls. It is ideal for toolbars, button panels,
					and cases where responsive wrapping is desired. For more complex layouts with
					mixed component sizes, consider HBox, VBox, or GridPane.
				</p>
			</section>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<Link
					href="/GUI/javafx/layouts"
					className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
				>
					<span className="text-lg">←</span>
					<span>Back to Layouts Overview</span>
				</Link>
				<Link
					href="/GUI/javafx/layouts/hbox"
					className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
				>
					<span>Next: HBox</span>
					<span className="text-lg">→</span>
				</Link>
			</div>
		</article>
	);
}
