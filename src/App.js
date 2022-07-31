
import './App.css';
import Bottom from './components/Bottom';
import Header from './components/Header';
import Body from './components/HeroSection';

import Stars from './asset/top-stars.png'

function App() {
  return (
    <div className="container__main">
      <div className='inner-wrap'>
        <Header />
        <div className='top-stars'>
          <img src={Stars} alt="stars"/>
        </div>
        <Body />
        <Bottom />   
      </div>
    </div>
  );
}

export default App;
