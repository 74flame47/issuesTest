import React from 'react';
import Logo from '../images/logo-original.png';

import '../css/content-container.css'


const ContentContainer = () => {
return( <div id="contentcontainer">
            <img src={Logo} alt="logo" id="cslogo"/>
        </div>)
}

export default ContentContainer;