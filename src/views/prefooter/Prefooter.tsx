import React from "react";
import { Button } from "@material-tailwind/react";
import PrefooterImage from "../../assets/images/prefooter-image.png";

const Prefooter: React.FC = () => {
	return (
		<>
			<footer className="container bg-[#AD0E0E] bg-center bg-cover bg-prefooter bg-no-repeat h-2/4 text-secondary-100 text-base font-grotesk">
				<div className="flex flex-col lg:flex-row justify-between items-center gap-8">
					<div className="w-full lg:py-16">
						<p className="py-8 text-3xl md:text-5xl text-secondary-200 font-medium lg:w-[120%] w-full">
							Ready to begin your journey to seamless payment?
						</p>
						<div>
							<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-secondary-200 text-[#AD0E0E] rounded hover:bg-opacity-80">
								Create an account
							</Button>
						</div>
					</div>
					<div className="w-full h-full pt-16 pr-16 flex justify-end items-end">
						<img
							className="w-full md:w-[70%]"
							src={PrefooterImage}
							alt="hero-image-1"
						/>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Prefooter;
