import React from 'react'
import './home.css'
import vid from './vid.mp4'
import pic1 from '../Images/home/tools1.jpg'
import general from '../Images/home/1.jpg'
import cosmetic from '../Images/home/2.jpg'
import surgical from '../Images/home/3.jpg'
import { Link } from 'react-router-dom'
import GoToTop from '../GoToTop'
import { reviews } from './testimonials'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {

  return (
    <>
  
    <video autoPlay loop muted playsInline className="bg-vid">
      <source src={vid} type="video/mp4"></source>  
    </video>
    
    <div className='title'>
      <h1><span className='title-color'>Diwi</span> <span className='title-color'>Health</span> 
          <span className='title-color'> Studio</span></h1>
      <h4>Every <span style={{color:"rgb(80, 162, 240)"}}>Smile</span> Counts</h4>
      {/* <hr style={{width:"60%",justifyContent:"center",marginLeft:"20%"}}/> */}
    </div>

    <div className='outer'>

      <div className="empty-div-after-title"/>

      <div className='services-brief'>
        <div className='services-tag-line'>Comprehensive care, one convenient location</div>

        <Link to="/services" style={{textDecoration: "none"}}>
        <div className='service-card'>
          <div>
            <img src={general} alt="general-checkup"/>
          </div>
          <br/>
          <br/>
          <h5> General</h5>
          <br/>
          <p>Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.</p>
        </div>
        </Link>
        <Link to='/services' style={{textDecoration: "none"}}>
          <div className='service-card'>
            <div>
              <img src={cosmetic} alt="cosmetic-treatment"/>
            </div>
            <br/>
            <br/>
            <h5> Cosmetic</h5>
            <br/>
            <p>Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
          </div>
        </Link>
        <Link to='/services' style={{textDecoration: "none"}}>
          <div className='service-card'>
            <div >
              <img src={surgical} alt="surgical-treatment"/>
            </div>
            <br/>
            <br/>
            <h5>Surgical</h5>
            <br/>
            <p>We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
          </div>
        </Link>

      </div>

      <div className='why-us'>

        <div className='why-us-text'>
          <h2>Our Mission</h2>
          <br/>
          <p>Have to write something here. 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to
           make a type specimen book. It has sur
           vived not only five centuries, but also the leap i
           
          </p>
        </div>

        <div className='why-us-pic'>
          <img src={pic1} className="doc-pic" alt='doc-pic'/>
        </div>
      </div>

      <div className='testimonial-outer-div'>

      <div className="testimonial-text">
        <h1>Testimonials</h1>
      </div>

      <hr/>
      <Swiper
        slidesPerView={window.innerWidth>1025 ? 3:window.innerWidth>770 ? 2:1}
        spaceBetween={40}
        autoHeight = {false}
        autoplay = {{
          delay: 5500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        
        navigation = {true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        



        {
          reviews.map((currReview) =>{
            return (<>
            {/* <SwiperSlide> */}
            

              <SwiperSlide className="testimonial-inner-div">
                <div className="testimonial-upper">
                  <div className="pic-name-rate">
                    <div className="testimonial-pic">
                      <img src={currReview.img} alt='dp'/>
                    </div>
                    <div className="name-rate">
                      <h2>
                        {currReview.name}
                      </h2>
                      <div>
                        <i style={{color:"gold"}} className="fa-solid fa-star"/>
                        <i style={{color:"gold"}} className="fa-solid fa-star"/>
                        <i style={{color:"gold"}} className="fa-solid fa-star"/>
                        <i style={{color:"gold"}} className="fa-solid fa-star"/>
                        <i style={{color:"gold"}} className="fa-solid fa-star"/>
                      </div>

                    </div>
                  </div>
                </div>


                  <div className="testimonial-lower">
                    <p>{currReview.context}</p>
                  </div>
              </SwiperSlide>

            {/* </SwiperSlide> */}
            </>
            );
          })
        }

        </Swiper>



      </div>

    </div>
    <GoToTop/>
    </>
  )
}