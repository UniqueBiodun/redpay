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

const Home: React.FC = () => {
	const pHeadingStyles = "text-[40px] font-semibold text-secondary-100";
	const pTitleStyles = "text-base font-medium text-secondary-300";

	return (
		<>
			<HeroSection />
			<section className="container bg-[#FAFAFA] py-[22.5px] px-20 md:px-[160px] font-grotesk">
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
						List of <span className="text-primary">Brands</span> that have trust
						in RedPay
					</>
				}
			/>
			<Prefooter />
		</>
	);
};

export default Home;
