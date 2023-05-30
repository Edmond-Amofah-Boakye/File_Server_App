import { Link } from 'react-router-dom'
import '../styles/Signup.css'

const Signup = () => {
  return (
    <>
        <div className="signup-wrapper">
            <div className="header-color"></div>
            <div className="signup-form">
                <h3>Sign Up</h3>
                <form action="">
                   <div className="username">
                        <input type="text" placeholder='Username' />
                   </div>
                   <div className="email">
                     <input type="email" placeholder='Email' />
                   </div>
                   <div className="password">
                     <input type="password" placeholder='Password' />
                   </div>
                   <div className="singup-btn">
                     <button>Sign up</button>
                   </div>
                   <div className="terms">
                    <p>Already have an account? <Link to="/signin">Login</Link></p>
                   </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup