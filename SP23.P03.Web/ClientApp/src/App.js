import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/home/Welcome";
// import Dest from './components/destinations/dest';
import PaymentForm from "./components/payment/PaymentForm";
import LoginPage from "./components/authentication/Login";
import Service from "./components/service_card/services";
import NotFound from "./components/not_found/NotFound";
import NewsMediaPage from "./components/news_media/MediaNew";
import BaggagePolicy from "./components/baggage/BaggagePolicy";
import Dashboard from "./components/dashboard/dashboard";
import BookingDetails from "./components/booking/BookingDetails";
import ErrorBoundary from "./components/errors/errorBoundary";
import { AuthProvider } from "./context/AuthenticationProvider";
import Ticket from "./components/ticket/Ticket";
import SeatPicker from "./components/seatpicker/SeatPicker";

function App() {
	const [bookingData, setBookingData] = useState(null);
	const [details, setDetails] = useState(null);
	const [approve, setApprove] = useState(null);
	const [code, setCode] = useState();
	const handleConfirmBooking = (data) => {
		setBookingData(data);
	};
	useEffect(() => {
		//	console.log(bookingData);
	}, [bookingData]);

	const handleSaveBookingData = (data) => {
		setDetails(data);
	};
	useEffect(() => {
		//	console.log(details);
	}, [details]);

	const handleApproveBooking = (data) => {
		setApprove(data);
	};
	useEffect(() => {
		console.log(approve);
	}, [approve]);
	const handleCode = (data) => {
		setCode(data);
	};
	useEffect(() => {
		console.log(code);
	}, [code]);
	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<ErrorBoundary>
					<BrowserRouter>
						<AuthProvider>
							<Navbar />
							<Routes>
								<Route path="/" element={<Welcome />} />

								<Route
									path="/payment"
									element={
										<PaymentForm
											saveBookingData={details}
											onApproveBooking={handleApproveBooking}
											onCode={handleCode}
										/>
									}
								/>
								<Route path="/login" element={<LoginPage />} />
								<Route path="/news" element={<NewsMediaPage />} />
								<Route path="/baggage" element={<BaggagePolicy />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route
									path="/booking"
									element={
										<BookingDetails
											bookingData={bookingData}
											onSaveBookingData={handleSaveBookingData}
										/>
									}
								/>
								<Route
									path="/ticket"
									element={<Ticket data={approve} code={code} />}
								/>
								<Route
									path="/seatpicker/:id1/:id2?"
									element={
										<SeatPicker onConfirmBooking={handleConfirmBooking} />
									}
								/>
								<Route path="*" element={<NotFound />} />
							</Routes>
						</AuthProvider>
						<Service />
						<Footer />
					</BrowserRouter>
				</ErrorBoundary>
			</div>
		</div>
	);
}

export default App;
