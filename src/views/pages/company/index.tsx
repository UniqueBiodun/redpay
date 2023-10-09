import React from "react";
import CompanyHero from "./hero";
import Prefooter from "../../prefooter/Prefooter";

const Company: React.FC = () => {
	return (
		<>
			<section className="relative min-h-screen font-grotesk pt-20">
				<CompanyHero />
				<div className="container bg-black flex flex-col lg:flex-row justify-between items-center gap-8 mt-10">
					Company
				</div>
			</section>
			<Prefooter />
		</>
	);
};

export default Company;
