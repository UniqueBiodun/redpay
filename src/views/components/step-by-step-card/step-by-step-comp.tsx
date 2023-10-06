import React, { useState } from "react";
import { steps } from "../../../data/steps";

interface EventProps {
	columns?: string;
	borderPosition?: string;
	placement?: string;
}

const StepsComp: React.FC<EventProps> = ({
	columns,
	borderPosition,
	placement,
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const onItemClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<>
			<section className="mx-auto">
				<div className={`flex justify-center ${columns} gap-20`}>
					<div className={`w-full ${placement}`}>
						<div className="">
							<div
								className={`w-full flex flex-col gap-6 md:gap-12 ${borderPosition} border-[#E1E1E1]`}
							>
								{steps.map((step, index) => (
									<div
										key={index}
										className={`cursor-pointer flex  flex-col gap-2 md:gap-3 text-left opacity-50 ${
											index === activeIndex
												? `${borderPosition} border-primary opacity-100`
												: ""
										}`}
										onClick={() => onItemClick(index)}
									>
										<h1 className="text-sec-100 text-3xl font-medium pl-6">
											{step.title}
										</h1>
										<p className="text-sec-200 text-base md:text-xl pl-6">
											{step.para}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="hidden md:block w-full">
						{steps.map((step, index) => (
							<img
								key={index}
								src={step.image}
								alt={`Image ${index}`}
								className={`h-[540px] w-full ${
									index === activeIndex ? "block" : "hidden"
								}`}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default StepsComp;
