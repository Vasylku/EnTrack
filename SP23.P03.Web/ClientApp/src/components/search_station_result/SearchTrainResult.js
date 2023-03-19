import React from "react";
import { Link } from "react-router-dom";
import TrainDate from "./TrainDate";
/* import { FaTrain } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi'; */

function SearchTrainsResult(props) {
    const {
    departure,
    arrival,
    departureDate,
    arrivalDate,
    tripType,
    passengers,
    
  } = props.searchData; 


  return (
    <ul>
      
    <div className="flex md:flex-row gap-6 flex-col border-gray-600  text-gradient items-center justify-between p-5 mt-4 border rounded-lg">
     
        <div className="font-bold text-lg">{departure}</div>
        <div className=" text-white "><TrainDate date = {departureDate}/></div>
  
      
        <div className="font-bold">{tripType}</div>
        <div className="font-bold">Passengers: { passengers}</div>
      
      
     
        <div className="font-bold text-lg">{arrival}</div>
        <div className=" text-white"><TrainDate date = {arrivalDate}/></div>
        <Link to="/booking">
      <button className="px-4 py-2 text-gradient bg-blue-500 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Book
      </button></Link>
   
    </div>
    
   
   
    </ul>
   
  );
}

export default SearchTrainsResult;
