import React from "react";
import TrainDate from "./TrainDate";

function SearchTrainsResult({ searchData, scheduledata, onSelect, selected }) {
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
				<td className="px-6 py-4 text-center font-bold text-lg rounded-r-lg">
					<button
						onClick={() => onSelect(scheduledata.id)}
						className={`text-gradient  hover:animate-bounce  bg-blue-100 rounded-lg hover:bg-orange-600  ${
							selected ? " bg-green-500 hover:bg-green-700 " : null
						}`}
					>
						{selected ? "Selected" : "Select  "}
					</button>
				</td>
			</tr>
		</>
	);
}

export default SearchTrainsResult;
