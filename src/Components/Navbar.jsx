import React, { useRef } from "react";
import Logo from "../netflix_react_assets/logo.png";
import search_icon from "../netflix_react_assets/search_icon.svg";
import bell_icon from "../netflix_react_assets/bell_icon.svg";
import profile_img from "../netflix_react_assets/profile_img.png";
import caret_img from "../netflix_react_assets/caret_icon.svg";

const Navbar = () => {

    const profileRef = useRef()
    
    


  return (
    <div onMouseLeave={()=>{profileRef.current.classList.add('hidden')}} className="w-[100%] px-[6%] py-[20px] flex justify-between fixed text-sm color-[#e5e5e5] z-10">
      <div id="navbar-left" className="flex items-center gap-[50px]">
        <img src={Logo} className="w-[90px]" alt="" />
        <ul className=" flex gap-[20px] cursor-pointer list-none">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>
      <div className="flex items-center gap-[20px]" id="navbar-right">
        <img className="w-[20px] cursor-pointer" src={search_icon} alt="" />
        <p>Children</p>
        <img className="w-[20px] cursor-pointer" src={bell_icon} alt="" />
        <div onMouseEnter={()=>{profileRef.current.classList.remove('hidden')}} className="flex items-center gap-[10px] cursor-pointer relative" id="navbar-profile">
          <img className="w-[40px]" src={profile_img} alt="" />
          <img className="" src={caret_img} alt="" />


          <div ref={profileRef} className="absolute hidden  text-white bg-[#191919] px-[18px] py-[22px] top-[100%] z-10 rounded-sm top right-0 w-max underline none" id="dropdown" > 
          <p className="text-sm cursor-pointer" > Sign Out of Netflix</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
