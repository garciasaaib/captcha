import { useEffect, useState } from 'react';
import './App.css';

import { CaptchaNumeros } from './captchaNumeros/CaptchaNumeros';
import { getRandomNumber } from './captchaNumeros/helpers/getRandom';
import { CaptchaImg } from './componets/CaptchaImg';

function App() {

  const [captchaNumber, setcaptchaNumber] = useState();

  useEffect(() => {

    setcaptchaNumber(getRandomNumber(1));

  },[])
  

  return (
    <div className="App">
      
      <header className="App-header">

      {
        captchaNumber === 1 ? <CaptchaNumeros/> : <CaptchaImg/>
      }
                 
      </header>
    </div>
  );
}

export default App;
