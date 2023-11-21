import React from "react";
import RedPayLogo from "../../../assets/brand-logo/redpay-logo.svg";
import Twitterlogo from "../../../assets/icons/twitter-logo.svg";
import Instagramlogo from "../../../assets/icons/instagram-logo.svg";
import Youtubelogo from "../../../assets/icons/youtube-logo.svg";
import Facebooklogo from "../../../assets/icons/facebook-logo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<>
			<footer className="h-2/4 py-6 md:pt-10 text-secondary-100 text-base font-grotesk">
				<div className="container flex flex-col gap-16 2xl:gap-0 md:flex-row justify-between pb-10">
					<div className="flex flex-col gap-8 md:pl-[6.2rem]">
						<img
							className="w-[142px]"
							src={RedPayLogo}
							alt="redtech-logo"
						/>
						<div className="flex gap-4">
							<Link to="">
								<img
									src={Youtubelogo}
									alt="youtube-logo"
								/>
							</Link>
							<Link to="">
								<img
									src={Twitterlogo}
									alt="twitter-logo"
								/>
							</Link>
							<Link to="">
								<img
									src={Instagramlogo}
									alt="instagram-logo"
								/>
							</Link>
							<Link to="">
								<img
									src={Facebooklogo}
									alt="facebook-logo"
								/>
							</Link>
						</div>
					</div>
					<div className="flex flex-col md:pr-[6.2rem]">
						<div>
							<p>A product of Redtech Limited, a member of Heirs Holdings</p>
						</div>
						<div className="flex flex-row gap-[7.5rem] flex-wrap pt-14 pb-20">
							<div className="flex flex-col gap-6">
								<p className="text-base font-semibold">About</p>
								<ul className="flex flex-col gap-4">
									<li>Company</li>
									<li>Features</li>
									<li>Pricing</li>
									<li>Developers</li>
									<li>Redtech</li>
								</ul>
							</div>
							<div className="flex flex-col gap-6">
								<p className="text-base font-semibold">Legal</p>
								<ul className="flex flex-col gap-4">
									<li>Warranty policy</li>
									<li>Corporate policy</li>
								</ul>
							</div>
							<div className="flex flex-col gap-6">
								<p className="text-base font-semibold">Support</p>
								<ul className="flex flex-col gap-4">
									<li className="hover:text-primary">
										<Link to="/contact-us">Contact Us</Link>
									</li>
									<li className="hover:text-primary">
										<Link to="/faqs">FAQs</Link>
									</li>
									<li>API Documentation</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col gap-6">
							<p className="text-base font-semibold">Connect with us</p>
							<ul className="flex flex-col gap-4">
								<li className="w-[50%]">
									22B, Idowu Taylor Street, Victoria Island, Lagos, Nigeria.
								</li>
								<li>Phone: +234-913-933-7298</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-center border-t border-tertiary-300 text-sm sm:text-base font-normal pt-10">
					(c) 2023 Redtech Ltd. All rights reserved
				</div>
			</footer>
		</>
	);
};

export default Footer;
