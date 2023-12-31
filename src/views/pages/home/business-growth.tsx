import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BusinessGrowth: React.FC = () => {
	const signUpUrl = import.meta.env.VITE_APP_MERCHANT_SIGNUP;

	return (
		<>
			<section className="w-full bg-[#000] bg-sectionBg bg-center bg-cover bg-no-repeat h-2/4 text-secondary-100 text-base font-grotesk">
				<div className="container flex justify-between items-center">
					<div className="w-full text-left md:text-center py-10 md:py-[6rem] md:px-[4rem] lg:px-[6rem] 2xl:px-[20rem] flex flex-col gap-8">
						<p className="text-3xl md:text-5xl text-secondary-200 font-medium w-full">
							For those who crave business growth 
						</p>
						<p className="text-secondary-200 text-base">
							Redpay is more than just a payment platform; we're your trusted
							partner in financial success. With our industry-leading expertise
							and commitment to innovation, we're redefining B2B payments for
							the modern era. Join a growing community of businesses who have
							embraced the future of seamless & secure transactions.
						</p>
						<div>
							<Link to={signUpUrl}>
								<Button className="font-grotesk normal-case text-base font-medium shadow-none outline-0 bg-secondary-200 text-primary rounded hover:bg-opacity-80">
									Create an account
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BusinessGrowth;
