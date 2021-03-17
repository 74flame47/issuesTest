import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';

import '../css/whoAreWe.css';
import Img1 from '../images/img1.png'


const WhoAreWe = () => {
 const [siteTest , setSiteTest] = useState(true);




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
            <img src={Img1 }alt="featured" className="img1"/>
            <h1 className="whoAreWe-title">Who are we</h1>
            <div style={{width: '100%', maxWidth: '700px', margin: '0 auto'}}>
                <p>This basically speaks about who I am and why I exist. Also how I benefit the business, and how I can change the business modle.....montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>
                <p>Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. </p>
            </div>
        </div>
        
            </animated.div>)
}

export default WhoAreWe;
