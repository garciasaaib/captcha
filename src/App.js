import logo from './logo.svg';
import './App.css';
import { CaptchaImg } from './componets/CaptchaImg';
import {CaptchaNumeros} from './componets/captchaNumeros/components/CaptchaNumeros'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CaptchaImg />
        <CaptchaNumeros />
      </header>
    </div>
  );
}

export default App;
