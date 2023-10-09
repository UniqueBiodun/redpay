import React from "react";
import CompanyImg1 from "../../../assets/images/company-img1.png";

const CompanyHero: React.FC = () => {
	return (
		<>
			<section className="w-full bg-[#000] bg-center bg-cover bg-sectionBg bg-no-repeat h-2/4 text-secondary-100 text-base font-grotesk">
				<div className="container flex justify-between items-center">
					<div className="w-full lg:py-28 flex justify-center items-center">
						<p className="py-8 text-center text-3xl md:text-5xl text-secondary-200 font-bold w-[59rem]">
							We embarked on a journey to create the ultimate solution for
							businesses
						</p>
					</div>
				</div>
			</section>
			<section className="container pt-14 pb-10">
				<div className="flex flex-col gap-8">
					<img
						src={CompanyImg1}
						alt="company-img"
					/>
					<p className="text-center font-normal text-base text-secondary-300">
						At Redpay, we understand that the heart of any thriving business
						lies in seamless financial transactions. That's why we've created
						Redpay, our dedicated B2B segment, to change the way businesses
						handle payments. Say goodbye to complexity, delays, and uncertainty
						– say hello to a future of effortless, secure, and efficient B2B
						transactions.
					</p>
				</div>
			</section>
		</>
	);
};

export default CompanyHero;
