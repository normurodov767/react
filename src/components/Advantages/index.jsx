import React from 'react'
import './style.css'
import rasm1 from'../../assets/images/Group 14.png'
import rasm2 from'../../assets/images/Group 15.png'
import rasm3 from'../../assets/images/Group 13.png'
import rasm4 from'../../assets/images/Group 16.png'
import rasm5 from'../../assets/images/Group 17.png'
function Advantages() {
  return (
    <div className='section1'>
 
<section className='section2'>
<h3>Наши преимущества</h3>
<div className='section3'>

  <div className='section4'>

    <div className='section5'>
      <img style={{width:"225px",height:"225px"}} src={rasm1} alt="" />
      <div className='section6'>
        <h4>3-х разовое питание </h4>
        <p className='section6p'>Для комфотрного времяпровождения в нашей школе, мы готовим вкусную и полезную еду 3 раза в день</p>
      </div>
    </div>

<div className='section5'>
      <img style={{width:"225px",height:"225px"}} src={rasm2} alt="" />
      <div className='section6'>
        <h4>IT технологии </h4>
        <p className='section6p'>21 век- это век информационных технологий. Ваш ребенок сможет научиться азам програмированния, тенденциям в мире гаджетов и профессиям будущего</p>
      </div>
    </div>


    <div className='section5'>
      <img style={{width:"225px",height:"225px"}} src={rasm3} alt="" />
      <div className='section6'>
        <h4>Ментальная арифметика </h4>
        <p className='section6p'>Мы обучим детей быстро <br /> вычислять в уме сложные <br /> математические <br /> рассчёты</p>
      </div>
    </div>



  </div>

  <div className='section2a'>
  <div className='section5'>
      <img style={{width:"225px",height:"225px"}} src={rasm4} alt="" />
      <div className='section6'>
        <h4>Общение на английском языке </h4>
        <p className='section6p'>Для свободного общения на <br />английском языке, у нас <br /> предусматривается целый день <br /> Speaking</p>
      </div>
    </div>

    <div className='section5'>
      <img style={{width:"225px",height:"225px"}} src={rasm5} alt="" />
      <div className='section6'>
        <h4>Иностранные языки </h4>
        <p className='section6p'>Наши высококвалифицированные <br /> учителя обучат детей: Английскому, русскому, арабскому и китайскому языку</p>
      </div>
    </div>

  </div>
</div>




</section>

    </div>
  )
}

export default Advantages
