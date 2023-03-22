import React from "react";
import { BsCheckSquare} from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";


const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                {subtitle}
            </p>
        </div>
    </div>
);

const Services = () => (
    <div className="flex w-full justify-evenly items-center bg-[#171717]">
        <div className="flex md:flex-row flex-col gap-48 items-center justify-between md:p-20 py-12 px-4">
            <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2  ">
                    Services that we
                    <br />
                    continue to improve
                </h1>
                <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                    The best choice for booking next adventure.
                </p>
            </div>

            <div className="flex-none m-3 justify-start items-center">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Expirience"
                    icon={<BsCheckSquare fontSize={21} className="text-white" />}
                    subtitle="Best experience with the joy of traveling."
                />
                <ServiceCard
                    color="bg-[#003d00]"
                    title="Best booking prices"
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Save Time. Save Money. Save the Environment."
                />


            </div>
        </div>
    </div>
);

export default Services;