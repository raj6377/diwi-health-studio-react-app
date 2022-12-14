import React from 'react'
import { useState } from 'react'
import './book.css'
import PopUp from './PopUp'
import bgImg from '../Images/book-appointment/bg.jpg'
import smileImg from '../Images/book-appointment/smile.png'
import GoToTop from '../GoToTop'

import { db } from '../Firebase-config/Firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Book() {
  const navigate = useNavigate();
  const appointmnetCollectionRef = collection(db,"Appointment");

  const [sMsg,setsMsg] = useState(false)
 
  const [newName,setName] = useState("");
  const [newAge,setAge] = useState(0);
  const [newGender,setGender] = useState("Male");
  const [newMobile,setMobile] = useState(0);
  const [newMail,setMail] = useState("null");
  const [newAddress,setAddress] = useState("null");
  const [newDate,setDate] = useState("null");
  const [newTime,setTime] = useState("null");
  const [newPurpose,setPurpose] = useState("null");

  const createAppointment = async (e)=>{
    e.preventDefault();
    //  navigate('/Payment');
    await addDoc(appointmnetCollectionRef,{Name:newName , Age:newAge , Gender:newGender , Mobile:newMobile , Mail:newMail , Address:newAddress , Purpose:newPurpose , DateRequested: newDate , TimeRequested: newTime})
    setsMsg(true);
  
  }

  
  
  function init(){
    // the code to be called when the dom has loaded
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("dateTag").setAttribute('min', today);
    console.log("today :",today);
    // console.log("idk : ",document.getElementById("dateTag").setAttribute('min',today))
    // #document has its nodes
    // window.location.href="/";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if(mm==12){
      yyyy += 1
      mm = 1
    }
    else{
      mm += 1
    }

    if (dd < 10)
      dd = '0' + dd;
    
    if (mm < 10) 
      mm = '0' + mm;
        
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dateTag").setAttribute("max", today);
  }


  
  return (
    <>
    <div className='bg'><img src={bgImg}  alt='bg-img'/></div>
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

        <PopUp trigger={sMsg} setTrigger={setsMsg}><h3>Appointment Booked Successfully!!</h3></PopUp>

        <div className='inner1'>
              <div className='main-form-div'>

                <div className="mendate-info">
                  <h3 >Name, Age and phone number {window.innerWidth<480 && <br/>}are mendatory to fill.</h3>
                </div>

                <form className='main-form' onSubmit={createAppointment}>

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
                  <div className='form-column-div date-time-tags'>
                    <input type='date' placeholder=' Date' onClick={init} pattern="^(0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])[- /.] (19|20)\d\d$"className='input-tag' id='dateTag' onChange={(event) => setDate(event.target.value)}/>
                    <div className="emp-time-date-div" style={{fontSize:`${window.innerWidth>480 ? "1.12rem":"1rem"}`,fontWeight:"100"}}>{window.innerWidth>480 && <>&emsp;&emsp;&emsp;&emsp;</>}{(newDate==="null")? " Date":newDate}</div>
                  </div>
                  <div className='form-column-div date-time-tags'>
                    <input type='time' placeholder=' Time' className='input-tag' min="09:00" max="20:00" id='timeTag' onChange={(event) => setTime(event.target.value)}/>
                    <div className="emp-time-date-div" style={{fontSize:`${window.innerWidth>480 ? "1.12rem":"1rem"}`,fontWeight:"100"}}> {window.innerWidth>480 && <>&emsp;&emsp;&emsp;&emsp;</>}{(newTime==="null")? " Time":newTime}</div>
                  </div>
                  <div className='form-column-div'>
                    <textarea type='text' placeholder=' Purpose' className='input-tag purpose-text' onChange={(event) => setPurpose(event.target.value)}/>
                  </div>
                  <div className='submit-button-div'>
                    <button className='logIn-btn' id="my-form" > Submit </button>
                  </div>

                </form>

              </div>

              <div className='side-img'>
                <img src={smileImg} className='smileImg' alt='doc-img'/> 
              </div>

          </div>
    </div>
         
    <GoToTop/>
    </>
  )
}
