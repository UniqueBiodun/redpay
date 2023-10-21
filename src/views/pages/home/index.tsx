import React from "react";
import Marquee from "react-fast-marquee";
import HeroSection from "../../hero-section/hero";
import Prefooter from "../../prefooter/Prefooter";
import SubSection from "../../components/security-brand.tsx/subsection";
import LockIcon from "../../../assets/icons/lock-icon.svg";
import MultiFactorIcon from "../../../assets/icons/mfa-icon.svg";
import FraudIcon from "../../../assets/icons/fraud-icon.svg";
import TokenIcon from "../../../assets/icons/token-icon.svg";
import ReportingIcon from "../../../assets/icons/reporting-icon.svg";
import ReconciliationIcon from "../../../assets/icons/recon-icon.svg";
import Tenoil from "../../../assets/icons/tenoil-logo.svg";
import AfricaPrudence from "../../../assets/icons/africa-prudential.svg";
import Uba from "../../../assets/icons/uba-logo.svg";
import HeirsGeneral from "../../../assets/icons/heirs-general-logo.svg";
import Verve from "../../../assets/icons/verve-logo.png";
import Mastercard from "../../../assets/icons/mastercard-logo.png";
import Visa from "../../../assets/icons/visa-logo.png";
import BusinessGrowth from "./business-growth";
// import Benefits from "./benefits";
import StepByStep from "./step-by-step";
import BenefitsNew from "./benefits-new";

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<SubSection
				firstDiv={
					<>
						<div className="grid grid-cols-2 gap-3 lg:gap-6">
							<div className="flex flex-col gap-6">
								<div className="flex gap-2 items-center">
									<img
										src={LockIcon}
										alt="lock-icon"
									/>
									<p>PCI -DSS Certified</p>
								</div>
								<div className="flex gap-2 items-center">
									<img
										src={MultiFactorIcon}
										alt="mfa-icon"
									/>
									<p>Multifactor authentication</p>
								</div>
								<div className="flex gap-2 items-center">
									<img
										src={FraudIcon}
										alt="fraud-icon"
									/>
									<p>Advanced fraud monitoring</p>
								</div>
							</div>
							<div className="flex flex-col gap-6">
								<div className="flex gap-2 items-center">
									<img
										src={TokenIcon}
										alt="token-icon"
									/>
									<p>Tokenization</p>
								</div>
								<div className="flex gap-2 items-center">
									<img
										src={ReportingIcon}
										alt="report-icon"
									/>
									<p>Detailed reporting</p>
								</div>
								<div className="flex gap-2 items-center">
									<img
										src={ReconciliationIcon}
										alt="recon-icon"
									/>
									<p>Reconciliation & Audit</p>
								</div>
							</div>
						</div>
					</>
				}
				secondDiv={
					<>
						Security and Trust {""}
						<span className="text-primary">Elements</span> in RedPay
					</>
				}
			/>
			<BenefitsNew />
			{/* <Benefits /> */}

			<section className="w-full border-t border-t-[#E1E1E1] bg-[#FAFAFA] py-8 md:py-[3.375rem] font-grotesk">
				<div className="container px-4 lg:px-[10rem]">
					<Marquee
						pauseOnHover={true}
						speed={80}
					>
						<div className="grid grid-cols-7 items-center md:gap-10">
							<img
								className="w-[50%] md:w-[40%]"
								src={Uba}
								alt="uba-logo"
							/>
							<img
								className="w-[50%] md:w-[70%]"
								src={HeirsGeneral}
								alt="heirs-logo"
							/>
							<img
								className="w-[50%] md:w-[40%]"
								src={Tenoil}
								alt="tenoil-logo"
							/>
							<img
								className="w-[50%] md:w-[70%]"
								src={AfricaPrudence}
								alt="africaprudence-logo"
							/>
							<img
								className="w-[50%] md:w-[40%]"
								src={Verve}
								alt="verve-logo"
							/>
							<img
								className="w-[50%] md:w-[40%]"
								src={Mastercard}
								alt="mastercard-logo"
							/>
							<img
								src={Visa}
								alt="visa-logo"
								className="w-[50%] md:w-[60%] pr-10 md:pr-10"
							/>
						</div>
					</Marquee>
				</div>
			</section>
			<BusinessGrowth />
			<StepByStep />
			<Prefooter />
		</>
	);
};

export default Home;
