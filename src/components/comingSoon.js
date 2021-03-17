import React, { useState, useEffect } from 'react';
import Logo from '../images/1sample.gif';





const ComingSoon = () => {

    const [logoMargin, logoMarginSet] =  useState();

    useEffect(() => {
        let logoH =  document.getElementById("cslogo").clientHeight;
        let logoW = document.getElementById("cslogo").clientWidth; 
        console.log(`-${logoH /2}px 0 0 -${logoW /2}px`);
    
        logoMarginSet(`-14vh 0 0 -${logoW /2}px`);
    }, [])

    return (<div>
                <img src={Logo} alt="logo" id="cslogo" style={{margin:  logoMargin}}/>
                <h4 className="title-Header">Coming Soon</h4> 
            </div>)

}

export default ComingSoon;