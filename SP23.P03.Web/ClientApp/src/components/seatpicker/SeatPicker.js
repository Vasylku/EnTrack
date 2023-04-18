import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TrainSeatSelector = ({ onConfirmBooking }) => {
	const [selected, setSelected] = useState([]);
	const [reserved] = useState(["s1", "c2"]);
	const [response1, setResponse1] = useState(null);
	const [response2, setResponse2] = useState(null);
	const { id1, id2 } = useParams();
	const navigate = useNavigate();
	const coachSeats = 24;
	const sleeperSeats = 28;
	const roomletSeats = 20;
	const firstClassSeats = 12;

	//console.log(id1, id2);
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id2) {
					const res1 = await axios.get(`/api/schedules/${id1}`);
					//	console.log(res1.data);
					setResponse1(res1.data);
					const res2 = await axios.get(`/api/schedules/${id2}`);
					//console.log(res2.data);
					setResponse2(res2.data);
				} else {
					const res1 = await axios.get(`/api/schedules/${id1}`);
					//	console.log(res1.data);
					setResponse1(res1.data);
				}
			} catch (error) {
				// handle error
				console.error(error);
			}
		};

		fetchData();
	}, [id1, id2]);
	// Create an array of the seat types and their respective number of seats
	//read the train configs and populate data for specific schedlues.
	//read api shcedules booked seat to get seat that are booked
	const seatTypes = [
		{ type: "c", count: coachSeats },
		{ type: "s", count: sleeperSeats },
		{ type: "r", count: roomletSeats },
		{ type: "f", count: firstClassSeats },
	];
	const totalSeatCount = seatTypes.reduce((total, seatType) => {
		return total + seatType.count;
	}, 0);
	// Create a map of reserved seats
	const reservedSeatsMap = {};

	reserved.forEach((seatId) => {
		reservedSeatsMap[seatId] = true;
	});
	//const availableSeats = seats.length - reserved.length;

	const handleSelectSeat = (seatId, index) => {
		if (reservedSeatsMap[seatId]) {
			return;
		}

		setSelected((prevSelected) => {
			if (prevSelected.includes(seatId)) {
				return prevSelected.filter((id) => id !== seatId);
			} else {
				return [...prevSelected, seatId];
			}
		});
	};
	//console.log(selected);
	const handleResetSelection = () => {
		setSelected([]);
	};

	const handleConfirmSelection = () => {
		const bookingData = {
			responseid1: response1,
			//responseid2: response2,
			//id1: id1,
			//id2: id2,
			selectedData: selected,
		};

		console.log(bookingData);
		onConfirmBooking(bookingData);
		// Navigate to the next page

		navigate("/booking");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-[#202124] py-6 flex flex-col justify-center sm:py-12">
			<div className=" py-3 sm:max-w-xl sm:mx-auto ">
				<h1 className="text-3xl font-bold text-center mb-5 text-gradient">
					Seat Selection
				</h1>
				<p className="mb-5 text-gradient">
					Select your seats from the available seats below. Total number of
					available seats: {totalSeatCount} {/* {availableSeats} */}
				</p>

				<div className=" w-full mx-auto">
					<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
						<div className=" grid grid-cols-6 gap-4">
							{[...Array(firstClassSeats)].map((_, i) => (
								<React.Fragment key={`firstClassSeats-${i}`}>
									{i % 2 === 1 && <div className="col-span-1"></div>}

									<button
										key={`f${i}`}
										disabled={reserved.includes(`f${i + 1}`)}
										onClick={() => handleSelectSeat(`f${i + 1}`)}
										className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
											selected.includes(`f${i + 1}`)
												? "bg-blue-500 text-white"
												: ""
										} ${
											reserved.includes(`f${i + 1}`)
												? "bg-gray-400 cursor-not-allowed"
												: ""
										}`}
									>
										{`f${i + 1}`}
									</button>
								</React.Fragment>
							))}
						</div>
					</div>
					<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
						<div className=" grid grid-cols-6 gap-4">
							{[...Array(coachSeats)].map((_, i) => (
								<React.Fragment key={`coach-${i}`}>
									{i % 2 === 0 && <div className="col-span-1"></div>}

									<button
										key={`c${i}`}
										disabled={reserved.includes(`c${i + 1}`)}
										onClick={() => handleSelectSeat(`c${i + 1}`)}
										className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
											selected.includes(`c${i + 1}`)
												? "bg-blue-500 text-white"
												: ""
										} ${
											reserved.includes(`c${i + 1}`)
												? "bg-gray-400 cursor-not-allowed"
												: ""
										}`}
									>
										{`c${i + 1}`}
									</button>
								</React.Fragment>
							))}
						</div>
					</div>
					<div
						className="
				 px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
					>
						<div className="grid grid-cols-3 gap-5">
							{[...Array(sleeperSeats)].map((_, i) => (
								<React.Fragment key={`sleeper-${i}`}>
									{i % 2 === 1 && <div className="col-span-1"></div>}
									<button
										key={`s${i}`}
										disabled={reserved.includes(`s${i + 1}`)}
										onClick={() => handleSelectSeat(`s${i + 1}`)}
										className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
											selected.includes(`s${i + 1}`)
												? "bg-blue-500 text-white"
												: ""
										} ${
											reserved.includes(`s${i + 1}`)
												? "bg-gray-400 cursor-not-allowed"
												: ""
										}`}
									>
										{`s${i + 1}`}
									</button>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
				<div
					className="
				 px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
				>
					<div className="grid grid-cols-4 gap-5">
						{[...Array(roomletSeats)].map((_, i) => (
							<React.Fragment key={`roomletSeat-${i}`}>
								<button
									key={`r${i + 4}`}
									disabled={reserved.includes(`r${i + 1}`)}
									onClick={() => handleSelectSeat(`r${i + 1}`)}
									className={`border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
										selected.includes(`r${i + 1}`)
											? "bg-blue-500 text-white"
											: ""
									} ${
										reserved.includes(`r${i + 1}`)
											? "bg-gray-400 cursor-not-allowed"
											: ""
									}`}
								>
									{`r${i + 1}`}
								</button>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
			<div className="mt-8 text-center">
				<button
					onClick={() => handleResetSelection()}
					className="text-sm  no-underline text-gray-300 hover:text-red-400 cursor-pointer mx-5"
				>
					Reset selection
				</button>
				<button
					disabled={selected.length === 0}
					onClick={() => handleConfirmSelection()}
					className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
				>
					Confirm selection
				</button>
			</div>
		</div>
	);
};

export default TrainSeatSelector;
