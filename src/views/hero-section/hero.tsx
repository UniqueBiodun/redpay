import React, { useEffect, useState } from "react";
import HeroImage1 from "../../assets/images/hero-image-1.png";
import HeroImage2 from "../../assets/images/hero-image-2.png";
import { Button } from "@material-tailwind/react";
import { Typewriter, Cursor } from "react-simple-typewriter";

const HeroSection: React.FC = () => {
	const [activeImage, setActiveImage] = useState(1);

	const imageStyle1 = {
		transition: "opacity 2s ease-in-out",
		opacity: activeImage === 1 ? 1 : 0,
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveImage((prevImage) => (prevImage === 1 ? 2 : 1));
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<section className="relative min-h-[calc(100vh-80px)] font-grotesk bg-hero bg-no-repeat bg-cover pt-20">
			<div className="container flex flex-col lg:flex-row justify-between items-center gap-8">
				<div className="w-full h-full">
					<p className="text-secondary-100 font-medium text-3xl md:text-4xl md:leading-[50px] 2xl:text-6xl 2xl:leading-[80px] w-full md:w-[120%]">
						Experience the{" "}
						<span className="text-primary">
							<Typewriter
								words={["future", "ease", "beauty"]}
								typeSpeed={150}
								deleteSpeed={120}
								delaySpeed={1000}
								loop={0}
							/>
							<Cursor cursorBlinking={true} />
						</span>
						<br />
						of payments with us!
					</p>
					<p className="pt-4 pb-[56px] text-secondary-300 text-base">
						Integrate our payment gateway effortlessly into your existing
						systems and platforms for a smooth customer relationship. Integrate
						our payment gateway effortlessly into your existing systems and
						platforms for a smooth customer relationship.
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
				<div className="w-full h-full">
					<div className="max-w-full">
						<img
							style={{
								...imageStyle1,
							}}
							className="w-full h-full object-cover"
							src={activeImage === 1 ? HeroImage1 : HeroImage1}
							alt="hero-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
