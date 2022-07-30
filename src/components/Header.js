import React from 'react'
import Logo from '../asset/logo.png'

const Header = () => {
  return (
    <div className='container__header'>
        <div className='header__left'>
            <img src={Logo}  alt="logo"/>
        </div>
        <div className='header__right'>
            <div className='calendar__outerWrap'>
                <span className="calendar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{fill: "rgba(255, 255, 255, 1)"}}>
                        <path d="M11 12h6v6h-6z"></path><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 
                        2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.001 16H5V8h14l.001 12z">
                        </path>
                    </svg>
                </span>
            </div>
            
            <p className='calendar__text'> Day 1 <span>of 5</span></p>
        </div>
    </div>
  )
}

export default Header