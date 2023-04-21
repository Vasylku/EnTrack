import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TrainSeatSelector = ({ onConfirmBooking }) => {
	const [selected, setSelected] = useState([]);
	const [selected2, setSelected2] = useState([]);
	const [reserved, setReserved1] = useState([]);
	const [reserved2, setReserved2] = useState([]);
	const [response1, setResponse1] = useState(null);
	const [response2, setResponse2] = useState(null);
	const [train1, setTrain1] = useState([]);
	const [train2, setTrain2] = useState([]);
	const { id1, id2 } = useParams();
	const navigate = useNavigate();

	//console.log(id1, id2);

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id2) {
					const res1 = await axios.get(`/api/schedules/${id1}`);
					//	console.log(res1.data);
					setReserved1(res1.data[0].reservedCheck);
					setResponse1(res1.data);

					setTrain1(res1.data[0].train);
					const res2 = await axios.get(`/api/schedules/${id2}`);
					//console.log(res2.data);
					setReserved2(res2.data[0].reservedCheck);

					setResponse2(res2.data);
					setTrain2(res2.data[0].train);
				} else {
					const res1 = await axios.get(`/api/schedules/${id1}`);

					console.log(res1.data);
					//	console.log(res1.data[0].reservedCheck);
					setReserved1(res1.data[0].reservedCheck);
					setResponse1(res1.data);
					setTrain1(res1.data[0].train);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [id1, id2]);

	// Create an array of the seat types and their respective number of seats
	//read the train configs and populate data for specific schedlues.
	//read api shcedules reservedCheck seats to get seat that are booked
	const reservedSeatsMap1 = {};

	reserved.forEach((seatId) => {
		reservedSeatsMap1[seatId] = true;
	});

	const reservedSeatsMap2 = {};

	reserved2.forEach((seatId) => {
		reservedSeatsMap1[seatId] = true;
	});
	const handleSelectSeat = (seatId, dataSet) => {
		if (reservedSeatsMap1[seatId] && reservedSeatsMap2[seatId]) {
			return;
		}

		if (dataSet === 1) {
			setSelected((prevSelected) => {
				if (prevSelected.includes(seatId)) {
					return prevSelected.filter((id) => id !== seatId);
				} else {
					return [...prevSelected, seatId];
				}
			});
		} else if (dataSet === 2) {
			setSelected2((prevSelected) => {
				if (prevSelected.includes(seatId)) {
					return prevSelected.filter((id) => id !== seatId);
				} else {
					return [...prevSelected, seatId];
				}
			});
		}
	};
	//console.log(selected);
	const handleResetSelection = (dataSet) => {
		if (dataSet === 1) {
			setSelected([]);
		} else if (dataSet === 2) {
			setSelected2([]);
		}
	};
	const handleConfirmSelection = (dataSet) => {
		if (dataSet === 1) {
			const bookingData = {
				responseid1: response1,

				selectedData: selected,
			};

			onConfirmBooking(bookingData);
		} else if (dataSet === 2) {
			const bookingData = {
				responseid1: response1,
				responseid2: response2,
				selectedData: selected,
				selectedData2: selected2,
			};
			onConfirmBooking(bookingData);
		}

		navigate("/booking");
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="flex flex-col bg-[#202124]">
			<div className="mt-8 text-center  justify-center place-items-center">
				<div className="min-h-screen  py-6 flex flex-col md:flex-row justify-between sm:py-12">
					<div className=" py-3 sm:max-w-xl sm:mx-auto ">
						<h1 className="text-3xl font-bold text-center mb-5 text-gradient">
							{response2 ? "Seat Selection Train 1" : "Seat Selection"}
						</h1>
						<p className="mb-5 text-gradient">
							Select your seats from the available seats below. Total number of
							seats: {train1.availableSeats} <br />
						</p>
						<div className="mt-8 mb-2 text-center  justify-center place-items-center">
							<button
								onClick={() => handleResetSelection(1)}
								className="text-sm  no-underline text-gray-300 hover:text-red-400 cursor-pointer mx-5"
							>
								Reset selection
							</button>
							<button
								disabled={selected.length === 0}
								onClick={() => handleConfirmSelection(1)}
								className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
							>
								Confirm selection
							</button>
						</div>
						<div className=" w-full mx-auto">
							{" "}
							{train1.firstClassSeats && (
								<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
									<div className=" grid grid-cols-6 gap-4 mt-10">
										{[...Array(train1.firstClassSeats)].map((_, i) => (
											<React.Fragment key={`firstClassSeats-${i}`}>
												{i % 2 === 1 && <div className="col-span-1"></div>}

												<button
													key={`f${i}`}
													disabled={reserved.includes(`f${i + 1}`)}
													onClick={() => handleSelectSeat(`f${i + 1}`, 1)}
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
							)}
							{train1.coachSeats && (
								<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
									<div className=" grid grid-cols-6 gap-4">
										{[...Array(train1.coachSeats)].map((_, i) => (
											<React.Fragment key={`coach-${i}`}>
												{i % 2 === 0 && <div className="col-span-1"></div>}

												<button
													key={`c${i}`}
													disabled={reserved.includes(`c${i + 1}`)}
													onClick={() => handleSelectSeat(`c${i + 1}`, 1)}
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
							)}
							{train1.sleeperSeats && (
								<div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
									<div className="grid grid-cols-3 gap-5">
										{[...Array(train1.sleeperSeats)].map((_, i) => (
											<React.Fragment key={`sleeper-${i}`}>
												{i % 2 === 1 && <div className="col-span-1"></div>}
												<button
													key={`s${i}`}
													disabled={reserved.includes(`s${i + 1}`)}
													onClick={() => handleSelectSeat(`s${i + 1}`, 1)}
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
							)}
						</div>
						{train1.roomletSeats && (
							<div
								className="
				 px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
							>
								<div className="grid grid-cols-4 gap-5">
									{[...Array(train1.roomletSeats)].map((_, i) => (
										<React.Fragment key={`roomletSeat-${i}`}>
											<button
												key={`r${i}`}
												disabled={reserved.includes(`r${i + 1}`)}
												onClick={() => handleSelectSeat(`r${i + 1}`, 1)}
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
						)}
						<div className="mt-8 text-center  justify-center place-items-center">
							<button
								onClick={() => handleResetSelection(1)}
								className="text-sm  no-underline text-gray-300 hover:text-red-400 cursor-pointer mx-5"
							>
								Reset selection
							</button>
							<button
								disabled={selected.length === 0}
								onClick={() => handleConfirmSelection(1)}
								className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
							>
								Confirm selection
							</button>
						</div>
					</div>
					{id2 && (
						<div className=" py-3 sm:max-w-xl sm:mx-auto ">
							<h1 className="text-3xl font-bold text-center mb-5 text-gradient">
								Seat Selection Train 2
							</h1>
							<p className="mb-5 text-gradient">
								Select your seats from the available seats below. Total number
								of seats: {train2.availableSeats}
								<br />
							</p>
							<div className="mt-8 mb-2 text-center  justify-center place-items-center">
								<button
									onClick={() => handleResetSelection(2)}
									className="text-sm  no-underline text-gray-300 hover:text-red-400 cursor-pointer mx-5"
								>
									Reset selection
								</button>
								<button
									disabled={selected2.length === 0}
									onClick={() => handleConfirmSelection(2)}
									className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
								>
									Confirm selection
								</button>
							</div>
							<div className=" w-full mx-auto">
								{train2.firstClassSeats && (
									<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
										<div className=" grid grid-cols-6 gap-4 mt-10">
											{[...Array(train2.firstClassSeats)].map((_, i) => (
												<React.Fragment key={`firstClassSeats-${i}`}>
													{i % 2 === 1 && <div className="col-span-1"></div>}

													<button
														key={`f${i}`}
														disabled={reserved2.includes(`f${i + 1}`)}
														onClick={() => handleSelectSeat(`f${i + 1}`, 2)}
														className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
															selected2.includes(`f${i + 1}`)
																? "bg-blue-500 text-white"
																: ""
														} ${
															reserved2.includes(`f${i + 1}`)
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
								)}
								{train2.coachSeats && (
									<div className=" px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
										<div className=" grid grid-cols-6 gap-4">
											{[...Array(train2.coachSeats)].map((_, i) => (
												<React.Fragment key={`coach-${i}`}>
													{i % 2 === 0 && <div className="col-span-1"></div>}

													<button
														key={`c${i}`}
														disabled={reserved2.includes(`c${i + 1}`)}
														onClick={() => handleSelectSeat(`c${i + 1}`, 2)}
														className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
															selected2.includes(`c${i + 1}`)
																? "bg-blue-500 text-white"
																: ""
														} ${
															reserved2.includes(`c${i + 1}`)
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
								)}
								{train2.sleeperSeats && (
									<div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
										<div className="grid grid-cols-3 gap-5">
											{[...Array(train2.sleeperSeats)].map((_, i) => (
												<React.Fragment key={`sleeper-${i}`}>
													{i % 2 === 1 && <div className="col-span-1"></div>}
													<button
														key={`s${i}`}
														disabled={reserved2.includes(`s${i + 1}`)}
														onClick={() => handleSelectSeat(`s${i + 1}`, 2)}
														className={` border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
															selected2.includes(`s${i + 1}`)
																? "bg-blue-500 text-white"
																: ""
														} ${
															reserved2.includes(`s${i + 1}`)
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
								)}
								{train2.roomletSeats && (
									<div className="px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
										<div className="grid grid-cols-4 gap-5">
											{[...Array(train2.roomletSeats)].map((_, i) => (
												<React.Fragment key={`roomletSeat-${i}`}>
													<button
														key={`r${i}`}
														disabled={reserved2.includes(`r${i + 1}`)}
														onClick={() => handleSelectSeat(`r${i + 1}`, 2)}
														className={`border-2 border-gray-400 rounded-md py-2 px-3 hover:border-green-700 ${
															selected2.includes(`r${i + 1}`)
																? "bg-blue-500 text-white"
																: ""
														} ${
															reserved2.includes(`r${i + 1}`)
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
								)}
							</div>
							<div className="mt-8 text-center  justify-center place-items-center">
								<button
									onClick={() => handleResetSelection(2)}
									className="text-sm  no-underline text-gray-300 hover:text-red-400 cursor-pointer mx-5"
								>
									Reset selection
								</button>
								<button
									disabled={selected2.length === 0}
									onClick={() => handleConfirmSelection(2)}
									className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mt-5 disabled:bg-gray-500 disabled:cursor-not-allowed"
								>
									Confirm selection
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TrainSeatSelector;
