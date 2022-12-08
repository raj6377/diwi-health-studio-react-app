import React from 'react'
import { Link } from 'react-router-dom'

export default function AppointmentNav() {
  return (
    <div className='AppNav-outer'>
        <Link to='/Appointments'>
            Appointments
        </Link>
        <Link to='AccAppointments'>
            AccAppointments
        </Link>
        <Link to='/PastAppointments'>
            PastAppointments
        </Link>
    </div>
  )
}
