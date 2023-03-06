import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
    <Link to={"/"} className='nav__child'>
    <p className='nav_p'>Home</p>  
    </Link>
    <Link to={"/student"} className='nav__child'>
    <p className='nav_p'>Student</p>  
    </Link>
    <Link to={"/contactUs"} className='nav__child'>
    <p className='nav_p'>Contact</p>  
    </Link>
  </div>
  )
}

export default Nav