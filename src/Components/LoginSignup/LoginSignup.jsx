import React, { useState } from 'react'
import './LoginSignup.css'


import userIcon from '../Assets/person.png'
import emailIcon from '../Assets/email.png'
import passwordIcon from '../Assets/password.png'


export const Loginsignup = () => {

  const [action,setAction] = useState("Login");


  return (
    <div className='container'>
      <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action ==="Login"? <div></div> :
        <div className="input">
          <img src={userIcon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
      </div>
      <div className="inputs">
        <div className="input">
          <img src={emailIcon} alt="" />
          <input type="email" placeholder='Email' />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={passwordIcon} alt="" />
          <input type="password" placeholder='Password' />
        </div>
      </div>
{action === "Sign Up"? <div></div> :
<div className="forgot-password">Lost password ? <span>click here</span></div>}
      <div className="submit-container">
      <div className={ action === "Login" ? "submit gray": "submit"}  onClick={()=>setAction("Sign Up")}  >Sign Up</div>      
      <div className={action === "Sign Up" ? "submit gray": "submit"} onClick={()=>setAction("Login")} >Log In</div>      

      </div>

    </div>
  )
}
