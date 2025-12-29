export const metadata = {
	title: "Using extends and super in Java · Chapter 02",
	description:
		"Understand how the extends and super keywords work together in Java to build inheritance hierarchies, access parent members, and chain constructors.",
	keywords: [
		"Java extends keyword",
		"Java super keyword",
		"Java inheritance extends",
		"Java super variable",
		"Java super method",
		"Java super constructor",
		"Java shadowing vs overriding",
		"Pokhara University Java OOP",
	],
	openGraph: {
		title: "Chapter 02 · extends and super in Java",
		description:
			"See how extends defines a subclass and how super lets that subclass talk to its parent class in Java.",
		type: "article",
		section: "Chapter 02",
	},
	twitter: {
		card: "summary_large_image",
		title: "Using extends and super in Java · Chapter 02",
		description:
			"Learn to use extends and super for inheritance, member access, and constructor chaining in Java.",
	},
	alternates: {
		canonical: "/chapter-02/extend-super",
	},
};

export default function Layout({ children }) {
	return <div>{children}</div>;
}

