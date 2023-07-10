import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import google from "../assets/google_logo.svg";
import apple from "../assets/apple-logo.svg";
import facebook from "../assets/facebook-logo.svg";
const Signup = () => {
  return (
    <div className="container w-[100%] ">
      <div className="flex items-center gap-4">
        <img src={logo} className="w-[6rem] h-[6rem]" alt="logo" />
        <h1 className="text-xl text-heading1 font-Bold">
          Sign in to <span className="text-orange">Slate.</span>
        </h1>
      </div>
      <div className="flex gap-10">
        <div className=" flex flex-col  border-black gap-7 ">
          <input
            className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
            placeholder="Username"
            type="text"
            name="Email ID"
          />
          <input
            className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
            type="Password"
            placeholder="Password"
            name="password"
          />
          <input
            className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
            type="Password"
            placeholder="Re-enter Password"
            name="password"
          />
          <button className="w-[29rem] h-[3.5rem] bg-orange rounded-lg font-semiBold text-white">
            Sign up
          </button>
        </div>
        <div className="flex items-center">
          <p className="text-heading1 font-Bold text-xl">/</p>
        </div>
        <div className="flex flex-col gap-7 justify-center">
          <div>
            <button
              className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8]"
              type="button"
            >
              <img src={google} className="w-[2.5rem] h-[2.5rem]" alt='google'></img>Sign in with
              Google
            </button>
          </div>
          <div>
            <button
              className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8]"
              type="button"
            >
              <img src={apple} className="w-[2.5rem] h-[2.5rem]"alt='google'></img>
              Sign in with Apple
            </button>
          </div>
          <div>
            <button
              className="inline-flex items-center gap-2 justify-center w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold text-[#B8B8B8] "
              type="button"
            >
              <img src={facebook} className="w-[2.5rem] h-[2.5rem]"alt='google'></img>
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
      <div className="bottom mb-8">
        <p className="text-common text-nm font-semiBold">
          Aren't you into Slate?{" "}
          <span className="text-orange cursor-pointer font-semiBold">
            Join in.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;