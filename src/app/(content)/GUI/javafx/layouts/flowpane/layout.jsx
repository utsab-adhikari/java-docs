export const metadata = {
    title: {
        default: "FlowPane Layout in JavaFX",
        template: "%s · Java Programming Documentation",
    },
    description:
        "Learn how to use the FlowPane layout in JavaFX to create flexible user interfaces that automatically wrap nodes when space is limited.",
    keywords: [
        "JavaFX FlowPane tutorial",
        "FlowPane layout example",
        "JavaFX layout managers",
        "JavaFX automatic wrapping layout",
        "FlowPane vs HBox VBox",
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
        title: "FlowPane Layout in JavaFX",
        description:
            "Learn how to use the FlowPane layout in JavaFX to create flexible user interfaces that automatically wrap nodes when space is limited.",
        type: "article",
        locale: "en_US",
        siteName: "Java Programming Documentation",
    },
    twitter: {
        card: "summary_large_image",
        title: "FlowPane Layout in JavaFX",
        description:
            "Learn how to use the FlowPane layout in JavaFX to create flexible user interfaces that automatically wrap nodes when space is limited.",
    },
    alternates: {
        canonical: "/GUI/javafx/layouts/flowpane",
    },
};

export default function Layout({ children }) {
    return <div>{children}</div>;
}