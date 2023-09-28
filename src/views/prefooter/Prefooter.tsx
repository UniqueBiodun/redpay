import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@material-tailwind/react";
import PrefooterImage from "../../assets/images/prefooter-image.png";

const Prefooter: React.FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.2, // Percentage of element visible to trigger
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: "0",
				opacity: 1,
				transition: {
					type: "smooth",
					duration: 0.5,
				},
			});
		}
		if (!inView) {
			animation.start({
				y: "30vh",
				opacity: 0,
				transition: {
					type: "tween",
					duration: 3,
				},
			});
		}
	}, [inView]);

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
						<motion.img
							ref={ref}
							initial={{ y: "30vh", opacity: 0 }}
							animate={animation}
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
