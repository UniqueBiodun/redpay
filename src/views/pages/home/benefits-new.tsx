import React from "react";
import BenefitsImg1 from "../../../assets/images/benefits-bg-1.png";
import BenefitsImg2 from "../../../assets/images/benefits-bg-2.png";
import BenefitsImg3 from "../../../assets/images/benefits-bg-3.png";
import BenefitsImg4 from "../../../assets/images/benefits-bg-4.png";
import BenefitsImg5 from "../../../assets/images/benefits-bg-5.png";
import BenefitsImg6 from "../../../assets/images/benefits-bg-6.png";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

const BenefitsNew: React.FC = () => {
	const alignCenter = { display: "flex", alignItems: "center" };

	return (
		<section className="w-full flex min-h-[100vh] items-center font-grotesk bg-benefitBg bg-no-repeat bg-cover">
			<Parallax
				className="3xl:mx-auto"
				pages={6}
			>
				<div>
					<ParallaxLayer
						sticky={{ start: 0, end: 0 }}
						style={{
							...alignCenter,
							justifyContent: "flex-end",
						}}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg1}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						sticky={{ start: 1.05, end: 1.05 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg2}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						sticky={{ start: 2.05, end: 2.05 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg3}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						sticky={{ start: 3.05, end: 3.05 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg4}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						sticky={{ start: 4.05, end: 4.05 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg5}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						sticky={{ start: 5.03, end: 5.03 }}
						style={{ ...alignCenter, justifyContent: "flex-end" }}
					>
						<div>
							<div className="hidden lg:flex lg:justify-end w-full h-full">
								<img
									className="shadow-2xl shadow-indigo-500/90 w-[80%] lg:w-[70%] 2xl:w-full"
									src={BenefitsImg6}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
				</div>

				<div>
					<ParallaxLayer
						offset={0}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Empower your <span className="text-primary">customers</span>{" "}
									with versatile payment choices
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full`}
								>
									Your customers deserve convenience, and our diverse payment
									methods ensure they can shop, pay, and transact in the way
									that suits them best. Make paying a breeze for them by
									offering a variety of payment options like cards, bank
									transfers, and digital wallets.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Learn more</span> <HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={1.0}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Simplify your <span className="text-primary">finances</span>
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full`}
								>
									Free up resources with automated payments and manage payroll,
									subscriptions, and invoices easily, allowing your team to
									focus on what matters most.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Learn more</span> <HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Elevate your customers’ experience with hassle-free{" "}
									<span className="text-primary">payments</span>
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full`}
								>
									With T+1 settlement and a dedicated merchant dashboard
									offering robust reporting, dispute resolution, and analytics
									tools, your customers will enjoy a seamless journey and your
									business will thrive.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Learn more</span> <HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={3}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Unlock actionable{" "}
									<span className="text-primary">insights</span> to fuel your
									growth
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full `}
								>
									Gain priceless insights into your business performance through
									comprehensive reporting and analytics. Your growth journey is
									powered by data. Put your customers' needs and preferences at
									the heart of everything you do with informed decisions and
									fine-tuned strategies.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Learn more</span> <HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={4}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Expand your business with seamless{" "}
									<span className="text-primary">integration</span> magic
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full`}
								>
									Enhance your adaptability and expand your reach by integrating
									our payment system with PoS systems, e-commerce modules, and
									virtual accounts, ensuring your customers' needs are met at
									every step.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Learn more</span> <HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={5}
						speed={0}
						style={{ ...alignCenter, justifyContent: "flex-start" }}
					>
						<div className={`${styles.card} ${styles.parallax}`}>
							<div className="w-full">
								<p
									className={`text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-5xl 2xl:leading-[3.6rem] w-full`}
								>
									Integrate with a <span className="text-primary">smile</span>+
									support
								</p>
								<p
									className={`pt-2 pb-[2.5rem] text-secondary-300 text-base w-full`}
								>
									Our API Documentation is here to simplify your journey,
									providing clear guides. What's more, we're with you every step
									of the way, ensuring a friendly and smooth integration
									process. But that's not all. Redpay's 24/7 support system
									ensures that help is just a message or call away, making your
									integration experience truly exceptional.
								</p>
								<Link to="#">
									<span
										className={`flex flex-row gap-2 items-center text-base text-primary `}
									>
										<span>Explore API Docs</span>{" "}
										<HiOutlineArrowRight size={16} />
									</span>
								</Link>
							</div>
						</div>
					</ParallaxLayer>
				</div>
			</Parallax>
		</section>
	);
};

export default BenefitsNew;
