import React from 'react'
import './About.css'
import pic1 from '../Images/about/home-bg.jpg'
import docPic from '../Images/about/doc1.jpg'
import GoToTop from '../GoToTop'
// import general from '../Images/4.jpg'
// import cosmetic from '../Images/5.jpg'
// import surgical from '../Images/6.jpg'


const About = ()=>{
  return (
    <>
    <div className="whole-about-us">
        <div className='bg-about'><img src={pic1}  /></div>

        <div className='animation-div-about'>

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
            <img src={docPic}  />
          </div>
          <div className="about-doc">
            <hr/>
            <div className="about-doc-context">
              <h2 className='doc-name'>Dr. Pinky Rajpurohit</h2>
              <br/>
              <h5>Why dentistry ?</h5>
              <br/>
              <p>Dental treatment really can help people. A successful root treatment or filling
                can help to remove pain; a denture may help people eat foods they may previously have struggled with.
                Dentists help people's health through treating gum disease, dental caries and related pathology.
                This can in turn improve their quality life.
              </p>
              <br/>
              <h5>Educational Qualifications</h5>
              <br/>
              <p>Bachelor of Dental Surgery.<br/> Fellowship in Aesthetic Dentistry.<br/> PG Diploma in Clinical Cosmetology.(PGDCC)</p>
              <br/>
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