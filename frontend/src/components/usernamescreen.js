import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";

const UsernameScreen = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-9 pb-20">
        <div className="flex justify-center items-center">
          <img src={logo} className="w-[6rem] h-[6rem]" alt="logo" />
          <h1 className="text-orange text-5xl font-Bold ">Slate.</h1>
        </div>
        <div>
          <h1 className="text-center text-[#A7A7A7] text-nm++ text-text">
            One Step Ahead!
          </h1>
          <h1 className="text-center text-[#A7A7A7] text-nm++ text-text">
            Set Your <span className="text-orange">Username</span>
          </h1>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="@username"
            className=" border-none w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white focus:outline-0 placeholder-placeholder"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" w-[13rem] h-[3rem] bg-orange rounded-lg font-semiBold text-white"
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsernameScreen;
