import React, {useState} from 'react'
import {TfiEmail} from "react-icons/tfi"
import {ImNotification} from "react-icons/im"
import {BiArrowBack} from "react-icons/bi"
import '../styles/ForgotPassword.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    console.log(email);
    
  return (
    <>
    <div className='forgot-wrapper'>
        <div className="header-color"></div>
            <div className="forgot-form-wrapper">
                <div className="forgot-icon">
                   <ImNotification  className='forgot-ic'/>  
                </div>
                <form action="">
                    <h3>Forgot Password</h3>
                    <p>Enter your email and we will send you a link to reset your password</p>
                    <div className="email-input">
                    {email.length == 0 ? <TfiEmail className='email-icon'/> : ""} 
                        <input type="email" required values={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="forgot-btn">
                        <button>Submit</button>
                    </div>
                </form>
                <div className="back-toLogin">
                    <BiArrowBack />
                    <a href="/signin">Back to login</a>
                </div>
            </div>
    </div>
    </>
  )
}

export default ForgotPassword