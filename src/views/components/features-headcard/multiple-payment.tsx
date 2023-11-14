import React, { ReactNode } from "react";

interface TextImgContainerProps {
	addStyle?: string;
	firstDiv?: ReactNode;
	secondDiv?: ReactNode;
	emptyDiv?: ReactNode;
}

const MultiplePayment: React.FC<TextImgContainerProps> = ({
	addStyle,
	firstDiv,
	secondDiv,
	emptyDiv,
}: TextImgContainerProps) => {
	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} pt-10 pb-[3.75rem] font-grotesk flex items-center`}
			>
				<div className={`container lg:pl-32 lg:pr-32 flex flex-col gap-6`}>
					{/* First Div */}

					<div className={`text-secondary-400 grid grid-cols-1 lg:grid-cols-2`}>
						{emptyDiv}
						{firstDiv}
					</div>

					{/* Second Div */}
					<div className="w-full">
						<div className="w-full text-secondary-100">{secondDiv}</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MultiplePayment;
