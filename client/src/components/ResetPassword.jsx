import '../styles/ResetPassword.css'
import {FaKey} from "react-icons/fa"

const ResetPassword = () => {
  return (
    <>
    <div className="reset-wrapper">
        <div>
            <div className="signup-form-wrapper">
                <form action="">
                    <h4>Password Reset</h4>
                        <h3 className='password-heading'>New Password</h3>
                    <div className="password-input">
                        <FaKey className='email-icon'/>
                        <input type="password" required />
                    </div>
                        <h3 className='password-heading'>Repeat Password</h3>
                    <div className="password-input">
                        <FaKey className='email-icon'/>
                        <input type="password" required />
                    </div>
                    <div className="login-btn">
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default ResetPassword