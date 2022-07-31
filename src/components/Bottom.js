import React from 'react'

import Coins from '../asset/coin-pot.png'
import CoinLeft from '../asset/coin-left.png'
import CoinRight from '../asset/coin-right.png'

const Bottom = () => {
  return (
    <div className='bottom-wrap'>
        <div className='bottom-inner-wrap'>
        
        <div className='rays-wrap'>
        {[...Array(8)].map((_, ind)=>(
            <div className='ray fade-in' key={ind}></div> 
        ))}
        </div>
        <div className='coin-pot slide-in-0'>
            <img src={Coins} alt="coin-pot"/>
        </div>
        <div className='coin left'>
            <img src={CoinLeft} alt="coin-pot" className='slide-in-3'/>
        </div>
        <div className='coin right'>
            <img src={CoinRight} alt="coin-pot" className='slide-in-0-5'/>
        </div>
        {[...Array(3)].map((_, ind)=>(
            <div className={`star star${ind + 1}`} key={ind}>
            <div className='pulse'></div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Bottom