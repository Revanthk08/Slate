import React from 'react'
import '../index.css';
import logo from '../assets/logo.svg';
const Login = () => {
  return (
    <div className='container w-[100%] '>
        <div className="heading">
            <img src={logo} alt="logo" />
            <h1 className='font-display text-xl text-heading1'>Sign in to <span className='text-orange'>Slate.</span></h1>
        </div>
        <div className="rect">
            <div className="manual  border-black ">
                <input className='w-[542.92] h-[80px] flex-shrink-0 rounded-l ' type="text" name="username" />
                <input type="password" name="password" />
                <button>Login</button>
            </div>
            <div className='slash'>
            </div>
            <div className="authservices">
                <button type='button'>Google</button>
                <button type="button">Apple</button>
                <button type="button">Facebook</button>
            </div>
        </div>
        <div className="bottom">
            <p className='text-common text-nm+'>Aren't you into Slate?<span className='text-orange text-nm+ cursor-pointer font-display'>Join in.</span></p>
        </div>
    </div>
  )
}

export default Login