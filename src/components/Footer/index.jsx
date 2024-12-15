import React from 'react'
import "./style.css"
import logo from '../../assets/images/logo.png'
function Footer() {
  return (
    <div className='footer'>
      
    <footer>
        <img src={logo} alt="" />
        <div className='footer1' >

        Контакты:
<div className='footer2'>
    <p>+998971970771</p>
    <p>+998970020771</p>
</div>

        </div>

        <div className='footer3'>

            <p>Будьте с нами:</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>

            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>

            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
