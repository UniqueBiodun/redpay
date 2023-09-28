import React, { ReactNode } from "react";

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
	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} py-10 font-grotesk bg-secondary-200 flex items-center`}
			>
				<div
					className={`container pl-0 h-full mx-auto flex flex-col-reverse lg:flex-row justify-between  gap-6`}
				>
					{/* First Div */}
					<div className="w-full flex flex-row items-center justify-center bg-[#FDFDFD] border border-[#E1E5EA] rounded-tr rounded-br text-secondary-400 px-4 md:px-[60px] py-[52px]">
						{firstDiv}
					</div>

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
