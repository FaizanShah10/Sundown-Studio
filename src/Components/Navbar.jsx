import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
       
          <nav>
            <Link to="/"><img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" /></Link>

            <div className='nav-items'>

              <Link className='nav-link' to="/work"><h4><a href="#">Work</a></h4></Link>
              <Link className='nav-link' to="/studio"><h4><a href="#">Studio</a></h4></Link>
              <Link className='nav-link' to="/contact"><h4><a href="#">Contact</a></h4></Link>

            </div>
            <h3>Menu</h3>
          
            </nav>
          
    </>
  )
}

export default Navbar