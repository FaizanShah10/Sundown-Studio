import React, { useEffect, useRef } from 'react'
import '../index.css'
import locomotiveScroll from "locomotive-scroll"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from './Navbar';
import Loader from './Loader';
import Footer from './Footer';

const Home = () => {

  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });
  });


  const elemContainerRef = useRef(null)
  const fixedImageRef = useRef(null)
  //Projects Images
  useEffect(() => {
    const elemContainer = elemContainerRef.current
    const fixedImage = fixedImageRef.current
    const elems = document.querySelectorAll(".elem")

    const handleMouseEnter = () => {
      fixedImage.style.display = "block"
    }

    const handleMouseLeave = () => {
      fixedImage.style.display = "none"
    }

    elems.forEach(function(e){
      e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
      })
    })


    elemContainer.addEventListener("mouseenter", handleMouseEnter)
    elemContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      elemContainer.removeEventListener('mouseenter', handleMouseEnter);
      elemContainer.removeEventListener('mouseleave', handleMouseLeave);
    };

    
  }, [])



  return (
    <>
    <Loader/>
    <div  ref={fixedImageRef} className='fixed-image'></div>
   
    <div id="main"  ref={scrollRef}>       

        <div id="menu-overlay">
          <div id="menu">
            <a href="/work">WORK</a>
            <a href="/studio">STUDIO</a>
            <a href="/contact">CONTACT</a>
          </div>
        </div>
          
        
          <div className='page-1'>
          <Navbar/>

          <div className='Landing'>
              <div id='left'>
                  <h3>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
              </div>

              <div id='right'>
                  <h2>SPACES<br/>
                    THAT<br/>
                    INSPIRE
                  </h2>
              </div>
          </div>

          <div id="hero-shape">
            <div id="hero-1"></div>
            <div id="hero-2"></div>
            <div id="hero-3"></div>
          </div>

          <video autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/915350257/rendition/1080p/file.mp4?loc=external&amp;signature=768f26c5396775e76c340cb808a897a724e78acb8231106dd94af9d732695176"></video>
          </div>

          <div id="page2">
              <div id="moving-text">
                  <div className="container">
                      <h1>EXPERIENCES</h1>
                      <div id="circle"></div>
                      <h1>CONTENT</h1>
                      <div id="circle"></div>
                      <h1>ENVIRONMENTS</h1>
                      <div id="circle"></div>
                  </div>
                  <div className="container">
                      <h1>EXPERIENCES</h1>
                      <div id="circle"></div>
                      <h1>CONTENT</h1>
                      <div id="circle"></div>
                      <h1>ENVIRONMENTS</h1>
                      <div id="circle"></div>
                  </div>
                  <div className="container">
                      <h1>EXPERIENCES</h1>
                      <div id="circle"></div>
                      <h1>CONTENT</h1>
                      <div id="circle"></div>
                      <h1>ENVIRONMENTS</h1>
                      <div id="circle"></div>
                  </div>
              </div>

              <div className="page2-bottom">
              
              <div id="left">
                  <h3>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h3>
              </div>
              <div id="right">
                  <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-1080.jpg" alt=""/>
                  <p>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
              </div>

              
            </div>

            <div className='moving-circles'>
                <div id='circle1'></div>
                <div id='circle2'></div>
            </div>
            
              
          </div>

          <div id='page3'>
            <h1><div id='circle'></div>FEATURED PROJECTS</h1>

            {/* Projects on Mobile VIew */}
            <div className="projects">
              <div id="project1">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp" alt="" />
                <h2>Makers Studio HOI</h2>
              </div>
              <div id="project2">
                <img src="https://i0.wp.com/dancemagazine.com.au/wp-content/uploads/2013/09/Capezio-Melbourne.jpg?resize=250%2C333&ssl=1" alt="" />
                <h2>Capezio NYC Flagship</h2>
              </div>
              <div id="project3">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp" alt="" />
                <h2>50th Anniversary</h2>
              </div>
              <div id="project4">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170d_AM704059.webp" alt="" />
                <h2>NYFW Popup</h2>
              </div>
              <div id="project5">
                <img src="https://www.converse.com/on/demandware.static/-/Sites/default/dwf479310f/ConverseUS/images/stores/converse-store.jpg" alt="" />
                <h2>Converse SoHo</h2>
              </div>
              <div id="project6">
                <img src="https://nypost.com/wp-content/uploads/sites/2/2024/01/Screenshot-2024-01-12-at-12.57.50-PM.png" alt="" />
                <h2>Carmelo Anthony 7pm In Brooklyn Set</h2>
              </div>
              <div id="project7">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAryCpCwCc_sbGnKocFuf-Nilt5j2G1BJytO5U8KCVrzrPxFTojRV9Tj14fOux2qnyJs&usqp=CAU" alt="" />
                <h2>Kelce Super Bowl Party</h2>
              </div>
              <div id="project8">
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1694_Copy%20of%20211023_NikeCHI_PlayNewKids_Beauty-26.webp" alt="" />
                <h2>Play New Kidvision</h2>
              </div>
              
            </div>

            <div ref={elemContainerRef} className='elem-container'>
            <div className="elem" data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp">
              <div id="overlay"></div>
              <h2>50th Anniversary </h2>    
            </div>
            <div className="elem" data-image="https://nypost.com/wp-content/uploads/sites/2/2024/01/Screenshot-2024-01-12-at-12.57.50-PM.png">
              <div id="overlay"></div>
              <h2>Carmelo Anthony 7pm In Brooklyn Set </h2>    
            </div>
            <div className="elem" data-image="https://i0.wp.com/dancemagazine.com.au/wp-content/uploads/2013/09/Capezio-Melbourne.jpg?resize=250%2C333&ssl=1">
              <div id="overlay"></div>
              <h2>Capezio NYC Flagship </h2>    
            </div>
            <div className="elem" data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp">
              <div id="overlay"></div>
              <h2>Makers Studio HOI </h2>    
            </div>
            <div className="elem" data-image="https://www.converse.com/on/demandware.static/-/Sites/default/dwf479310f/ConverseUS/images/stores/converse-store.jpg">
              <div id="overlay"></div>
              <h2>Converse SoHo </h2>    
            </div>
            <div className="elem" data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170d_AM704059.webp">
              <div id="overlay"></div>
              <h2>NYFW Popup </h2>    
            </div>
            <div className="elem" data-image="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1694_Copy%20of%20211023_NikeCHI_PlayNewKids_Beauty-26.webp">
              <div id="overlay"></div>
              <h2>Play New Kidvision </h2>    
            </div>
            <div className="elem" data-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAryCpCwCc_sbGnKocFuf-Nilt5j2G1BJytO5U8KCVrzrPxFTojRV9Tj14fOux2qnyJs&usqp=CAU">
              <div id="overlay"></div>
              <h2>Kelce Super Bowl Party </h2>    
            </div>
            </div>

           <div id='projects-btn'>
                <h4><a href="#">All Projects </a></h4>
           </div>
          </div>

          <div id="page4">
            <div id='top'>
              <div id='text-part'>
                <div id='headings'>
                <h2>Design</h2>
                <h2>Project</h2>
                <h2>Execution</h2>
                </div>
                <p>Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</p>
              </div>
              <div id='image-part'>
                <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project.webp" alt="" />
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
          <div id="page5"></div>
    </div>

    <Footer/>

    </>
  )
}

export default Home