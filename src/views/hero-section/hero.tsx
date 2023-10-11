import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import HeroImage1 from "../../assets/images/hero-image-1.png";
import HeroImage2 from "../../assets/images/hero-image-2.png";
import HeroImage3 from "../../assets/images/hero-image-3.png";
import { Carousel } from "@material-tailwind/react";

const HeroSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative flex items-center min-h-screen font-grotesk bg-hero bg-no-repeat bg-cover border-b-2 border-b-[#F2F4F6]">
			<div className="container flex flex-col lg:flex-row justify-between items-center gap-8 py-20">
				<div className="w-full h-full">
					<p className="text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-[4rem] 2xl:leading-[80px] w-full">
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
						<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-primary rounded text-secondary-200 hover:bg-opacity-80">
							Create an account
						</Button>
						<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-transparent text-primary hover:text-opacity-70 hover:bg-transparent hover:shadow-none">
							Contact Sales
						</Button>
					</div>
				</div>
				<div className="w-full flex lg:justify-end">
					<div className="w-[90%] h-full bg-heroRight bg-no-repeat bg-contain p-5">
						<div className="carousel-container">
							<Carousel
								className="rounded-xl"
								navigation={() => <div className="hidden"></div>}
								prevArrow={() => <div className="hidden"></div>}
								nextArrow={() => <div className="hidden"></div>}
								autoplay
								loop
								autoplayDelay={3000}
								translate="no"
							>
								<img
									src={HeroImage1}
									alt="slide 1"
									className={`rounded-xl transition-opacity duration-1000 ${
										activeIndex === 0 ? "opacity-100" : "opacity-0"
									}`}
								/>
								<img
									src={HeroImage2}
									alt="slide 2"
									className={`rounded-xl transition-opacity duration-1000 ${
										activeIndex === 1 ? "opacity-100" : "opacity-0"
									}`}
								/>
								<img
									src={HeroImage3}
									alt="slide 3"
									className={`rounded-xl transition-opacity duration-1000 ${
										activeIndex === 2 ? "opacity-100" : "opacity-0"
									}`}
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
