import React from "react";
import Navbar from "../Components/Navbar";
import hero_banner from "../netflix_react_assets/hero_banner.jpg";
import hero_title from "../netflix_react_assets/hero_title.png";
import play_icon from "../netflix_react_assets/play_icon.png";
import info_icon from "../netflix_react_assets/info_icon.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="hero" className=" ">
        <img id="banner-img" src={hero_banner} className="w-[100%]" alt="" />
        <div id="hero-caption" className="absolute w-[100%] px-[6%] bottom-0">
          <img
            id="caption-img"
            className="w-[90%] max-w-[420px]"
            src={hero_title}
            alt=""
          />
          <p className="max-w-[700px] text-lg mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
            <div id="hero-btns" className="flex h-9 mt-3 gap-3 mb-[50px]">


              <button id="btn" className="border-0 inline-flex px-[20px] text-black items-center gap-[10px] text-sm font-semibold cursor-pointer rounded-md bg-white">
                <img className="w-[25px] " src={play_icon} alt="" />
                Play
              </button>


              <button id="dark-btn" className="border-0 inline-flex px-[20px] text-black items-center gap-[10px] text-sm font-semibold cursor-pointer rounded-md bg-[#6d6d6eb3]" >
                <img className="w-[25px]" src={info_icon} alt="" />
                More Info
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
