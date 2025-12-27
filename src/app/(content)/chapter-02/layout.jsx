export const metadata = {
	title: {
		default: "Chapter 02: Object Oriented Principles in Java",
		template: "%s · Java Programming Documentation",
	},
	description:
		"Chapter 02 explores object-oriented principles in Java, including inheritance, polymorphism, abstract classes, interfaces, and member access control.",
	keywords: [
		"Java object oriented principles",
		"Java inheritance",
		"Java polymorphism",
		"Java abstract classes",
		"Java interfaces",
		"Java method overriding",
		"Java method overloading",
		"Java upcasting and downcasting",
		"Pokhara University Java",
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
		title: "Chapter 02: Object Oriented Principles in Java",
		description:
			"A focused chapter on core object-oriented concepts in Java such as inheritance, member access, final and abstract classes, and interfaces.",
		type: "article",
		locale: "en_US",
		siteName: "Java Programming Documentation",
	},
	twitter: {
		card: "summary_large_image",
		title: "Chapter 02 · Object Oriented Principles in Java",
		description:
			"Learn how Java implements object-oriented principles: inheritance, polymorphism, abstract classes, interfaces, and casting.",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

