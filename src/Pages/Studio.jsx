import React, { useEffect } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../studio.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import locomotiveScroll from "locomotive-scroll"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"

const Studio = () => {

    const scrollRef = React.createRef();

    useEffect(() => {
        const scroll = new locomotiveScroll({
          el: scrollRef.current,
          smooth: true
        });
      });

      const tl = gsap.timeline()

      useGSAP(() => {
        tl.from("#circle", {
            duration: 1,
            y:200,
            opacity:0
        })
        tl.from("#text h1", {
            duration: 0.6,
            y:100,
            opacity:0
        })
        tl.from("#text h2", {
            duration: 0.6,
            y:100,
            opacity:0,
            
        })
        tl.from("#text h3", {
            duration: 0.6,
            y:100,
            opacity:0
        })
        tl.from("#page1-bottom img", {
            duration: 0.6,
            y:100,
            opacity:0
        })
        tl.from("#create-section h1", {
            duration: 2,
            delay:1,
            y: 200,
            opacity: 0
        });
        tl.from("#create-section h5", {
            duration: 1,
            y: 100,
            opacity: 0
        });
        tl.from("#create-section #list", {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger:0.3
        });

        tl.from("#produce-section h1", {
            duration: 1,
            y: 200,
            opacity: 0
        });
        tl.from("#produce-section h5", {
            duration: 1,
            y: 100,
            opacity: 0
        });
        tl.from("#produce-section #list", {
            duration: 1,
            y: 80,
            opacity: 0,
            stagger:0.3
        });
        
        
        
      })

      
  return (
    <>
    <div ref={scrollRef} id="main">
        
        <div id="page1">
        <Navbar/>
            <div id="page1-top">
                    <div id="circle"></div>
                    <div id="text">
                        <h1>TURNING</h1>
                        <h2>IDEAS INTO</h2>
                        <h3>REALITY</h3>
                    </div>
            </div>
            <div id="page1-bottom">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e2_Studio%20Image.webp" alt="" />

                <h4>We love creating experiences from<br/> idea to install, but are also comfortable<br/> jumping into a project at any point in <br/> the process, from Creative, to Design, <br /> to Project Management and Implementation.</h4>
            </div>
            
            
        </div>
        <div className="page2">
            <div id="create-section">
            <div id="top">
                <h1>CREATE</h1>
            </div>
            <div id="bottom">
                <div id="left">
                    <h5>Crafting the concepts and experiences. Connecting the dots and amplifying the story.</h5>
                </div>
                <div id="right">
                    <div id="list-container">
                        <div id="list">
                            <p>01</p>
                            <p>Strategy & Ideation</p>
                        </div>

                        <div id="list">
                            <p>02</p>
                            <p>Concept Development</p>
                        </div>

                        <div id="list">
                            <p>03</p>
                            <p>Environmental Design</p>
                        </div>

                        <div id="list">
                            <p>04</p>
                            <p>Graphic Design</p>
                        </div>

                        <div id="list">
                            <p>05</p>
                            <p>Visual Merchandising</p>
                        </div>

                        <div id="list">
                            <p>06</p>
                            <p>Concept Development</p>
                        </div>

                        <div id="list">
                            <p>07</p>
                            <p>3D Renderings</p>
                        </div>

                        <div id="list">
                            <p>08</p>
                            <p>Consumer Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div id="produce-section">
            <div id="top">
                <h1>PRODUCE</h1>
            </div>
            <div id="bottom">
                <div id="left">
                    <h5>Production, strategy, partnership, and materials. The end point is more than the sum of its parts.</h5>
                </div>
                <div id="right">
                    <div id="list-container">
                        <div id="list">
                            <p>01</p>
                            <p>Project Management</p>
                        </div>

                        <div id="list">
                            <p>02</p>
                            <p>Budget Ownership</p>
                        </div>

                        <div id="list">
                            <p>03</p>
                            <p>Technical Drawings</p>
                        </div>

                        <div id="list">
                            <p>04</p>
                            <p>Digital & Technology Integration</p>
                        </div>

                        <div id="list">
                            <p>05</p>
                            <p>Custom Fabrication</p>
                        </div>

                        
                    </div>
                </div>
            </div>
            </div>
            
        
            <h4><div id='circle'></div>WHO WE WORK WITH</h4>
            <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
      >
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.</p>         
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.</p>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent.png" loading="lazy" alt="" sizes="(max-width: 991px) 140px, 14vw" srcset="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-500.png 500w, https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-800.png 800w, https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-1080.png 1080w, https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-1600.png 1600w, https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent-p-2000.png 2000w, https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/660eb758d7f9942fd6b69202_the-north-face-1-logo-png-transparent.png 2400w" class="slider-main_logo custom_cursor"/>
        <p>Creative Concepting, 2D & 3D Design, Design Management for work in NYC and across the country.</p>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.</p>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.</p>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.</p>
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg" loading="lazy" alt="" class="slider-main_logo custom_cursor"/>
        <p>Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.</p>
        </SwiperSlide>
        

            </Swiper>    

            
        </div>
    </div>

    <div id="page5"></div>
    <div id='footer'>
      <Footer/>
    </div>
    </>
  )
}

export default Studio