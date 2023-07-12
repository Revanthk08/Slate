import React, { useState, useEffect } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import ThirdParty from "./Thirdparty";
const Signup = () => {
  const [gmail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCpassword = (e) => {
    setCpassword(e.target.value);
  };
  const handleSubmit = (e) => {
    setErrors(Validate(gmail, password, cpassword));
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      //backend code idhar likhna hoga shayad
      // console.log(username, password);
    }
  }, [errors]);

  const Validate = (email, pass, pass2) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!pass) {
      errors.password = "Password is required";
    } else if (pass.length < 8) {
      errors.password = "Password must be more than 8 characters";
    }

    if (!pass2) {
      errors.repass = "Password confirmation required !";
    } else if (pass !== pass2) {
      errors.repass = "Passwords do not match!";
    }
    return errors;
  };
  return (
    <div className="container2 w-[100%] ">
      <div className="flex items-center gap-4">
        <img src={logo} className="w-[6rem] h-[6rem]" alt="logo" />
        <h1 className="text-xl text-heading1 font-Bold">
          Sign in to <span className="text-orange">Slate.</span>
        </h1>
      </div>
      <div className="flex gap-10">
        <div className=" flex flex-col  border-black gap-7 ">
          <div>
            <input
              className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
              placeholder="Email ID"
              type="email"
              name="Email ID"
              onChange={(e) => handleMail(e)}
            />
            <p className="font-reg text-nm text-orange pl-2">
              {errors.email}
            </p>
          </div>
          <div>
            <input
              className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
              type="Password"
              placeholder="Password"
              name="password"
              onChange={(e) => handlepassword(e)}
            />
            <p className="font-reg text-nm text-orange pl-2">
              {errors.password}
            </p>
          </div>
          <div>
            <input
              className="w-[29rem] h-[3.5rem] bg-[#232223] rounded-lg font-semiBold pl-5 text-white placeholder-placeholder"
              type="Password"
              placeholder="Re-enter Password"
              name="password"
              onChange={(e) => handleCpassword(e)}
            />
            <p className="font-reg text-nm text-orange pl-2">
              {errors.repass}
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-[29rem] h-[3.5rem] bg-orange rounded-lg font-semiBold text-white"
          >
            Sign up
          </button>
        </div>

        <ThirdParty />
      </div>
      <div className="bottom mb-8">
        <p className="text-common text-nm font-semiBold">
          Are you into Slate? {" "}
          <span className="text-orange cursor-pointer font-semiBold" >
            Join back.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
