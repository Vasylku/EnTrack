
  import React from 'react';
  import { MdPrint, MdSend } from 'react-icons/md';
 import { saveAs } from "file-saver";
  import photo from "../../images/photo.jpg";

  const Ticket = ({ from, to, date,time, seatNumber }) => {
    const handleDownload = () => {
     //window.print();
       // const ticketData = { from, to, date, time, seatNumber }; 

        const ticketData = {
          from: "New York",
          to: "Los Angeles",
          date: "2023-04-01",
          time: "10:30 AM",
          seatNumber: "A12"
        };
      const pdfBlob = new Blob((ticketData));
    

      saveAs(pdfBlob, 'train-ticket.pdf');
      
     
      
      console.log(pdfBlob);
    };
  
/*     const handleSend = async () => {
      const pdfBlob = <Ticket ticketData={ticketData} />.toBlob();
      const formData = new FormData();
      formData.append("file", pdfBlob, "train-ticket.pdf");
      formData.append("toEmail", "user@example.com"); // Replace with the actual email address of the user
      const response = await fetch("https://example.com/send-email", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Ticket sent successfully!");
      } else {
        alert("Failed to send the ticket.");
      }
    }; */


  return (
    <div className='flex w-full min-h-screen justify-center items-center bg-[#202124]'>
    <div className=" max-w-lg rounded-lg overflow-hidden bg-[#dddedf] shadow-xl mx-auto  p-10">
    <div className="flex items-center justify-between">
      <div className="flex items-center  my-1">
        <span className="mr-3 rounded-full bg-transparent w-8 h-8">
<img src={photo} alt="logo" className="h-8 p-1 rounded-t-full"/>
</span>
        <h2 className="font-medium">EnTrack</h2>
      </div>
      <div className="ml-auto text-blue-800">Ticket Number</div>
    </div>
    <div className="border-b border-dashed my-5"></div>
    <div className="flex items-center">
      <div className="flex flex-col">
        <div className="flex-auto text-xs text-gray-400 my-1">
          <span className="mr-1 ">depart date</span>
        </div>
        <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">Abr</div>
        <div className="text-xs">City</div>

      </div>
      <div className="flex flex-col mx-auto">
        <img src={photo} alt="logo" className="w-20 p-1 rounded-t-full "/>

        </div>
        <div className="flex flex-col ">
          <div className="flex-auto text-xs text-gray-400 my-1">
            <span className="mr-1">arr date</span>
          </div>
          <div className="w-full flex-none text-lg text-blue-800 font-bold leading-none">GPT</div>
          <div className="text-xs">Gulfport</div>

        </div>
      </div>
      <hr className=" border-solid w-full h-5 border-[#9aa0a6] border-b-2 my-5 pt-5"/>
							
      <div className="flex items-center mb-5 p-5 text-sm">
        <div className="flex flex-col">
          <span className="text-sm">Train</span>
          <div className="font-semibold">TrainName</div>

        </div>
        <div className="flex flex-col ml-auto">
          <span className="text-sm">Station</span>
          <div className="font-semibold">Name</div>

        </div>
      </div>
      <div className="flex items-center mb-4 px-5">
        
        <div className="flex flex-col text-sm">
          <span className="">Departs</span>
          <div className="font-semibold">11:30Am</div>

        </div>
        <div className="flex flex-col ml-auto text-sm">
          <span className="">Arrived</span>
          <div className="font-semibold">2:00PM</div>

        </div>
      </div>
      
      <div className="flex items-center px-5 pt-3 text-sm">
        <div className="flex flex-col">
          <span className="">Passanger</span>
          <div className="font-semibold">Name</div>

        </div>
        <div className="flex flex-col mx-auto">
          <span className="">SeatType</span>
          <div className="font-semibold">Coach</div>

        </div>
        <div className="flex flex-col mb-4">
          <span className="">Seat</span>
          <div className="font-semibold">12 E</div>

        </div>
      </div>
    
      <div className="flex flex-col justify-center text-sm mt-6">
        <h6 className="font-bold text-center">Boarding Pass</h6>

        <div className="h-14 w-0  mt-4"></div>
      </div>
    
      <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
  <div className='flex flex-row items-center'>
    <button
      className="flex items-center justify-center bg-yellow-600 mr-2 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      onClick={handleDownload}
    >
      <MdPrint className="mr-2" />
      Download Ticket
    </button>
  </div>
  <button
    className="flex items-center justify-center px-4 py-2 font-bold   text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
  >
    <MdSend className="mr-2" />
    Send to Address
  </button>
</div>
</div>
    </div> 
  );
};

export default Ticket;