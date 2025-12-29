import JavaCode from "@/components/JavaCode";
import LinkGithub from "@/components/LinkGithub";
import Output from "@/components/Output";
import Link from "next/link";

export default function InheritanceAccessPage() {
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
            2.2 Super, Sub Class
          </span>
        </nav>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          2.2 Super Class, Sub Class, and Member Access
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          How Java lets us build new classes on top of existing ones using
          inheritance, and how access modifiers control visibility between
          classes.
        </p>
      </header>

      {/* Overview */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Overview
        </h2>
        <p className="text-slate-700">
          Inheritance allows us to create new classes built upon existing ones,
          promoting <strong>reusability</strong>. By inheriting from an existing
          class, we can reuse its fields and methods while adding new
          functionality specific to the subclass.
        </p>
      </section>

      {/* Class definitions */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Super Class vs Sub Class
        </h2>
        <p className="text-slate-700">
          Java uses the terms super class and sub class to describe the
          relationship between a general type and a more specific one.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className=" border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-indigo-900">
              Super Class
            </h3>
            <p className="text-sm text-slate-600">
              Also called a base or parent class. This is the class whose
              features (fields and methods) are being inherited.
            </p>
          </div>
          <div className=" border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-2 text-base font-semibold text-indigo-900">
              Sub Class
            </h3>
            <p className="text-sm text-slate-600">
              Also called a derived or child class. It extends the super class
              and can add its own fields and methods.
            </p>
          </div>
        </div>
      </section>

      {/* Single inheritance & syntax */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Single Inheritance and the extends Keyword
        </h2>
        <p className="text-slate-700">
          In Java&apos;s single inheritance model, a child class extends only one
          parent class. The <code>extends</code> keyword indicates that a class is
          building on top of another.
        </p>
        <JavaCode CODE={`// Single Inheritance Example in Java

class A {
    int length;
    void setLength(int l) {
        length = l;
    }
}

class B extends A {
    int breadth;
    void setBreadth(int breadth) {
        this.breadth = breadth;
    }
    
    void area() {
        int a = length * breadth;
        System.out.println("Area = "+a);
    }
}

public class SingleInheritance {
    public static void main (String[] args) {
        B obj = new B();
        obj.setLength(5);
        obj.setBreadth(4);
        obj.area();
        
    }
}`} filename={"SingleInheritance.java"} />

<LinkGithub href="https://github.com/utsab-adhikari/java/blob/main/OOP/P01_SingleInheritance.java" />
<Output output={`Area = 20
`} />
      </section>

      {/* Member access modifiers */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          Member Access Control
        </h2>
        <p className="text-slate-700">
          Access modifiers are part of <strong>encapsulation</strong>. They control
          how class members (fields and methods) are seen from other classes and
          packages.
        </p>
        <div className="overflow-x-auto border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="border-b px-4 py-2">Modifier</th>
                <th className="border-b px-4 py-2">Visibility Scope</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="border-b px-4 py-2 font-semibold text-indigo-700">
                  private
                </td>
                <td className="border-b px-4 py-2">
                  Accessible only within the same class.
                </td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2 font-semibold text-indigo-700">
                  default (package-private)
                </td>
                <td className="border-b px-4 py-2">
                  Accessible only within the same package.
                </td>
              </tr>
              <tr>
                <td className="border-b px-4 py-2 font-semibold text-indigo-700">
                  protected
                </td>
                <td className="border-b px-4 py-2">
                  Accessible within the same package and, outside the
                  package, only in subclasses.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-indigo-700">
                  public
                </td>
                <td className="px-4 py-2">
                  Accessible from anywhere in the program.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Composition vs inheritance */}
      <section className="space-y-3">
        <h2 className="border-l-4 border-amber-400 pl-3 text-xl font-semibold text-indigo-900">
          "is-a" vs "has-a" (Composition)
        </h2>
        <p className="text-slate-700">
          Inheritance is not the only way classes relate to each other. Java
          also supports composition, where classes are built from other classes
          by holding them as fields.
        </p>
        <div className="bg-indigo-50 p-5 ring-1 ring-indigo-200">
          <ul className="space-y-3 text-slate-700">
            <li>
              <strong>Inheritance (is-a):</strong> Represents a parent–child
              relationship. Example: a <em>Car is a Vehicle</em>.
            </li>
            <li>
              <strong>Composition (has-a):</strong> Represents a
              "has-a" relationship. Example: a <em>Car has a steering
              wheel</em>.
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <Link
            href="/chapter-02/principles"
            className="inline-flex items-center gap-2 border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-900 shadow-sm"
          >
            <span className="text-lg">←</span>
            <span>Previous: 2.1 Principles</span>
          </Link>
        <Link
            href="/chapter-02/inheritance-types"
            className="inline-flex items-center gap-2 bg-[#1a3c8b] px-4 py-2 text-sm font-medium text-white shadow-md"
          >
            <span>Next: 2.3 Inheritance Types</span>
            <span className="text-lg">→</span>
          </Link>
      </div>
    </article>
  );
}