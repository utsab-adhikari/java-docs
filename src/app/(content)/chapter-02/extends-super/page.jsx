import JavaCode from "@/components/JavaCode";
import Link from "next/link";

export default function ExtendsSuperPage() {
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
            href="/chapter-02"
            className="transition hover:text-indigo-700 hover:underline"
          >
            Chapter 02
          </Link>
          <span className="mx-1">›</span>
          <span className="font-medium text-slate-700">
            2.4 extends &amp; super
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          2.4 The extends and super Keywords
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java uses the <code>extends</code> and <code>super</code> keywords to connect
          subclasses with their parent classes and reuse behavior cleanly.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          The <code>extends</code> keyword
        </h2>
        <p className="text-slate-700">
          The <code>extends</code> keyword indicates that you are creating a new class that derives from
          an existing class. In practice it means &quot;to increase functionality&quot; by reusing
          the parent&apos;s fields and methods and then adding more.
        </p>
        <JavaCode
          CODE={`class Subclass extends Superclass {
    // New methods and fields added here
}`}
          filename={"Subclass.java"}
        />
        <p className="text-sm text-slate-500">
          The subclass automatically inherits all accessible members of the superclass while
          still being free to define its own behavior.
        </p>
      </section>

      {/* The super Keyword */}
      <section className="space-y-4">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          The <code>super</code> keyword
        </h2>
        <p className="text-slate-700">
          The <code>super</code> keyword is a reference used from a subclass to talk to its
          immediate parent class object. It is commonly used in three contexts:
        </p>

        <div className="space-y-6">
          {/* 1. Accessing Hidden Variables */}
          <div className="">
            <h3 className="mb-2 font-mono text-sm font-bold text-indigo-900">1. super.variable</h3>
            <p className="mb-3 text-sm text-slate-600">
              Used to access a variable in the parent class that has been
              <strong> shadowed </strong> by a variable with the same name in the subclass.
            </p>
            <JavaCode
              CODE={`class Vehicle { int maxSpeed = 120; }
class Car extends Vehicle {
    int maxSpeed = 180;
    void display() {
        System.out.println("Parent Speed: " + super.maxSpeed); // 120
    }
}`}
              filename={"SuperVariable.java"}
            />
          </div>

          {/* 2. Accessing Hidden Methods */}
          <div className="">
            <h3 className="mb-2 font-mono text-sm font-bold text-indigo-900">2. super.method()</h3>
            <p className="mb-3 text-sm text-slate-600">
              Used to invoke the parent class version of an <strong>overridden method</strong>.
            </p>
            <JavaCode
              CODE={`class Car extends Vehicle {
    void display() {
        super.display(); // Calls parent&apos;s display method
        System.out.println("Child logic here");
    }
}`}
              filename={"SuperMethod.java"}
            />
          </div>

          {/* 3. Calling Constructors */}
          <div className="">
            <h3 className="mb-2 font-mono text-sm font-bold text-indigo-900">3. super()</h3>
            <p className="mb-3 text-sm text-slate-600">
              Used to call the <strong>parent class constructor</strong> from the subclass constructor.
              This must be the first statement in the subclass constructor.
            </p>
            <JavaCode
              CODE={`class B extends ParentClass {
    B(int val) {
        super(val); // Passes value to Parent constructor
    }
}`}
              filename={"SuperConstructor.java"}
            />
          </div>
        </div>
      </section>

      {/* Shadowing vs Overriding */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Shadowing vs Overriding
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className=" bg-amber-50 p-4 ring-1 ring-amber-200">
            <h4 className="font-semibold text-amber-900">Shadowing (Fields)</h4>
            <p className="text-xs text-amber-800">
              When a subclass declares a field with the same name as the superclass, the parent&apos;s
              field is <strong>hidden</strong>. It still exists but must be accessed via
              <code className="ml-1 text-[10px]">super</code>.
            </p>
          </div>
          <div className="bg-emerald-50 p-4 ring-1 ring-emerald-200">
            <h4 className="font-semibold text-emerald-900">Overriding (Methods)</h4>
            <p className="text-xs text-emerald-800">
              When a subclass provides a specific implementation for a method already present in the
              parent class. This enables <strong>run-time polymorphism</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
          href="/chapter-02/inheritance-types"
          className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm hover:bg-indigo-100 transition-colors"
        >
          <span className="text-lg">←</span>
          <span>Previous: 2.3 Inheritance Types</span>
        </Link>
        <Link
          href="/chapter-02/polymorphism"
          className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#152e6b] transition-colors"
        >
          <span>Next: 2.5 Polymorphism</span>
          <span className="text-lg">→</span>
        </Link>
      </div>
    </article>
  );
}