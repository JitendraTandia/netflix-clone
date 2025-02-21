import React, { useState } from "react";
import logo from "../netflix_react_assets/logo.png";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="h-[100vh] bg-linear from-[#0000004e] to-[#0000007e] bg-[url(netflix_react_assets/background_banner.jpg)] py-[20px] px-[8%]">

      <img id="login-logo" className="w-[150px]" src={logo} alt="" />
      <div
        id="login-form"
        className="max-w-[450px] bg-black bg-opacity-65 p-[60px] w-full rounded-lg mx-auto"
      >
        <h1 className="font-semibold text-[32px] mb-[28px]">{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input
              className="w-full h-[50px] rounded-[4px] px-[16px] py-[20px] outline-none bg-[#333] mt-[12px] font-[16px]"
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}

          <input
            className="w-full h-[50px] rounded-[4px] px-[16px] py-[20px] outline-none bg-[#333] mt-[12px] font-[16px]"
            type="email"
            placeholder="Your Email"
          />
          <input
            className="w-full h-[50px] rounded-[4px] px-[16px] py-[20px] outline-none bg-[#333] mt-[12px] font-[16px]"
            type="password"
            placeholder="Your Password"
          />
          <button className="w-full rounded-lg outline-none p-[16px] bg-[#e50914] text-white text-[16px] mt-[20px] cursor-pointer mx-auto">
            {signState}
          </button>
          <div
            id="form-help"
            className="flex items-center justify-between  text-[13px]"
          >
            <div
              id="remember"
              className="flex items-center gap-[5px] mt-2 text-gray-200"
            >
              <input className="w-[15px] h-[15px]" type="checkbox" />
              <label className=" h-[18px]" htmlFor="">
                Remember Me
              </label>
            </div>
            <p className="text-gray-200">Need Help?</p>
          </div>
        </form>

        <div id="form-switch" className="mt-[40px]">
          {signState === "Sign In" ? <p className="text-zinc-500">
            New to Netflix
            <span onClick={()=>{setSignState("Sign Up")}} className="text-white ml-[6px] cursor-pointer">
              Sign Up Now
            </span>
          </p> : <p className="text-zinc-500">
            Already have account?
            <span onClick={()=>{setSignState("Sign In")}} className="text-white ml-[6px] cursor-pointer">
             
              Sign In Now
            </span>
          </p>}
          
          
        </div>
      </div>
    </div>
  );
};

export default Login;
