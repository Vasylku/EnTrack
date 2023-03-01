
import React from "react";


    const Footer = () => (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img  alt="" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">News & Media</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Baggage Policy & Service</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Unique Experience</p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">Mobile App</p>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Subscribe today to receive flash sales, promotions and special offers by email.</p>
                <p className="text-white text-sm text-center font-medium mt-2">www.com</p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">train_too-too.com</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>
    );

    export default Footer;





/* import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-content">
      <div className="logo-container">
        <img  alt="logo" className="logo" />
      </div>
      <div className="nav-links">
        <p className="nav-link">Home</p>
        <p className="nav-link">Booking</p>
        <p className="nav-link">Info</p>
        <p className="nav-link">Travel</p>
      </div>
    </div>
    <div className="contact-info">
      <p className="info-text">Easy book and travel expirience</p>
      <p className="info-email">info@Totrainbook.com</p>
    </div>
    <div className="footer-divider"></div>
    <div className="footer-bottom">
      <p className="footer-text-left">TrainBook2023</p>
      <p className="footer-text-right">All rights reserved</p>
    </div>
  </div>
);

export default Footer; */