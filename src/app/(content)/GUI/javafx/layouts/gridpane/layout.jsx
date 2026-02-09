export const metadata = {
    title: {
        default: "GridPane Layout in JavaFX",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Learn how to use the GridPane layout in JavaFX to create flexible user interfaces that arrange nodes in a grid of rows and columns.",
    keywords: [
        "JavaFX GridPane tutorial",
        "GridPane layout example",
        "JavaFX grid layout",
        "GridPane vs FlowPane",
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
        title: "GridPane Layout in JavaFX",
        description:
            "Learn how to use the GridPane layout in JavaFX to create flexible user interfaces that arrange nodes in a grid of rows and columns.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "GridPane Layout in JavaFX",
        description:
            "Learn how to use the GridPane layout in JavaFX to create flexible user interfaces that arrange nodes in a grid of rows and columns.",
    },
    alternates: {
        canonical: "/GUI/javafx/layouts/gridpane",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}