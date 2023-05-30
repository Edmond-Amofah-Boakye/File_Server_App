/* eslint-disable react/prop-types */
import { AiFillSetting, AiOutlineLogout } from 'react-icons/ai'
import { BsFillMoonFill } from 'react-icons/bs'
import { FaChartBar } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { SiFiles } from 'react-icons/si'
import { HiUsers } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import image1 from '../../assets/img-2.jpg'
import '../../styles/Admin/Sidebar.css'

const Sidebar = ( { menu } ) => {   
  return (
        <nav className={menu ? "close" : ""}>
            <div className="logo-name">
                <div className="logo-image">
                <img src={image1} alt="profile-image" />
                </div>
                <span className="logo_name">Admin</span>
            </div>

            <div className="menu-items">
                <ul className="nav-links">
                    <li><Link>
                        <MdDashboard className="icon" />
                        <span className="link-name">Dahsboard</span>
                    </Link></li>
                    <li><Link>
                        <SiFiles className="icon" />
                        <span className="link-name">Files</span>
                    </Link></li>
                    <li><Link>
                        <HiUsers className="icon" />
                        <span className="link-name">Users</span>
                    </Link></li>
                    <li><Link>
                        <FaChartBar className="icon" />
                        <span className="link-name">Chart</span>
                    </Link></li>
                    <li><Link>
                        <AiFillSetting className="icon" />
                        <span className="link-name">Settings</span>
                    </Link></li>
                </ul>
                
                <ul className="logout-mode">
                    <li><Link> 
                        <AiOutlineLogout className="icon" />
                        <span className="link-name">Logout</span>
                    </Link></li>

                    <li className="mode">
                        <Link>
                            <BsFillMoonFill className='icon' />
                        <span className="link-name">Dark Mode</span>
                    </Link>

                    <div className="mode-toggle">
                    <span className="switch"></span>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
  )
}

export default Sidebar