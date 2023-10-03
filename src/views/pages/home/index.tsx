import React from "react";
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
						<div className="flex flex-row gap-8">
							<div className="flex flex-col gap-6">
								<div className="flex gap-2 items-center">
									<img src={LockIcon} alt="lock-icon" />
									<p>PCI -DSS Certified</p>
								</div>
								<div className="flex gap-2 items-center">
									<img src={MultiFactorIcon} alt="mfa-icon" />
									<p>Multifactor authentication</p>
								</div>
								<div className="flex gap-2 items-center">
									<img src={FraudIcon} alt="fraud-icon" />
									<p>Advanced fraud monitoring</p>
								</div>
							</div>
							<div className="flex flex-col gap-6">
								<div className="flex gap-2 items-center">
									<img src={TokenIcon} alt="token-icon" />
									<p>Tokenization</p>
								</div>
								<div className="flex gap-2 items-center">
									<img src={ReportingIcon} alt="report-icon" />
									<p>Detailed reporting</p>
								</div>
								<div className="flex gap-2 items-center">
									<img src={ReconciliationIcon} alt="recon-icon" />
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
			<Benefits />
			<section className="w-full border-t border-t-[#E1E1E1] bg-[#FAFAFA] py-10 px-10 md:px-40 font-grotesk">
				<div className="3xl:container flex flex-col gap-6 md:gap-0 flex-wrap md:flex-row justify-between items-center">
					<div className="text-center">
						<img src={Uba} alt="uba-logo" />
					</div>
					<div className="text-center">
						<img src={HeirsGeneral} alt="uba-logo" />
					</div>
					<div className="text-center">
						<img src={Tenoil} alt="uba-logo" />
					</div>
					<div className="text-center">
						<img src={AfricaPrudence} alt="uba-logo" />
					</div>
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
