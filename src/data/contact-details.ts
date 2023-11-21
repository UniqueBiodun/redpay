import ContactImage1 from "../assets/icons/contact-icon-1.svg";
import ContactImage2 from "../assets/icons/contact-icon-2.svg";
import ContactImage3 from "../assets/icons/contact-icon-3.svg";
import ContactImage4 from "../assets/icons/contact-icon-4.svg";
import ContactImage5 from "../assets/icons/contact-icon-5.svg";
import ContactImage6 from "../assets/icons/contact-icon-6.svg";

interface Details {
	title?: string;
	para?: string;
	button?: string;
	image?: string;
	alt?: string;
	link?: any;
}

export const DETAILS: Details[] = [
	{
		title: "Help and Support",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "Get support",
		image: ContactImage1,
		alt: "help-icon",
		link: "#",
	},
	{
		title: "Connect your account",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "Get support",
		image: ContactImage2,
		alt: "get-support-icon",
		link: "#",
	},
	{
		title: "Send Us a message",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "Send an email",
		image: ContactImage3,
		alt: "send-an-email-icon",
		link: "#",
	},
	{
		title: "Documentation",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "View",
		image: ContactImage4,
		alt: "documentation-icon",
		link: "#",
	},
	{
		title: "Join the community",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "Subscribe",
		image: ContactImage5,
		alt: "subscribe-icon",
		link: "#",
	},
	{
		title: "Developers",
		para: "We have a team of well-qualified staff that responds to you within 5-10 minutes of ask-time.",
		button: "Send an email",
		image: ContactImage6,
		alt: "developers-icon",
		link: "#",
	},
];
