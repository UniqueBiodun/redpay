// Here are the nav links, resources was made separate due to it sub links

export const navlinks = [
	{
		title: "Features",
		url: "/features",
		target: "",
	},
	{
		title: "FAQs",
		url: "/faqs",
		target: "",
	},
	{
		title: "Support",
		url: "/support",
		target: "",
	},
];

// Here, resources is defined.

const apiDoc = import.meta.env.VITE_APP_API_DOCUMENTATION;

export const resources = [
	{
		title: "Documentation",
		link: apiDoc,
	},
];
