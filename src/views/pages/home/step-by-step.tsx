import React from "react";
import StepsComp from "../../components/step-by-step-card/step-by-step-comp";

const StepByStep: React.FC = () => {
	return (
		<>
			<section className="w-full flex min-h-[90vh] items-center font-grotesk bg-benefitBg bg-no-repeat bg-cover py-10">
				<div className="container flex flex-col gap-10 text-center">
					<div className="text-left">
						<h3 className="text-sec-100 text-4xl font-medium">
							Step-by-step guide to begin your journey
						</h3>
					</div>
					<div>
						<StepsComp
							columns="lg:flex-row flex-col"
							borderPosition="border-l-4 -ml-1"
							placement="flex flex-col gap-10 justify-between"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default StepByStep;
