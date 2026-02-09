export const metadata = {
    title: {
        default: "HBox Layout in JavaFX",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Learn how to use the HBox layout in JavaFX to arrange nodes in a single horizontal row with flexible spacing and alignment options.",
    keywords: [
        "JavaFX HBox tutorial",
        "HBox layout example",
        "JavaFX horizontal layout",
        "HBox vs VBox",
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
        title: "HBox Layout in JavaFX",
        description:
            "Learn how to use the HBox layout in JavaFX to arrange nodes in a single horizontal row with flexible spacing and alignment options.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "HBox Layout in JavaFX",
        description:
            "Learn how to use the HBox layout in JavaFX to arrange nodes in a single horizontal row with flexible spacing and alignment options.",
    },
    alternates: {
        canonical: "/GUI/javafx/layouts/hbox",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}