import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
const BookingDetails = ({ bookingData }) => {
	const navigate = useNavigate();
	const r = bookingData;
	useEffect(() => {
		console.log(bookingData.responseid1);
	}, [bookingData]);
	const formatDate = (time) => {
		const date = new Date(time);
		const month = date.toLocaleString("default", { month: "short" });
		const day = date.getDate();
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		const formattedTime = `${month} ${day} ${hours}:${minutes
			.toString()
			.padStart(2, "0")} ${ampm}`;
		return formattedTime;
	};
	const handleNavigate = () => {
		navigate("/payment");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<div className="bg-[#202124] h-screen w-full flex items-center justify-center">
			<div className=" text-gradient text-white  text-lg white-glassmorphism rounded-lg shadow-lg p-8 w-[500px] ">
				{bookingData.responseid1.map((item) => (
					<div key={item.id}>
						<div className="text-xl font-extrabold mb-4 text-center">
							Booking Details
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Departure Station:</div>
							<div>{item.scheduledTrain.startStation.name}</div>
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Arrival Station:</div>
							<div>{item.scheduledTrain.endStation.name}</div>
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Departure Date:</div>
							<div>{formatDate(item.departureTime)}</div>
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Arrival Date:</div>
							<div>{formatDate(item.arrivalTime)}</div>
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Passengers:</div>
							<div>{bookingData.selectedData.length}</div>
						</div>
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Seats Number:</div>
							<div>{bookingData.selectedData.join(",")}</div>
						</div>
						<hr className="my-4" />
						<div className="text-xl font-bold mb-4">Price</div>

						{/* <div className="flex justify-between mb-4">
							<div className="font-semibold">Seat Type:</div>
							<div>item.selectedTrain.SeatType</div>
						</div> */}
						<div className="flex justify-between mb-4">
							<div className="font-semibold">Price:</div>
							<div>item.price</div>
						</div>
					</div>
				))}
				<hr className="my-4" />
				<div className="flex justify-end">
					<button
						onClick={handleNavigate}
						className="px-4 py-2 text-white custom-class bg-green-800 rounded-lg hover:bg-green-700 hover:animation-pulse focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Pay Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;
