import { useState, useParams, useHistory, useEffect } from "react";

const TrainSeatSelector = () => {
	const [selected, setSelected] = useState([]);
	const [reserved, setReserved] = useState([]);

	const coachSeats = 25;
	const sleeperSeats = 10;
	const roomletSeats = 44;
	const firstClassSeats = 12;

	const totalSeats = coachSeats + sleeperSeats + roomletSeats + firstClassSeats;
	const availableSeats = totalSeats - reserved.length;

	const price = 290;
	const totalprice = price * selected.length;

	const handleSelectSeat = (seatId) => {
		if (reserved.includes(seatId)) {
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
	const handleResetSelection = () => {
		setSelected([]);
	};

	const handleConfirmSelection = () => {
		const bookingData = {
			selectedSeats: selected,
			totalPrice: totalprice,
		};

		// You can use this data to make a POST request to your backend API to save the booking details
		console.log(bookingData);

		// Navigate to the next page
		// history.push("/booking");
	};

	return (
		<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
			<div className="relative py-3 sm:max-w-xl sm:mx-auto">
				<div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
					<div className="max-w-md mx-auto">
						<h1 className="text-3xl font-bold mb-5">Seat Selection</h1>
						<p className="mb-5">
							Select your seats from the available seats below. Total number of
							available seats: {availableSeats}
						</p>
						<div className="grid grid-cols-5 gap-5">
							{[...Array(coachSeats)].map((_, i) => (
								<button
									key={`c${i}`}
									disabled={reserved.includes(`c${i}`)}
									onClick={() => handleSelectSeat(`c${i}`)}
									className={`bg-white border-2 border-gray-300 rounded-md py-2 px-3 ${
										selected.includes(`c${i}`) ? "bg-blue-500 text-white" : ""
									} ${
										reserved.includes(`c${i}`)
											? "bg-gray-400 cursor-not-allowed"
											: ""
									}`}
								>
									{`c${i}`}
								</button>
							))}
							{[...Array(sleeperSeats)].map((_, i) => (
								<button
									key={`s${i}`}
									disabled={reserved.includes(`s${i}`)}
									onClick={() => handleSelectSeat(`s${i}`)}
									className={`bg-white border-2 border-gray-300 rounded-md py-2 px-3 ${
										selected.includes(`s${i}`) ? "bg-blue-500 text-white" : ""
									} ${
										reserved.includes(`s${i}`)
											? "bg-gray-400 cursor-not-allowed"
											: ""
									}`}
								>
									{`s${i}`}
								</button>
							))}
							{[...Array(roomletSeats)].map((_, i) => (
								<button
									key={`r${i}`}
									disabled={reserved.includes(`r${i}`)}
									onClick={() => handleSelectSeat(`r${i}`)}
									className={`bg-white border-2 border-gray-300 rounded-md py-2 px-3 ${
										selected.includes(`r${i}`) ? "bg-blue-500 text-white" : ""
									} ${
										reserved.includes(`r${i}`)
											? "bg-gray-400 cursor-not-allowed"
											: ""
									}`}
								>
									{`r${i}`}
								</button>
							))}
						</div>
					</div>
					<div className="mt-8 text-center">
						<button
							onClick={() => handleResetSelection()}
							className="text-sm text-gray-500 underline cursor-pointer"
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

export default TrainSeatSelector;
