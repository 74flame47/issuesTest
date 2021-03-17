import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import "../css/nav.css";





const Home = () => {
    const [homeColor, setHomeColor] = useState({
                                            color: '#ffffff'
                                            })
    const [whoAreWeColor, setWhoAreWeColor] = useState({
                                                color: '#ffffff'
                                                })
    const [whatWeDoColor, setWhatWeDoColor] = useState({
                                                color: '#ffffff'
                                                })
    const [portfolioColor, setPortfolioColor] = useState({
                                                                color: '#ffffff'
                                                                })
    const [getConnectedColor, setGetConnectedColor] = useState({
                                                                color: '#ffffff'
                                                                })



    useEffect( () => {
        hometrigged();
    }, [])

    const hometrigged = () => {
        setHomeColor({
            color: '#228d91 ',
        })
        setWhoAreWeColor({
            color: '#ffffff'
            })
        setWhatWeDoColor({
            color: '#ffffff'
            })
        setPortfolioColor({
            color: '#ffffff'
            })
        setGetConnectedColor({
            color: '#ffffff'
            })
            console.log("BTN CLICKED")
    }


    const whoAreWetrigged = () => {
        setHomeColor({
            color: '#ffffff'
        })
        setWhoAreWeColor({
            color: '#228d91 ',
            })
        setWhatWeDoColor({
            color: '#ffffff'
            })
        setPortfolioColor({
            color: '#ffffff'
            })
        setGetConnectedColor({
            color: '#ffffff'
            })
            console.log("BTN CLICKED")
    }


    const whatWeDotrigged = () => {
        setHomeColor({
            color: '#ffffff'
        })
        setWhoAreWeColor({
            color: '#ffffff'
            })
        setWhatWeDoColor({
            color: '#228d91 ',
            })
        setPortfolioColor({
            color: '#ffffff'
            })
        setGetConnectedColor({
            color: '#ffffff'
            })
            console.log("BTN CLICKED")
    }



    const portfoliotrigged = () => {
        setHomeColor({
            color: '#ffffff'
        })
        setWhoAreWeColor({
            color: '#ffffff'
            })
        setWhatWeDoColor({
            color: '#ffffff'
            })
        setPortfolioColor({
            color: '#228d91 ',
            })
        setGetConnectedColor({
            color: '#ffffff'
            })
            console.log("BTN CLICKED")
    }


    const getConnecedtrigged = () => {
        setHomeColor({
            color: '#ffffff'
        })
        setWhoAreWeColor({
            color: '#ffffff'
            })
        setWhatWeDoColor({
            color: '#ffffff'
            })
        setPortfolioColor({
            color: '#ffffff'
            })
        setGetConnectedColor({
            color: '#228d91 ',
            })
            console.log("BTN CLICKED")
    }



    return( <ul className="navLink">
                <li onClick={hometrigged}><NavLink to='/hello' style={homeColor} >Home</NavLink></li>
                <li onClick={whoAreWetrigged}><NavLink to='/whoAreWe' style={whoAreWeColor}>Who are we</NavLink></li>
                <li onClick={whatWeDotrigged}><NavLink to='/whatWeDo' style={whatWeDoColor}>What we do</NavLink></li>
                <li onClick={portfoliotrigged}><NavLink to='/portfolio' style={portfolioColor}>Portfolio</NavLink></li>
                <li onClick={getConnecedtrigged}><NavLink to='/getConnected' style={getConnectedColor}>Get Connected</NavLink></li>
            </ul>)
}

export default Home;
