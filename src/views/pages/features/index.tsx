import React from "react";
import Prefooter from "../../prefooter/Prefooter";
import PostNavbar from "./post-navbar";
import PaymentFeatures from "../../components/features-headcard/payment-card";
import Marquee from "react-fast-marquee";
import { AiOutlineArrowRight } from "react-icons/ai";
import BankTransfer from "../../../assets/images/bank-transfer.png";
import CardPayment from "../../../assets/images/card-payment.png";
import DigitalWallet from "../../../assets/images/digital-wallet.png";
import QRCODE from "../../../assets/images/qr-code.png";
import RecurringPay1 from "../../../assets/images/recurring-payment-1.png";
import RecurringPay2 from "../../../assets/images/recurring-payment-2.png";
import CreateShare1 from "../../../assets/images/create-share-1.png";
import CreateShare2 from "../../../assets/images/create-share-2.png";
import PaymentShareImg1 from "../../../assets/images/paymentshare-img-1.png";
import MultiplePaymentImage from "../../../assets/images/multiple-payment.png";
import PaymentShare from "../../components/features-headcard/payment-share";
import { Link } from "react-router-dom";
import GetStartedButton from "../../components/global/button";
import MultiplePayment from "../../components/features-headcard/multiple-payment";

const Features: React.FC = () => {
	const signUpUrl = import.meta.env.VITE_APP_MERCHANT_SIGNUP;

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

						<div className="pt-4">
							<Link to={signUpUrl}>
								<GetStartedButton />
							</Link>
						</div>
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
											src={BankTransfer}
											alt="bank-transfer"
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
											src={CardPayment}
											alt="card-payment"
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
											src={DigitalWallet}
											alt="digital-wallet"
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
											src={QRCODE}
											alt="qr-code"
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
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={RecurringPay2}
								alt="recurring-payment-2"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={RecurringPay1}
								alt="recurring-payment-1"
							/>
						</div>
					</>
				}
				addStyle="bg-tertiary-400"
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
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={CreateShare1}
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
								src={CreateShare2}
								alt="paymentshare-img-2"
							/>
						</div>
					</>
				}
				addStyle="bg-[fff]"
			/>

			<MultiplePayment
				emptyDiv={<div></div>}
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Pay with <span className="text-secondary-600">multiple</span>{" "}
								payment methods with split tender (coming soon)
							</p>

							<p className="text-base font-normal text-secondary-300">
								RedPay allows you to pay with multiple payment methods with
								split tender. You can use this feature to pay for a purchase
								with more than one payment method, such as cash and card. You
								can choose the amount or percentage of each payment method and
								add a memo or a reference number for each transaction. RedPay
								will automatically process and record each payment method and
								send you a receipt.
							</p>
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={MultiplePaymentImage}
								alt="multiple-payment"
							/>
						</div>
					</>
				}
				addStyle="bg-[#fff]"
			/>

			<PaymentShare
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Make Single or <span className="text-secondary-600">Bulk</span>{" "}
								Payouts with Ease
							</p>

							<p className="text-base font-normal text-secondary-300">
								RedPay streamlines single or bulk payouts. Whether it's employee
								salaries, customer rewards, or supplier transfers, you can
								handle it all. Upload a CSV file with payout details or enter
								them manually – the choice is yours. RedPay securely stores this
								information for your convenience.
							</p>
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={CreateShare1}
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
								src={CreateShare2}
								alt="paymentshare-img-2"
							/>
						</div>
					</>
				}
				addStyle="bg-[fff]"
			/>

			<PaymentShare
				gridOrder="order-last"
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Offer a superior{" "}
								<span className="text-secondary-600">checkout</span> experience
								to your customer
							</p>

							<p className="text-base font-normal text-secondary-300">
								With RedPay, your business can provide customers with a superior
								checkout experience. Customize your checkout page to match your
								brand identity, complete with your logo, colors, and fonts. Add
								fields, buttons, and options that align with your business
								requirements. Plus, customers can pay with their preferred
								method securely, thanks to our advanced encryption and fraud
								prevention and detection technologies.
							</p>
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
						<div className="">
							<img
								className="w-full h-full object-cover"
								src={RecurringPay2}
								alt="recurring-payment-2"
							/>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={RecurringPay1}
								alt="recurring-payment-1"
							/>
						</div>
					</>
				}
				addStyle="bg-tertiary-400"
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

			<MultiplePayment
				firstDiv={
					<div className="flex flex-col gap-10">
						<div>
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Receive your payments faster with{" "}
								<span className="text-secondary-600">T+1</span> settlements
							</p>

							<p className="text-base font-normal text-secondary-300">
								How to use: To enable T+1 settlements, go to your RedPay
								dashboard and click on Settings. Then, select the Settlement
								option and choose T+1 as your settlement cycle. You can also
								view your settlement history and status from your dashboard.
							</p>
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
					</div>
				}
				secondDiv={
					<>
						<div className="w-full">
							<img
								className="w-full h-full object-cover"
								src={MultiplePaymentImage}
								alt="multiple-payment"
							/>
						</div>
					</>
				}
				addStyle="bg-[#fff]"
			/>

			<PaymentFeatures
				firstDiv={
					<>
						<div></div>
						<div className="flex flex-col">
							<p className="text-3xl lg:text-[2.5rem] lg:leading-[3.25rem] font-semibold">
								Split payments among{" "}
								<span className="text-secondary-600">multiple</span> recipients
								or accounts
							</p>

							<p className="text-base font-normal text-secondary-300">
								Split payment is paying for an item or services through
								different payment methods. E.g I can decide to use both cash and
								Card to pay for a particular item.
							</p>
							<div className="pt-4">
								<Link to={signUpUrl}>
									<GetStartedButton />
								</Link>
							</div>
						</div>
					</>
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
											src={BankTransfer}
											alt="bank-transfer"
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
											src={CardPayment}
											alt="card-payment"
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
											src={DigitalWallet}
											alt="digital-wallet"
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
											src={QRCODE}
											alt="qr-code"
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

			<Prefooter />
		</>
	);
};

export default Features;
