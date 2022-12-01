import React from 'react'
import './Navbar.css'
import logo from '../Images/navbar/logo1.png'
import { Link } from 'react-router-dom'
import { useMatch, useResolvedPath} from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [addNavClass, setNavClass] = useState(false);

    const changeBackground = () => {
        if(window.scrollY>=80){
            setNavClass(true);
        }
        else{
            setNavClass(false);
        }
    }

    window.addEventListener('scroll', changeBackground);


  return (
    <nav className={addNavClass ? "nav nav-active-on-scroll":"nav"}>
        <img src={logo} className="logo" alt='logo'/>
        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/Services'>Services</CustomLink>
            <CustomLink to='/About'>About</CustomLink>
            <CustomLink to='/Book' className='book' >Book Appointment</CustomLink>
        </ul>
    </nav>
  );
}

function CustomLink({to, children, ...rest}){
    // const path = window.location.pathname (this is not true because in routing , actual path is not changing)
    // instead use this
    const resoledPath = useResolvedPath(to) // href is being passed here in useResolvedPath
    const isActive = useMatch({ path: resoledPath.pathname, end: true}) // end: true will check if it is strictly same
    var isBook = false;

    if(rest.className==="book"){
        isBook = true;
    }

    return(
        <li className={isBook ? "book-li" : ""+(isActive ? "active" : "") }>
            <Link to={to} {...rest}>{children}</Link> 
        </li>
    );
}