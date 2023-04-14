import React from "react";

const TrainDate = ({ date }) => {
	//console.log(date);

	if (!isNaN(date)) {
		const month = date.toLocaleString("en-US", { month: "long" });
		const day = date.toLocaleString("en-US", { day: "2-digit" });
		// const year = new Date(date).getFullYear();
		const time = date.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});

		return (
			<div className="flex flex-col w-[5.5rem] h-[5.5rem] border white-glassmorphism text-gradient items-center justify-center rounded-xl border-solid border-[#ececec];">
				<div className="text-lg font-[bold]">{month}</div>
				<div className=" text-lg font-[bold]"> {day}</div>
				<div className="text-lg font-[bold]">{time}</div>
			</div>
		);
	} else {
		return (
			<div className="flex flex-col w-[5.5rem] h-[5.5rem] border items-center text-gradient bg-white justify-center rounded-xl border-solid border-[#ececec]">
				<div className="text-xs font-bold">Invalid date</div>
			</div>
		);
	}
};
export default TrainDate;
