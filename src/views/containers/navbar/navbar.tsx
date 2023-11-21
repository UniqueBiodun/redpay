import React, { useState, useEffect } from "react";
import {
	Navbar,
	Button,
	MobileNav,
	MenuItem,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import RedTechLogo from "../../../assets/brand-logo/redpay-logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navlinks, resources } from "./navlinks";

function Resources() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const renderItems = resources.map(({ title, link }) => (
		<NavLink
			to={link}
			key={title}
		>
			<MenuItem>
				<Typography className="mb-1 font-grotesk text-base text-secondary-100 hover:text-primary">
					{title}
				</Typography>
			</MenuItem>
		</NavLink>
	));

	return (
		<React.Fragment>
			<Menu
				allowHover
				open={isMenuOpen}
				handler={setIsMenuOpen}
			>
				<MenuHandler>
					<Typography
						as="h6"
						variant="small"
						className="font-normal"
					>
						<MenuItem className="hidden hover:text-primary outline-none border-0 text-base font-grotesk text-secondary-100 items-center gap-2 font-medium lg:flex lg:rounded-full">
							Resources{" "}
							<FiChevronDown
								className={`text-lg transition-transform ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</MenuItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[12rem] lg:grid">
					<ul className="col-span-4 flex w-full flex-col gap-1 outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<MenuItem className="flex px-0 pt-10 items-center gap-2 font-medium text-secondary-100 lg:hidden">
				Resources{" "}
			</MenuItem>
			<ul className="ml-4 flex w-full flex-col gap-1 lg:hidden">
				{renderItems}
			</ul>
		</React.Fragment>
	);
}

const NavBar = () => {
	const [openNav, setOpenNav] = useState(false);

	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (location.pathname === "/" && window.scrollY >= 10) {
			setColor(true);
		} else if (location.pathname === "/features") {
			setColor(true);
		} else if (location.pathname === "/faqs") {
			setColor(true);
		} else if (location.pathname === "/support") {
			setColor(true);
		} else if (location.pathname === "/contact-us") {
			setColor(true);
		} else if (location.pathname === "/resources") {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	const signUpUrl = import.meta.env.VITE_APP_MERCHANT_SIGNUP;
	const signInUrl = import.meta.env.VITE_APP_MERCHANT_SIGNIN;

	window.addEventListener("scroll", changeColor);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<div className="text-base flex flex-col lg:flex-row lg:items-center px-[5.25rem] lg:py-0 pb-10 lg:px-0 lg:p-2 lg:gap-4 2xl:gap-10 text-secondary-100 font-medium">
			{/* Menu links here */}
			{navlinks.map((link: any, index: number) => (
				<ul
					key={index}
					className="list-none text-left lg:text-center"
				>
					<li className="pt-10 md:pt-0">
						<NavLink
							className="hover:text-primary"
							to={link.url}
							onClick={() => setOpenNav(!openNav)}
						>
							{link.title}
						</NavLink>
					</li>
				</ul>
			))}
			<Resources />
		</div>
	);

	return (
		<Navbar
			className={`z-10 h-20 py-3 px-0 mx-0 fixed top-0 left-0 right-0 font-grotesk rounded-none w-full max-w-none border-0 shadow-none  ${
				color ? "shadow-sm !bg-white backdrop-filter-none" : "bg-transparent"
			}
            `}
		>
			<div className="container flex items-center justify-between">
				<div>
					<Link to="/">
						<img
							src={RedTechLogo}
							alt="logo"
						/>
					</Link>
				</div>

				<div className="hidden lg:inline-block">{navList}</div>

				<div className="hidden lg:flex items-center gap-4">
					<Link to={signInUrl}>
						<Button className="font-lato normal-case lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium bg-transparent text-primary shadow-none outline-0 border border-primary rounded">
							Sign In
						</Button>
					</Link>
					<Link to={signUpUrl}>
						<Button className="font-lato normal-case lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium shadow-none outline-0 bg-primary border border-primary rounded text-secondary-200">
							Sign Up
						</Button>
					</Link>
				</div>

				<div
					className="flex justify-center text-primary items-center text-3xl hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
				</div>
			</div>

			<MobileNav
				open={openNav}
				className={`h-screen bg-[#fff] mx-auto p-4`}
			>
				{navList}
				<div className="flex flex-col gap-10 px-[5.25rem] pb-60">
					<Link to={signInUrl}>
						<Button className="normal-case font-grotesk lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium bg-transparent text-primary shadow-none outline-0 border border-primary rounded">
							Sign In
						</Button>
					</Link>
					<Link to={signUpUrl}>
						<Button className="font-grotesk normal-case lg:py-2 lg:px-3 2xl:py-[14px] 2xl:px-8 text-base font-medium shadow-none outline-0 bg-primary border border-primary rounded text-secondary-200">
							Sign Up
						</Button>
					</Link>
				</div>
			</MobileNav>
		</Navbar>
	);
};

export default NavBar;
