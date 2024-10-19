import React from 'react'
import logo from '../logo/logo.jpg'
import './Header.css';

const header = () => {
  return (
    <div className='header'>
        <nav>
  <div   className="logo">

    <img className='logo' src={logo} alt="logo"/>
    <span>Invoicify</span>
    </div>
      <div className="navbar-nav">
        <a className="btn" aria-current="page" href="#">Home</a>
        <a className="btn" href="#">About</a>
      </div>
  
</nav>
    </div>
  )
}

export default header