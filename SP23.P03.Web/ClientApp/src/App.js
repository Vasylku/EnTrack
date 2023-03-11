
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Welcome from './components/home/Welcome';
import Dest from './components/destinations/dest';
import PaymentForm from './components/payment/PaymentForm';
import LoginPage from './components/authentication/Login';
import Service from './components/service_card/services';
import NotFound from './components/not_found/NotFound';
import NewsMediaPage from './components/news_media/MediaNew';
import BaggagePolicy from './components/baggage/BaggagePolicy';
import Dashboard from './components/dashboard/dashboard';
import BookingDetails from './components/booking/BookingDetails';

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
                  
<BrowserRouter>
<Navbar/>
    <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/destinations" element={<Dest/>} />
        <Route path="/payment" element={ <PaymentForm/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/news" element={<NewsMediaPage/>}/>
        <Route path="/baggage" element={<BaggagePolicy/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/booking" element ={<BookingDetails/>}/>
        <Route path="*" element ={<NotFound/>}/>
     </Routes>
     <Service/>
    <Footer/>
</BrowserRouter>
          
            </div>

            </div>
          
    );
}

export default App;
