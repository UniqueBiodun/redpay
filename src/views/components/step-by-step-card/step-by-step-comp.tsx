import React, { useState } from "react";
import { steps } from "../../../data/steps";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

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
				<div className={`flex justify-center items-center ${columns} gap-20`}>
					<div className={`w-full ${placement}`}>
						<div className="">
							<div
								className={`w-full flex flex-col gap-6 md:gap-10 ${borderPosition} border-[#F4D3D3]`}
							>
								{steps.map((step, index) => (
									<div
										key={index}
										className={`cursor-pointer flex  flex-col gap-2 md:gap-3 text-left ${
											index === activeIndex
												? `${borderPosition} border-primary text-secondary-100`
												: "text-[#A7A9AF]"
										}`}
										onClick={() => onItemClick(index)}
									>
										<h1 className="text-sec-100 text-2xl lg:text-3xl font-medium pl-6">
											{step.title}
										</h1>
										<p className="text-sec-200 text-base pl-6">{step.para}</p>
										<p
											className={`text-sec-200 text-base pl-6 ${
												index === activeIndex
													? "text-primary"
													: "text-[#A7A9AF]"
											}`}
										>
											<Link
												to=""
												className="flex items-center gap-2"
											>
												<span>Learn more</span>
												<span>
													<AiOutlineArrowRight />
												</span>
											</Link>
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
								className={`w-full ${
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
