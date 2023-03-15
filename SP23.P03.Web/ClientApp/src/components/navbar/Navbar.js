import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai';
import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import im from "../../images/im.jpg";
import {useAuth} from '../../context/AuthenticationProvider';
const NavBarItem = ({ title, classProps, path, onClick }) => (

    <li className={`mx-4 cursor-pointer hover:text-black ${classProps}`} onClick={onClick}>{title}</li>

);


const Navbar = () => {
    const { user, logout} = useAuth();
    const navigate = useNavigate();
    const handlePath = path => {
        navigate(path);

    }
    const [toggleMenu, setToggleMenu] = useState(false);
  
    return (
        <div className="w-full flex md:justify-center justify-between items-center p-4 bg-gradient-to-r from-neutral-200 to-stone-300">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={im} alt="logo" className="w-64 rounded-full opacity-100 hover:opacity-50 cursor-pointer" />
      </div>
            <ul className="text-black  md:flex hidden list-none flex-row justify-between items-center flex-auto ">

                {[
                    { title: "Home", path: "/" },
                    { title: "Destinations", path: "/destinations" },
                    { title: "Experience", path: "/expirience" }
                ].map((item, index) => (
                    <NavBarItem key={item + index} title={item.title} path={item.path} onClick={() => handlePath(item.path)} />
                ))}
                 {user ? ( <li className="bg-[#b8860b] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f0e68c]" onClick={logout}>
                Logout
              </li>
            ) : (
                <li className="bg-[#b8860b] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#f0e68c]" onClick={() => navigate('/login')}>
                    Login
                </li>)}
            </ul>
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img alt="" className="w-22 cursor-pointer" />
            </div>
            <div className="flex relative">
                {!toggleMenu && (
                    <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                )}
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                        {[
                            { title: "Home", path: "/" },
                            { title: "Destinations", path: "/destinations" },
                            { title: "Experience", path: "/expirience" }
                        ].map((item, index) => (
                            <NavBarItem key={item + index} title={item.title} path={item.path} onClick={() => handlePath(item.path)} classProps="my-2 text-lg" />
                        ))}
                    </ul>

                )}

            </div>

        </div>
    );


};
export default Navbar;
