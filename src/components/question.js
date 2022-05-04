import React, {useState} from 'react';

import "../css/question.css";

const Question = ({question, count, changeValue,lastquestion,resultsBtnToggle,sendAnswers,questionCount}) => {

    const [no, setNo] = useState(false);
    const [notReally, setNotReally] = useState(false);
    const [netural, setNetural] = useState(false);
    const [maybe, setMaybe] = useState(false);
    const [yes, setYes] = useState(false);


    const [questionsValue, setQuestionsValue] = useState([0,1,2,3,4]);


    


    let active = {
        border: "5px solid #ae10ec"
    }

    let inActive = {
        border: "none"
    }




    const noSelector = async () => {
        if(lastquestion){
            await setNo(true);
            await setNotReally(false);
            await setNetural(false);
            await setMaybe(false);
            await setYes(false);

            await changeValue(count,{value:questionsValue[0],
                                    category:question.category})
            await resultsBtnToggle();
            await sendAnswers(count,{value:questionsValue[0],
                                     category:question.category})
        }
        else{
            await setNo(true);
            await setNotReally(false);
            await setNetural(false);
            await setMaybe(false);
            await setYes(false);

            await changeValue(count,{value:questionsValue[0],
                                    category:question.category})
        }
    }






    const notReallySelector = async () => {
        if(lastquestion){
            setNo(false);
            setNotReally(true);
            setNetural(false);
            setMaybe(false);
            setYes(false);

            await changeValue(count,{value:questionsValue[1],
                category:question.category})
                
            await resultsBtnToggle();
            await sendAnswers(count,{value:questionsValue[1],
                category:question.category})
        }else{
            setNo(false);
            setNotReally(true);
            setNetural(false);
            setMaybe(false);
            setYes(false);

            await changeValue(count,{value:questionsValue[1],
                category:question.category})
        }
    }






    const neturalSelector = async () => {
        if(lastquestion){
            setNo(false);
            setNotReally(false);
            setNetural(true);
            setMaybe(false);
            setYes(false);

            await changeValue(count,{value:questionsValue[2],
                category:question.category})
                
            await resultsBtnToggle();
            await sendAnswers(count,{value:questionsValue[2],
                category:question.category})
        }else{
            setNo(false);
            setNotReally(false);
            setNetural(true);
            setMaybe(false);
            setYes(false);

            await changeValue(count,{value:questionsValue[2],
                category:question.category})
        }
    }








    const maybeSelector = async () => {
        if(lastquestion){
            setNo(false);
            setNotReally(false);
            setNetural(false);
            setMaybe(true);
            setYes(false);

            await changeValue(count,{value:questionsValue[3],
                                    category:question.category})
                                    
            await resultsBtnToggle();
            await sendAnswers(count,{value:questionsValue[3],
                category:question.category})
        }else{
            setNo(false);
            setNotReally(false);
            setNetural(false);
            setMaybe(true);
            setYes(false);

            await changeValue(count,{value:questionsValue[3],
                                    category:question.category})
        }
    }










    
    const yesSelector = async () => {
        if(lastquestion){
            setNo(false);
            setNotReally(false);
            setNetural(false);
            setMaybe(false);
            setYes(true);

            await changeValue(count,{value:questionsValue[4],
                                    category:question.category})
                                    
            await resultsBtnToggle();
            await sendAnswers(count,{value:questionsValue[4],
                category:question.category})
        }else{
            setNo(false);
            setNotReally(false);
            setNetural(false);
            setMaybe(false);
            setYes(true);

            await changeValue(count,{value:questionsValue[4],
                                    category:question.category})
        }
    }





    /*
        If active then do this.
        Create a class called active, this will be for one whiles the other are inactive.

    What all I need done?
    Change border
    Determine Value & Save value




    */


    return(
            <div className="question-container" onClick={()=>{console.log(`Last question in the database? ${lastquestion}`)}}>
                <h3>{questionCount}. {question.q}</h3>
                <div className="select-container">
                    <div className="selector-btn"
                         onClick={noSelector}
                         style={no? active: inActive}></div>
                    <p className="selector-text">no</p>
                </div>
                <div className="select-container">
                    <div className="selector-btn"
                         onClick={notReallySelector}
                         style={notReally? active: inActive}></div>
                    <p className="selector-text">not really</p>
                </div>
                <div className="select-container">
                    <div className="selector-btn"
                         onClick={neturalSelector}
                         style={netural? active: inActive}></div>
                    <p className="selector-text">netural</p>
                </div>
                <div className="select-container">
                    <div className="selector-btn"
                         onClick={maybeSelector}
                         style={maybe? active: inActive}></div>
                    <p className="selector-text">maybe</p>
                </div>
                <div className="select-container">
                    <div className="selector-btn"
                         onClick={yesSelector}
                         style={yes? active: inActive}></div>
                    <p className="selector-text">yes</p>
                </div>
            </div>
        )
}

export default Question;