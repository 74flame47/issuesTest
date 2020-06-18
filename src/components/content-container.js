import React, { useState, useEffect } from 'react';
import ShowWindowDimensions from './resizeWindow';
import Logo from '../images/logo-original.png';

import '../css/content-container.css'





const ContentContainer = () => {
    const [logoMargin, logoMarginSet] =  useState("0");
    const [w, setW] = useState([0,0])

    //const state =  useState(0);
    //state[0] = 1;
    //state[0] = () => {console.log(`This will be a function`)};

    const logoPositionUpdate = () => {
        let logoH =  document.getElementById("cslogo").clientHeight;
        let logoW = document.getElementById("cslogo").clientWidth; 
    
        logoMarginSet(`-${logoH /2}px 0 0 -${logoW /2}px`);
    }





    const updateWindowWH = (w,h) => {
        
        //setW([0,0]);
        return console.log(`The new dimentions are ${w}x${h}`);

        
    }




/*

    useEffect(() =>{
        console.log(`Component did mount`)
    })



*/


    return( <div id="contentcontainer">
                <img src={Logo} alt="logo" id="cslogo" style={{margin:  logoMargin}}/>
                <button onClick={logoPositionUpdate}>Center Logo</button>
                <ShowWindowDimensions updateWindowWH={updateWindowWH}/>
            </div>)
}

export default ContentContainer;
//<h1>{`The current window width is ${windowSize[0]}x${windowSize[1]}`}</h1>