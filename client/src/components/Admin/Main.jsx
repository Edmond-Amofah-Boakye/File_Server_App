/* eslint-disable react/prop-types */
import '../../styles/Admin/Main.css'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { Outlet } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";



const Main = ({ menuInflate }) => {
  return (
  <div className="dashboard">
    <div className="top">
        <AiOutlineMenu className=" sidebar-toggle" onClick={menuInflate}/>
        <div className="search-box">
            <AiOutlineSearch className="search-icon" />
            <input type="text" />
        </div>
      <AiOutlineLogout className="icon " style={{margin: "0 2rem"}} />    
    </div>
    <div><Outlet /></div>
</div>
  )
}

export default Main