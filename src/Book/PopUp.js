import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactConfetti from 'react-confetti'

export default function PopUp(props) {

    const [windowDimension, setDimension] = useState({width:window.innerWidth, height:window.innerHeight})

    const detectSize = () =>{
        setDimension({
            width:window.innerWidth, 
            height:window.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener('resize',detectSize)
        return ()=>{
            window.removeEventListener('resize',detectSize)
        }
    },[windowDimension])

  return (props.trigger) ? (
    <div className='popup'>
        {/* <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={100}
            opacity={1}
            wind={0.1}
            
        /> */}

        <div className="popup-inner">
            <button className="close-button popup-close-btn" onClick={()=>props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ):(null)
}
