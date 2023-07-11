import React, { useState } from 'react';
import OTPInput from "otp-input-react";
import '../index.css'
export default function OtpPage() {
  const [otp, setOtp] = useState('');

  return (
    <div className='flex flex-col'>
        <div className='flex justify-start pl-20'>
        <OTPInput
          OTPLength ={6}
          onChange={setOtp}
          otpType = 'number'
          className=' inp w-[3rem] h-[3rem] flex gap-1'
        />

        </div>
        <button className="w-[29rem] h-[3.5rem] bg-orange rounded-lg font-semiBold text-white">
            Verify OTP
          </button>
    </div>
  );
}