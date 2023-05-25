import { Link } from 'react-router-dom'
import '../styles/Signup.css'

const Signup = () => {
  return (
    <>
        <div className="signup-wrapper">
            <div className="header-color"></div>
            <div className="signup-form">
                <h3>Sign Up</h3>
                <p className='message'>Let us get started, Are you ready to be part of something new? Then bodly move forward with us </p>
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
                   <div className="news-letter">
                     <input type="checkbox" id='news-letter'/>
                     <label htmlFor="news-letter">I agree to the newsletter</label>
                   </div>
                   <div className="singup-btn">
                     <button>Sign up</button>
                   </div>
                   <div className="terms">
                    <p>By signing up to create an account, I accpet <br /> <span>Terms of Use</span> and <span>Privacy Policy</span></p>
                    <p>Already have an account? <Link to="/signin">Login</Link></p>
                   </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signup