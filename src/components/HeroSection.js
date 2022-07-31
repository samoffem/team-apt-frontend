import React from 'react'

const HeroSection = () => {
  return (
    <div className='container__hero'>
        <div className='hero-text1 overflow-hidden'>
          <h1 className='slide-in-2'>Unlock to <span className='new-line-1'>Power <span className='new-line-2'>your dreams!</span></span></h1>
        </div>
        <div className='hero-text2 overflow-hidden'>
          <p className='slide-in-3'>Stand a chance to win <span className='new-line-3'><span className='bold'>N3,000,000</span><span className='new-line-4'> everyday for the next 5 days</span> </span> </p>
        </div>
        <div className='instructions__wrap slide-in-1'>
          <p className='instructions-header'>
              🚀 How To Play
          </p>

          <ol className='instructions-list'>
            <li>Guess the right combination of numbers</li>
            <li>Win <span className='bold'>N3,000,000</span> instantly</li>
          </ol>
          <p style={{margin: "10px 0"}}>Sounds unbelievable? Well, guess right and see for yourself!</p>
          <div className='warning'>
            <span>💡</span>
            <p>
              Think well before you guess. You only have <span className='bold'>2 </span>
              attempts per day and even after you win, you can come
              back the next day and try for another jackpot!
            </p>
          </div>
        </div>
        <div className='button__wrap overflow-hidden'>
          <button className='slide-in-0'>
            <span>Play The Game</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                style={{fill: "rgba(255, 255, 255, 1)"}}><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </span>
          </button>
        </div>
    </div>
  )
}

export default HeroSection