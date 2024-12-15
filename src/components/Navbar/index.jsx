import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" />
        <div>
            <ul className='list'>
                <li>О нашей школе</li>
                <li>Преимущества</li>
                <li>Классы</li>
                <li>Контакты</li>
            </ul>
        </div>
        <button className='navbtn'><a href="#">Связаться с нами</a></button>
    </div>
  )
}

export default Navbar