import React, { useEffect, useRef } from 'react'
import locomotiveScroll from "locomotive-scroll"

import {
  Route,
  BrowserRouter,
  Routes
  
} from "react-router-dom"; 

import Home from './Components/Home';
import Contact from "./Pages/Contact"
import Studio from './Pages/Studio';
import Work from './Pages/Work';

const App = () => {

  const MenuOpenRef = useRef(null)
  //Menu Button Open and Close
  useEffect(() => {
    const menuOpen = MenuOpenRef.current
    const menuOverlay = document.querySelector("#menu-overlay")
    const menuBtn = document.querySelector("nav h3")
    const navImage = document.querySelector("nav img")
    var flag = 0

    const handleMenuOpen = () => {
       if(flag == 0){
        menuOverlay.style.top = 0
        navImage.style.opacity = 0
        flag = 1
       } else{
        menuOverlay.style.top = "-100%"
        navImage.style.opacity = 1
        flag = 0
       }
    }

    menuBtn.addEventListener("click", handleMenuOpen)

    return () => {
      menuBtn.removeEventListener('mouseenter', handleMenuOpen);

    };

  }, [])

  return (
      
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index  element={<Home />}/>
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
        
        
        
      </>
    
  )
}

export default App