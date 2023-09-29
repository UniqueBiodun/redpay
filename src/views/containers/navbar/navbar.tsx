import { useState, useEffect } from "react";
import { Navbar, Button, Collapse } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import RedTechLogo from "../../../assets/brand-logo/redpay-logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navlinks } from "./navlinks";

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);

	const [color, setColor] = useState(false);

	const changeColor = () => {
		window.scrollY >= 10 ? setColor(true) : setColor(false);
	};

	window.addEventListener("scroll", changeColor);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<div className="text-base flex flex-row items-center p-2 lg:gap-4 2xl:gap-10 text-secondary-100 font-medium">
			{/* Menu links here */}
			{navlinks.map((link: any, index: number) => (
				<ul key={index} className="list-none text-center">
					<li>
						<NavLink className="hover:text-primary" to={link.url}>
							{link.title === "FAQs" ? (
								<span className="flex items-center">
									{link.title} <FiChevronDown />
								</span>
							) : link.title === "Resources" ? (
								<span className="flex items-center">
									{link.title} <FiChevronDown />
								</span>
							) : (
								link.title // Render the title only for other links
							)}
						</NavLink>
					</li>
				</ul>
			))}
		</div>
	);

	return (
		<Navbar
			className={`z-20 h-20 py-3 px-0 mx-0 fixed font-grotesk rounded-none w-full max-w-none border-0 shadow-none backdrop-filter-none ${
				color ? "shadow-sm" : "bg-transparent"
			}
            `}
		>
			<div className="container flex items-center justify-between">
				<div>
					<Link to="/">
						<img src={RedTechLogo} alt="logo" />
					</Link>
				</div>

				<div className="hidden lg:block">{navList}</div>

				<div className="hidden lg:flex items-center gap-4">
					<Button className="font-lato normal-case lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium bg-transparent text-primary shadow-none outline-0 border border-primary rounded">
						Sign In
					</Button>
					<Button className="font-lato normal-case lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium shadow-none outline-0 bg-primary border border-primary rounded text-secondary-200">
						Sign Up
					</Button>
				</div>
				<div
					className="flex justify-center text-primary items-center text-3xl hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
				</div>
			</div>
			<Collapse open={openNav}>
				<div className="bg-hero bg-no-repeat bg-cover bg-center mx-auto h-[100vh] p-4">
					<div className="pt-16">{navList}</div>
					<div className="flex flex-col gap-16 pt-16">
						<div>
							<Link to="">
								<img
									className="cursor-pointer"
									src={RedTechLogo}
									alt="android-logo"
								/>
							</Link>
						</div>
						<div>
							<Link to="">
								<img
									className="cursor-pointer"
									src={RedTechLogo}
									alt="android-logo"
								/>
							</Link>
						</div>
					</div>
				</div>
			</Collapse>
		</Navbar>
	);
};

export default NavBar;
