import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import menu_icon from '../../assets/menu.png';
import { Link } from 'react-router-dom';


function NavBar({setSideBar}) {
  return (
     <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img src={menu_icon} alt="Brand Name" onClick={() => setSideBar(prev=>prev===false?true:false)} className="menu_icon" />        
      <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" placeholder="Search" className="search-input" />
        <img src={search_icon} alt="Search" className="search-icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" className="upload-icon" />
        <img src={more_icon} alt="More" className="more-icon" />
        <img src={notification_icon} alt="Notification" className="notification-icon" />
        <img src={profile_icon} alt="Profile" className="user-icon" />
      </div>
    </nav>
  )
}

export default NavBar
