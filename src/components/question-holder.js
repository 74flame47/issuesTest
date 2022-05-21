import React, {useState} from 'react';

import "../css/question-holder.css";

import Question from '../components/question'
import database2 from '../components/database2'

import TileHardLight from "../images/hard-light.png"



const QuestionHolder = ({questions,testPosition,tilePosition,changeTestPosition,getAnswers,lastTile,getResults,reSet}) => {

    const [q1, setQ1] = useState(null);
    const [q2, setQ2] = useState(null);
    const [q3, setQ3] = useState(null);
    const [q4, setQ4] = useState(null);

    const [next, setNext] = useState(false);
    const [testDone, setTestDone] = useState(false);
    /*
        If next is true, all the questions have valid values.
        If next is false all the questions does not have valid values.
    */

    const changeValue = async(count,input) => {
        // await setNext(true)

        /*
            This is the issues now, because the count isn't 123or 4 anymore but it
            has all the numbers.
        */
        
        switch(count){
            case 1:
                await setQ1(input);
            break;
            case 2:
                await setQ2(input);
            break;
            case 3:
                await setQ3(input);
            break;
            default:
                await setQ4(input);
                await setNext(true)
        }
        
        }


        const resetQuestionsAnswers = async()=>{
            await setQ1(null)
            await setQ2(null)
            await setQ3(null)
            await setQ4(null)
        }




    const swapQuestions = async () => {
        if(testPosition > tilePosition){
            await changeTestPosition(0)
            await setNext(false)
        }else{
            await changeTestPosition(testPosition + 1)
            await setNext(false)
            await sendAnswers()
            await resetQuestionsAnswers()
        }
        
    }

    const sendAnswers = async(count, input) => {

        //The below switch statement isn't nessary...I could just send an array where I need it.
        //  It's ok tho, I didn't know.

            switch(count){
                case 1:
                    await getAnswers([input])
                    await console.log([input])
                break;
                case 2:
                    await getAnswers([q1,input])
                    await console.log([q1,input])
                break;
                case 3:
                    await getAnswers([q1,q2,input])
                    await console.log([q1,q2,input])
                break;

                case 4:
                    await getAnswers([q1,q2,q3,input])
                    await console.log([q1,q2,q3,input])
                break;

                default:
                    await getAnswers([q1,q2,q3,q4])
                    await console.log([q1,q2,q3,q4])
            }
    }








    /*
        What's my current issue?
        The answers are nulls when only some suppose to be.
    */


/*
I want to write a conditional statement that allows the results to pop up once all the questions are answered.
questions is an array, so I can use it's length.*/





    const checkAnswers = async () => {


        switch(questions.length){
            case 1:
                await resultsBtnToggle()
                console.log(`Questions length is 1 => ${questions.length}`)
                await getAnswers([q1])
                await console.log([q1])
                

            break;


            case 2:
                if(q1 !== null && q2 !== null){
                    await resultsBtnToggle()
                    await getAnswers([q1,q2])
                    await console.log([q1,q2])
                    
                }
                console.log(`Questions length is 2 => ${questions.length}`)

            break;


            case 3:
                if(q1 !== null && q2 !== null && q3 !== null){
                    await resultsBtnToggle()
                    await getAnswers([q1,q2,q3])
                    await console.log([q1,q2,q3])
                    
                }
                console.log(`Questions length is 3 => ${questions.length}`)
            
            break;


            default :
                console.log(`Questions length is 4 by default => ${questions.length}`)
                if(q1 !== null && q2 !== null && q3 !== null && q4 !== null ){
                    console.log("there are values")
                    await swapQuestions();
                }
                else{
                    console.log("nothing yet")
                }
        }





        //I need to change this into a switch statement.
        
    }
    //Isn't this effecting all the questions?

    /*
        I need to create a switch statement that checks if the questions.length, depending on what count it has, code
        will run according to that.
        I want to run that switch statement on every question, so when ever a question is answered, it will trigger the 
        switch.
        I could do this but I rather just stick to the button and just use that code for the results btn.

        The last tile's trigger event is when the last question is clicked, even if the other questions arent clicked.
        This is a problem. I want this to run only if all the other values for the question is in.

        What are the conditions it will happen?
        if all the questions are clicked run the results code.



        Right now I swap the tiles by using the swapQuestions() in the checkAnswers if all the answers has a value.
        Also if the last question is true then when a div is clicked add the answer AND toggle the results btn.

        I need to replaced that code there. I don't need to trigger it by the true value, I don't need the lastquestion.
        on every question in the lasttile will have the function that will check if all the questions have values. No,
        send the answers regularly, then have the switch statement check if the 
        
        Find out what's the questions length.
        if it's 4 and it's the last tile =>...

    you need a function and a trigger.

    Change what triggers the results pop up. That's it. using the questions length and the answered questions to determine
    if all the questions are answered to trigger the results.

    So remove the results controller from the question to the question holder.

    So I'm saying  if the questions.length is 1 ,2 ,3 , and default which is 4 do something for each.
    The switch statement filters the question length first, then if all the questions have values then do this.


    I need a trigger, what is the trigger I will be using? I can use the questions them selves with an onClick event.
    on click, check if all available answers have values if they do then trigger the results btn, if not then do nothing.




    */

/*
    What's happing? the code only goes through a long delay when I have it in the system of "when all the 
    questions has a value." If I were to change it as soon as a btn is clicked then it works... pay attention to
    this. I found a different route. I just connected the btn toggle to the last input function.
*/


    


     const resultsBtnToggle = async () => {
         if(lastTile){
            await setTestDone(!testDone)
         }
        
     }
 


    const listQuestions = questions.map((quesOBJ,i) =>{
        let count = i + 1
        let newTilePosition = tilePosition + 1;
        // let lastQuestionDatabase = database.length;
        let tileSet = newTilePosition * 4;
        let quesDifferents = 4 - count;
        let questionCount = tileSet - quesDifferents;
        // console.log(`Current tile position is ${newTilePosition}`)
        // console.log(`Current tile set is ${tileSet}`)
        // console.log(`Question difference is ${quesDifferents}`)
        // console.log(`Question count is ${questionCount}`)
        // console.log(`Database count is ${database.length}`)
        // console.log(`Last Question in the tile is ${questionCount}`)
        //This gives me the set the questions are in....what can I do with that?
        //If tile === lastTile then *4 etc

        //The goal is to find out what is the last question in the database and 
        //attach the toggle function to that.

        /*
            I want to ONLY add the sendAnswers() to the last question in the 
            database.
            How do you find the last question in the database?
            
            find the last tile
            multiply that number by 4.
            subtract questions.length


            so if there are 5 tiles which is 20 (ball park figure)
            there questions.length which is 1 (this doesnt give me the total count)
            there are only 2 questions on that tile which is 18, questions.length would be 2 so 20-2 is 18.
            there are only 1 questions on that tile which is 17, questions.length would be 1 so 20-1 is 19.
            4 - 1 = 3 so 20 - 3 = 17 - This is the equasion
            5 * 4 - (4 - 1) =  
            tilePosition + 1 * 4 - (4 - questions.length) =  current question count.


            This is the number system for each question.
            Create a function that adds the count into the questions

        
        */

        // console.log(`Question count is ${questionCount}, and the database count is ${database2.length}`)

        
        return <Question question={quesOBJ}
                         count={count} 
                         questionCount={questionCount} 
                         key={i} 
                         changeValue={changeValue}
                         lastTile={lastTile}
                        //  lastquestion={questionCount === database2.length ? true:false}
                         checkAnswers={checkAnswers}/>
    })








    




    /*
        I need to create a function that changes when all the values are true for the questions.
        So I need a functions that checks if all the values are true so I can trigger the swapQuestions functions.
        Ok what's the current issue?
            There a lag between the button click and the actual function that swaps out the questions.
            Best way around it for now is to just use a btn for that function and have it animate to let the 
            person know that they need the next slide.

            I need an anchor to the btn...what will I use as the condition?
    */

            const showResultsBtn = {
                                    display:"block"    
                                    }

            const hideResultsBtn = {
                display:"none"    
                }

            




    return(
            <div className={testPosition === tilePosition? "questionHolder-container active": "questionHolder-container"}>
                {listQuestions}
                {/* <button onClick={resultsBtnToggle} style={{position:"fixed",top:"100px",zIndex:"20"}}>Toggle BTN</button> */}

                {next ? <div className="btn-pulse-container">
                <div className="btn-pulse" onClick={checkAnswers}>>></div>
                    <div className="btn-pulse-bg" ></div>
                </div>:null}

                <div className={testDone ? "resultsBtn-container active": "resultsBtn-container"}>
                    <div className="resultsBtn" onClick={getResults}>
                        <p>Get Results</p>
                        <img className='tile-hard-light-btn' src={TileHardLight} alt="lightBG" />
                    </div>
                    <div className="resultsBtn-pulse"></div>
                </div>
            </div>
        )
}

export default QuestionHolder;