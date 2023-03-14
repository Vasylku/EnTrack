import React, { useState } from "react";

const TrainSearchForm = (props) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [tripType, setTripType] = useState("oneWay");
  const [errors, setErrors] = useState({field: "", message:""});

     /* const validateForm = () => {
    
    if (!departure) setErrors({...errors,field: "departure", message: "Departure station is required." });
    if (!arrival) setErrors({...errors,field: "arrival", message: "Arrival station is required." });
    if (!departureDate) setErrors({ ...errors,field: "departureDate", message: "Departure date is required." });
    if (!arrivalDate) setErrors({...errors,field: "arrivalDate", message: "Arrival date is required." });
    if (new Date(departureDate).getTime() < new Date().getTime()) setErrors({ ...errors,field: "departureDate", message: "Departure date cannot be in the past." });
    if (!passengers || passengers < 1) setErrors({...errors,field: "passengers", message: "Number of passengers is required." });
   
    return errors;
  };  */        const validateForm = () => {
    let newErrors = {}; 
    if (!departure) newErrors["departure"] = "Departure station is required.";
    if (!arrival) newErrors["arrival"] = "Arrival station is required.";
    if (!departureDate) newErrors["departureDate"] = "Departure date is required.";
    if (new Date(departureDate).getTime() < new Date().getTime()) newErrors["departureDate"] = "Departure date cannot be in the past.";
    if (!passengers || passengers < 1) newErrors["passengers"] = "Number of passengers is required.";

    setErrors({...errors, ...newErrors}); 

    return Object.keys(newErrors).length === 0;
  };  
  const handleSubmit = async(e) => {
    e.preventDefault();

   
  
    if (validateForm()){
     const searchStationData = {

      departure : departure,
      arrival : arrival,
      departureDate : departureDate,
      arrivalDate : arrivalDate,
      tripType: tripType,
      passengers: passengers
    };
    
  
  props.onSaveFormData(searchStationData);
  setDeparture("");
  setArrival("");
  setDepartureDate("");
  setArrivalDate("");
  setPassengers("");
  setTripType("oneWay");


 

  setErrors({} );
  }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-8 rounded-lg shadow-lg sm:w-full blue-glassmorphism  text-center my-10">
   {Object.keys(errors).map((field) => (
        <div key={field} className="text-red-500 mb-2">
          {errors[field]}
        </div>
      ))}{/* {errors.field !==""&&(
    <div className="text-red-500 mb-2">
    {errors.message}</div>)} */}
    <div className="text-xl font-bold mb-4">Train Search</div>
    
    <div className="flex flex-col items-center justify-center gap-6 font-medium mb-2  ">
    <div className="w-full flex lg:flex-row gap-6 justify-evenly sm:flex-col">
        <div className="flex flex-col">
          <label>Trip Type</label>
          <select name="tripType" onChange={(e) => setTripType(e.target.value)}className={`w-full p-2 rounded-lg lg:w-96 ${errors.tripType ? "border-red-500":  "border-gray-400 "}`}>
            <option value="oneWay" >One-way</option>
            <option value="twoWay" >Two-way</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Passenger Number</label>
          <input type="number" name="passengerNumber" value={passengers}  onChange={(e) => setPassengers(e.target.value)} placeholder="Enter number of passengers" className={`w-full p-2 rounded-lg lg:w-96 ${errors.field === "passengers" ? "border-red-500":  "border-gray-400 "}`}/>
        </div>
      </div>
      <div className="w-full flex lg:flex-row gap-6 justify-evenly sm:flex-col sm:justify-evenly">
        <div className="flex flex-col">
          <label>From</label>
          <input type="text" value={departure}  onChange={(e) => setDeparture(e.target.value)} name="from"  placeholder="Enter source station" className={`w-full lg:w-96 border p-2 rounded-lg ${
            errors.departure ? "border-red-500":  "border-gray-400"}` }/>
        </div>
        <div className="flex flex-col">
          <label>To</label>
          <input type="text" name="to" value={arrival}  onChange={(e) => setArrival(e.target.value)}  placeholder="Enter destination station" className={`w-full lg:w-96 border p-2 rounded-lg ${errors.arrival ? "border-red-500": " border-gray-400"} `} />
        </div>
      </div>
      <div className="w-full flex lg:flex-row gap-6 justify-evenly  sm:flex-col sm:justify-evenly " >
        <div className="flex flex-col">
          <label>Departure Date</label>
          <input type="date" name="departDate" value={departureDate}  onChange={(e) => setDepartureDate(e.target.value)}  className={`w-full p-2 rounded-lg lg:w-96 ${errors.departureDate ? "border-red-500":  "border-gray-400 "}`} />
        </div>
        {tripType !== "oneWay" && (
        <div className="flex flex-col ">
          <label>Return Date</label>
          <input type="date" name="returnDate" value= {arrivalDate}  onChange={(e) => setArrivalDate(e.target.value)}  className={`w-full p-2 rounded-lg lg:w-96 ${errors.arrivalDate ? "border-red-500":  "border-gray-400 "}`} />
        </div>)}
      </div>
     
    </div>
    <div className="mt-8 flex justify-center">
    <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Search</button>
    </div>
  </form>
  
  );} 

export default TrainSearchForm; 
