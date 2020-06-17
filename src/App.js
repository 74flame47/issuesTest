import React from 'react';
import './App.css';
import './css/main.css';

import Logo from './images/logo-original.png';


const App = () => {
  return (
    <div className="App">
      <div className="border" style={{position: "fixed", top: "0px"}}></div>
      <h3 style={{color:"#228d91", margin: "0px"}}>Coming</h3>
      <img src={Logo} alt="logo" id="cslogo"/>
      <img src={Logo} alt="logo" id="cslogo"/>
      <img src={Logo} alt="logo" id="cslogo"/>
      <img src={Logo} alt="logo" id="cslogo"/>
      <img src={Logo} alt="logo" id="cslogo"/>
      <img src={Logo} alt="logo" id="cslogo"/>
      <div className="border" style={{position: "fixed", bottom: "0px"}}></div>
    </div>
  );
}

export default App;
