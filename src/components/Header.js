import React from 'react'
// import {Link} from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
        <header>
            <h1 className='logo'>Fyll-<span>Gh</span></h1>
            <div className='links'>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
        </header>
    </div>
  )
}
