import React from "react";
import FaqBanner from "../../../assets/images/faq-banner.png";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FAQS } from "../../../data/faqs";

function Icon({ id, open }: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}

const FaqComponent: React.FC = () => {
	const [open, setOpen] = React.useState(1);

	const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

	return (
		<>
			<section className="w-full py-6 lg:py-[3.75rem] bg-secondary-200 text-secondary-100 font-grotesk">
				<div className="container">
					<div className="lg:px-[8rem] xl:px-[16.1875rem]">
						<div>
							<img
								className="object-cover"
								src={FaqBanner}
								alt="faq-banner"
							/>
						</div>
						<div className="pt-6 pb-10">
							{FAQS.map((faq, i) => (
								<>
									<div>
										<Accordion
											key={i}
											open={open === faq.idx}
											className="mb-2 rounded border bg-secondary-500 border-tertiary-100 px-6"
											icon={
												<Icon
													id={faq.idx}
													open={open}
												/>
											}
										>
											<AccordionHeader
												onClick={() => handleOpen(faq.idx)}
												className={`border-b-0 font-grotesk font-normal text-base ${
													open === faq.idx
														? "text-primary hover:!text-primary"
														: "text-secondary-100"
												}`}
											>
												{faq.question}
											</AccordionHeader>
											<AccordionBody className="pt-0 text-base font-normal font-grotesk">
												{faq.answer}
											</AccordionBody>
										</Accordion>
									</div>
								</>
							))}
						</div>
						<div className="flex flex-col justify-center gap-4 items-center">
							<p className="text-base text-center font-medium text-secondary-100">
								Can’t find the answer you are looking for?
							</p>
							<Link to="">
								<Button
									variant="text"
									className="font-grotesk text-base font-medium flex items-center gap-2 capitalize text-secondary-200 bg-primary rounded hover:bg-secondary-300"
								>
									Contact us
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FaqComponent;
