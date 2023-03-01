import { HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai';
import React, {useState} from "react";




    const NavBarItem = ({ title, classProps}) => (

    <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
  );


    const Navbar = () => {

        const [toggleMenu, setToggleMenu] = useState(false);

return (
   <div className="w-full flex md:justify-center justify-between items-center p-4">
            <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial ">
                {["Home","Destinations", "Experience" ].map((item, index) => (
              <NavBarItem key={item + index} title={item} />
                 ))}
            <li className="bg-[#b8860b] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f0e68c]">
               Login
            </li>
            </ul>
       <div className="md:flex-[0.5] flex-initial justify-center items-center">
           <img  alt="" className="w-22 cursor-pointer"/>
       </div>
       <div className="flex relative">
           {!toggleMenu && (
               <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)}/>
           )}
           {toggleMenu && (
               <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)}/>
           )}
           {toggleMenu && (
               <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                   <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                   {["Home","Destinations", "Experience" ].map((item, index) => (
                       <NavBarItem key={item + index} title={item}
                    classProps="my-2 text-lg" />
                   ) )}
               </ul>
           )}
       </div>
   </div>
);


};
export default Navbar;




/* import { HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import React, {
    useState
} from "react";



    const NavBarItem = ({ title, classProps}) => (

    <li className={`navbar-item-a ${classProps}`}>{title}</li>
  );

    const Navbar = () => {

        const [toggleMenu, setToggleMenu] = useState(false);

return (
   <nav className="navbar">
            <ul className="nav-list">
                {[
                    { title: "Home" },
                    { title: "Destinations" },
                    { title: "Experience" },

                ].map((item, index) => (
                    <NavBarItem
                        key={item.title + index}
                        title={item.title}

                    />
                ))}

            <li className="login-button" >
            Login
            </li>

            </ul>
       <div className="logos">
           <img  alt="logo" />
       </div>
       <div className="nav-menu">
           {!toggleMenu && (
               <HiMenuAlt4 fontSize={28} onClick={() => setToggleMenu(true)}/>
           )}
           {toggleMenu && (
               <AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)}/>
           )}
           {toggleMenu && (
               <ul className="nav-menu-list">
                   <li className="nav-menu-list-item"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                   {[
                       { title: "Home" },
                       { title: "Destinations" },
                       { title: "Experience" },

                   ].map((item, index) => (<NavBarItem
                           key={item.title + index}
                           title={item.title}

                           classProps="menu-list-item-a"
                       />
                   ))}
               </ul>
           )}
       </div>
   </nav>
);


};
export default Navbar;

 */
/* /* import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const NavBarItem = ({ title, classprops }) => (
  <li className={`nav-c ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <ul className="nav-list">
        {["Home", "Booking", "Info", "Travel"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="navbar-button">Login</li>
      </ul>
      <div className="logo-container">
        <img alt="logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
      {!toggleMenu && (
               <HiMenuAlt4 fontSize={28}  onClick={() => setToggleMenu(true)}/>
           )}
           {toggleMenu && (
               <AiOutlineClose fontSize={28} onClick={() => setToggleMenu(false)}/>
           )}
      </div>
      {toggleMenu && (
        <ul >
          <li><AiOutlineClose onClick={() => setToggleMenu(false)}/></li>
          {["Home", "Booking", "Info", "Travel"].map(
            (item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar; */
// Navbar.jsx

/*  import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

const NavBarItem = ({ title }) => <li>{title}</li>;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img  alt="logo" />
      </div>
      <ul className="nav-list">
        {['Market', 'Exchange', 'Tutorials','Wallets'].map((item, index) => (
<NavBarItem key={item + index} title={item} />
))}
<li className="login-button">Login</li>
</ul>
<div className="nav-menu" onClick={handleToggleMenu}>

{!toggleMenu ? <AiOutlineClose /> : <HiMenuAlt4 />}
</div>
{toggleMenu && (
<ul className="mobile-nav-list">
<li className="close-icon" onClick={handleToggleMenu}>
<AiOutlineClose />
</li>
{['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
<NavBarItem key={item + index} title={item} />
))} 
<li className="login-button">Login</li>
</ul>
)}
</nav>
);
};
export default Navbar; */