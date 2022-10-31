import React from 'react'
import './home.css'
import vid from './vid.mp4'
import pic1 from '../Images/tools1.jpg'
import general from '../Images/1.jpg'
import cosmetic from '../Images/2.jpg'
import surgical from '../Images/3.jpg'


export default function Home() {
  
  var testimonial = `It is new in the locality. Visited recently , got teeth scaling and polishing done.
  It was quite a refreshing experience . Doctor was taking all the safety measures and was good communicator.
  Had zero sensitivity after the treatment which is not common after scaling .
  It also had some pretty advanced machines with Led and stuff don't know much about it , lol ....
  but as far as I was concerned about scaling , it went great . Would recommend visiting ....`;

  if(testimonial.length>390){
    testimonial = testimonial.substring(0,390)
    testimonial += "......"
  } 

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

        <div>
          <img src={general} alt="general-checkup"/>
          <br/>
          <br/>
          <h5> General</h5>
          <br/>
          <p>Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.</p>
        </div>
        <div>
          <img src={cosmetic} alt="cosmetic-treatment"/>
          <br/>
          <br/>
          <h5> Cosmetic</h5>
          <br/>
          <p>Discover your “wow!” factor. Invisalign, veneers, and in-office or take-home teeth whitening.</p>
        </div>
        <div>
          <img src={surgical} alt="surgical-treatment"/>
          <br/>
          <br/>
          <h5>Surgical</h5>
          <br/>
          <p>We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.</p>
        </div>

      </div>

      <div className='why-us'>
        <div>
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
        <img src={pic1} className="doc-pic" alt='doc-pic'/>
      </div>

      <div className='testimonial-outer-div'>
        <div className='testimonial-inner-div'>

          <div className='testimonial-upper'>
            <div className='testimonial-pic'>
              <img src='https://picsum.photos/100/100' />
            </div>
            <h2> Abhishekh </h2>
          </div>

          <div className='testimonial-lower'>
            <p>{testimonial}</p>
          </div>

        </div>
      </div>

    </div>
    </>
  )
}