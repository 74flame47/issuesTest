import React, { useState, useEffect } from 'react';
import {useSpring, animated} from 'react-spring';




const ContentContainer = () => {
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

    return( <animated.div className="contentcontainer"  style={pagefade}>
                <h1>Homeeeeeeeeeeeeeeeeee page</h1>
            </animated.div>)
}

export default ContentContainer;
