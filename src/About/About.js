import React from 'react'
import './About.css'
import pic1 from '../Images/home-bg.jpg'
import general from '../Images/4.jpg'
import cosmetic from '../Images/5.jpg'
import surgical from '../Images/6.jpg'


const About = ()=>{
  return (
    <>
    <div className='outer'>

      
       <div className='main'>
      <div className='box'>
      <h2>About Us</h2>
      <br/>
      <p>Have to write something here. 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to
       make a type specimen book. It has sur
       vived not only five centuries, but also the leap i
       
      </p>
    </div>
    <img src={pic1} className="doc-pic" alt='doc-pic'/>
    
    </div>
    </div>
  </>
   
  )
}

export default About;