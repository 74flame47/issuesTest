import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import {useSpring, animated} from 'react-spring';

import '../css/portfolio.css';
import SiteImg from '../images/site_.png';
import TreeImg from '../images/tree_.png';
import VidPlaceholder from '../images/vid_placeholder.png';



const Portfolio = ({popUpToggle, showVideo}) => {
    const [videos ,setVideos] = useState([<ReactPlayer  url="https://res.cloudinary.com/bburrows/video/upload/v1600741630/barryburrowsdesigns/logo_full_soundUpdate_wd7pqq.mp4"
                                                        style={{margin: 'auto 0 auto 0'}}
                                                        width="100%"
                                                        height='auto'
                                                        onClick={popUpToggle}
                                                        controls/>,
                                          <ReactPlayer url="https://res.cloudinary.com/bburrows/video/upload/v1600741630/barryburrowsdesigns/logo_full_soundUpdate_wd7pqq.mp4"
                                                        width="100%"
                                                        height='auto'
                                                        controls
                                                        onClick={popUpToggle}/>,0,])
    const [videosStyles ,setVideosStyles] = useState({
                                                        display: "inline-block",
                                                        position: 'relative',
                                                        margin: "10px",
                                                        border: '10px solid #1e1e1e',
                                                        boxSizing: 'border-box',
                                                        width: "300px",
                                                        height: "177.5px",
                                                        cursor: 'pointer'
                                                    })
    const [websites ,setWebsites] = useState([0,0,0,0,0,0,0,0])
    const [websitesStyles ,setWebsitesStyles] = useState({
                                                            width: '300px',
                                                            margin: '10px',
                                                            cursor: 'pointer'
                                                        })






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









    const MovingLogoDisplay = videos.map((video, i) => {
        return <img src={VidPlaceholder}
                    alt="website"
                    style={videosStyles}
                    onClick={()=>{return showVideo(video)}} key={i}/>
    })
    //For this, hide the controls then on click toggle the playing option.

    const websiteDisplay = websites.map((site, i) => {
        return <img src={SiteImg} alt="website" style={websitesStyles} key={i}/>
    })



    


    return( <animated.div className="contentcontainer" style={pagefade}>
        
                <div className="content-center">
                    
                        <h1 className="portfolio-container-title">Animated Logos</h1>
                        <div className="portfolio-container">
                            {MovingLogoDisplay}
                        </div>
                        
                        <h1 className="portfolio-container-title">Web Development And Design</h1>
                        <div className="portfolio-container">
                        {websiteDisplay} 
                        </div>
                        
                    
                    
                </div>
                <img src={TreeImg} alt="" style={{
                                                    position: 'fixed',
                                                    zIndex: '-10',
                                                    right: '-50px',
                                                    bottom: '0',
                                                    opacity: '.1'
                                                }}/>
            </animated.div>)
}

export default Portfolio;


/*<ReactPlayer url="https://res.cloudinary.com/bburrows/video/upload/v1600741630/barryburrowsdesigns/logo_full_soundUpdate_wd7pqq.mp4"
                            style={videosStyles}
                            width="300px"
                            height="177.5px"
                            onClick={popUpToggle}
                            key={i}/>*/