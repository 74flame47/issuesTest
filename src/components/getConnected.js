import React, { useEffect } from 'react';
import {useSpring, animated} from 'react-spring';


import '../css/getConnect.css';


import Img0 from '../images/img0.png';

const GetConnected = () => {




    useEffect( () => {

    }, [])



    const pagefade = useSpring({
        from: {
            opacity: 0,
            transition: '.5s'
        },
        to: {
            opacity: 1
        }
    })

    



    return( <animated.div className="contentcontainer" style={pagefade}>
                <div className="content-center">
                    
                    <div id="getConnect-container">
                    
                        <h1>Contact Us</h1>
                        <p>Interested in working on a project together? Just send me and email, stating what it is that you are expecting me to do. Then we can get started. It’s that simple...I want to start praying for sure. </p>
                        <input className="input-email" placeholder="email"/>
                        <input className="input-firstName" placeholder="first name"/>
                        <input className="input-lastName" placeholder="last name"/>
                        <textarea className="input-message" placeholder="message..."></textarea>
                        
                    </div>
                    
                </div>
                <img src={Img0} alt="" className="emailImg"/>
            </animated.div>)
}

export default GetConnected;
