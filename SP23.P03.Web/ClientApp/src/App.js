
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/home/Welcome';
// import Dest from './components/destinations/dest';
import PaymentForm from './components/payment/PaymentForm';
import LoginPage from './components/authentication/Login';
import Service from './components/service_card/services';
import NotFound from './components/not_found/NotFound';
import NewsMediaPage from './components/news_media/MediaNew';
import BaggagePolicy from './components/baggage/BaggagePolicy';
import Dashboard from './components/dashboard/dashboard';
import BookingDetails from './components/booking/BookingDetails';
import ErrorBoundary from './components/errors/errorBoundary';
import { AuthProvider } from './context/AuthenticationProvider';
import Ticket from './components/ticket/Ticket';
//import SeatPicker from './components/seatpicker/SeatPicker';
/*import {  useState,useEffect } from 'react';

function MyList(){
  const[getStations, setStations] = useState([]);
  useEffect(()=>{
    fetch('api/stations')
    .then((x) => x.json())
    .then((x) => {
    setStations(x)
  }); 
  },[]);
  console.log(getStations);
  return (
   
  
  <ul>     
    {getStations.map((x) => (
      <li key= {x.id}> {x.name}{""}
      </li>
    ))}
   </ul>
 
 
  );
}*/

function App() {
 

return (
            <div className="min-h-screen">
                <div className="gradient-bg-welcome">
                  <ErrorBoundary>
<BrowserRouter>

<AuthProvider>
<Navbar/>
    <Routes>
        <Route path="/" element={<Welcome/>} />
        {/* <Route path="/destinations" element={<Dest/>} /> */}
        <Route path="/payment" element={ <PaymentForm/>} />
        <Route path="/login" element={<LoginPage/>}/>
        {/* <Route path="/destinations" element={<Dest/>}/> */}
        <Route path="/news" element={<NewsMediaPage/>}/>
        <Route path="/baggage" element={<BaggagePolicy/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/booking" element ={<BookingDetails/>}/>
        <Route path= "/ticket" element ={<Ticket/>}/>
    {/*     <Route path="/seatpicker"  element ={<SeatPicker/> }/> */}
        <Route path="*" element ={<NotFound/>}/>
     </Routes>
     </AuthProvider>
     <Service/>
    <Footer/>
</BrowserRouter>
</ErrorBoundary>  
            </div>

            </div>
          
    );
}

export default App;
