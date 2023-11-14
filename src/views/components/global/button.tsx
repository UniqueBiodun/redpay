import { Button } from "@material-tailwind/react";
import React from "react";

const GetStartedButton: React.FC = () => {
	return (
		<Button
			variant="text"
			className="font-grotesk text-base font-medium flex items-center gap-2 capitalize text-secondary-200 bg-primary rounded hover:bg-secondary-300"
		>
			Get started{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={2}
				stroke="currentColor"
				className="h-5 w-5"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</Button>
	);
};

export default GetStartedButton;
