import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMatch ,useResolvedPath  } from 'react-router-dom'


export default function AppointmentNav() {

  return (
    <div className='AppNav-outer'>
        <CustomLink style={{ textDecoration: 'none'}} to='/Appointments'>
            Appointments
        </CustomLink>
        <CustomLink style={{ textDecoration: 'none'}} to='/AccAppointments'>
            Accpted Appointments
        </CustomLink>
        <CustomLink style={{ textDecoration: 'none'}} to='/PastAppointments'>
            Past Appointments
        </CustomLink>
    </div>
  )
}


function CustomLink({to, children, ...rest}){
    // const path = window.location.pathname (this is not true because in routing , actual path is not changing)
    // instead use this
    const resoledPath = useResolvedPath(to) // href is being passed here in useResolvedPath
    const isActive = useMatch({ path: resoledPath.pathname, end: true}) // end: true will check if it is strictly same

    return(
            <Link to={to} className = {isActive  ? "app-nav-active" : "app-nav-inactive" } {...rest}> {children} </Link> 
    );
}