import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
const BookingDetails = ({ bookingData, onSaveBookingData }) => {
	const navigate = useNavigate();
	const [res1, setRes1] = useState([]);
	const [res2, setRes2] = useState([]);
	useEffect(() => {
		//console.log(bookingData.responseid1[0].scheduledTrain.distance);
		if (bookingData.selectedData2) {
			setRes1(bookingData.selectedData);
			setRes2(bookingData.selectedData2);
			console.log(bookingData);
		} else {
			setRes1(bookingData.selectedData);
		}
	}, [bookingData]);
	const seatTypes = [
		{ type: "c", price: 17 },
		{ type: "s", price: 23 },
		{ type: "r", price: 20 },
		{ type: "f", price: 30 },
	];

	let totalPrice = 0;
	res1.forEach((seat) => {
		const type = seat[0];
		const { price } = seatTypes.find(({ type: t }) => t === type);
		totalPrice += price;
	});
	let totalPrice2 = 0;

	res2.forEach((seat) => {
		const type = seat[0];
		const { price } = seatTypes.find(({ type: t }) => t === type);
		totalPrice2 += price;
	});
	console.log(seatTypes);
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
	const r = bookingData.responseid1[0].id;
	const d = bookingData.responseid2 ? bookingData.responseid2[0]?.id : null;

	const handleNavigate = (x) => {
		if (x === "p") {
			navigate("/payment");
			onSaveBookingData(bookingData);
		} else if (x === "b") {
			navigate(`/seatpicker/${r}${d ? "/" + d : ""}`);
		}
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="bg-[#202124] w-full flex flex-col sm:flex-row items-center justify-center">
			<div className=" text-gradient text-white flex flex-col my-10 flex-shrink-5 text-lg white-glassmorphism rounded-lg shadow-lg p-8 w-[500px] ">
				{bookingData.responseid1.map((item) => (
					<div key={item.id}>
						<div className="text-xl font-extrabold mb-4 text-center">
							{bookingData.responseid2
								? "Booking Details Ticket 1"
								: "Booking Details"}
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
						<div className="flex justify-between mb-4 text-xl font-bold">
							<div className=" mb-4">Price:</div>
							<div>${totalPrice}</div>
						</div>
					</div>
				))}

				{bookingData.responseid2 && (
					<>
						<hr className="my-4 border-orange-500" />
						<hr className="my-4 border-orange-500" />
						{bookingData.responseid2.map((item) => (
							<div key={item.id}>
								<div className="text-xl font-extrabold mb-4 text-center">
									Booking Details Ticket 2
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
									<div>{bookingData.selectedData2.length}</div>
								</div>
								<div className="flex justify-between mb-4">
									<div className="font-semibold">Seats Number:</div>
									<div>{bookingData.selectedData2.join(",")}</div>
								</div>
								<hr className="my-4" />
								<div className="flex justify-between mb-4 text-xl font-bold">
									<div className=" mb-4">Price:</div>
									<div>${totalPrice2}</div>
								</div>
							</div>
						))}
					</>
				)}

				<hr className="my-4" />
				<div className="flex justify-center gap-10">
					<button
						onClick={() => handleNavigate("b")}
						className="px-4 py-2 text-white custom-class bg-blue-800 rounded-lg hover:bg-blue-700 hover:animation-pulse focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						Go Back
					</button>
					<button
						onClick={() => handleNavigate("p")}
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
