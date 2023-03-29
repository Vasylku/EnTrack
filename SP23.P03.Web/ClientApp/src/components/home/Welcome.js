
import React, { useState, useEffect} from "react";

import TrainSearchForm from "../searchForm/TrainSearchForm";
import SearchTrainsResult from "../search_station_result/SearchTrainResult";

const Welcome = () => {

    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        console.log(searchData);
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
                <div className="w-full">
                          
               {searchData.map((searchData) =>  {return searchData.schedules.map((data) => ( <SearchTrainsResult key={data.id} searchData={searchData} />));})}
                </div>
               
            </div>
        </div>
    );
}
export default Welcome;

