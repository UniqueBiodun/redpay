import React from "react";
import Prefooter from "../../prefooter/Prefooter";
import PostNavbar from "./post-navbar";
import PaymentFeatures from "../../components/features-headcard/payment-card";
import Marquee from "react-fast-marquee";
import { AiOutlineArrowRight } from "react-icons/ai";
import FeaturesImg1 from "../../../assets/images/features-img1.png";
import PaymentShareImg1 from "../../../assets/images/paymentshare-img-1.png";
import PaymentShare from "../../components/features-headcard/payment-share";
import BusinessGrowth from "../home/business-growth";

const Features: React.FC = () => {
	return (
		<>
			<PostNavbar />
			<PaymentFeatures
				firstDiv={
					<div className="flex flex-col gap-2">
						<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
							Choose your <span className="text-secondary-600">preferred</span>{" "}
							payment method
						</p>
						<p className="text-base font-normal text-secondary-300">
							At RedPay, we understand that businesses are unique, and so are
							their payment needs. That's why we offer a range of payment
							methods, including cards, transfers, bank accounts, digital
							wallets, QR and USSD. Your convenience and security are paramount,
							giving your business the flexibility it deserves. Plus, you can
							seamlessly switch between these methods at any time to adapt to
							your requirements.
						</p>
					</div>
				}
				secondDiv={
					<>
						<Marquee
							pauseOnHover={true}
							speed={80}
						>
							{/* grid grid-cols-4 */}
							<div className="flex flex-row items-center gap-6">
								<div className="ml-6">
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Bank transfers
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Card payments
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Digital wallets
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">QR code</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
							</div>
						</Marquee>
					</>
				}
			/>
			<PaymentShare
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Create and <span className="text-secondary-600">share</span>{" "}
								payment links
							</p>
							<p className="text-base font-normal text-secondary-300">
								At RedPay, we understand that businesses are unique, and so are
								their payment needs. That's why we offer a range of payment
								methods, including cards, transfers, bank accounts, digital
								wallets, QR and USSD. Your convenience and security are
								paramount, giving your business the flexibility it deserves.
								Plus, you can seamlessly switch between these methods at any
								time to adapt to your requirements.
							</p>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</>
				}
				addStyle="bg-tertiary-400"
			/>
			<PaymentShare
				gridOrder="order-last"
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Set up <span className="text-secondary-600">automated</span>{" "}
								recurring payments
							</p>
							<p className="text-base font-normal text-secondary-300">
								Create and share payment linksAt RedPay, we understand that
								businesses are unique, and so are their payment needs. That's
								why we offer a range of payment methods, including cards,
								transfers, bank accounts, digital wallets, QR and USSD. Your
								convenience and security are paramount, giving your business the
								flexibility it deserves. Plus, you can seamlessly switch between
								these methods at any time to adapt to your requirements.
							</p>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</>
				}
				addStyle="bg-[#fff]"
			/>

			<PaymentFeatures
				firstDiv={
					<div className="flex flex-col gap-2">
						<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
							Split payments among{" "}
							<span className="text-secondary-600">multiple</span> recipients or
							accounts
						</p>

						<p className="text-base font-normal text-secondary-300">
							Split payment is paying for an item or services through different
							payment methods. E.g I can decide to use both cash and Card to pay
							for a particular item.
						</p>
					</div>
				}
				secondDiv={
					<>
						<Marquee
							pauseOnHover={true}
							speed={80}
						>
							{/* grid grid-cols-4 */}
							<div className="flex flex-row items-center gap-6">
								<div className="ml-6">
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Bank transfers
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Card payments
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">
											Digital wallets
										</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
								<div>
									<div className="w-full">
										<img
											className="w-full h-full object-cover"
											src={FeaturesImg1}
											alt="features-img-1"
										/>
									</div>
									<div className="flex justify-between items-center border border-[#DFE6EB] rounded-br rounded-bl py-[1.875rem] px-6">
										<p className="text-base text-secondary-400">QR code</p>
										<p>
											<AiOutlineArrowRight
												className="text-primary"
												size={16}
											/>
										</p>
									</div>
								</div>
							</div>
						</Marquee>
					</>
				}
			/>

			<BusinessGrowth />

			<PaymentShare
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Create and <span className="text-secondary-600">share</span>{" "}
								payment links
							</p>
							<p className="text-base font-normal text-secondary-300">
								At RedPay, we understand that businesses are unique, and so are
								their payment needs. That's why we offer a range of payment
								methods, including cards, transfers, bank accounts, digital
								wallets, QR and USSD. Your convenience and security are
								paramount, giving your business the flexibility it deserves.
								Plus, you can seamlessly switch between these methods at any
								time to adapt to your requirements.
							</p>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</>
				}
				addStyle="bg-tertiary-400"
			/>
			<PaymentShare
				gridOrder="order-last"
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Set up <span className="text-secondary-600">automated</span>{" "}
								recurring payments
							</p>
							<p className="text-base font-normal text-secondary-300">
								Create and share payment linksAt RedPay, we understand that
								businesses are unique, and so are their payment needs. That's
								why we offer a range of payment methods, including cards,
								transfers, bank accounts, digital wallets, QR and USSD. Your
								convenience and security are paramount, giving your business the
								flexibility it deserves. Plus, you can seamlessly switch between
								these methods at any time to adapt to your requirements.
							</p>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={PaymentShareImg1}
								alt="paymentshare-img-1"
							/>
						</div>
					</>
				}
				addStyle="bg-[#fff]"
			/>

			<Prefooter />
		</>
	);
};

export default Features;
