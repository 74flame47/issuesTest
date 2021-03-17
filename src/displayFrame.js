import React, {useState} from 'react';
import Home from './components/home';
import WhoAreWe from './components/whoAreWe';
import WhatWeDo from './components/whatWeDo';
import Portfolio from './components/portfolio';
import GetConnected from './components/getConnected';
import Nav from './components/nav'
import ReactPlayer from 'react-player';
import {useSpring, animated} from 'react-spring';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PopUpDefault from './components/popUpDefault';


import logoMain from './images/logo_.png';
import './displayFrame.css';
import './css/main.css';





const DisplayFrame = () => { 

  const [newView, setNewView] = useState(true);
  const [videoIntro, setVideoIntro] = useState({
                                          playing: true,
                                        })
  const [videoIntroStyle, setVideoIntroStyle] = useState({
                                                  position: 'fixed',
                                                  display: 'block',
                                                  top: '0px',
                                                  transition: '1s',
                                                  zIndex: '95'
                                                })  
  const [logoStyle, setLogoStyle] = useState({
                                              position: 'fixed',
                                              opacity: '0',
                                              maxWidth: '250px',
                                              width: '10vw',
                                              transition: '1s',
                                              logoP: 'left'
                                            });                                              
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] =useState('Hi, Im the content');




                                                
  let fade = useSpring({
    
    from: {
        opacity: newView ? 0: 1,
        transition: '1.6s',
    },
    to: {
      opacity: !newView ? 0: 1,
    }
  })


  const pagefade = useSpring({
    from: {
        opacity: 0,
        transition: '1.6s'
    },
    to: {
        opacity: 1
    }
})

 
  const popUpToggle = () => {
    setPopUp(!popUp);
    console.log("Popup was clicked")
  }

  const showVideo = async (video) => {
    await setPopUpContent(video);
    await popUpToggle()
  }


const logoToggle = async () => {
  console.log(logoStyle.logoP )
  if(logoStyle.logoP === 'left'){
    setLogoStyle(prevState => ({
      ...prevState,
      left: '-150px',
      logoP: 'right'
  }))
  
  }
  else{
    await setLogoStyle(prevState => ({
      ...prevState,
      left: '0',
      logoP: 'left'
  }))
  console.log('it wasn"t left')
  }
  
}







  return (<div className="App">
    {popUp ? <PopUpDefault popUpToggle={popUpToggle}  popUpContent={popUpContent}/>: null}
    <BrowserRouter >
      <div className="border-top">
        <Nav style={{positon: 'fixed', top: '30vh'}}/>
      </div>

      <img src={logoMain} alt="logo main" style={logoStyle} onClick={logoToggle}/>

      <animated.div style={pagefade}>
        <Switch>
          <Route path='/whatWeDo' component={WhatWeDo}/>
          <Route path='/portfolio' render={()=>{return(<Portfolio popUpToggle={popUpToggle} showVideo={showVideo}/>)}}/>
          <Route path='/whoAreWe' component={WhoAreWe}/>
          <Route path='/getConnected' component={GetConnected}/>
          <Route path='/' component={Home}/>
        </Switch>
      </animated.div>
      
      <div className="border-bottom">
        <div  id="copyright">
          <p>© BarryBurrowsDesigns 2020</p>
        </div>
      </div>

      <animated.div  style={fade}>
        <ReactPlayer  url="https://res.cloudinary.com/bburrows/video/upload/v1600741630/barryburrowsdesigns/logo_full_soundUpdate_wd7pqq.mp4"
                      style={videoIntroStyle}
                      width="100%"
                      height="100%"
                      playing ={videoIntro.playing}
                      onEnded={() => { 
                        setNewView(!newView)
                        setLogoStyle({
                          opacity: '1',
                          zIndex: '10',
                          position: 'fixed',
                          transition: '1s',
                          maxWidth: '250px',
                          width: '10vw',
                        })
                      }}
                      onClick={ async () => { 
                        await setNewView(!newView) 
                        await setVideoIntro({playing: false})
                        await setVideoIntroStyle({
                          position: 'fixed',
                          display: 'none',
                          top: '0px',
                          transition: '1s',
                          zIndex: "-500"
                        })
                        await setLogoStyle({
                          display: 'block',
                          zIndex: '10',
                          position: 'fixed',
                          transition: '1s',
                          maxWidth: '250px',
                          width: '40vw',
                        })
                      }} 
          />
        </animated.div>
        
    </BrowserRouter>
    </div>
);
}

export default DisplayFrame;



//<ContentContainer style={{position: 'absolute'}}/>
//
/*
        
        
*/