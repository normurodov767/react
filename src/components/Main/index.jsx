import React from 'react'
import './style.css'
import boy from '../../assets/images/boy.png'

function Main() {
  return (
    <div className='main__container'>
        <div className='main__content'>
            <h2><span>The Best Future Stars</span> - мы заботимся о будущем вашего ребенка</h2>
            <p>Наши опытные преподователи сделают процесс обучения максимально интересным и эффективным для вашего ребенка </p>
            <div>
                <button className='main__btn1'><a href="#">Позвонить</a></button>
                <button className='main__btn2'><a href="#">Подробнее</a></button>
            </div>
        </div>
            <img src={boy} alt="boy" />
    </div>
  )
}

export default Main