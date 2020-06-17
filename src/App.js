import React from 'react';
import ContentContainer from './components/content-container';
import './App.css';
import './css/main.css';




const App = () => {
  return (
    <div className="App">
      <div className="border" style={{position: "fixed", top: "0px"}}></div>
      <ContentContainer />
      <div className="border" style={{position: "fixed", bottom: "0px"}}></div>
    </div>
  );
}

export default App;
