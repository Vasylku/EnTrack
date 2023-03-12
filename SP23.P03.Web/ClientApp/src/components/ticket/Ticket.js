
  import React from 'react';
  import { MdPrint } from 'react-icons/md';
  import { saveAs } from "file-saver";
  import { PDFDocument, Page, Text } from "@react-pdf/renderer";
  
  const Ticket = ({ from, to, date, time, seatNumber }) => {
  /*   const handleDownload = () => {
      // Create a PDF document with ticket details
      const ticketData = { from, to, date, time, seatNumber };
      const TicketData = () => (
        <Document>
          <Page>
            <Text>From: {ticketData.from}</Text>
            <Text>To: {ticketData.to}</Text>
            <Text>Date: {ticketData.date}</Text>
            <Text>Time: {ticketData.time}</Text>
            <Text>Seat Number: {ticketData.seatNumber}</Text>
          </Page>
        </Document>
      );
      
      // Generate the PDF blob
      const pdfBlob = <TicketData />.toBlob();
    
      // Use FileSaver.js to download the PDF
      saveAs(pdfBlob, 'train-ticket.pdf');
    
      // Log the success message
      console.log('Ticket downloaded!');
    }; */
  
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
    <div className="max-w-md mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Train Ticket</div>
        <p className="text-gray-700 text-base">
          <span className="font-bold">From: </span>
          {from}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">To: </span>
          {to}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Date: </span>
          {date}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Time: </span>
          {time}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Seat Number: </span>
          {seatNumber}
        </p>
      </div>
      <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          
        >
          <MdPrint className="mr-2" />
          Download Ticket
        </button>
        <button
          className="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
         // onClick={handleSend}
        >
          Send to Address
        </button>
      </div>
    </div>
  );
};

export default Ticket;