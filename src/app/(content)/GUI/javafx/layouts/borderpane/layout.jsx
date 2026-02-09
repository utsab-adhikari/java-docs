export const metadata = {
    title: {
        default: "BorderPane Layout in JavaFX",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Learn how to use the BorderPane layout in JavaFX to create user interfaces with five distinct regions: top, bottom, left, right, and center.",
    keywords: [
        "JavaFX BorderPane tutorial",
        "BorderPane layout example",
        "JavaFX layout managers",
        "JavaFX GUI programming",
        "BorderPane vs HBox VBox",
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
        title: "BorderPane Layout in JavaFX",
        description:
            "Learn how to use the BorderPane layout in JavaFX to create user interfaces with five distinct regions: top, bottom, left, right, and center.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "BorderPane Layout in JavaFX",
        description:
            "Learn how to use the BorderPane layout in JavaFX to create user interfaces with five distinct regions: top, bottom, left, right, and center.",
    },
    alternates: {
        canonical: "/GUI/javafx/layouts/borderpane",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}   