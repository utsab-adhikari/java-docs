export const metadata = {
  title: "1.3 PATH and CLASSPATH · Chapter 01",
  description:
    "Learn when and why to configure PATH and CLASSPATH environment variables for Java development in terminals and IDEs.",
  keywords: [
    "Java PATH variable",
    "Java CLASSPATH",
    "Java environment variables",
    "javac not recognized",
    "Java compiler path",
    "Pokhara University Java",
  ],
  openGraph: {
    title: "1.3 PATH and CLASSPATH Variables",
    description:
      "Understand the difference between PATH and CLASSPATH in Java, and when they are required for compiling and running programs.",
    type: "article",
    section: "Chapter 01",
  },
  twitter: {
    card: "summary_large_image",
    title: "1.3 PATH and CLASSPATH · Chapter 01",
    description:
      "Clarify how PATH and CLASSPATH affect Java tools like javac and java on your system.",
  },
  alternates: {
    canonical: "/chapter-01/class-paths",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}