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
			<div className="3xl:container flex flex-col pl-[10.8rem] lg:flex-row justify-between items-center gap-16">
				<div
					ref={containerRef}
					className="w-full h-[680px] flex flex-col gap-64 py-64 overflow-auto scrollbar-hide"
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
						<Link to="">
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
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 1 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="">
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
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 2 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="">
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
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 3 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="">
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
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 4 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="">
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
							Empower your <span className="text-primary">customers</span> with
							versatile payment choices
						</p>
						<p
							className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full ${
								activeSection === 5 ? "active" : ""
							}`}
						>
							Your customers deserve convenience, and our diverse payment
							methods ensure they can shop, pay, and transact in the way that
							suits them best. Make paying a breeze for them by offering a
							variety of payment options like cards, bank transfers, and digital
							wallets.
						</p>
						<Link to="">
							<span
								className={`flex flex-row gap-2 items-center text-base text-primary ${
									activeSection === 5 ? "active" : ""
								}`}
							>
								<span>Learn more</span> <HiOutlineArrowRight size={16} />
							</span>
						</Link>
					</div>
				</div>
				<div className="w-full h-full">
					<img src={imageSrc} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Benefits;
