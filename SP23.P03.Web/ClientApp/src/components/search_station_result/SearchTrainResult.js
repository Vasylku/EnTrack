import React from "react";
//import { useNavigate } from "react-router-dom";
import TrainDate from "./TrainDate";
/* import { FaTrain } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi'; */

function SearchTrainsResult({ searchData, scheduledata, onSelect, selected }) {
	//console.log(scheduledata);
	//const navigate = useNavigate();
	// const navToTop = (route) => {
	// 	navigate(route);
	// 	window.scrollTo({ top: 0, behavior: "smooth" });
	// };

	const t = new Date(scheduledata.departureTime);

	return (
		<>
			<tr>
				<th scope="col" className="px-4 py-3"></th>
			</tr>
			<tr className=" bg-[#343435] hover:bg-[#575858]">
				<th
					scope="row"
					className=" rounded-l-xl px-6 py-4 font-medium text-gradient whitespace-nowrap text-white "
				>
					{searchData.startStation.name}
				</th>
				<td className="px-6 py-4">{searchData.endStation.name}</td>
				<td className="px-6 py-4">
					<TrainDate date={t} />
				</td>
				<td className="px-6 py-4">
					<TrainDate date={new Date(scheduledata.arrivalTime)} />
				</td>
				<td className="px-6 py-4 text-center text-lg rounded-r-lg">
					<button
						onClick={() => onSelect(scheduledata.id)}
						className={`text-gradient animate-pulse hover:animate-bounce  bg-blue-100 rounded-lg hover:bg-orange-600  ${
							selected ? " bg-green-500 hover:bg-green-700 " : null
						}`}
					>
						{selected ? "Selected" : "Select  "}
					</button>
					{/* <button
						onClick={() => navToTop("/booking")}
						className="px-4 py-2 text-gradient animate-pulse hover:animate-bounce bg-blue-100 rounded-lg hover:bg-orange-500 "
					>
						Book
					</button> */}
				</td>
			</tr>
		</>
	);
}

export default SearchTrainsResult;
