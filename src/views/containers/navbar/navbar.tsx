import React from "react";
import RedTechLogo from "../../../assets/brand-logo/redtech-logo.svg";
import DropIcon from "../../../assets/icons/dropdown.png";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { navlinks } from "./navlinks";

const Navbar: React.FC = () => {
	return (
		<>
			<nav className="container h-20 flex items-center justify-center font-lato bg-transparent fixed z-10">
				<div className="flex justify-between w-full">
					<div className="flex items-center">
						<img src={RedTechLogo} alt="redtech-logo" />
					</div>
					<div className="hidden xl:flex w-full  justify-between">
						<div className="text-base mx-10 2xl:mx-36 flex flex-row items-center p-2 gap-6 2xl:gap-10 text-secondary-100 font-medium">
							{/* Menu links here */}
							{navlinks.map((link: any, index: number) => (
								<ul key={index} className="list-none text-center">
									<li>
										<NavLink to={link.url}>
											{link.title === "FAQs" ? (
												<span className="flex items-center">
													{link.title} <img src={DropIcon} />
												</span>
											) : (
												link.title // Render the title only for other links
											)}
										</NavLink>
									</li>
								</ul>
							))}
						</div>
						<div className="flex gap-4">
							<Button className="font-lato normal-case py-[14px] px-8 text-base font-medium bg-transparent text-primary shadow-none outline-0 border border-primary rounded">
								Sign In
							</Button>
							<Button className="font-lato normal-case py-[14px] px-8 text-base font-medium shadow-none outline-0 bg-primary rounded text-secondary-200">
								Sign Up
							</Button>
						</div>
					</div>
					<div className="xl:hidden block">Close Icon</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
