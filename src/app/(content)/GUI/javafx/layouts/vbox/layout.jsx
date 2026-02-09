export const metadata = {
    title: {
        default: "VBox Layout in JavaFX",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Learn how to use the VBox layout in JavaFX to arrange nodes in a single vertical column with flexible spacing and alignment options.",
    keywords: [
        "JavaFX VBox tutorial",
        "VBox layout example",
        "JavaFX vertical layout",
        "VBox vs HBox",
        "JavaFX GUI programming",
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
        title: "VBox Layout in JavaFX",
        description:
            "Learn how to use the VBox layout in JavaFX to arrange nodes in a single vertical column with flexible spacing and alignment options.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "VBox Layout in JavaFX",
        description:
            "Learn how to use the VBox layout in JavaFX to arrange nodes in a single vertical column with flexible spacing and alignment options.",
    },
    alternates: {
        canonical: "/GUI/javafx/layouts/vbox",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}