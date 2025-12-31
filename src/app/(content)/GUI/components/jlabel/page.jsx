"use client";

import Link from "next/link";
import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import OutputImage from "@/components/OutputImage";

export default function JLabelBasicsPage() {
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
          <span className="font-medium text-slate-700">JLabel</span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          JLabel: Displaying Text in Swing
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          JLabel is used to display a short piece of read-only text (or an icon)
          inside a Swing window. It is often paired with input components like
          buttons or text fields.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Example: JLabel with a Button
        </h2>
        <p className="text-slate-700">
          This example creates a label and a button in the same frame using
          <code>FlowLayout</code>. The label gives a description and the button
          is an action the user can click.
        </p>
        <JavaCode
          CODE={`import javax.swing.*;
import java.awt.*;

class MyFrame extends JFrame {
    MyFrame() {
        setTitle("Components - JLabel");

        JLabel l1 = new JLabel("Click The Button:");
        JButton b1 = new JButton("Click here");

        add(l1);
        add(b1);

        setLayout(new FlowLayout());
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

public class JLabelDemo {
    public static void main(String[] args) {
        new MyFrame();
    }
}`}
          filename="JLabelDemo.java"
        />
        <LinkGithub href="https://github.com/utsab-adhikari/java" />
        <OutputImage src="/JLabel.png" />
      </section>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          What is JLabel?
        </h2>
        <p className="text-slate-700">
          A <code>JLabel</code> is a display-only component. It shows text or an
          icon, but the user cannot type into it. Labels are typically used to
          describe other components (like input fields or buttons).
        </p>
        <ul className="ml-6 list-disc space-y-1.5 text-slate-700">
          <li>Commonly used next to text fields or buttons as captions.</li>
          <li>Can display plain text, HTML-formatted text, or images.</li>
          <li>Does not accept input; it is purely for display.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl sm:text-2xl font-semibold text-indigo-900">
          Line-by-line: Understanding the JLabel example
        </h2>
        <p className="text-slate-700 text-sm sm:text-base">
          The JFrame setup is the same pattern as before. Here we focus on how
          the label and button are created and added.
        </p>

        <div className="space-y-5 text-slate-800 overflow-x-auto max-w-[85vw] bg-red-50 p-4">
          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              JLabel l1 = new JLabel("Click The Button:");
              <br />
              JButton b1 = new JButton("Click here");
            </p>
            <p className="text-sm sm:text-base">
              Creates a label with instructional text and a button the user can
              click. These are two separate components.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              add(l1);
              <br />
              add(b1);
            </p>
            <p className="text-sm sm:text-base">
              Adds the label and the button to the frame&apos;s content area.
              The layout manager decides how they are positioned.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[0.85rem] sm:text-sm bg-slate-100 p-2 rounded-md">
              setLayout(new FlowLayout());
            </p>
            <p className="text-sm sm:text-base">
              Uses <code>FlowLayout</code>, which arranges components in a row
              (left to right) similar to words in a sentence. As you resize the
              window, the components flow to the next line if needed.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 border-t border-slate-200 pt-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Where JLabel fits in GUI design
        </h2>
        <p className="text-slate-700">
          Labels are small, but they make interfaces readable. You will use
          <code>JLabel</code> to name fields, describe buttons, and show
          messages to users in almost every real GUI program.
        </p>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/GUI/components/jpanel"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: JPanel Basics</span>
        </Link>
        <Link
          href="/GUI/components/jbutton"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b]"
        >
          <span>Next: JButton Basics</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
