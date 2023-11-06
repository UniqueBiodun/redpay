import React, { ReactNode } from "react";

interface TextImgContainerProps {
	addStyle?: string;
	gridOrder?: string;
	firstDiv?: ReactNode;
	secondDiv?: ReactNode;
}

const PaymentShare: React.FC<TextImgContainerProps> = ({
	addStyle,
	firstDiv,
	secondDiv,
	gridOrder,
}: TextImgContainerProps) => {
	return (
		<>
			<section
				className={`min-h-[35vh] ${addStyle} pt-10 pb-[3.75rem] font-grotesk flex items-center`}
			>
				<div
					className={`container lg:pl-32 lg:pr-32 grid grid-cols-2 items-end gap-6`}
				>
					{/* First Div */}
					<div className={`${gridOrder}`}>
						<div className="text-secondary-400">{firstDiv}</div>
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

export default PaymentShare;
