

/* import { useState } from "react";

const SEATS_PER_ROW = 4;
const TOTAL_SEATS = 168 + 84 + 42 + 62 + 42 + 10 + 4;
const SEAT_CLASSES = ["A", "B", "B", "C", "D", "D", "D", "D"];

const TrainSeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCar, setSelectedCar] = useState(0);

  const seats = Array.from({ length: TOTAL_SEATS }, (_, i) => ({
    id: i + 1,
    taken: Math.random() < 0.5,
    selected: selectedSeats.includes(i + 1),
    class: SEAT_CLASSES[i % SEATS_PER_ROW],
  })).slice(selectedCar * SEATS_PER_ROW * 21, (selectedCar + 1) * SEATS_PER_ROW * 21);

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((id) => id !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-200 p-4 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Choose your seat:</h2>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {seats.map((seat, index) => (
          <button
            key={index}
            className={`${
              seat.taken
                ? "bg-red-500 text-white cursor-not-allowed"
                : seat.selected
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            } rounded-md p-2 font-medium w-full h-12 focus:outline-none focus:ring-2 focus:ring-red-500`}
            disabled={seat.taken}
            onClick={() => handleSeatClick(seat.id)}
          >
            {seat.id}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center mb-4">
        {[...Array(8)].map((_, i) => (
          <button
            key={i}
            className={`${
              selectedCar === i
                ? "bg-red-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            } rounded-md p-2 font-medium w-10 h-10 mr-2 focus:outline-none focus:ring-2 focus:ring-red-500`}
            onClick={() => setSelectedCar(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="bg-red-500 text-white rounded-md py-2 px-4 font-medium w-full focus:outline-none focus:ring-2 focus:ring-red-500"
        disabled={!selectedSeats.length}
      >
        Book Seats
      </button>
    </div>
  );
};

export default TrainSeatSelector;
 */