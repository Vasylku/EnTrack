/* import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const TrainSeatSelector = () => {
	const [selected, setSelected] = useState([]);
	const [reserved, setReserved] = useState([]);
	const { id1, id2 } = useParams();
	const coachSeats = 24;
	const sleeperSeats = 28;
	const roomletSeats = 20;
	const firstClassSeats = 10;
	console.log(id1, id2);
	const carouselRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Calculate the number of seats in each car
	const totalSeats = coachSeats + sleeperSeats + roomletSeats + firstClassSeats;
	const seatsPerCar = Math.floor(totalSeats / 8);
	const remainingSeats = totalSeats % 8;

	// Create an array of the seat types and their respective number of seats
	const seatTypes = [
		{ type: "c", count: coachSeats },
		{ type: "s", count: sleeperSeats },
		{ type: "r", count: roomletSeats },
		{ type: "f", count: firstClassSeats },
	];

	// Loop over the seat types and divide the seats evenly among the cars
	const seatCountByCar = {};

	let remainingSeatsToAdd = remainingSeats;
	seatTypes.forEach((seatType) => {
		const { type, count } = seatType;
		let seatsToAdd = count;
		for (let i = 1; i <= 8; i++) {
			const car = `car${i}`;
			const seatsInCar = seatCountByCar[car] || 0;
			const seatsToAddToCar = Math.min(seatsToAdd, seatsPerCar - seatsInCar);
			seatCountByCar[car] = seatsInCar + seatsToAddToCar;
			seatsToAdd -= seatsToAddToCar;
			if (seatsToAdd === 0) break;
		}
		if (remainingSeatsToAdd > 0) {
			const car = `car${Math.floor(Math.random() * 8) + 1}`;
			seatCountByCar[car] = (seatCountByCar[car] || 0) + 1;
			remainingSeatsToAdd--;
		}
	});

	// Create an array of seat objects with their type and car number
	const seats = [];
	for (let i = 1; i < seatTypes.length; i++) {
		const { type } = seatTypes[i];
		for (let j = 0; j < seatCountByCar[`car${j + 1}`]; j++) {
			seats.push({ id: `${type}${j}`, type, car: `car${j + 1}` });
		}
	}

	// Create a map of reserved seats
	const reservedSeatsMap = reserved.reduce((map, seatId) => {
		map[seatId] = true;
		return map;
	}, {});

	const availableSeats = seats.length - reserved.length;

	// The rest of the code is the same as before, but the seat buttons are generated based on the seats array
	const handleSelectSeat = (seatId, index) => {
		if (reservedSeatsMap[seatId]) {
			return;
		}
		setCurrentIndex(index);
		setSelected((prevSelected) => {
			if (prevSelected.includes(seatId)) {
				return prevSelected.filter((id) => id !== seatId);
			} else {
				return [...prevSelected, seatId];
			}
		});
	};

	const handleResetSelection = () => {
		setSelected([]);
	};

	const handleConfirmSelection = () => {
		const bookingData = {};

		// You can use this data to make a POST request to your backend API to save the booking details
		console.log(bookingData);

		// Navigate to the next page
		// history.push("/booking");
	};
	const next = () => {
		carouselRef.current.slickNext();
		setCurrentIndex((prevIndex) => (prevIndex + 1) % seats.length);
	};

	const prev = () => {
		carouselRef.current.slickPrev();
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + seats.length) % seats.length
		);
	};

	return (
		<div className="min-h-screen bg-[#202124] py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
					<div className=" w-full mx-auto">
						<h1 className="text-3xl font-bold mb-5">Seat Selection</h1>
						<p className="mb-5">
							Select your seats from the available seats below. Total number of
							available seats: {availableSeats}
						</p>
						<div
							id="default-carousel"
							className="relative w-full"
							data-carousel="static"
							ref={carouselRef}
						>
							<div className="relative h-full overflow-hidden rounded-lg ">
								<div
									className=" duration-700 ease-in-out"
									data-carousel-item="active"
								>
									<div className=" grid grid-cols-3 gap-5">
										{[...Array(coachSeats)].map((_, i) => (
											<button
												key={`c${i}`}
												disabled={reserved.includes(`c${i}`)}
												onClick={() => handleSelectSeat(`c${i + 1}`)}
												className={` border-2 border-gray-400 rounded-md py-2 px-3 ${
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
										))}
									</div>
								</div>

								<div
									className="hidden duration-700 ease-in-out"
									data-carousel-item
								>
									<div className="grid grid-cols-2 gap-5">
										{[...Array(sleeperSeats)].map((_, i) => (
											<button
												key={`s${i}`}
												disabled={reserved.includes(`s${i + 1}`)}
												onClick={() => handleSelectSeat(`s${i + 1}`)}
												className={` border-2 border-gray-400 rounded-md py-2 px-3 ${
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
										))}
									</div>
								</div>
								<div
									className="hidden duration-700 ease-in-out"
									data-carousel-item
								>
									<div className="grid grid-cols-3 gap-5">
										{[...Array(roomletSeats)].map((_, i) => (
											<button
												key={`r${i}`}
												disabled={reserved.includes(`r${i + 1}`)}
												onClick={() => handleSelectSeat(`r${i + 1}`)}
												className={`border-2 border-gray-400 rounded-md py-2 px-3 ${
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
										))}
									</div>
								</div>
							</div>
						</div>
						<button
							type="button"
							class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
							data-carousel-prev
							onClick={prev}
						>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg
									aria-hidden="true"
									class="w-6 h-6 text-white dark:text-gray-800"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 19l-7-7 7-7"
									></path>
								</svg>
								<span class="sr-only">Previous</span>
							</span>
						</button>

						<button
							type="button"
							class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
							data-carousel-next
							onClick={next}
						>
							<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
								<svg
									aria-hidden="true"
									class="w-6 h-6 text-white dark:text-gray-800"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
								<span class="sr-only">Next</span>
							</span>
						</button>
					</div>
					<div className="mt-8 text-center">
						<button
							onClick={() => handleResetSelection()}
							className="text-sm  no-underline text-gray-500 cursor-pointer mx-5"
						>
							Reset selection
						</button>
						<button
							disabled={selected.length === 0}
							onClick={() => handleConfirmSelection()}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
						>
							Confirm selection
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainSeatSelector; */
import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TrainSeatSelector = ({ onConfirmBooking }) => {
	const [selected, setSelected] = useState([]);
	const [reserved] = useState(["s1", "c2"]);

	const { id1, id2 } = useParams();
	const navigate = useNavigate();
	const coachSeats = 24;
	const sleeperSeats = 28;
	const roomletSeats = 20;
	const firstClassSeats = 12;
	//console.log(id1, id2);

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
			id1: id1,
			id2: id2,
			selectedData: selected,
		};

		console.log(bookingData);
		onConfirmBooking(bookingData);
		// Navigate to the next page

		navigate("/booking");
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
