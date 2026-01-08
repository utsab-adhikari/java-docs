import Link from "next/link";

export default function GUIControlsPage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10 px-4 sm:px-0">
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
            3.3 GUI Controls
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          3.3 Swing GUI Controls
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Overview of common Swing controls (buttons, labels, text fields, lists,
          dialogs) and how they are used to build interactive forms.
        </p>
      </header>

      <section className="space-y-3">
        <p className="text-slate-700">
          In the Swing framework, a <strong>component</strong> is an independent visual
          control derived from the
          <code className="text-indigo-700 font-mono"> JComponent </code>class. These
          lightweight controls provide rich functionality and high levels of
          customization for desktop interfaces.
        </p>
      </section>

      {/* Section 1: Basic Input & Display */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          1. Buttons, Labels, and Text Components
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
      		  <div className="border border-slate-200 p-4">
            <h3 className="font-bold text-indigo-700">JButton</h3>
            <p className="text-xs text-slate-600">
              An implementation of a push button used to trigger actions. It can 
              display text, an icon, or both.
            </p>
          </div>
          <div className="border border-slate-200 p-4">
            <h3 className="font-bold text-indigo-700">JLabel</h3>
            <p className="text-xs text-slate-600">
              A simple component for displaying read-only text or images; it 
              does not react to input events.
            </p>
          </div>
          <div className="border border-slate-200 p-4">
            <h3 className="font-bold text-indigo-700">JTextField</h3>
            <p className="text-xs text-slate-600">
              Allows the editing of a single line of non-formatted text input 
              from the user.
            </p>
          </div>
          <div className="border border-slate-200 p-4">
            <h3 className="font-bold text-indigo-700">JTextArea</h3>
            <p className="text-xs text-slate-600">
              A multiline plain text area. Note: It does not handle scrolling 
              automatically; it requires a <code className="text-[10px]">JScrollPane</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Selection Components */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          2. Selection Controls
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 ring-1 ring-slate-200">
            <h3 className="font-bold text-slate-800">JRadioButton & ButtonGroup</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Used to select a <strong>single exclusive choice</strong> from a group. 
              To ensure only one button can be selected at a time, you must add 
              them to a <code className="text-indigo-700">ButtonGroup</code>.
            </p>
          </div>
          <div className="bg-slate-50 p-4 ring-1 ring-slate-200">
            <h3 className="font-bold text-slate-800">JComboBox</h3>
            <p className="text-sm text-slate-600">
              Combines a button or editable field with a <strong>drop-down list</strong>. 
              The list appears only at the user's request.
            </p>
          </div>
          <div className="bg-slate-50 p-4 ring-1 ring-slate-200">
            <h3 className="font-bold text-slate-800">JList</h3>
            <p className="text-sm text-slate-600">
              Displays a list of objects and allows the user to select one or 
              more items from the collection.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Feedback Patterns */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          3. Validation and User Feedback
        </h2>
        <p className="mb-4 text-sm text-slate-600">
          User feedback is primarily handled through <strong>Dialog Boxes</strong>. 
          Standard dialogs are predefined for common tasks like receiving input 
          or showing alerts.
        </p>
        <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4 mb-4">
          <h4 className="font-bold text-emerald-900">JOptionPane</h4>
          <p className="text-xs text-emerald-800">
            Used to create simple message dialogs to provide information. 
            Example: <code className="text-xs">JOptionPane.showMessageDialog(null, "Message");</code>
          </p>
        </div>
        <div className="border-l-4 border-amber-500 bg-amber-50 p-4">
          <h4 className="font-bold text-amber-900">JDialog</h4>
          <p className="text-xs text-amber-800">
            Used for more complex "conversations," such as data input or 
            modifying settings. These can be <strong>Modal</strong> (blocking 
            other windows) or <strong>Modeless</strong>.
          </p>
        </div>
      </section>

      {/* Code Snippet: Control Organization */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          4. Organizing Controls in a Form
        </h2>
        <div className="overflow-hidden bg-slate-900 p-4 font-mono text-[0.7rem] text-slate-200">
          <pre>
{`// Using JPanel to group related controls
JPanel formPanel = new JPanel(new GridLayout(2, 2));
JLabel userLabel = new JLabel("Username:");
JTextField userField = new JTextField();

formPanel.add(userLabel);
formPanel.add(userField);

// Adding a validation feedback button
JButton submit = new JButton("Login");
submit.addActionListener(e -> {
    if(userField.getText().isEmpty()) {
        JOptionPane.showMessageDialog(null, "Username required!");
    }
});`}
          </pre>
        </div>
      </section>

      {/* Links into detailed GUI component docs */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          5. Learn Swing Controls with Full Programs
        </h2>
        <p className="text-sm text-slate-600">
          For exam-focused programs and step-by-step explanations of each Swing
          control, use the dedicated GUI Components section. The links below
          take you directly to detailed examples.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <Link
  	            href="/GUI/swing-awt/components/jframe"
          className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JFrame &mdash; Main Window</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jpanel"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JPanel &mdash; Grouping Controls</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jlabel"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JLabel &mdash; Display Text</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jbutton"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JButton &mdash; Click Actions</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jtextfield"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JTextField &mdash; Single-line Input</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jtextarea"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JTextArea &mdash; Multi-line Input</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jradiobutton"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JRadioButton &mdash; Single Choice</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jlist"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JList &mdash; List of Items</span>
            <span className="text-lg">→</span>
          </Link>
          <Link
  	            href="/GUI/swing-awt/components/jtable"
			className="flex items-center justify-between border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
          >
            <span>JTable &mdash; Tabular Data</span>
            <span className="text-lg">→</span>
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <Link
  	            href="/GUI/swing-awt/components"
            className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
          >
            <span>Open GUI Components Section</span>
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:justify-between">
        <Link
          href="/chapter-03/layout-management"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm transition hover:bg-indigo-100"
        >
          <span className="text-lg">←</span>
          <span>Previous: 3.2 Layout Management</span>
        </Link>
        <Link
          href="/chapter-03/event-handling"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-[#152e6b]"
        >
          <span>Next: 3.4 Event Handling</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}
