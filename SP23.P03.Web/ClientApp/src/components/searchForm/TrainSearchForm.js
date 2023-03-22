import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const TrainSearchForm = (props) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  //const [passengers, setPassengers] = useState("");
  const [tripType, setTripType] = useState("oneWay");
  const [errors, setErrors] = useState({field: "", message:""});
  const [focusedInput, setFocusedInput] = useState(null);

    const validateForm = () => {
  
    let newErrors = {}; 
    if (!departure) newErrors["departure"] = "Departure station is required.";
    if (!arrival) newErrors["arrival"] = "Arrival station is required.";
    if (!departureDate) newErrors["departureDate"] = "Departure date is required.";
    if (departureDate && new Date(departureDate).getTime() < new Date().getTime()) newErrors["departureDate"] = "Departure date cannot be in the past.";
   // if (!passengers || passengers < 1) newErrors["passengers"] = "Number of passengers is required.";

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
     // passengers: passengers
    }
     setErrors({} );
    console.log(searchStationData);
  
  props.onSaveFormData(searchStationData);
  setDeparture("");
  setArrival("");
  setDepartureDate("");
  setArrivalDate("");
  //setPassengers("");
  setTripType("oneWay");


 
  setErrors({} );

  }

  };
  const handleDatesChange = (dates) => {
    const [start, end] = dates;
    setDepartureDate(start);
    setArrivalDate(end);

  };
  const handleOneWayChange = (date) => {
    setDepartureDate(date);
  };
  const handleFocusChange = (input) => {
    setFocusedInput(input);
  };

  /* const isOutsideRange = (day) => {
    return day.getDay() === 0 || day.getDay() === 6; // disable weekends
  }; */

  const isDayBlocked = (day) => {
    return day < new Date(); // disable past dates
  };
 // const firstError = Object.values(errors).find(error => error !== '');
  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-8 rounded-lg shadow-lg sm:w-full white-glassmorphism text-center my-10">
    {Object.keys(errors).map((field) => (
        <div key={field} className="text-red-500 mb-2">
          {errors[field]}
        </div>
      ))}
   {/*  <div className="text-red-500 mb-2">
    {firstError}</div> */}
    <div className="text-xl bg-white text-gradient font-bold mb-4">Train Search</div>
    
    <div className="flex flex-col items-center justify-center gap-6 font-medium mb-2  ">
    <div className="w-full flex flex-col md:flex-row gap-6 justify-evenly sm:flex-col">
      <div className="flex flex-col">
          <label className="bg-white text-gradient">Trip Type</label>
          <select name="tripType" onChange={(e) => setTripType(e.target.value)}className={`w-full p-2 rounded-lg lg:w-96 ${errors.tripType ? "border-red-500":  "border-gray-400 "}`}>
            <option value="oneWay" >One-way</option>
            <option value="twoWay" >Two-way</option>
          </select>
      </div>
      <div className="flex flex-col">
          <label className="bg-white text-gradient" >From</label>
           <input type="text" value={departure}  onChange={(e) => setDeparture(e.target.value)} name="from"  placeholder="Enter source station" className={`w-full lg:w-96 border p-2 rounded-lg ${
            errors.departure ? "border-red-500":  "border-gray-400"}` }/>
        </div>
        <div className="flex flex-col">
          <label className="bg-white text-gradient">To</label>
          <input type="text" name="to" value={arrival}  onChange={(e) => setArrival(e.target.value)}  placeholder="Enter destination station" className={`w-full lg:w-96 border p-2 rounded-lg ${errors.arrival ? "border-red-500": " border-gray-400"} `} />
        </div>
      </div>
    {/*     <div className="flex flex-col">
          <label>Passenger Number</label>
          <input type="number" name="passengerNumber" value={passengers}  onChange={(e) => setPassengers(e.target.value)} placeholder="Enter number of passengers" className={`w-full p-2 rounded-lg lg:w-96 ${errors.field === "passengers" ? "border-red-500":  "border-gray-400 "}`}/>
        </div> */}
      </div>
      <div className="w-full flex lg:flex-row gap-6 justify-evenly sm:flex-col sm:justify-evenly">
       
      <div className="w-full flex lg:flex-row gap-6 justify-evenly  sm:flex-col sm:justify-evenly " >
        <div className="flex flex-col">
          <label className="bg-white text-gradient">Departure Date</label>
          <div className="w-full max-w-md mx-auto">
            {tripType ==='oneWay' ? (<DatePicker
      selected={departureDate}
      onChange={handleOneWayChange}
      onFocusChange={handleFocusChange}
      minDate={new Date()}
      inline
      todayButton="Today"
      todayButtonClassName="font-bold"
      focusedInput={focusedInput} 
      dayClassName={(date) =>
        isDayBlocked(date) ? 'text-gray-500' : undefined
      }
      disabledKeyboardNavigation
    //  excludeDates={[new Date()]}
      calendarClassName="w-full max-w-xs rounded-lg shadow-lg border-gray-400 p-4 text-gray-700 text-sm"
   
    /> ) :   (<DatePicker
    selected={departureDate}
    onChange={handleDatesChange}
    startDate={departureDate}
    endDate={arrivalDate}
    selectsRange
    inline
    minDate={new Date()}
    onFocusChange={handleFocusChange} 
    todayButton="Today"
    todayButtonClassName="font-bold"
    focusedInput={focusedInput} 
    dayClassName={(date) =>
      isDayBlocked(date) ? 'text-white' : 'text-bold '
    }
    
    disabledKeyboardNavigation
  //  excludeDates={[new Date()]}
   // filterDate={isOutsideRange}
    calendarClassName="w-full max-w-xs rounded-md shadow-lg border-gray-200 p-4 text-sm"
  /> )}
</div>
    
        {/*   <Datepicker
          
type="date"
className={`w-32 p-2 text-black rounded-lg lg:w-96 ${errors.departureDate ? "border-red-500":  "border-gray-400 "}`}
selected={departureDate}
onSelect={(date) => setDepartureDate(date)}
onChange={(e) => setDepartureDate(e.target.value)}
minDate={new Date()}
dateFormat="dd/MM/yyyy"

/> */} {/* <input type="date" name="departDate" value={departureDate}  onChange={(e) => setDepartureDate(e.target.value)}  className={`w-full p-2 rounded-lg lg:w-96 ${errors.departureDate ? "border-red-500":  "border-gray-400 "}`} /> */}
        </div>

       {/*  {tripType !== "oneWay" && (
        <div className="flex flex-col ">
          <label>Return Date</label>
          <input type="date" name="returnDate" value= {arrivalDate}  onChange={(e) => setArrivalDate(e.target.value)}  className={`w-full p-2 rounded-lg lg:w-96 ${errors.arrivalDate ? "border-red-500":  "border-gray-400 "}`} />
        </div>)} */}
      </div>
     
    </div>
    <div className="mt-8 flex justify-center">
    <button type="submit" className="transform rounded-full bg-yellow-700 py-2 px-7 mx-auto font-bold text-[#d2e3fc] duration-600 hover:bg-yellow-600">Search</button>
    </div>
  </form>
  
  );} 

export default TrainSearchForm; 
