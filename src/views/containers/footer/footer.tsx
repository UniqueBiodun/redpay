import React from "react";
import RedPayLogo from "../../../assets/brand-logo/redpay-logo.svg";
import Twitterlogo from "../../../assets/icons/twitter-logo.svg";
import Instagramlogo from "../../../assets/icons/instagram-logo.svg";
import Youtubelogo from "../../../assets/icons/youtube-logo.svg";
import Facebooklogo from "../../../assets/icons/facebook-logo.svg";
import PhoneIcon from "../../../assets/icons/phone-icon.svg";
import ChatIcon from "../../../assets/icons/chat-icon.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<>
			<footer className="container h-2/4 py-6 md:py-[60px] text-secondary-100 text-base font-lato">
				<div className="flex flex-col gap-8 md:flex-row md:gap-[46px] lg:gap-[92px] justify-between">
					<div className="flex flex-col gap-8 w-full md:w-[375px]">
						<img className="w-[142px]" src={RedPayLogo} alt="redtech-logo" />
						<p className="text-base font-normal">
							Redtech is a payment gateway that focuses on shaping the backbone
							of the nation by beginning with her citizens, thereby launching
							our products that are ergonomic and at the same time eco-friendly.
						</p>
						<div className="flex gap-7">
							<Link to="">
								<img src={Youtubelogo} alt="youtube-logo" />
							</Link>
							<Link to="">
								<img src={Twitterlogo} alt="twitter-logo" />
							</Link>
							<Link to="">
								<img src={Instagramlogo} alt="instagram-logo" />
							</Link>
							<Link to="">
								<img src={Facebooklogo} alt="facebook-logo" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<p className="text-base font-semibold">About</p>
						<ul className="flex flex-col gap-4">
							<li>Company</li>
							<li>Press</li>
							<li>Careers</li>
							<li>Testimonials</li>
						</ul>
					</div>
					<div className="flex flex-col gap-6">
						<p className="text-base font-semibold">Policy</p>
						<ul className="flex flex-col gap-4">
							<li>Warranty policy</li>
							<li>Corporate policy</li>
							<li>Data protection </li>
							<li>Terms and conditions</li>
						</ul>
					</div>
					<div className="flex flex-col gap-6">
						<p className="text-base font-semibold">Support</p>
						<ul className="flex flex-col gap-4">
							<li>5, Danjuma street, Ikeja GRA, Lagos, Nigeria.</li>
							<li>Mondays-Fridays: 8:00am to 5:00pm</li>
							<li>
								<span className="flex items-center gap-2">
									<img src={PhoneIcon} alt="phone-icon" />
									<span className="underline">0908 720 1967</span>
								</span>
							</li>
							<li>
								<span className="flex items-center gap-2">
									<img src={ChatIcon} alt="chat-icon" />
									<span className="underline">0908 720 1966</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
