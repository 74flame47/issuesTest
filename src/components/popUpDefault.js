import React from 'react';
import '../css/popUpDefault.css';


const PopUpDefault = ({popUpToggle, popUpContent}) => {
    return( <div id="popUpBG">
                <div id="popUpContainer">
                    <div id="KillPopUpBtn" onClick={popUpToggle}>x</div>
                    {popUpContent}
                </div> 
                
            </div>) 
}

export default PopUpDefault;