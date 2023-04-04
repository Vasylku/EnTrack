import React from "react";
import { Link } from "react-router-dom";
import TrainDate from "./TrainDate";
/* import { FaTrain } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi'; */

function SearchTrainsResult({ searchData }) {



  return (

    <>
      <thead>
        <tr>

          <th scope="col" className="px-4 py-3">

          </th>
        </tr>

      </thead>
      <tr className=" bg-[#343435] hover:bg-[#575858] rounded-lg">
        <th scope="row" className="px-6 py-4 font-medium text-gradient whitespace-nowrap text-white ">
          {searchData.startStation.name}
        </th>
        <td className="px-6 py-4">
          {searchData.endStation.name}
        </td>
        <td className="px-6 py-4">
          <TrainDate date={searchData.schedules.departureTime} />
        </td>
        <td className="px-6 py-4">
          <TrainDate date={searchData.schedules.arrivalTime} />
        </td>
        <td className="px-6 py-4 text-center">
        <a href="#top" onClick={(e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}>
          <Link to="/booking">
            <button className="px-4 py-2 text-gradient animate-pulse hover:animate-bounce bg-blue-200 rounded-lg hover:bg-orange-500 ">
              Book
            </button></Link></a>
        </td>
      </tr>

    </>




  );
}

export default SearchTrainsResult;



