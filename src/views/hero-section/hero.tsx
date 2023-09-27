import React from "react";
import HeroImage1 from "../../assets/images/hero-image-1.png";
import { Button } from "@material-tailwind/react";
import Typed from "react-typed";

const HeroSection: React.FC = () => {
	return (
		<section className="relative min-h-[calc(100vh-80px)] container font-lato bg-hero bg-no-repeat bg-cover pt-20">
			<div className="flex flex-row justify-between items-center gap-8">
				<div className="w-full">
					<p className="text-secondary-100 font-medium text-6xl leading-[80px] w-full">
						Experience the{" "}
						<Typed
							strings={["future", "ease", "beauty"]}
							typeSpeed={120}
							backSpeed={110}
							loop
							className="text-primary"
						/>
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
						<Button className="font-lato normal-case text-base font-medium shadow-none outline-0 bg-primary rounded text-secondary-200 hover:bg-opacity-80">
							Create an account
						</Button>
						<Button className="font-lato normal-case text-base font-medium shadow-none outline-0 bg-transparent text-primary hover:text-opacity-70 hover:bg-transparent hover:shadow-none">
							Contact Sales
						</Button>
					</div>
				</div>
				<div className="w-full h-full">
					<img className="w-full h-full" src={HeroImage1} alt="hero-image-1" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
