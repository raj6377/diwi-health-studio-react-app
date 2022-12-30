import React , { useState }from 'react'
import { services } from './api'
import './Services.css'
import Display from './Showcase'
import bg from '../Images/services/bgx.jpg'
import GoToTop from '../GoToTop'
import { useNavigate } from 'react-router-dom'

export default function Services() {

  const navigate = useNavigate()

  return (
    <div>
      <div className='emp-div-for-bg'> 
        <img src={bg}/>
          <button className="book-now" onClick={()=> navigate('/book')}>Book Now</button>
      </div>
      
      <div className='serv-div-outer'>
            {
              services.map((currServ)=>{
              var isFirst = false;
              var isLast = false;
              if(currServ.id===1){
                isFirst= true
              }else{
                  isFirst = false
                }
              if(currServ.id===3){
                isLast=true
              }else{
                isLast = false
              }

              return (
                <div className={`each-service ${isFirst ? 'first-serv-div' : ''} ${isLast ? 'last-serv-div':''}`} key={currServ.id}>
                        <h1 className='service-main-heading'>{currServ.name}</h1>
                        <Display key={currServ.id} {...currServ}/>
                </div>)
            })
            }

      </div>
    <GoToTop/>
    </div>
  )
}
