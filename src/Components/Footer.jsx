import React from 'react'
import '../index.css'

const Footer = () => {
  return (
    <div className='footer'>
          <div id="footer-top">
            <div id="left">
              <h2>Work</h2>
              <h2>Studio</h2>
              <h2>Contact</h2>
            </div>
            <div id="right">
              <h3>Get industry insights and creative inspiration straight to your inbox.</h3>
              <input type="email" placeholder='Email address'/>
            </div>
          </div>
          <h1>Sundown</h1>
          <div id="footer-bottom">
            <p>Copyright © Sundown Studio</p>
            <p>Brooklyn, NY</p>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
  )
}

export default Footer