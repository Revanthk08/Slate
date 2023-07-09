import React from 'react'
import '../index.css';
const Login = () => {
  return (
    <div className='container'>
        <div className="heading">
            <img src="" alt="" />
            <h1>Sign in to <span>Slate.</span></h1>
        </div>
        <div className="rect">
            <div className="manual">
                <input type="text" name="username" />
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
            <p>Aren't you into Slate?<span className='join'>Join in.</span></p>
        </div>
    </div>
  )
}

export default Login