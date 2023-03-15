
import React, { useState } from "react";

import TrainSearchForm from "../searchForm/TrainSearchForm";
import SearchTrainsResult from "../search_station_result/SearchTrainResult";


const Welcome = () => {

    const [searchData, setSearchData] = useState([]);
    const saveFormData = (enteredData) => {

        const formData = {
            ...enteredData,
        };

        setSearchData([...searchData, formData]);
    }
    return (
        <div className="flex w-full justify-center items-center bg-gradient-to-r from-neutral-300 to-stone-300">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black text-gradient py-2">
                        Discover the Convenience of Travel<br />
                    </h1>
                    <p className=" mt-5 text-black font-300 md:w-9/12 w-11/12 text-2xl">
                        Book your next adventure.

                    </p>
                </div>
                <div>
                    <TrainSearchForm onSaveFormData={saveFormData} />
                </div>
                <div className="w-full">

                    {searchData.map((searchData, index) => <SearchTrainsResult key={index} searchData={searchData} />)}
                </div>
               
            </div>
        </div>
    );
}
export default Welcome;

