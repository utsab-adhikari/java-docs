export const metadata = {
  title: {
    default: "Chapter 01: Basics of Programming with Java",
    template: "%s · Java Programming Documentation",
  },
  description:
    "Chapter 01 introduces the basics of programming with Java, including program structure, JVM architecture, classes, objects, data types, control flow, and exception handling.",
  keywords: [
    "Java programming basics",
    "Java introduction",
    "Java JVM architecture",
    "Java first program",
    "Java classes and objects",
    "Java data types",
    "Java control flow",
    "Java exception handling",
    "Pokhara University Java",
  ],
  authors: [{ name: "Utsab Adhikari" }],
  creator: "Utsab Adhikari",
  publisher: "Utsab Adhikari",
  category: "Education",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Chapter 01: Basics of Programming with Java",
    description:
      "A structured overview of Java fundamentals including program execution, JVM, classes, objects, packages, and exception handling.",
    type: "article",
    locale: "en_US",
    siteName: "Java Programming Documentation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapter 01 · Basics of Programming with Java",
    description:
      "Learn how Java programs are written, compiled, and executed. A foundation chapter covering JVM, classes, objects, and control flow.",
  },
};

export default function Layout({ children }) {
  return (
    <div>
        {children}
    </div>
  );
}
