import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../index.css'

const Loader = () => {
     
  useGSAP(() => {
    gsap.from("#loader", {
      top:0,
      delay:4

    })
  })

  return (
    
      <div id="loader">
        <h1>Environments</h1>
        <h1>Experiences</h1>
        <h1>Content</h1>
      </div>
    
  )
}

export default Loader