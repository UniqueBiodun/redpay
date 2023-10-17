import React from "react";
import { Button } from "@material-tailwind/react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import HeroImage1 from "../../assets/images/hero-image-1.png";
import HeroImage2 from "../../assets/images/hero-image-2.png";
import HeroImage3 from "../../assets/images/hero-image-3.png";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const HeroSection: React.FC = () => {
	const heroImages = [HeroImage1, HeroImage2, HeroImage3];

	const createAccount = process.env.REACT_APP_MERCHANT_SIGNUP as string;

	return (
		<section className="relative flex items-center min-h-screen font-grotesk bg-hero bg-no-repeat lg:pt-8 bg-cover border-b-2 border-b-[#F2F4F6]">
			<div className="container grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-8 gap-16">
				<div className="w-full h-full pt-28 lg:pt-0 flex items-center">
					<div>
						<p className="text-secondary-100 font-medium text-[2rem] md:text-4xl md:leading-[50px] 2xl:text-[4rem] 2xl:leading-[80px] w-full">
							<span className="text-primary">
								<Typewriter
									words={["Streamline", "Optimize", "Simplify"]}
									typeSpeed={150}
									deleteSpeed={120}
									delaySpeed={1000}
									loop={0}
								/>
								<Cursor cursorBlinking={true} />
							</span>{" "}
							your
							<br />
							business payments
						</p>
						<p className="pt-4 pb-[56px] text-secondary-300 text-base">
							Redpay empowers businesses in Africa to effortlessly manage
							payments, ensuring you get paid securely from across the globe.
						</p>
						<div>
							<Link to={createAccount}>
								<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-primary rounded text-secondary-200 hover:bg-opacity-80">
									Create an account
								</Button>
							</Link>
							<Link to="#">
								<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-transparent text-primary hover:text-opacity-70 hover:bg-transparent hover:shadow-none">
									Contact Sales
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full flex lg:justify-end">
					<div className="w-[90%] h-full bg-heroRight bg-no-repeat bg-contain">
						<div className="p-5 slide-container">
							<Fade
								arrows={false}
								easing="ease-in"
								transitionDuration={500}
								duration={2000}
								cssClass="w-full"
							>
								<div className="each-fade">
									<img src={heroImages[0]} />
								</div>
								<div className="each-fade">
									<img src={heroImages[1]} />
								</div>
								<div className="each-fade">
									<img src={heroImages[2]} />
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
