import React from "react";
import Prefooter from "../../prefooter/Prefooter";
import ContactDetails from "./contact-details";

const ContactSupport: React.FC = () => {
	return (
		<>
			<section className="mt-20 w-full bg-[#000] bg-center bg-cover bg-sectionBg bg-no-repeat text-secondary-100 text-base font-grotesk">
				<div className="container flex flex-col justify-between items-center py-14 md:py-[6rem] lg:py-[6.875rem]">
					<p className="text-white lg:leading-snug font-grotesk text-3xl lg:text-5xl font-medium lg:font-semibold sm:w-[70%] md:w-[60%] lg:w-[55%] 2xl:w-[40%] text-center">
						Get in contact with our team
					</p>
				</div>
			</section>
			<ContactDetails />
			<Prefooter />
		</>
	);
};

export default ContactSupport;
