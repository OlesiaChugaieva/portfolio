import React from 'react'
import { NavLink as Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className='navbar_logo'>
            <Link to="/" className={''}>Portfolio</Link>
        </div>
        <ul>
            
          <li>
            <Link to="/" className={({ isActive }) => isActive? "active": ''} end>Home</Link>
          </li>
          <li>
            <Link to="about" className={({ isActive }) => isActive? "active": ''}>About</Link>
          </li>
          <li>
            <Link to="portfolio" className={({ isActive }) => isActive? "active": ''}>Portfolio</Link>
          </li>
          <li>
            <Link to="contact" className={({ isActive }) => isActive? "active": ''}>Contact</Link>
          </li>
          <li>
            <Link to="resume" className={({ isActive }) => isActive? "active": ''}>Resume</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar


