import React, { useState, useEffect } from 'react';
//import ShowWindowDimensions from './resizeWindow';
import Logo from '../images/logo-original.png';

import '../css/content-container.css'





const ContentContainer = () => {
    const [logoMargin, logoMarginSet] =  useState();
    //const [w, setW] = useState([0,0])

    //const state =  useState(0);
    //state[0] = 1;
    //state[0] = () => {console.log(`This will be a function`)};
/*
    This is the function that centers the logo.

    const logoPositionUpdate = () => {
        let logoH =  document.getElementById("cslogo").clientHeight;
        let logoW = document.getElementById("cslogo").clientWidth; 
    
        logoMarginSet(`-${logoH /2}px 0 0 -${logoW /2}px`);
    }

*/

    useEffect(() => {
        let logoH =  document.getElementById("cslogo").clientHeight;
        let logoW = document.getElementById("cslogo").clientWidth; 
        console.log(`-${logoH /2}px 0 0 -${logoW /2}px`);
    
        logoMarginSet(`-15vh 0 0 -${logoW /2}px`);
    }, [])


   



/*
 const updateWindowWH = (w,h) => {

        let logoH =  document.getElementById("cslogo").clientHeight;
        let logoW = document.getElementById("cslogo").clientWidth; 
    
        logoMarginSet(`-${logoH /2}px 0 0 -${logoW /2}px`);
    }
*/


    return( <div id="contentcontainer">
                <img src={Logo} alt="logo" id="cslogo" style={{margin:  logoMargin}}/>   
            </div>)
}

export default ContentContainer;
//<h1>{`The current window width is ${windowSize[0]}x${windowSize[1]}`}</h1>
//<button onClick={logoPositionUpdate}>Center Logo</button>
//<ShowWindowDimensions updateWindowWH={updateWindowWH}/>