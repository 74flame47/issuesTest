import React, {useState} from 'react';
import Test from "./components/test";


import './displayFrame.css';



import Main from './images/main.png'
import Title from './images/title.png'
import Rejection from './images/rejection.png'
import Trust from './images/trust.png'
import Abandonment from './images/abandonment.png'
import Default from './images/default.png'




const DisplayFrame = () => { 

  const[testStart, setTestStart] = useState(false)
  const[newTest, setNewTest] = useState(false)

    const[result,setResult] = useState(null)
    const[isRejection,setIsRejection] = useState(false)
    const[isTrust,setIsTrust] = useState(false)
    const[isAbandonment,setIsAbandonment] = useState(false)

                   
    const getResult = async (result) => {
      setResult(result)

      switch(result){
        case "trust": 
          await setIsTrust(true)
          await setIsRejection(false)
          await setIsAbandonment(false)
        break;
        case "rejection": 
          await setIsTrust(false)
          await setIsRejection(true)
          await setIsAbandonment(false)
        break;
        case "abandonment": 
          await setIsTrust(false)
          await setIsRejection(false)
          await setIsAbandonment(true)
        break;
        default:
          await setIsTrust(false)
          await setIsRejection(false)
          await setIsAbandonment(false)
      }



    }


const MainActive = {
  width:'70%',
  position: 'absolute',
  top: '10%',
  opacity: '1',
  left:'-10%',
  transform: 'scale(1)'

}

const MainInActive = {
  width:'70%',
  position: 'absolute',
  top: '10%',
  opacity: '0',
  left:'-10%',
  transform: 'scale(.9)',
  zIndex: '5',
}


const testTranstion0 = {
  opacity: '0',
  position: 'absolute',
  transform: 'scale(.8)',
  zIndex:'-10'
}
const testTranstion1 = {
  opacity: '1',
  position: 'absolute',
  transform: 'scale(1)',
  zIndex:'1',
}





const startTest = () => {
  setNewTest(true)
  setTestStart(true)
}







  return (<div id="windowContainer">
            <div className="center-container">
              <div className="left-container">
                <img src={Main} style={newTest? MainInActive:MainActive} alt="main"/> 
                {result === null &&  testStart === true? <img src={Default} style={{
                                                          width:'70%',
                                                          position: 'absolute',
                                                          top: '10%',
                                                          opacity: '1',
                                                          left:'-10%',
                                                          transform: 'scale(1)',
                                                          zIndex: '0'
                                                        }} alt="main"/>:null} 
                <img src={Rejection} style={isRejection?{width:'50vw',
                                            position:'fixed',
                                            left:'7%',
                                            top:'5%'}:{width:'50vw',
                                                        position:'fixed',
                                                        left:'7%',
                                                        top:'5%',
                                                        display:'none'}}
                                      alt="main"/> 
                 <img src={Trust} style={isTrust?{position:'fixed',
                                                  top: '-20%',
                                                  left:'-10%',
                                                  width:'50vw'}:{position:'fixed',
                                                                  top: '-20%',
                                                                  left:'-10%',
                                                                  width:'50vw',
                                                                display:'none'}}
                                  alt="main"/> 
                <img src={Abandonment} style={isAbandonment?{position:'fixed',
                                                                  top: '5%',
                                                                  height:'90vh',
                                                                  left:'15%'}:{position:'fixed',
                                                                                top: '5%',
                                                                                height:'90vh',
                                                                                left:'15%',
                                                                                display:'none'}}
                                            alt="main"/>  
              </div>
              <div className="right-container">

                {newTest?<div className="testwrapper"><Test testStart={testStart}
                                                            setTestStart={setTestStart}
                                                            getResult={getResult}/></div>:<div className="intro-container">
                                                                                              <img src={Title} alt="title"/>
                                                                                              <p>Unfortunately, life is painful, and not all the lessons we learn are
                                                                                                positive ones. As with you and me, the characters in our stories have
                                                                                                  suffered emotional trauma that cannot easily be dispelled or forgotten.
                                                                                                  We call this type of trauma an emotional wound</p>
                                                                                              <button onClick={startTest}>Take the Test</button>
                                                                                          </div>}
              
               
               {/* <button style={{position:'fixed', top:'0'}} onClick={()=>{console.log(result)}}>Show result</button> */}
               
              </div>
            </div>
            
          </div>
  );
}

export default DisplayFrame;



//<ContentContainer style={{position: 'absolute'}}/>
//
/*
        {newTest?<Test testStart={testStart} setTestStart={setTestStart}/>:null}
        
*/