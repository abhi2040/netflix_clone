import React from 'react'
import logo from "../../logo.png";
import { Link } from 'react-router-dom';
import {ImSearch} from "react-icons/im";
import {HiOutlineBell} from "react-icons/hi";


const Header = () => {
  return (
    <nav className="header">
        <img src={logo} alt="netflix_logo" />

        <div>
            <Link to="/home">Home</Link>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/new&popular">New & Popular</Link>
            <Link to="/mylist">My List</Link>
            <Link to="/browsebylang">Browse by Languages</Link>
        </div>
        <ImSearch className='search-icon'/>
        <HiOutlineBell className='notification-icon'/>
        <img className='profile-icon' src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="profile_logo" />
    </nav>
  )
}

export default Header