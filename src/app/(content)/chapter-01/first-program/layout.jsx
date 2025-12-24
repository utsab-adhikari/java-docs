export const metadata = {
  title: "1.1 First Java Program · Chapter 01",
  description:
    "Write, compile, and run your first Java program using the classic HelloWorld example, including explanation of the main method and console output.",
  keywords: [
    "Java first program",
    "Java HelloWorld example",
    "javac java commands",
    "Java main method",
    "beginner Java program",
    "Pokhara University Java",
  ],
  openGraph: {
    title: "1.1 Your First Java Program",
    description:
      "Step-by-step guide to writing, compiling, and running your first Java program with HelloWorld and the main method.",
    type: "article",
    section: "Chapter 01",
  },
  twitter: {
    card: "summary_large_image",
    title: "1.1 First Java Program · Chapter 01",
    description:
      "Learn how to write and run the classic HelloWorld program in Java, including compilation and execution commands.",
  },
  alternates: {
    canonical: "/chapter-01/first-program",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}