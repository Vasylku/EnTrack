
import { SiEthereum} from "react-icons/si";
import React, { useContext, useState} from "react";
import{BsInfoCircle} from "react-icons/bs";


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center text-black items-center border-[0.5px] border-gray-400 text-sm font-light";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-black border-none text-sm white-glassmorphism"
    />
);
/* const [formData, setFormData] = useState({
    From: "",
    To: "",
    DepartDate: "",
    ReturnDate: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "DepartDate" || name === "ReturnDate" ? new Date(value).toLocaleDateString() : value,
    });
  }; */
const Welcome =()=> {
    const handleSubmit = (e) => {

    };

    return (
     <div className="flex w-full justify-center items-center">
<div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
    <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 className="text-3xl sm:text-5xl text-black text-gradient py-2">
            Discover the Convenience of Travel<br />
        </h1>
        <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">

            Book your next adventure.
        </p>
        <div className="grid sm:grid-cols-5 grid-cols-5 w-full mt-4 ">
            <div className={ `rounded-none ${companyCommonStyles}`}>
  Station
            </div>
            <div className={companyCommonStyles}>End Location</div>
            <div className={ `sm:rounded-none ${companyCommonStyles}`}>
                Depart
            </div>
            <div className={ `sm:rounded-none ${companyCommonStyles}`}>
           Travel time
            </div>
            <div className={ `sm:rounded-none ${companyCommonStyles}`}>
                <button> Arrive</button>
            </div>
            <div className={companyCommonStyles}>data</div>
            <div className={companyCommonStyles}>data</div> <div className={companyCommonStyles}>data</div><div className={companyCommonStyles}>data</div>
            <div className={ `rounded-none ${companyCommonStyles}`}>
             data
            </div>
        </div>
    </div>

    <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                        <SiEthereum fontSize={21} color="#fff" />
                    </div>
                    <BsInfoCircle fontSize={17} color="#fff" />
                </div>
                <div>
                    <p className="text-white font-light text-sm">

                    </p>
                    <p className="text-black font-semibold text-lg mt-1">
                       Plan Your Journey
                    </p>
                </div>
            </div>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="From" name="From" type="text"  />
            <Input placeholder="To" name="To" type="text"  />
            <Input placeholder="Depart Date" name="DepartDate" type="date"   />
            <Input placeholder="Return Date" name="ReturnDate" type="date"   />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

                    <button
                        type="button"

                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                       Search
                    </button>

        </div>
    </div>
    </div>

</div>
    );





}
export default Welcome;