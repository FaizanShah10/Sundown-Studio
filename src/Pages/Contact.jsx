import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import "../contact.css"
import "../index.css"

import locomotiveScroll from "locomotive-scroll"

import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const Contact = () => {

  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });

  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.from("#image-part img", {
      duration: 1.5,
      y:80,
      opacity:0
    })
    gsap.from("#text-part h2", {
      duration: 1.5,
      delay:1,
      y:80,
      opacity:0
    })
    gsap.from("#text-part h4", {
      duration: 1.5,
      delay:2,
      y:80,
      opacity:0
    })
    gsap.from("#moving-circle", {
      duration: 1.5,
      delay:2.5,
      y:80,
      opacity:0
    })
    gsap.from("#text-part-2 h3", {
      duration: 1.5,
      delay:3,
      y:80,
      opacity:0,
      stagger:0.5
    })
  })
  return (
    <>
    <div ref={scrollRef} id='container'>
    <div id="menu-overlay">
          <div id="menu">
          <Link className='nav-link' to="/work"><h4><a href="#">Work</a></h4></Link>
              <Link className='nav-link' to="/studio"><h4><a href="#">Studio</a></h4></Link>
              <Link className='nav-link' to="/contact"><h4><a href="#">Contact</a></h4></Link>
          </div>
        </div>
        <Navbar/>
        <div  className='main'>
        
            <div id="image-part">
              <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e3_Sundown-Map-p-1600.jpg" alt="" />
            </div>

            <div id="text-part">
              <h2>LET'S WORK TOGETHER</h2>
              <div id="moving-circle"></div>
              <h4>contact@sundown-studio.com</h4>
              <div id='text-part-2'>
                  <h3>Roots in Greenpoint,Brooklyn</h3>
                  <h3>Physical work across the US</h3>
                  <h3>Digital work across the world</h3>
              </div>
            </div>
       </div>
        
    
    </div>
    <div id="page5"></div>
    <div id='footer'>
      <Footer/>
    </div>
    </>
    
  )
}

export default Contact