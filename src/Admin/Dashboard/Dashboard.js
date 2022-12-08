import React,{ useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'

export default function Admin(props) {
    
    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])


    return (
        <>
            <div className='full-admin-div'>
                <div className='all-appointments-blogs'>    
                    <div className='all-appointments'>    
                        <Link to='/Appointments'><h1 className='logIn-btn' >New Appointments</h1></Link>
                        <Link><h1 className='logIn-btn' >Accepted Appointments</h1></Link>
                        <Link><h1 className='logIn-btn' >Past Appointments</h1></Link>
                    </div>
                    <div className='all-blogs'>
                        <Link to='/Blog'><h1 className='logIn-btn' >Write Blogs</h1></Link>
                        <Link to='/Blog'><h1 className='logIn-btn' >View Blogs</h1></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
