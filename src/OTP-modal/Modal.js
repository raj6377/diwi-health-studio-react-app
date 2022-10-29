import React from 'react'
import './Modal.css'

function modal( { closeModal }) {

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='divCloseBtn'>
                <button onClick={()=> closeModal(false)} > X </button>
            </div>
            <div className='modalTitle'>
                <h1>OTP</h1>
            </div>
            <div className='modalBody'>
                <h3>Enter OTP<span><input placeholder="otp"></input></span></h3>
            </div>
            <div className='modalFooter'>
                <button onClick={()=> closeModal(false)}>cancel</button>
                <button>varify</button>
            </div>
        </div>
    </div>
  )
}

export default modal