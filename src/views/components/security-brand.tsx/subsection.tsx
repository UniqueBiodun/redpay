import React, { ReactNode, useEffect } from "react";
// import { useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

interface TextImgContainerProps {
	addStyle?: string;
	firstDiv?: ReactNode;
	secondDiv?: ReactNode;
}

const SubSection: React.FC<TextImgContainerProps> = ({
	addStyle,
	firstDiv,
	secondDiv,
}: TextImgContainerProps) => {
	useEffect(() => {
		AOS.init({
			duration: 2000, // Animation duration (in milliseconds)
			once: false, // Only run the animation once
		});
	}, []);
	// bg-secondary-200
	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} py-10 font-grotesk flex items-center`}
			>
				<div
					className={`pr-0 lg:pr-[6.25rem] h-full mx-auto flex flex-col-reverse lg:flex-row justify-between gap-6`}
				>
					{/* First Div */}
					<div
						data-aos="fade-right"
						className="w-full flex flex-row items-center justify-center bg-[#FDFDFD] border border-[#E1E5EA] rounded-tr rounded-br text-secondary-400 px-4 md:px-[3.75rem] py-[3.25rem]"
					>
						{firstDiv}
					</div>

					{/* Second Div */}
					<div className="w-full px-4 sm:px-0 sm:w-[70%] lg:w-[90%] mx-auto flex items-center">
						<p className="w-full text-3xl sm:px-0 sm:mx-0 md:text-5xl font-semibold text-secondary-100 md:leading-[3.75rem]">
							{secondDiv}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default SubSection;
