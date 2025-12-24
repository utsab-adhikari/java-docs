export const metadata = {
  title: "1.2 Java Architecture & JVM · Chapter 01",
  description:
    "Understand how Java source code becomes platform-independent bytecode and how the JVM, JRE, and JIT work together to execute programs.",
  keywords: [
    "Java architecture",
    "JVM JRE JDK",
    "Java bytecode",
    "Java class loader",
    "Java compilation process",
    "Pokhara University Java",
  ],
  openGraph: {
    title: "1.2 Java Architecture & the JVM",
    description:
      "Explore how Java compiles source code to bytecode and how the JVM, class loader, and JIT compiler execute Java programs.",
    type: "article",
    section: "Chapter 01",
  },
  twitter: {
    card: "summary_large_image",
    title: "1.2 Java Architecture & JVM · Chapter 01",
    description:
      "Learn how the JVM, JRE, and bytecode enable Java's platform independence and runtime performance.",
  },
  alternates: {
    canonical: "/chapter-01/architecture",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}