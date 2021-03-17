import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';

import '../css/whatWeDo.css'


import ImgDSA from '../images/dsa.PNG';
import Img2 from '../images/img2.png';
import Img3 from '../images/img3.png';

const WhatWeDo = () => {
    const [copy , setCopy] = useState( <div>
                                            <p>When it comes to <strong>Motion Graphics</strong> we are no strangers... Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut </p>
                                            <p>dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                                        </div>);
    const [bgImg , setBgImg] = useState(ImgDSA);

    const [MG, setMGStyle] =  useState({
                                        backgroundColor: '#dddddd',
                                        color:'#7c7c7c',
                                        });

    const [BD, setBDStyle] =  useState({
        backgroundColor: '#dddddd',
        color:'#7c7c7c',
        });

    const [WD, setWDStyle] =  useState({
            backgroundColor: '#dddddd',
            color:'#7c7c7c',
            });




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



    const WDToggle = () => {
        setCopy(<div>
                    <p>When it comes to <strong>WEB DESIGN AND DEVELOPMENT</strong> we are no strangers... Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut </p>
                    <p>dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                </div>)
        setMGStyle({
                    backgroundColor: '#dddddd',
                    color:'#7c7c7c',
                    })
        setBDStyle({
                    backgroundColor: '#dddddd',
                    color:'#7c7c7c',
                    })
        setWDStyle({
                    backgroundColor: '#228d91',
                    color:'#FFFFFF',
                    })
                    
        setBgImg(ImgDSA)
    }

    const BDToggle = () => {
        setCopy(<div>
            <p>When it comes to <strong>BRAND DESIGN</strong> we are no strangers... Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut </p>
            <p>dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
        </div>)

        setMGStyle({
            backgroundColor: '#dddddd',
            color:'#7c7c7c',
            })
        setBDStyle({
            backgroundColor: '#228d91',
            color:'#FFFFFF',
            })
        setWDStyle({
            backgroundColor: '#dddddd',
            color:'#7c7c7c',
            })

        setBgImg(Img2)
    }

    const MGToggle = () => {
        setCopy(<div>
                    <p>When it comes to <strong>MOTION GRAPHICS</strong> we are no strangers... Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut </p>
                    <p>dis parturient montes, nascetur ridiculus mus. Donec quam felis, quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
                </div>)
        setMGStyle({
            backgroundColor: '#228d91',
            color:'#FFFFFF',
            })
        setBDStyle({
            backgroundColor: '#dddddd',
            color:'#7c7c7c',
            })
        setWDStyle({
            backgroundColor: '#dddddd',
            color:'#7c7c7c',
            })
        
        setBgImg(Img3)
    }



    return( <animated.div className="contentcontainer" style={pagefade}>
                <div className="content-center">
                    <div className="content-center-inner">
                        <div className="content-center-right">
                            <img src={bgImg} alt="DAS" style={{width: '80%', marginTop: '-50px', textAlign: 'right'}}/>
                        </div>

                        <div className="content-center-left">
                            <h1 className="whatWeDo-title">What We Do</h1>
                            <div className="whatWeDo-copy-container">
                                {copy}
                                <div className="skill-box" onClick={MGToggle} style={MG}><p>Motion Graphics</p></div>
                                <div className="skill-box" onClick={BDToggle} style={BD}><p>Brand Design</p></div>
                                <div className="skill-box" onClick={WDToggle} style={WD}><p>Web Design</p></div>
                            </div> 
                        </div>

                    </div>
                </div>
                
            </animated.div>)
}

export default WhatWeDo;
