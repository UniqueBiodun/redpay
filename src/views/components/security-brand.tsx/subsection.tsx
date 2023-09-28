import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
	const [ref, inView] = useInView({
		threshold: 0.2, // Percentage of element visible to trigger
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: "0%",
				opacity: 1,
				transition: {
					type: "smooth",
					duration: 2,
				},
			});
		}
		if (!inView) {
			animation.start({
				x: "-100%",
				opacity: 0,
				transition: {
					type: "tween",
					duration: 3,
				},
			});
		}
	}, [inView]);

	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} py-10 font-grotesk bg-secondary-200 flex items-center`}
			>
				<div
					className={`container pl-0 h-full mx-auto flex flex-col-reverse lg:flex-row justify-between  gap-6`}
				>
					{/* First Div */}
					<motion.div
						ref={ref}
						initial={{ x: "-100%", opacity: 0 }}
						animate={animation}
						className="w-full flex flex-row items-center justify-center bg-[#FDFDFD] border border-[#E1E5EA] rounded-tr rounded-br text-secondary-400 px-4 md:px-[60px] py-[52px]"
					>
						{firstDiv}
					</motion.div>

					{/* Second Div */}
					<div className="w-full flex items-center">
						<p className="text-3xl container sm:px-0 sm:mx-0 md:text-5xl font-semibold text-secondary-100 leading-[60px]">
							{secondDiv}
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default SubSection;
