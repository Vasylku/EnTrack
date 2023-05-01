import React from "react";
import { useNavigate } from "react-router-dom";
import SubscriptionForm from "../news_media/SubscriptionForm";
import photo from "../../images/photo.jpg";
const Footer = () => {
	const navigate = useNavigate();
	const navigateToTop = (route) => {
		navigate(route);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<div className="w-full print:hidden flex flex-col md:justify-center justify-between items-center  p-4 gradient-bg-footer">
			<div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
				<div className="flex flex-[0.5] justify-center items-center">
					<img
						src={photo}
						alt="logo"
						className="w-32 rounded-full opacity-80 bg-transparent hover:opacity-50 cursor-pointer"
					/>
				</div>
				<div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
					<p
						className="text-white text-base text-center mx-2 cursor-pointer  hover:text-yellow-600 "
						onClick={() => navigateToTop("/news")}
					>
						News & Media
					</p>
					<p
						className="text-white text-base text-center mx-2 cursor-pointer  hover:text-yellow-600 "
						onClick={() => navigateToTop("/baggage")}
					>
						Baggage Policy & Service
					</p>
					<p
						className="text-white text-base text-center mx-2 cursor-pointer   hover:text-yellow-600"
						onClick={() => navigateToTop("/experience")}
					>
						Unique Experience
					</p>
				</div>
			</div>

			<div className="flex justify-center items-center flex-col mt-5">
				<SubscriptionForm />
				<p className="text-white text-sm text-center font-medium mt-2">
					www.entrack.com
				</p>
			</div>
			<div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

			<div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
				<p className="text-white text-left text-xs">entrack@gmail.com</p>
				<p className="text-white text-right text-xs">All rights reserved</p>
			</div>
		</div>
	);
};
export default Footer;
