import React, { useState, useEffect } from 'react';

import "../css/test.css";

import QuestionHolder from '../components/question-holder';
import database from '../components/database'


import TileLightBG from "../images/light-effect-tileBG.png"
import TileHardLight from "../images/hard-light.png"










const Test = () => {
    const[testStart, setTestStart] = useState(false)

    const [tilesCount, setTilesCount] = useState([]);
    const [testPosition, setTestPosition] = useState(0)


    const [answers, setAnswers] = useState([])
    const [testResults, setTestResults] = useState({
                                                    resultsIn: false,
                                                    category: null,    
                                                    })
    const categoryList =[{
                            category: "trust",
                            total: 0,
                        },
                        {
                            category: "rejection",
                            total: 0,
                        },
                        {
                            category: "abandonment",
                            total: 0,
                        }]
                                                    

    let newDatabase = []



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
            //This is the list of tiles with questions
            console.log(`The current answer array is ${tileP}`)

            let currentTile = answers[tileP]; //This is an array not a number, Current answer tile

            // console.log(currentTile);

            for( let ans = 0; ans < currentTile.length; ans++){
                //This is each question within the Tile
                let currentAns = answers[tileP][ans] //This is the current question

                console.log(`The current question position in answer array${tileP} is ${ans + 1}`)

                let total;

                switch(currentAns.category){
                    case "trust":
                        console.log(`The question is about trust and it's value is ${currentAns.value}`)
                        total = categoryList[0].total + currentAns.value;
                        categoryList[0].total = total;
                    break;
                    case "rejection":
                        console.log(`The question is about rejection and it's value is ${currentAns.value}`)
                        total = categoryList[1].total + currentAns.value;
                        categoryList[1].total = total;
                    break;
                    default:
                        console.log(`The question is about abandonment and it's value is ${currentAns.value}`)
                        total = categoryList[2].total + currentAns.value;
                        categoryList[2].total = total;
                }



                /*
                    What do I need to do now?
                        I need to determine which is the greatest of the 3 categories.
                    How to do this?
                     is a > b ? if yes is a greater than c ? if yes, a is the greatest
                     if a < b then is b > c? if yes then b is the greatest
                     else c is the greatest.
                     let trust = categoryList[0].total
                     let rejection = categoryList[1].total
                     let abandonment = categoryList[2].total

                     if (trust > rejection){
                        if( trust > abandonment){
                            console.log(`Trust is the greatest with ${trust}`)
                        }else{
                            if (abandonment > rejection){
                                console.log(`Abandonment is the greatest with ${abandonment}`)
                                
                            }else{
                                console.log(`Rejection is the greatest with ${rejection}`)
                            }
                        }
                     }else{
                         if(trust > abandonment){
                            console.log(`Rejection is the greatest with ${rejection}`)
                         }else{
                            if(abandonment > rejection){
                                console.log(`Abandonment is the greatest with ${abandonment}`)
                            }
                            else{
                                console.log(`Rejection is the greatest with ${rejection}`)
                            }
                         }
                        
                     }
                */
                
                // console.log(`The current category is ${currentAns.category} and the value is ${currentAns.value}`)

            }


        }

        let trust = categoryList[0].total
        let rejection = categoryList[1].total
        let abandonment = categoryList[2].total

        if (trust > rejection){
           if( trust > abandonment){
               console.log(`Trust is the greatest with ${trust}`)
               console.log(`Abandonment is  ${abandonment}`)
               console.log(`Rejection is ${rejection}`)
           }else{
               if (abandonment > rejection){
                   console.log(`Abandonment is the greatest with ${abandonment}`)
                   console.log(`Trust is  ${trust}`)
                   console.log(`Rejection is ${rejection}`)
                   
               }else{
                   console.log(`Rejection is the greatest with ${rejection}`)
                   console.log(`Trust is  ${trust}`)
                   console.log(`Abandonment is  ${abandonment}`)
               }
           }
        }else{
            if(trust > abandonment){
               console.log(`Rejection is the greatest with ${rejection}`)
               console.log(`Trust is  ${trust}`)
                console.log(`Abandonment is  ${abandonment}`)
            }else{
               if(abandonment > rejection){
                   console.log(`Abandonment is the greatest with ${abandonment}`)
                   console.log(`Trust is  ${trust}`)
                   console.log(`Rejection is ${rejection}`)
               }
               else{
                   console.log(`Rejection is the greatest with ${rejection}`)
                   console.log(`Trust is  ${trust}`)
                   console.log(`Abandonment is  ${abandonment}`)
               }
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
        // console.log(newDatabase.length)

        //This is how to find out how many tiles are needed.
        let tileCount = newDatabase.length / 4;
        let lastTilesState = [...tilesCount];
        await console.log(lastTilesState)

        let leftOverQuestions = newDatabase.length % 4;

        console.log(leftOverQuestions)
        console.log(" Is the questions has a remainder" + tileCount)

        if(tileCount % 1 === 0){
            console.log("There is no decimal")
            for(let tile = 0; tile < tileCount; tile++){

                let updateTileCount = tile + 1;
                let questionSet = updateTileCount * 4;
    
    
                let tileSetQuestions = [newDatabase[questionSet - 4],
                                     newDatabase[questionSet - 3],
                                     newDatabase[questionSet - 2],
                                     newDatabase[questionSet - 1]]
    
                await lastTilesState.push(tileSetQuestions)
    
                console.log(`This is the last question in each set: ${newDatabase[questionSet - 1].q}`) 
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
                if(newDatabase[questionSet - 1] === undefined){
                    console.log("The last question is undefined");
                    if(newDatabase[questionSet - 2] === undefined){
                        if(newDatabase[questionSet - 3] === undefined){
                            let tileSetQuestions = [newDatabase[questionSet - 4]]

                            await lastTilesState.push(tileSetQuestions)
                        }else{
                            let tileSetQuestions = [newDatabase[questionSet - 4],
                                                    newDatabase[questionSet - 3]]

                            await lastTilesState.push(tileSetQuestions)
                        }

                    }else{
                        let tileSetQuestions = [newDatabase[questionSet - 4],
                                                newDatabase[questionSet - 3],
                                                newDatabase[questionSet - 2]]
    
                        await lastTilesState.push(tileSetQuestions)
                    }
                }else{
                    console.log("Its something else");
                    // console.log(newDatabase[questionSet - 4].q);
                    // console.log(newDatabase[questionSet - 3].q);
                    // console.log(newDatabase[questionSet - 2].q);
                    // console.log(newDatabase[questionSet - 1].q);
                    let tileSetQuestions = [newDatabase[questionSet - 4],
                                            newDatabase[questionSet - 3],
                                            newDatabase[questionSet - 2],
                                            newDatabase[questionSet - 1]]
    
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
        randomDatabase()
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



/*
    Ok, what do I need to do now?
    I need to create the flow of the test now.
    Whats the starting content?
    How do I want the animation to run?
    what will happen?
    I want to create a sample of the animations that will happen on the site in after effects.
*/









  

    return(
            <div className="test-container">
                 <button onClick={()=>{setTestStart(!testStart)}} style={{position:"fixed",
                                                        zIndex:"20",
                                                        left:"30%",
                                                        top:"0"}}>{testStart ? "End":"Start"} test</button>
                {testStart? <div>
                    <div className="test-header-container">
                        <h1>Personality Test</h1>
                    </div>
                    <div style={{zIndex:'5', position:'relative',height:"660px"}}>

                        {tilesCount.length === 0? null:tilesRender}
                    </div>
                </div>: <div>
                            <h1>Start the test here</h1>
                           
                        </div>}
                
                
                <img className='tile-hard-light' src={TileHardLight} alt="lightBG" />
                <div className="tile-hard-rim-light"></div>
                <img className='tile-soft-lightBG' src={TileLightBG} alt="lightBG" />
            </div>
        )
}

export default Test;




/*

if(categoryList.length === 0){
    //This adds a new category even tho there is none to add.
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
          
                What happened is, the first loop ran when only rejection was present in the array.
                Because of this, the conditional statement added abandonment to the array, when it did this,
                the loop was extended causing there to be a repeat of the same Loop but with abandonment, this
                time adding to abandonment.
                So escentaliy abandonment goes through both of the if statements.

                How to correct this?
                In the below else if statement, I send the current question value to the total, so I just changed it
                to 0 for the initial loop, then when it ran again it will be added seemlessly.


                What is happening with my logic? what are the instructions I'm giving it?
                Im telling it to loop for the length all the categories, the problem is that I add it within the code.
                This extendes categories causing it to run again.

                How do I fix this login?
                IF current category matches question category, add
                Else if it doesn't match and you are in the last position of the array, then add new category.
                Else  doesn't match, move on.

                when is this running?



        else if(categoryList[cat].category !== currentAns.category && cat === categoryList.length - 1){
            console.log(`They don't match so I'll just push a new one:${categoryList[cat].category} & ${currentAns.category}`)
            categoryList.push({category:currentAns.category,total:0})
           await console.log(categoryList)
           break;
        //    console.log(`${currentAns.category}'s total is ${categoryList[categoryList.length - 1].total}`)
        }
    }
}




<button onClick={()=>{console.log(answers)}} style={{position:"fixed",
                                                                     zIndex:"20",
                                                                     left:"5%",
                                                                     top:"0"}}>Answers</button>
                <button onClick={getResults} style={{position:"fixed",
                                                                     zIndex:"20",
                                                                     left:"10%",
                                                                     top:"0"}}>Get Results</button>
            <button onClick={()=>{console.log(categoryList)}} style={{position:"fixed",
                                                                     zIndex:"20",
                                                                     left:"10%",
                                                                     top:"10%"}}>show Results</button>
                <button onClick={randomDatabase} style={{position:"fixed",
                                                        zIndex:"20",
                                                        left:"20%",
                                                        top:"0"}}>randomDatabase </button>
                <button onClick={()=>{console.log(newDatabase)}} style={{position:"fixed",
                                                        zIndex:"20",
                                                        left:"30%",
                                                        top:"0"}}>show new database</button>







*/