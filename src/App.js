
import Coins from './asset/coin-pot.png'
import CoinLeft from './asset/coin-left.png'
import CoinRight from './asset/coin-right.png'
import './App.css';
import Header from './components/Header';
import Body from './components/HeroSection';

function App() {
  return (
    <div className="container__main">
      <div className='inner-wrap'>
        <Header />
        <Body />

        <div className='bottom-wrap'>
          <div className='bottom-inner-wrap'>
            
            <div className='rays-wrap'>
            {[...Array(8)].map((_, ind)=>(
              <div className='ray' key={ind}></div> 
            ))}
            </div>
            <div className='coin-pot'>
              <img src={Coins} alt="coin-pot"/>
            </div>
            <div className='coin left'>
              <img src={CoinLeft} alt="coin-pot"/>
            </div>
            <div className='coin right'>
              <img src={CoinRight} alt="coin-pot"/>
            </div>
            {[...Array(3)].map((_, ind)=>(
              <div className={`star star${ind + 1}`} key={ind}>
                <div className='pulse'></div>
              </div>
            ))}
          </div>
        </div>

        
          
      </div>
    </div>
  );
}

export default App;
