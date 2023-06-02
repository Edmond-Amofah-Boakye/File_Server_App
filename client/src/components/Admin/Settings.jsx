import "../../styles/Admin/Settings.css";
import defaultImage from '../../assets/img-1.jpg'
const Settings = () => {
  return (
    <>
      <div className="settings">
        <div className="signup-wrapper">
          <div className="header-color">
            <h1 className="account-settings">Account Settings</h1>
            <img src={defaultImage} alt="" />
          </div>
          <div className="signup-form">
            <form action="">
              <div className="username">
                <input type="text" placeholder="Username" />
              </div>
              <div className="email">
                <input type="email" placeholder="Email" />
              </div>
              <div className="file">
                <input type="file" />
              </div>
              <div className="singup-btn">
                <button>Save Settings</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
