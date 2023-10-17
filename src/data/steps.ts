import StepByStep1 from "../assets/images/step-by-step1.png";
import StepByStep2 from "../assets/images/step-by-step2.png";
import StepByStep3 from "../assets/images/step-by-step3.png";

interface Steps {
	title?: string;
	para?: string;
	image?: string;
	link?: string;
}

export const steps: Steps[] = [
	{
		title: "1. Sign Up",
		para: "Joining Redpay is quick and easy. Begin by creating your account. Provide essential details about your business, and you'll be on your way to revolutionizing your payment processes.",
		image: StepByStep1,
		link: "",
	},
	{
		title: "2. Connect your account",
		para: "Once you're registered, effortlessly link your bank account or financial institution. Redpay ensures a secure and straightforward integration process. Our team is also here to assist you at every step.",
		image: StepByStep2,
		link: "",
	},
	{
		title: "3. Start growing your business",
		para: "With your account set up and connected, you're now ready to experience the future of payments.  Simplify B2B transactions, improve payment processes, and watch your business thrive with our cutting-edge technology.",
		image: StepByStep3,
		link: "",
	},
];
