import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import "../index.css";
import logo from "../assets/logo.svg";
const Otpscreen = () => {
    const [otp, setOtp] = useState('');
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-9 pb-20">
        <div className="flex justify-center items-center pb-20 ">
          <img src={logo} className="w-[6rem] h-[6rem]" alt="logo" />
          <h1 className="text-orange text-5xl font-Bold ">Slate.</h1>
        </div>
        <div>
          <h1 className="text-center text-[#A7A7A7] text-nm++ text-text"></h1>
          <h1 className="text-center text-[#A7A7A7] text-nm++ text-text">
            Confirm your <span className="text-orange">Email Id</span>
          </h1>
        </div>
        <div className="text-center flex flex-row gap-2">
          {/* <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223] " maxLength={1}/>
          <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223]" maxLength={1} />
          <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223]" maxLength={1} />
          <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223]" maxLength={1} />
          <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223]" maxLength={1} />
          <input type="text" className="w-[3rem] h-[3.5rem] rounded-lg text-center text-white font-semiBold bg-[#232223]" maxLength={1} /> */}
<OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      containerStyle={{}}
      renderInput={(props) => <input {...props}  />}
    />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" w-[13rem] h-[3rem] bg-orange rounded-lg font-semiBold text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otpscreen;
