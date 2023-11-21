import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { DETAILS } from "../../../data/contact-details";

const ContactDetails: React.FC = () => {
	return (
		<>
			<section className="w-full container py-10 bg-secondary-200 text-secondary-100 font-grotesk">
				<div className="flex flex-col gap-6">
					<div className="2xl:w-[45%] xl:w-[55%] lg:w-[65%] md:w-[60%] sm:w-[70%]">
						<p className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold lg:leading-snug">
							Get in touch with our <span className="text-primary">team</span>{" "}
							for product questions
						</p>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{DETAILS.map((detail, i) => (
							<>
								<div
									key={i}
									className="bg-tertiary-500 rounded border border-tertiary-100 py-6 px-4"
								>
									<img
										src={detail.image}
										alt={detail.alt}
									/>
									<div className="pt-4 pb-6">
										<h3 className="pb-2 font-medium text-tertiary-600">
											{detail.title}
										</h3>
										<p className="text-secondary-300">{detail.para}</p>
									</div>
									<div>
										<Link to={detail.link}>
											<Button
												variant="outlined"
												className="font-grotesk text-base font-normal flex items-center gap-2 capitalize text-primary border border-primary rounded-lg hover:bg-tertiary-400 py-2 px-4"
											>
												{detail.button}{" "}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth={1.5}
													stroke="currentColor"
													className="h-5 w-5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
													/>
												</svg>
											</Button>
										</Link>
									</div>
								</div>
							</>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactDetails;
