import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'
import bg from '../../Images/dashboard/bg.jpg'

export default function Admin(props) {
    
    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])


    return (
        <>
            <div className='full-admin-div'>
            <img className='write-blog-bg' src={bg}></img>
                <div className='all-appointments-blogs'>    
                    <div className='all-appointments'>    
                        <Link to='/Appointments'><h1 className='logIn-btn dash-btn' >New Appointments</h1></Link>
                        <Link to='/AccAppointments'><h1 className='logIn-btn dash-btn' >Accepted Appointments</h1></Link>
                        <Link to='/PastAppointments'><h1 className='logIn-btn dash-btn' >Past Appointments</h1></Link>
                    </div>
                    <div className='all-blogs'>
                        <Link to='/WriteBlog'><h1 className='logIn-btn dash-btn' >Write Blogs</h1></Link>
                        <Link to='/Blog'><h1 className='logIn-btn dash-btn' >View Blogs</h1></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
