import React from "react";
import { Link } from "react-router-dom";
const BookingDetails = () => {
  return (
    <div className="bg-grey-800 h-screen w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3">
        <div className="text-xl font-semibold mb-4">Booking Details</div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Departure:</div>
          <div>searchData.departure</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Arrival:</div>
          <div>searchData.arrival</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Departure Date:</div>
          <div>searchData.departureDate</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Arrival Date:</div>
          <div>searchData.arrivalDate</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Passengers:</div>
          <div>searchData.passengers</div>
        </div>
        <hr className="my-4" />
        <div className="text-xl font-semibold mb-4">Selected Train</div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Train Number:</div>
          <div>selectedTrain.trainNumber</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Departure Time:</div>
          <div>selectedTrain.departureTime</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Arrival Time:</div>
          <div>selectedTrain.arrivalTime</div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="font-semibold">Price:</div>
          <div>selectedTrain.price</div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-end">
        <Link to="/payment">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Pay Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;

  