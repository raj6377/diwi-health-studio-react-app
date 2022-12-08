import React from 'react'
import { useState } from 'react'
import './book.css'
import bgImg from '../Images/book-appointment/bg.jpg'
import smileImg from '../Images/book-appointment/smile.png'

import { db } from '../Firebase-config/Firebase-config'
import { addDoc, collection } from 'firebase/firestore'

export default function Book() {

  const appointmnetCollectionRef = collection(db,"Appointment");

  const [newName,setName] = useState("");
  const [newAge,setAge] = useState(0);
  const [newGender,setGender] = useState("Male");
  const [newMobile,setMobile] = useState(0);
  const [newMail,setMail] = useState("null");
  const [newAddress,setAddress] = useState("null");
  const [newDate,setDate] = useState("null");
  const [newTime,setTime] = useState("null");
  const [newPurpose,setPurpose] = useState("null");

  const createAppointment = async ()=>{
    await addDoc(appointmnetCollectionRef,{Name:newName , Age:newAge , Gender:newGender , Mobile:newMobile , Mail:newMail , Address:newAddress , Purpose:newPurpose , DateRequested: newDate , TimeRequested: newTime})
  }

  window.onload = init;
  
  function init(){
    // the code to be called when the dom has loaded
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("dateTag").setAttribute('min', today);
    console.log("today :",today);
    // console.log("idk : ",document.getElementById("dateTag").setAttribute('min',today))
    // #document has its nodes
    // window.location.href="/";
  }
  
  return (
    <>
    <div className='bg'><img src={bgImg}  /></div>
    <div className='outer1'>

      <div className="outer-rad">
        <div className="inner-rad"/>
      </div>

        <div className='emp-div1'>

          <div className='emp-title'>
            <div className='exc-care'>
              <h1>Exceptional Care </h1>
            </div>
            <div className='all-ages'>
            <h1>For All Ages</h1>
            </div>
          </div>

        </div>

          <div className='inner1'>

              <div className='main-form-div'>

                <form className='main-form'>
                  <div className='form-column-div'>
                    <input type='text' placeholder=' Patient Name' className='input-tag' onChange={(event) => setName(event.target.value)} required/>
                  </div>
                  <div className='form-column-div'>
                    <input type='number' placeholder=' Age' className='input-tag' min='1' max='99' onChange={(event) => setAge(event.target.value)} required/>
                  </div>
                  <div className='form-column-div'>
                    <select name="gender" className='input-tag' onChange={(event) => setGender(event.target.value)}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className='form-column-div'>
                    <input type='tel' placeholder=' Mobile no.' className='input-tag' minLength='10' maxLength='10' onChange={(event) => setMobile(event.target.value)} required/>
                  </div>
                  <div className='form-column-div'>
                    <input type='email' placeholder=' E-mail' pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}" className='input-tag' onChange={(event) => setMail(event.target.value)}/>
                  </div>
                  <div className='form-column-div'>
                    <input type='text' placeholder=' Address' className='input-tag' onChange={(event) => setAddress(event.target.value)}/>
                  </div>
                  <div className='form-column-div'>
                    <input type='date' placeholder=' Date' pattern="^(0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])[- /.] (19|20)\d\d$"className='input-tag' id='dateTag' onChange={(event) => setDate(event.target.value)}/>
                  </div>
                  <div className='form-column-div'>
                    <input type='time' placeholder=' Time' className='input-tag' min="09:00" max="20:00" onChange={(event) => setTime(event.target.value)}/>
                  </div>
                  <div className='form-column-div'>
                    <input type='text' placeholder=' Purpose' className='input-tag' onChange={(event) => setPurpose(event.target.value)}/>
                  </div>
                  <div className='submit-button'>
                    <button onClick={createAppointment}> Submit </button>
                  </div>
                </form>

              </div>

              <div className='side-img'>
                <img src={smileImg} className='smileImg' /> 
              </div>

          </div>
    </div>
         

    </>
  )
}
