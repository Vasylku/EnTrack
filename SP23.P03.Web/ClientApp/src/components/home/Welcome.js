
import React, { useState, useEffect} from "react";

import TrainSearchForm from "../searchForm/TrainSearchForm";
import SearchTrainsResult from "../search_station_result/SearchTrainResult";

const Welcome = () => {

    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
      //  console.log(searchData);
        
      }, [searchData]);
    
    const saveFormData = ( responses) => {

        
  
        setSearchData(responses);
        
          }
    
    
  
   
    return (
        <div className="flex w-full justify-center items-center bg-[#202124]">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl  text-gradient py-2">
                        Discover the Convenience of Travel<br />
            
                    </h1>
                    <p className=" mt-5 text-gradient font-300 md:w-9/12 w-11/12 text-2xl">
                        Book your next adventure.
                
                    </p>
                </div>
        
                <div>
                    <TrainSearchForm onSaveFormData={saveFormData} />
                </div>
                {searchData ? (
                <div className="w-full  overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-white dark:text-gray-200 ">
    <thead className="text-xs text-gradient uppercase bg-gray-100">
            <tr>
                <th scope="col" className="px-4 py-3">
                    Departure Station
                </th>
                <th scope="col" className="px-4 py-3">
                    Arrival Station
                </th>
                <th scope="col" className="px-4 py-3">
                  Departure Date
                </th>
                <th scope="col" className="px-4 py-3">
                  Arrival Date
                </th>
            
            </tr>
        </thead>
        <tbody>
                {searchData.map((searchData) => (
           searchData.schedules.map((data)=>  <SearchTrainsResult key= {data.id} searchData={searchData} />)))}</tbody>
           </table>
                </div>
           ) : (
            <p className="text-white">No data available.</p>
          )}
            </div>
        </div>
    );
}
export default Welcome;

