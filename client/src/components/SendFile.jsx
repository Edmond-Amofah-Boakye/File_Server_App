
const SendFile = () => {
  return (
    <> 
    <div className='sign-wrapper'>
            <div className="signup-form-wrapper send-file">
                <form action="">
                    <h4>Send Files Here</h4>
                    <div className="email-input">
                        <input type="text" required placeholder="WEDDING INVITATION CARD" disabled />
                    </div>
                    <div className="email-input">
                        <input type="email" required placeholder="Enter Recepient's Email Address"/>
                    </div>
                    <div className="password-input">
                        <textarea placeholder="Enter Email Message if any"/>
                    </div>
                    <div className="login-btn">
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SendFile