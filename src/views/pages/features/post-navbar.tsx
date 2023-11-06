import React from "react";

const PostNavbar: React.FC = () => {
	return (
		<>
			<section className="mt-20 w-full bg-[#000] bg-center bg-cover bg-sectionBg bg-no-repeat text-secondary-100 text-base font-grotesk">
				<div className="container flex flex-col justify-between items-center py-14 md:py-[6rem] lg:py-[6.875rem]">
					<p className="text-white font-grotesk text-3xl lg:text-5xl font-medium lg:font-semibold lg:w-[70%] text-center">
						Explore features tailored to benefit your business
					</p>
				</div>
			</section>
		</>
	);
};

export default PostNavbar;
