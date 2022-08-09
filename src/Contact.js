import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
    <header>
        <h1 className='logo'>Fyll-<span>Gh</span></h1>
        <div className='links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </header>
    Contact
    </div>
  )
}
