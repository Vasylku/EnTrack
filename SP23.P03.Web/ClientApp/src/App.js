import logo from './logo.svg';
import './App.css';
import {  useState,useEffect } from 'react';


function MyList(){
  const[getStations,setStations] = useState([]);
  useEffect(()=>{
    fetch("/api/stations")
    .then((x) => x.json())
    .then((x) => {
    setStations(x);
    }); 
  },[]);
  return (
    <div>
  <ul>     
    {getStations.map((x) => (
      <li key= {x.id}> {x.name}{""}
      </li>
    ))}
   </ul>
   </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
        </p>
      <MyList/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
    </div>
  );
}

export default App;
