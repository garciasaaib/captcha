import logo from './logo.svg';
import './App.css';
import { CaptchaImg } from './componets/CaptchaImg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <CaptchaImg />
      </header>
    </div>
  );
}

export default App;
