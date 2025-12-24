
import "./globals.css";
import "@/styles/textbook.css";

export const metadata = {
  title: {
    default: "Advanced Programming with Java – Documentation",
    template: "%s · Advanced Java Documentation",
  },
  description:
    "Comprehensive, structured course notes for Advanced Programming with Java (Pokhara University). Covers Java fundamentals, JVM architecture, OOP, exception handling, and advanced concepts.",
  applicationName: "Advanced Java Documentation",
  authors: [{ name: "Utsab Adhikari" }],
  creator: "Utsab Adhikari",
  publisher: "Utsab Adhikari",
  category: "Education",
  keywords: [
    "Advanced Java",
    "Java Programming",
    "Pokhara University Java",
    "Java Documentation",
    "OOP in Java",
    "JVM Architecture",
    "Java Course Notes",
    "Engineering Java",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Advanced Programming with Java – Documentation",
    description:
      "Well-structured Java documentation and course notes designed for engineering students and self-learners.",
    type: "website",
    locale: "en_US",
    siteName: "Advanced Java Documentation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Programming with Java – Documentation",
    description:
      "Structured Java course notes for Pokhara University and beyond. Learn Java the right way.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="global-body">
        {children}
      </body>
    </html>
  );
}
