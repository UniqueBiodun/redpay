import React, { ReactNode } from "react";

interface TextImgContainerProps {
	addStyle?: string;
	firstDiv?: ReactNode;
	secondDiv?: ReactNode;
}

const PaymentFeatures: React.FC<TextImgContainerProps> = ({
	addStyle,
	firstDiv,
	secondDiv,
}: TextImgContainerProps) => {
	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} py-10 font-grotesk flex items-center`}
			>
				<div className={`h-full w-full flex flex-col justify-between gap-10`}>
					{/* First Div */}
					<div>
						<div className="container lg:grid lg:grid-cols-2 text-secondary-400">
							{firstDiv}
						</div>
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

export default PaymentFeatures;
