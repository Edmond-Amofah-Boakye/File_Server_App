/* eslint-disable react/prop-types */
import '../../styles/Admin/Main.css'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'
import image1 from '../../assets/img-2.jpg'
import Settings from './Settings'
import MainDetails from './MainDetails'

const Main = ({ menuInflate }) => {

  const location = useLocation()
  console.log(location.pathname);

  return (
  <div className="dashboard">
    <div className="top">
        <AiOutlineMenu className=" sidebar-toggle" onClick={menuInflate}/>
        <div className="search-box">
            <AiOutlineSearch className="search-icon" />
            <input type="text" placeholder="Search here..." />
        </div>
        <img src={image1} alt="profile-picture" />
    </div>

    <MainDetails />
    <Settings />
   
</div>
  )
}

export default Main