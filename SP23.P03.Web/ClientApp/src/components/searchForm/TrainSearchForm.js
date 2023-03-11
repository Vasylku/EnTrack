import React, { useState } from "react";

const TrainSearchForm = (props) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [tripType, setTripType] = useState("");
  const[dataForm ,setDataForm] = useState([]);


  const handleSubmit = async(e) => {
    e.preventDefault();

     const searchStationData = {

      departure : departure,
      arrival : arrival,
      departureDate : departureDate,
      arrivalDate : arrivalDate,
      tripType: tripType,
      passengers: passengers
    } 
   
   
  props.onSaveFormData(searchStationData);
setDataForm(searchStationData);
    
   //console.log(searchStationData);
   setDataForm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-8 rounded-lg shadow-lg sm:w-full grey-glassmorphism text-center my-10">
      
    <div className="text-xl font-bold mb-4">Train Search</div>
    
    <div className="flex flex-col items-center justify-center gap-6 font-medium mb-2  ">
      <div className="w-full flex lg:flex-row gap-6 justify-evenly sm:flex-col sm:justify-evenly">
        <div className="flex flex-col">
          <label>From</label>
          <input type="text" value={departure}  onChange={(e) => setDeparture(e.target.value)} name="from"  placeholder="Enter source station" className="w-full lg:w-96 border border-gray-400 p-2 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label>To</label>
          <input type="text" name="to" value={arrival}  onChange={(e) => setArrival(e.target.value)}  placeholder="Enter destination station" className="w-full lg:w-96 border border-gray-400 p-2 rounded-lg" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row gap-6 justify-evenly  sm:flex-col sm:justify-evenly " >
        <div className="flex flex-col">
          <label>Departure Date</label>
          <input type="date" name="departDate" value={departureDate}  onChange={(e) => setDepartureDate(e.target.value)}  className="w-full  lg:w-96 border-gray-400 p-2 rounded-lg" />
        </div>
        
        <div className="flex flex-col ">
          <label>Return Date</label>
          <input type="date" name="returnDate" value= {arrivalDate}  onChange={(e) => setArrivalDate(e.target.value)}  className=" w-full lg:w-96 border-gray-400 p-2 rounded-lg" />
        </div>
      </div>
      <div className="w-full flex lg:flex-row gap-6 justify-evenly sm:flex-col">
        <div className="flex flex-col">
          <label>Trip Type</label>
          <select name="tripType" onChange={(e) => setTripType(e.target.value)}className="w-full lg:w-96 border border-gray-400 p-2 rounded-lg">
            <option value="oneWay" >One-way</option>
            <option value="twoWay" >Two-way</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Passenger Number</label>
          <input type="number" name="passengerNumber" value={passengers}  onChange={(e) => setPassengers(e.target.value)} placeholder="Enter number of passengers" className=" w-full lg:w-96 border border-gray-400 p-2 rounded-lg" />
        </div>
      </div>
    </div>
    <div className="mt-8 flex justify-center">
    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Search</button>
    </div>
  </form>
  
  );} 

export default TrainSearchForm; 
