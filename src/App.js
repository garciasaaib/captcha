import logo from './logo.svg';
import './App.css';
import { CaptchaImg } from './componets/CaptchaImg';
import {CaptchaNumeros} from './componets/captchaNumeros/components/CaptchaNumeros'
import { useEffect, useState } from 'react';
import { getRandomNumber } from './componets/captchaNumeros/helpers/getRandom';

function App() {

  const [captchaNumber, setcaptchaNumber] = useState();

  useEffect(() => {

    setcaptchaNumber(getRandomNumber(1));

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          captchaNumber === 1 
            ? 
          <CaptchaNumeros setcaptchaNumber={setcaptchaNumber} /> 
            : 
          <CaptchaImg setcaptchaNumber={setcaptchaNumber}/>
        }
      </header>
    </div>
  );
}

export default App;
