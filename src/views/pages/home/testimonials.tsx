import React, { useRef, useState } from "react";
import { IoChevronForwardCircle, IoChevronBackCircle } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialCardProps {
	testimony?: string;
	fullName?: string;
	designation?: string;
	width?: string;
	addStyles?: string;
	isActive?: boolean;
}

const Testimonials: React.FC = () => {
	const [activeCard, setActiveCard] = useState(0);
	const sliderRef = useRef<Slider | null>(null);

	// Testimonial Card Component
	const TestimonialCard: React.FC<TestimonialCardProps> = ({
		testimony,
		fullName,
		designation,
		width,
		addStyles,
		isActive,
	}) => {
		const cardStyles = {
			transform: isActive ? "scale(1)" : "scale(0.9)",
		};

		return (
			<>
				<div
					className={`w-${width} ${addStyles} ${
						isActive && "shadow-2xl"
					} px-6 py-6 rounded border border-tertiary-100 border-t-8 border-t-primary flex items-center text-secondary-300 text-base font-normal`}
					style={cardStyles}
				>
					<div
						className={`flex flex-col justify-between gap-6 bg-quote bg-no-repeat bg-right-bottom`}
					>
						<p>{testimony}</p>
						<p className="text-secondary-100 font-medium">
							<span>
								{fullName} <br />{" "}
								<span className="text-secondary-300 font-medium text-xs">
									{designation}
								</span>
							</span>
						</p>
					</div>
				</div>
			</>
		);
	};

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: true,
		arrows: false,
		centerMode: true,
		centerPadding: "315px",
		className: "mx-16",
		focusOnSelect: true,
		useCSS: true,
		useTransform: true,
		swipe: true,
		beforeChange: (currentSlide: number, nextSlide: number) => {
			setActiveCard(nextSlide);
		},
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	return (
		<>
			<section className="py-10 bg-secondary-500 text-base font-grotesk">
				<div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 md:px-8">
					<div className="text-secondary-100 text-center text-2xl md:text-5xl font-semibold">
						<p>Testimonials from</p>
						<p>
							satisfied <span className="text-secondary-600">clients</span> of
							RedPay
						</p>
					</div>
					<div className="overflow-x-auto">
						<Slider {...settings} ref={sliderRef}>
							{[0, 1, 2].map((index) => (
								<TestimonialCard
									key={index}
									testimony="I am quite impressed by the speed, security and thorough integration I have been able to experience with RedPay payment gateway, I have little to no disputes to settle with my customers. I must say I am stuck with RedPay for a long time! Definitely 5 star for me!"
									fullName="Prosper Chinedu"
									designation="Business manager, Lagos"
									width="full"
									isActive={activeCard === index}
								/>
							))}
						</Slider>
						<div className="w-[20%] mx-auto sm:w-[10%] flex justify-between items-center mt-4">
							<div className="text-primary cursor-pointer" onClick={prevSlide}>
								<IoChevronBackCircle size={40} />
							</div>
							<div className="text-primary cursor-pointer" onClick={nextSlide}>
								<IoChevronForwardCircle size={40} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
