export const metadata = {
  title: "Setup & Installation · Advanced Programming with Java",
  description:
    "Step-by-step guide to installing the JDK, configuring environment variables, and choosing an IDE for Java development.",
  keywords: [
    "install JDK",
    "Java setup guide",
    "configure Java PATH",
    "Java IDE setup",
    "Pokhara University Java lab setup",
  ],
  openGraph: {
    title: "Java Development Environment Setup",
    description:
      "Follow a clear checklist to install Java, set PATH/CLASSPATH, and prepare your development environment.",
    type: "article",
    section: "Course Information",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setup & Installation · Advanced Programming with Java",
    description:
      "Configure your Java development environment with JDK installation and IDE setup steps.",
  },
  alternates: {
    canonical: "/setup-installation",
  },
};

export default function Layout({ children }) {
  return <div>{children}</div>;
}