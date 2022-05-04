import React, {useState} from 'react';
import Test from "./components/test";


import './displayFrame.css';






const DisplayFrame = () => { 

  const [newView, setNewView] = useState(true);


                                                







  return (<div id="windowContainer">
            <div className="center-container">
              <div className="left-container">
                <h1>Hello again Barry</h1>
              </div>
              <div className="right-container">
                <Test />
              </div>
            </div>
            
          </div>
  );
}

export default DisplayFrame;



//<ContentContainer style={{position: 'absolute'}}/>
//
/*
        
        
*/