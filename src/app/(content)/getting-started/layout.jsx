export const metadata = {
  title: "Getting Started · Advanced Programming with Java",
  description:
    "High-level introduction to the Advanced Programming with Java course, prerequisites, grading policy, and how to use these notes.",
  keywords: [
    "Advanced Java getting started",
    "Java course introduction",
    "Java prerequisites",
    "how to use Java notes",
  ],
  openGraph: {
    title: "Getting Started with Advanced Programming with Java",
    description:
      "Learn what this Java course covers, who it is for, and how to navigate the documentation effectively.",
    type: "article",
    section: "Course Information",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started · Advanced Programming with Java",
    description:
      "Overview of the Advanced Java course, prerequisites, and study approach.",
  },
  alternates: {
    canonical: "/getting-started",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}