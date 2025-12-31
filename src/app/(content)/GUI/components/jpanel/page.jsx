"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JPanelBasicsPage() {
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
          <span className="font-medium text-slate-700">JPanel</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JPanel: Grouping Components Inside a Frame
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          JPanel is a lightweight container used to group and organize other GUI
          components inside a JFrame. You will almost always use panels when
          building real applications.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: Using multiple JPanels in a JFrame
        </h2>
        <p className="text-slate-700">
          In this example, we create a frame and then use different panels for
          different regions of the window. Each panel can have its own
          background color and its own components.
        </p>
        <JavaCode
          CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JPanel");

        /* General Example:

        JPanel p1 = new JPanel();
        add(p1);

        */

        // we can use different panels for different purposes:

        JPanel topPanel = new JPanel();
        JPanel bottomPanel = new JPanel();

        topPanel.setBackground(Color.LIGHT_GRAY);
        bottomPanel.setBackground(Color.CYAN);

        topPanel.add(new JLabel("Top Panel"));
        bottomPanel.add(new JButton("Click Me"));

        add(topPanel, BorderLayout.NORTH);
        add(bottomPanel, BorderLayout.CENTER);

        // setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JPanelDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
          filename="JPanelDemo.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java" />
        <OutputImage src="/JPanel.png" />
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is JPanel?
        </h2>
        <p className="text-slate-700">
          <code>JPanel</code> is a generic lightweight container. Instead of
          adding all buttons, labels, and text fields directly to the frame, we
          place them inside panels. This helps us group related components and
          control layout more easily.
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            You can create multiple panels (e.g., top, center, bottom) for
            different sections of the window.
          </li>
          <li>
            Each panel can have its own layout manager and background color.
          </li>
          <li>
            Panels are added to the frame like any other component, often using
            a container layout such as <code>BorderLayout</code>.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
          Line-by-line: Understanding the JPanel example
        </h2>
        <p className="text-slate-700 text-sm sm:text-base">
          Let&apos;s focus on how the panels are created, customized, and added
          to the frame. The JFrame setup is the same as in the previous section.
        </p>

        <div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              JPanel topPanel = new JPanel();
              <br />
              JPanel bottomPanel = new JPanel();
            </p>
            <p className="text-sm sm:text-base">
              Creates two panel objects. Each panel is a small container that
              can hold its own set of components.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              topPanel.setBackground(Color.LIGHT_GRAY);
              <br />
              bottomPanel.setBackground(Color.CYAN);
            </p>
            <p className="text-sm sm:text-base">
              Sets different background colors so you can clearly see the
              separation between the panels on the screen.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              topPanel.add(new JLabel("Top Panel"));
              <br />
              bottomPanel.add(new JButton("Click Me"));
            </p>
            <p className="text-sm sm:text-base">
              Adds a label to the top panel and a button to the bottom panel.
              Each panel can contain multiple components, arranged according to
              its own layout manager.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              add(topPanel, BorderLayout.NORTH);
              <br />
              add(bottomPanel, BorderLayout.CENTER);
            </p>
            <p className="text-sm sm:text-base">
              Adds the panels to the frame using <code>BorderLayout</code>{" "}
              regions:
              <code>NORTH</code> for the top area and <code>CENTER</code> for
              the remaining middle area. This is a very common pattern in Swing
              GUIs.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Why use multiple panels?
        </h2>
        <p className="text-slate-700">
          Using several panels instead of putting everything directly into the
          frame makes your code easier to manage and extend. You can:
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>
            Group related controls together (e.g., a form panel, a button bar).
          </li>
          <li>
            Change the layout of one part of the window without affecting
            others.
          </li>
          <li>Reuse panels in different frames or dialogs.</li>
        </ul>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/GUI/components/jframe"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: JFrame Basics</span>
        </Link>
        <Link
          href="/GUI/components/jlabel"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: JLabel Basics</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
