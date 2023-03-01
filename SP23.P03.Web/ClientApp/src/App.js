
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
                    <Navbar/>
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/destinations" element={<Dest/>} />
        <Route path="/payment" element={ <PaymentForm/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element ={<NotFound/>}/>
     </Routes>

</BrowserRouter>
           <Service/>
    <Footer/>
            </div>

            </div>
          
    );
}

export default App;
