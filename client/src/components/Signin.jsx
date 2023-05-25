import { Link } from 'react-router-dom'
import {TfiEmail} from "react-icons/tfi"
import {FaKey} from "react-icons/fa"

import '../styles/Signin.css'

const Signin = () => {
  return (
    <>
        <div className='sign-wrapper'>
            <div className="signup-form-wrapper">
                <form action="">
                    <h4>Login Here</h4>
                    <div className="email-input">
                        <TfiEmail className='email-icon'/>
                        <input type="email" required />
                    </div>
                    <div className="password-input">
                        <FaKey className='email-icon'/>
                        <input type="password" required />
                    </div>
                    <div className="forgot-password">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    <div className="login-btn">
                        <button>Login</button>
                    </div>
                    <div className="no-account">
                        <p>Do not have an account yet? <Link to="/signup"> Create Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signin