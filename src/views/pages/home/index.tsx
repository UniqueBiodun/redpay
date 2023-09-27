import React from "react";
import HeroSection from "../../hero-section/hero";
import Prefooter from "../../prefooter/Prefooter";

const Home: React.FC = () => {
	const pHeadingStyles = "text-[40px] font-semibold text-secondary-100";
	const pTitleStyles = "text-base font-medium text-secondary-300";

	return (
		<>
			<HeroSection />
			<section className="container bg-[#FAFAFA] py-[22.5px] px-20 md:px-[160px] font-lato">
				<div className="flex flex-col flex-wrap md:flex-row justify-between items-center">
					<div className="text-center">
						<p className={`${pHeadingStyles}`}>99.9%</p>
						<p className={`${pTitleStyles}`}>Successful transactions</p>
					</div>
					<div className="text-center">
						<p className={`${pHeadingStyles}`}>1M+</p>
						<p className={`${pTitleStyles}`}>SME Businesses</p>
					</div>
					<div className="text-center">
						<p className={`${pHeadingStyles}`}>1200+</p>
						<p className={`${pTitleStyles}`}>Successful transactions</p>
					</div>
					<div className="text-center">
						<p className={`${pHeadingStyles}`}>10K+</p>
						<p className={`${pTitleStyles}`}>Successful transactions</p>
					</div>
				</div>
			</section>
			<Prefooter />
		</>
	);
};

export default Home;
