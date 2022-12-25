import React from 'react'
import './About.css'
import pic1 from '../Images/about/home-bg.jpg'
import pic2 from '../Images/about/5.jpg'
import GoToTop from '../GoToTop'
// import general from '../Images/4.jpg'
// import cosmetic from '../Images/5.jpg'
// import surgical from '../Images/6.jpg'


const About = ()=>{
  return (
    <>
    <div className="whole-about-us">
        <div className='bg-about'><img src={pic1}  /></div>

        <div className='emp-div-about'>

          <div className='emp-title'>
            <div className='exc-care'>
              <h1>Teeth are always </h1>
            </div>
            <div className='all-ages'>
            <h1>In style</h1>
            </div>
          </div>

        </div>
      
        <div className="about-us-main">
          <div className="about-us-doc-img">
            <img src={pic2}  />
          </div>
          <div className="about-doc">
            <hr/>
            <div className="about-doc-context">
              <h2 className='doc-name'>Dr. Pinky Rajpurohit</h2>
              <br/>
              <h5>Why dentistry ?</h5>
              <br/>
              <p>Dentistry has always been dear to me, as I was exposed to it at a very young age watching my grandfather treat patients in rural Oklahoma. Dentistry offers the unique opportunity to build lifelong relationships, while also providing a service that improves people’s quality of life. I love the art of dentistry, and even more, I love making people smile!</p>
            </div>
            <hr/>
          </div>
        </div>
    </div>
    <GoToTop/>
  </>
   
  )
}

export default About;