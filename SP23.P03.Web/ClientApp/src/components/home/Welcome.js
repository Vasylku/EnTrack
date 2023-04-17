import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrainSearchForm from "../searchForm/TrainSearchForm";
import SearchTrainsResult from "../search_station_result/SearchTrainResult";

const Welcome = () => {
	const [searchData, setSearchData] = useState([]);
	const [selectedIds, setSelectedIds] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(searchData);
	}, [searchData]);

	const saveFormData = (responses) => {
		setSearchData(responses);
	};
	const handleSelect = (id) => {
		if (selectedIds.includes(id)) {
			setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
		} else {
			setSelectedIds([...selectedIds, id]);
		}
	};

	const handleBook = () => {
		navigate(`/seatpicker/${selectedIds.join("/")}`);
		console.log(selectedIds);
	};
	return (
		<div className="flex w-full justify-center overflow-x-hidden items-center bg-[#202124]">
			<div className="flex mf:flex-row flex-col items-center justify-between  py-12 px-4">
				<div className=" flex-1 justify-start items-start flex-col ">
					<h1 className="text-3xl sm:text-5xl  text-gradient py-2">
						Discover the Convenience of Travel
						<br />
					</h1>
					<p className=" text-left mt-5 text-gradient font-300 md:w-9/12 w-11/12 text-2xl">
						Book your next adventure.
					</p>
				</div>

				<TrainSearchForm onSaveFormData={saveFormData} />

				{searchData.length > 0 ? (
					<table className="w-full text-sm text-left   dark:text-gray-200 ">
						<thead className="text-sm text-gradient uppercase bg-gray-100">
							<tr>
								<th scope="col" className="px-4 py-3">
									Departure Station
								</th>
								<th scope="col" className="px-4 py-3">
									Arrival Station
								</th>
								<th scope="col" className="px-4 py-3">
									Departure Date
								</th>
								<th className="px-4 py-3">Arrival Date</th>
								<th
									scope="col"
									onClick={handleBook}
									//className="px-4 py-3 text-xs cursor-pointer "
									className={`px-1 py-3 text-sm cursor-pointer text-center  rounded-full  ${
										selectedIds.length > 0
											? "bg-green-900 hover:bg-green-800 custom-class "
											: null
									}`}
								>
									Book selected
								</th>
							</tr>
						</thead>
						<tbody>
							{searchData.map((searchData) =>
								searchData.schedules.map((data) => (
									<SearchTrainsResult
										key={data.id}
										scheduledata={data}
										searchData={searchData}
										onSelect={handleSelect}
										selected={selectedIds.includes(data.id)}
									/>
								))
							)}
						</tbody>
					</table>
				) : null}
			</div>
		</div>
	);
};
export default Welcome;
