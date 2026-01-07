export const metadata = {
    title: {
        default: "GUI Programming Questions Set 02",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Set 02 of Java GUI programming questions focusing on JavaFX components like ListView, ComboBox, and event handling.",
    keywords: [
        "Java GUI programming questions",
        "JavaFX questions",
        "Java ListView ComboBox",
        "Java event handling questions",
        "Java GUI lab questions",
        "Pokhara University Java GUI questions",
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
        title: "GUI Programming Questions Set 02",
        description:
            "Explore Set 02 of Java GUI programming questions focusing on JavaFX components and event handling.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "GUI Programming Questions Set 02",
        description:
            "Set 02 of Java GUI programming questions with JavaFX components like ListView and ComboBox.",
    },
    alternates: {
        canonical: "/GUI/questions/set-02",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}