import React, { useEffect, useRef, useState } from "react";
import BenefitsImg1 from "../../../assets/images/benefits-bg-1.png";
import BenefitsImg2 from "../../../assets/images/benefits-bg-2.png";
import BenefitsImg3 from "../../../assets/images/benefits-bg-3.png";
import BenefitsImg4 from "../../../assets/images/benefits-bg-4.png";
import BenefitsImg5 from "../../../assets/images/benefits-bg-5.png";
import BenefitsImg6 from "../../../assets/images/benefits-bg-6.png";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Benefits: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [activeSection, setActiveSection] = useState(0);
	const [imageSrc, setImageSrc] = useState<string>(BenefitsImg1);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const container = containerRef.current;
				const scrollPosition = container.scrollTop;
				const sectionHeight = container.clientHeight; // Use the container's height

				const newActiveSection = Math.floor(scrollPosition / sectionHeight);
				setActiveSection(newActiveSection);

				// Update the image source based on the active section
				switch (newActiveSection) {
					case 0:
						setImageSrc(BenefitsImg1);
						break;
					case 1:
						setImageSrc(BenefitsImg2);
						break;
					case 2:
						setImageSrc(BenefitsImg3);
						break;
					case 3:
						setImageSrc(BenefitsImg4);
						break;
					case 4:
						setImageSrc(BenefitsImg5);
						break;
					case 5:
						setImageSrc(BenefitsImg6);
						break;
					default:
						setImageSrc(BenefitsImg6);
						break;
				}
			}
		};

		if (containerRef.current) {
			const container = containerRef.current;
			container.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (containerRef.current) {
				const container = containerRef.current;
				container.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<section className="w-full flex min-h-[90vh] items-center font-grotesk bg-benefitBg bg-no-repeat bg-cover">
			<div className="3xl:container py-10 md:py-0 px-4 lg:px-0 flex flex-col lg:pl-[10.8rem] lg:flex-row justify-between items-center gap-16">
				<div
					ref={containerRef}
					className="w-full lg:h-[680px] flex flex-col gap-16 lg:gap-64 lg:py-64 lg:overflow-auto lg:scrollbar-hide"
				>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 0 ? "active" : ""
							}`}
						>
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 0 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 0 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 1 ? "active" : ""
							}`}
						>
							Simplify your <span className="text-primary">finances</span>
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 1 ? "active" : ""
							}`}
						>
							Free up resources with automated payments and manage payroll,
							subscriptions, and invoices easily, allowing your team to focus on
							what matters most.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 1 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 2 ? "active" : ""
							}`}
						>
							Elevate your customers’ experience with hassle-free{" "}
							<span className="text-primary">payments</span>
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 2 ? "active" : ""
							}`}
						>
							With T+1 settlement and a dedicated merchant dashboard offering
							robust reporting, dispute resolution, and analytics tools, your
							customers will enjoy a seamless journey and your business will
							thrive.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 2 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 3 ? "active" : ""
							}`}
						>
							Unlock actionable <span className="text-primary">insights</span>{" "}
							to fuel your growth
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 3 ? "active" : ""
							}`}
						>
							Gain priceless insights into your business performance through
							comprehensive reporting and analytics. Your growth journey is
							powered by data. Put your customers' needs and preferences at the
							heart of everything you do with informed decisions and fine-tuned
							strategies.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 3 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 4 ? "active" : ""
							}`}
						>
							Expand your business with seamless{" "}
							<span className="text-primary">integration</span> magic
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 4 ? "active" : ""
							}`}
						>
							Enhance your adaptability and expand your reach by integrating our
							payment system with PoS systems, e-commerce modules, and virtual
							accounts, ensuring your customers' needs are met at every step.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 4 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
					<div className="w-full">
						<p
							className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full ${
								activeSection === 5 ? "active" : ""
							}`}
						>
							Integrate with a <span className="text-primary">smile</span>+
							support
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 5 ? "active" : ""
							}`}
						>
							Our API Documentation is here to simplify your journey, providing
							clear guides. What's more, we're with you every step of the way,
							ensuring a friendly and smooth integration process. But that's not
							all. Redpay's 24/7 support system ensures that help is just a
							message or call away, making your integration experience truly
							exceptional.
						</p>
						<Link to="#">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 5 ? "active" : ""
								}`}
							>
								<span>Explore API Docs</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
				</div>
				<div className="hidden lg:inline-block w-full h-full">
					<img
						className="shadow-2xl"
						src={imageSrc}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
