import { useState } from "react"
import React from 'react'
import './Services.css'

export default function Showcase({ image, subServices }) {
  
  const [subServ,changeSubServ] = useState(0)

    function changeState(i){
        changeSubServ(i)
    }

  return (
    <div className='one-block'>
        
        <div className='service-content'> 
            {
              subServices.map((currSubService) => {
                return(
                  // <Display key={currSubService.id} {...currSubService}></Display>

                  <div key={currSubService.id} className={`sub-service-name ${subServ===currSubService.id ? "highlight-content":""}`} >
                    <div key={currSubService.id} onClick={() => changeState(currSubService.id)}>
                      <h4>{subServ===currSubService.id ? '➖  ':'➕  '}{currSubService.service}</h4>
                    </div>
                        { subServ===currSubService.id && <p className="accordion-content">{currSubService.content}</p>}
                  </div>
                )
              })
            }
            
        </div>

        <img className='service-main-img' src={image}></img>
        
    </div>
  )
}
