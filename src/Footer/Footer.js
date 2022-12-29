import React from 'react'
import './footer.css'
import locImg from '../Images/footer/location.png'


export default function Footer() {
  const fbSvgPath = "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
  const instaSvgPath = "M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
  const linkedInSvgPath = "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
  const location = 'https://www.google.com/maps/place/Diwi+Dental+%26+Health+Studio/@28.6655659,77.0857264,14z/data=!4m5!3m4!1s0x0:0x3bbedbefc2e5743!8m2!3d28.6632124!4d77.1075703'

  return (
    <>
        <div className='footer'>
          <div className='social'>
            <h2>Social</h2>
            <br/>
            <div className='social-svgs'>

            <ul>
              <li>
                <a href='#'> 
                <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512">
                <path d={fbSvgPath}/>
                </svg>
                <br/>
                </a>
              </li>

              <li>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d= {instaSvgPath}/>
                </svg>
                <br/>
                </a>
              </li>

              <li>
                <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d={linkedInSvgPath}/>
                </svg>
                </a>
              </li>
            </ul>
            </div>
          </div>

          <div className='footer-services'>
            <h2>Services</h2>
            <br/>
            <div>
              <ul>
                <li>
                  <h4>General</h4>
                  <br/>
                </li>
                <li>
                  <h4>cosmetic</h4>
                  <br/>
                </li>
                <li>
                  <h4>surgical</h4>
                  <br/>
                </li>
              </ul>
            </div>
          </div>

          <div className='contact-us'>
            <h2>Contact Us</h2>
            <br/>
            <div>
              <h5>+916377483870</h5>
              <br/>
              <h5>diwi.healthstudio@gmail.com</h5>
              <br/>
              <h5>Shop No. 5, BG-6, Block BG 6,<br/> Paschim Vihar, New Delhi</h5>
              <br/>
            </div>
          </div>
          <div className='map'>
            <h2>Location</h2>
            <br/>
            <a href={location}  target="_blank"><img src={locImg}/></a>
          </div>
        </div>
    </>
  )
}
