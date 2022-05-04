import React, { useState, useEffect } from 'react';

import "../css/test.css";

import QuestionHolder from '../components/question-holder';
// import database from '../components/database'


import TileLightBG from "../images/light-effect-tileBG.png"
import TileHardLight from "../images/hard-light.png"










const Test = () => {

    const [tilesCount, setTilesCount] = useState([]);
    const [testPosition, setTestPosition] = useState(0)


    const [answers, setAnswers] = useState([])
    const [testResults, setTestResults] = useState({
                                                    resultsIn: false,
                                                    category: null,    
                                                    })

    let newDatabase = []

    let categoryList = []


    const getResults= async () => {
        /*
            Ok what am I doing?
            I need to go through the answers an for each array position get the value, and the category it belongs to
            then add them up.
            I need to automate it in a way where it finds the category and add them in itself with out me having to 
            hard code it...What does that look like?
            Push category into an array, if the same category is already inside of the array, don't push that category.
            Once I have all those categories, then I calculate the values.
            [
                {category: "name_1",
                value: 0},
                {category: "name_2" ,
                value: 0},
                {category: "name_3" ,
                value: 0},
            ]

            find out if the category is new or the same. If new then add it to an array, else add the 
            value to the old category.

                First:
                    to create an empty array name category list
                    create an if statement that checks if array is empty, if so push category.
                    Else, run a forloop of the category list array checking if the current category matches the old one,
                        if so, only add value, else push new category
        */

        
        // This is the obj structure that's getting added { category:currentAns.category,
                                                            // total:0}

        
            

        for(let tileP = 0; tileP < answers.length; tileP++){
            console.log(`The current answer array is ${tileP}`)

            let currentTile = answers[tileP]; //This is an array not a number

            // console.log(currentTile);

            for( let ans = 0; ans < currentTile.length; ans++){
                let currentAns = answers[tileP][ans]

                console.log(`The current question position in answer array${tileP} is ${ans + 1}`)

                if(categoryList.length === 0){
                    console.log("There was no data in the categoryList array I'm pushing")
                    
                    categoryList.push({category:currentAns.category,total:currentAns.value})
                    console.log(categoryList)
                }else{
                    for(let cat = 0; cat < categoryList.length; cat++){

                        console.log(`CategoryList length is currently ${categoryList.length}`)
                        console.log(`LOOP'S POSITION IS ${cat}`)


                        /*
                            The code below only filters according to the first position of the array,
                            so if reject is the first position, but we already added abandonment, then
                            it will never reach abandonment because the code doesn't allow it.

                            How to fix this?
                            if this and this don't match, then try this and this.

                            There is an extra point that is added to the total, and I'm not sure where it's coming from.
                            I have to find this.

                            This is a loop issue. How to correct this?
                        */

                            //If they match add it.
                        if(categoryList[cat].category === currentAns.category){
                            console.log(`The category in catgoryList:${categoryList[cat].category} is equal to the 
                            category of the question:${currentAns.category}`)

                            //How do you change the value in an object?

                            let newTotal = categoryList[cat].total + currentAns.value;

                             categoryList[cat].total = newTotal;

                            // console.log(`the newTotal for ${categoryList[cat].category} is = ${newTotal}`)

                            console.log(`${categoryList[cat].category}'s total is ${categoryList[cat].total}`)

                        }

                            //If they don't match push it to the list
                            //This code here extends the loop in the same questions. WHy?
                            /*
                                What happened is, the first loop ran when only rejection was present in the array.
                                Because of this, the conditional statement added abandonment to the array, when it did this,
                                the loop was extended causing there to be a repeat of the same Loop but with abandonment, this
                                time adding to abandonment.
                                So escentaliy abandonment goes through both of the if statements.

                                How to correct this?
                                In the below else if statement, I send the current question value to the total, so I just changed it
                                to 0 for the initial loop, then when it ran again it will be added seemlessly.
                            */
                        else if(categoryList[cat].category !== currentAns.category && cat === categoryList.length - 1){
                            console.log(`They don't match so I'll just push a new one:${categoryList[cat].category} & ${currentAns.category}`)
                            categoryList.push({category:currentAns.category,total:0})
                           await console.log(categoryList)
                           console.log(`${currentAns.category}'s total is ${categoryList[categoryList.length - 1].total}`)
                        }
                    }
                }

                // console.log(`The current category is ${currentAns.category} and the value is ${currentAns.value}`)

            }


        }

        
            
    }



    const randomDatabase = () => {

        let sampleDatabase = database;

        //I have to make this smaller.

        for (let i = sampleDatabase.length; i > 0; i--){
            let ranNum = Math.floor(Math.random() * i);
            console.log(`${i} and the random number is ${ranNum}`)

            

            newDatabase.push(sampleDatabase[ranNum])
            sampleDatabase.splice(ranNum,1)
        }
    }


/*How to randomize an array items then have that be divided?

    Math.floor(Math.random() * database.length) This will generate a random number between 0 - database.length
    So I have a random number, so what, how can I use this?

    let newDatabase = []
    count = database.length
    let currentCount = database.length - i

    Math.floor(Math.random() * i)

    for (let i = database.length; i > 0; i--){
        console.log(`${i})
    }
*/


    




    const getAnswers =async (ans) =>{
        //ans should be an array.

        let currentAnswers = [...answers]

       await  currentAnswers.push(ans)
       await  setAnswers(currentAnswers)
       console.log("an answer was just added.")

    }






    const divideTiles = async () => {
        // console.log(database.length)

        //This is how to find out how many tiles are needed.
        let tileCount = database.length / 4;
        let lastTilesState = [...tilesCount];
        await console.log(lastTilesState)

        let leftOverQuestions = database.length % 4;

        console.log(leftOverQuestions)
        console.log(" Is the questions has a remainder" + tileCount)

        if(tileCount % 1 === 0){
            console.log("There is no decimal")
            for(let tile = 0; tile < tileCount; tile++){

                let updateTileCount = tile + 1;
                let questionSet = updateTileCount * 4;
    
    
                let tileSetQuestions = [database[questionSet - 4],
                                     database[questionSet - 3],
                                     database[questionSet - 2],
                                     database[questionSet - 1]]
    
                await lastTilesState.push(tileSetQuestions)
    
                console.log(`This is the last question in each set: ${database[questionSet - 1].q}`) 
            }
        }else{
            console.log("There is a decimal")

            //Why am I rounding tileCount up below?
            //tile represents each set.
            for(let tile = 0; tile < Math.ceil(tileCount); tile++){

                let updateTileCount = tile + 1; //this allows me to divide by 4 accurately, the 0 position prevented this.
                let questionSet = updateTileCount * 4; //This allows me to have the sets of 4

                console.log(`Tile position ${updateTileCount}`);
                console.log(`Current set is [${questionSet - 3} - ${questionSet}]`);
                

                //The code below check if the questions is defined or not.
                if(database[questionSet - 1] === undefined){
                    console.log("The last question is undefined");
                    if(database[questionSet - 2] === undefined){
                        if(database[questionSet - 3] === undefined){
                            let tileSetQuestions = [database[questionSet - 4]]

                            await lastTilesState.push(tileSetQuestions)
                        }else{
                            let tileSetQuestions = [database[questionSet - 4],
                                                    database[questionSet - 3]]

                            await lastTilesState.push(tileSetQuestions)
                        }

                    }else{
                        let tileSetQuestions = [database[questionSet - 4],
                                                database[questionSet - 3],
                                                database[questionSet - 2]]
    
                        await lastTilesState.push(tileSetQuestions)
                    }
                }else{
                    console.log("Its something else");
                    // console.log(database[questionSet - 4].q);
                    // console.log(database[questionSet - 3].q);
                    // console.log(database[questionSet - 2].q);
                    // console.log(database[questionSet - 1].q);
                    let tileSetQuestions = [database[questionSet - 4],
                                            database[questionSet - 3],
                                            database[questionSet - 2],
                                            database[questionSet - 1]]
    
                    await lastTilesState.push(tileSetQuestions)

                }

    
   
                //Alright, so the first question in each set is -4, whiles the last question is -1
                
            }
        }

        /*
            IMPORTANT!!!!:
                When ever you are changing a state, you have to use "..." in the new object like in the 
                example above!

                if tileCount has a decemial, then do this, if not then do that.
        */
            
           await setTilesCount(lastTilesState)
    }






    const changeTestPosition = (input) => {
        setTestPosition(input)
    }


    useEffect(()=>{
        divideTiles()
    },[])


    const tilesRender = tilesCount.map((tile, i) =>{
        //i starts from 0 so I subtracted 1 from the tilesCount because .length don't include 0

        let lastTile = tilesCount.length - 1;

        return <QuestionHolder  questions={tile}
                                testPosition={testPosition}
                                tilePosition={i}
                                changeTestPosition={changeTestPosition}
                                getAnswers={getAnswers}
                                lastTile={lastTile === i? true: false}
                                getResults={getResults}/>
    })

  

    return(
            <div className="test-container">
                
                <div className="test-header-container">
                    <h1>Personality Test</h1>
                </div>
                <div style={{zIndex:'5', position:'relative',height:"660px"}}>
                    {/* <QuestionHolder /> */}
                    {/* {questionsSpilt()} */}
                    {tilesCount.length === 0? null:tilesRender}
                </div>
                <button onClick={()=>{console.log(answers)}} style={{position:"fixed",
                                                                     zIndex:"20",
                                                                     left:"5%",
                                                                     top:"0"}}>Answers</button>
                <button onClick={getResults} style={{position:"fixed",
                                                                     zIndex:"20",
                                                                     left:"10%",
                                                                     top:"0"}}>Get Results</button>
                <button onClick={randomDatabase} style={{position:"fixed",
                                                        zIndex:"20",
                                                        left:"20%",
                                                        top:"0"}}>randomDatabase </button>
                <button onClick={()=>{console.log(newDatabase)}} style={{position:"fixed",
                                                        zIndex:"20",
                                                        left:"30%",
                                                        top:"0"}}>show new database</button>
                <img className='tile-hard-light' src={TileHardLight} alt="lightBG" />
                <div className="tile-hard-rim-light"></div>
                <img className='tile-soft-lightBG' src={TileLightBG} alt="lightBG" />
            </div>
        )
}

export default Test;