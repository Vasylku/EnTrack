import React from "react";
import { MdPrint, MdSend } from "react-icons/md";
import photo from "../../images/photo.jpg";
import JsPDF from "jspdf";
import JsBarcode from "jsbarcode";
import { useEffect, useRef } from "react";

const handleDownload = () => {
	//window.print();
	const ticket = new JsPDF("portrait", "mm", ["520", "694"]);
	ticket
		.html(document.querySelector("#ticket"), { margin: [50, 50] })
		.then(() => {
			ticket.save("ticket.pdf");
		});
};

const Ticket = ({ data, code }) => {
	const barcodeRef = useRef(null);
	const ticketNumber = "1234567890";
	useEffect(() => {
		if (barcodeRef.current) {
			JsBarcode(barcodeRef.current, ticketNumber, {
				format: "CODE128",
				displayValue: false,
				height: 50,
			});
		}
	}, [barcodeRef, ticketNumber]);
	console.log(data);
	return (
		<div className="flex flex-col w-full min-h-screen justify-center items-center bg-[#202124]">
			{data.responseid1.map((item) => (
				<div
					key={item.id}
					className=" max-w-lg rounded-lg overflow-hidden bg-[#dddedf] shadow-xl mx-auto mb-10 p-10"
				>
					<div id="ticket">
						<div className="flex items-center justify-between">
							<div className="flex items-center  my-3">
								<span className="mr-3 rounded-full bg-transparent w-8 h-8">
									<img
										src={photo}
										alt="logo"
										className="h-8 p-1 rounded-t-full"
									/>
								</span>
								<h2 className="font-medium">EnTrack</h2>
							</div>
							<div className="ml-auto text-blue-800">{code}</div>
						</div>
						<div className="border-b border-dashed my-5"></div>
						<div className="flex items-center">
							<div className="flex flex-col">
								<div className="flex-auto text-xs text-gray-400 my-1">
									<span className="mr-1 ">
										{new Date(item.departureTime).toLocaleDateString(
											undefined,
											{ month: "short", day: "numeric" }
										)}
									</span>
								</div>
								<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
									{item.scheduledTrain.startStation.name
										.substring(0, 3)
										.toUpperCase()}
								</div>
								<div className="text-xs">
									{item.scheduledTrain.startStation.name}
								</div>
							</div>
							<div className="flex flex-col mx-auto">
								<img
									src={photo}
									alt="logo"
									className="w-20 p-1 rounded-t-full "
								/>
							</div>
							<div className="flex flex-col ">
								<div className="flex-auto text-xs text-gray-400 my-1">
									<span className="mr-1">
										{new Date(item.arrivalTime).toLocaleDateString(undefined, {
											month: "short",
											day: "numeric",
										})}
									</span>
								</div>
								<div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">
									{item.scheduledTrain.endStation.name
										.substring(0, 3)
										.toUpperCase()}
								</div>
								<div className="text-xs">
									{item.scheduledTrain.endStation.name}
								</div>
							</div>
						</div>
						<hr className=" border-solid w-full h-5 border-[#9aa0a6] border-b-2 my-5 pt-5" />

						<div className="flex items-center mb-5 p-5 text-sm"></div>
						<div className="flex items-center mb-4 px-5">
							<div className="flex flex-col text-sm">
								<span className="">Departure</span>
								<div className="font-semibold">
									{new Date(item.departureTime).toLocaleTimeString(undefined, {
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									})}
								</div>
							</div>
							<div className="flex flex-col ml-auto text-sm">
								<span className="text-center">Arrival</span>
								<div className="font-semibold">
									{new Date(item.arrivalTime).toLocaleTimeString(undefined, {
										hour: "numeric",
										minute: "numeric",
										hour12: true,
									})}
								</div>
							</div>
						</div>

						<div className="flex items-center px-5 pt-3 text-sm">
							<div className="flex flex-col">
								<span className="">Passanger</span>
								<div className="font-semibold">{data.selectedData.length}</div>
							</div>
							<div className="flex flex-col mx-auto">
								<span className="">SeatType</span>
								<div className="font-semibold text-center">type</div>
							</div>
							<div className="flex flex-col mb-4">
								<span className="">Seat</span>
								<div className="font-semibold">
									{data.selectedData.join(",")}
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center text-sm mt-6">
							<h6 className="font-bold text-center my-4">Boarding Pass</h6>

							<canvas className="w-[434px] h-[4.5rem] mt-10" ref={barcodeRef} />
						</div>
					</div>
					<div className="flex print:hidden items-center justify-between px-6 py-4 bg-transparent">
						<div className="flex flex-row items-center print:hidden">
							<button
								className="flex print:hidden items-center justify-center bg-yellow-600 mr-2 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
								onClick={handleDownload}
							>
								<MdPrint className="mr-2" />
								Download Ticket
							</button>
						</div>
						<button className="flex print:hidden items-center justify-center px-4 py-2 font-bold   text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
							<MdSend className="mr-2" />
							Send to Address
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Ticket;
