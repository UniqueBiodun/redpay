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
// import Testimonials from "./testimonials";
import BusinessGrowth from "./business-growth";
import Benefits from "./benefits";
import StepByStep from "./step-by-step";

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<SubSection
				firstDiv={
					<>
						<div className="flex flex-row gap-3 lg:gap-8">
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
			{/* <BenefitsNew /> */}
			<Benefits />

			<section className="w-full border-t border-t-[#E1E1E1] bg-[#FAFAFA] py-[3.375rem] font-grotesk">
				<div className="container px-4 md:px-[10rem]">
					<Marquee
						pauseOnHover={true}
						speed={80}
					>
						<div className="flex gap-10 md:gap-[8.875rem]">
							<img
								src={Uba}
								alt="uba-logo"
							/>
							<img
								src={HeirsGeneral}
								alt="heirs-logo"
							/>
							<img
								src={Tenoil}
								alt="tenoil-logo"
							/>
							<img
								src={AfricaPrudence}
								alt="africaprudence-logo"
							/>
							<img
								src={Verve}
								alt="verve-logo"
							/>
							<img
								src={Mastercard}
								alt="mastercard-logo"
							/>
							<img
								src={Visa}
								alt="visa-logo"
								className="pr-10 md:pr-[8.875rem]"
							/>
						</div>
					</Marquee>
				</div>
			</section>
			<BusinessGrowth />
			<StepByStep />
			{/* <SubSection
				firstDiv={
					<>
						<div className="flex flex-col gap-8">
							<div className="flex flex-row justify-between items-center gap-12">
								<div className="">
									<img src={HeirsLife} alt="heirs-icon" />
								</div>
								<div className="">
									<img src={Tenoil} alt="tenoil-icon" />
								</div>
								<div className="">
									<img src={AfricaPrudence} alt="africaprudence-icon" />
								</div>
							</div>
							<div className="flex flex-row justify-between items-center gap-12">
								<div className="">
									<img src={Uba} alt="uba-icon" />
								</div>
								<div className="">
									<img src={HeirsGeneral} alt="heirsgeneral-icon" />
								</div>
								<div className="">
									<img src={Kuda} alt="kuda-icon" />
								</div>
							</div>
						</div>
					</>
				}
				secondDiv={
					<>
						List of <span className="text-primary">Brands</span> that have trust
						in RedPay
					</>
				}
			/> */}
			{/* <Testimonials /> */}
			<Prefooter />
		</>
	);
};

export default Home;
