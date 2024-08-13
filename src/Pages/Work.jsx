import React, { useEffect } from 'react'
import "../work.css"
import "../index.css"
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"

import locomotiveScroll from "locomotive-scroll"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const Work = () => {

    const scrollRef = React.createRef();

    useEffect(() => {
        const scroll = new locomotiveScroll({
          el: scrollRef.current,
          smooth: true
        });
      });


  return (
    <>
    <div ref={scrollRef} id='fullPage'>
    <div id="menu-overlay">
          <div id="menu">
            <a href="/work">WORK</a>
            <a href="/studio">STUDIO</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
        <Navbar/>
        <div id="center">
            <div id="moving-circle"></div>
            <h2>WORK</h2>  
            <div id="buttons">
                    <button id='btn-1'>All</button>
                    <button id='btn-2'>Experiential</button>
                    <button id='btn-3'>Experiment</button>
                    <button id='btn-3'>Digital</button>
            </div>   
        </div>
        <div className="works">
            <div id="work1">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1607_20220301_starch_kith_1011824-Edit.webp" alt="" />
            </div>
            <div id="work2">
            <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/928793354/rendition/1080p/file.mp4?loc=external&amp;signature=70f8634d25c34b3de7e26d9300daee81a85bd2271daf5eb907af88fbcf168217" data-wf-ignore="true"></video>
            </div>
            <div id="work3">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp" alt="" />
            </div>
        </div>
        

        <div id="center-bottom"></div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Work