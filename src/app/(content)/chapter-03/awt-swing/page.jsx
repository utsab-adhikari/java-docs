import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";

export default function AWTSwingPage() {
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
            href="/chapter-03"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 03
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            3.1 AWT and Swing
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          3.1 Introduction to AWT and Swing
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Overview of Java&apos;s AWT and Swing libraries for building graphical
          user interfaces, including heavyweight and lightweight components,
          core containers, and basic usage.
        </p>
      </header>

      <section className="space-y-3">
        <p className="text-slate-700">
          Java provides two primary sets of APIs for creating graphical user
          interfaces: the Abstract Window Toolkit (AWT) and Swing. While they
          share common roots, they differ in how they render components,
          depend on the operating system, and provide look and feel.
        </p>
        <p className="text-slate-700">
          This section introduces both toolkits and highlights when and why
          you might use each in desktop applications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Java AWT
        </h2>
        <p className="text-slate-700">
          AWT is Java&apos;s original, platform-dependent windowing toolkit. Its
          components are called heavyweight because they rely on the native
          operating system&apos;s widgets for rendering and behavior.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Package: <code className=" bg-slate-100 px-1">java.awt</code>
          </li>
          <li>
            Platform dependent: look and feel follows the underlying
            operating system.
          </li>
          <li>
            Basic components such as labels, text fields, buttons, and
            lists.
          </li>
          <li>
            Good for understanding the foundations of Java GUI programming,
            but mostly replaced by Swing in modern applications.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Java Swing
        </h2>
        <p className="text-slate-700">
          Swing is part of the Java Foundation Classes and is built on top of
          AWT. It provides lightweight, platform-independent components
          implemented mostly in Java, giving a consistent look and feel across
          different systems.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Package: <code className=" bg-slate-100 px-1">javax.swing</code>
          </li>
          <li>Lightweight components that do not rely directly on native widgets.</li>
          <li>Richer set of controls such as JButton, JTable, JMenu, and more.</li>
          <li>Highly customizable with pluggable look and feel.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          AWT vs Swing at a Glance
        </h2>
        <div className=" overflow-x-auto max-w-[80vw]">
          <table className=" border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="border-b px-4 py-2">AWT</th>
                <th className="border-b px-4 py-2">Swing</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border-b px-4 py-2">Heavyweight components</td>
                <td className="border-b px-4 py-2">Lightweight components</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2">Platform dependent</td>
                <td className="border-b px-4 py-2">Platform independent</td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2">Native OS appearance</td>
                <td className="border-b px-4 py-2">Customizable and consistent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Core Swing Containers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className=" border-l-4 border-amber-500 bg-amber-50 p-4">
            <h3 className="text-sm font-semibold text-amber-900">JFrame</h3>
            <p className="mt-1 text-xs text-amber-800">
              The main top-level window for a Swing application. Other
              components are added into its content pane.
            </p>
          </div>
          <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4">
            <h3 className="text-sm font-semibold text-emerald-900">JPanel</h3>
            <p className="mt-1 text-xs text-emerald-800">
              A general-purpose container used to group and organize related
              components. Often combined with layout managers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: Simple Swing Frame
        </h2>
        <p className="text-slate-700">
          The following example creates a basic frame with two buttons using a
          FlowLayout manager.
        </p>
        <JavaCode
          CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
	MyFrame() {
		setTitle("Understanding The Basic");
		 // sets title of the frame

		JPanel p1 = new JPanel(); // JPanel
		JButton b1 = new JButton("Click Me 1");
		JButton b2 = new JButton("Click Me 2");
		p1.add(b1);
		p1.add(b2);
		add(p1);

        setLayout(new FlowLayout());
		setSize(400, 400); //sets size of the frame
		setVisible(true);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // default close operation: exit
	}
}

public class Understanding{
	public static void main(String arr[]) {
		new MyFrame();
	}
}`} filename="Understanding.java"
        />

<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/GUI/BasicSetup/P02_Understanding.java" />
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
            href="/chapter-03"
            className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span className="text-lg">←</span>
            <span>Previous: Chapter 03 Overview</span>
          </Link>
        <Link
            href="/chapter-03/layout-management"
            className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
          >
            <span>Next: 3.2 Layout Management</span>
            <span className="text-lg">→</span>
          </Link>
      </div>
    </article>
  );
}