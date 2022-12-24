import React from 'react'
import './Modal.css'
import { useEffect } from 'react'

function Modal( { closeModal }) {


  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='close-btn-div'>
                <button className='close-btn' onClick={()=> closeModal(false)} > X </button>
            </div>
            <div className='modalTitle'>
                <h1>Payement Methods</h1>
            </div>
            <div className='payment-btns'>
                <button className='submit-btn' > Pay Online</button>
                <button className='logIn-btn' > Pay Offline</button>
                {/* <h3>Enter OTP<span><input placeholder="otp"></input></span></h3> */}
            </div>
        </div>
    </div>
  )
}

export default Modal