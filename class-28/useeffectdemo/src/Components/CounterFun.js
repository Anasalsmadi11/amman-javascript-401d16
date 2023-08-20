import React, { useState, useEffect } from "react";
export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('shihab');
    // useEffect(() => {
    //     console.log('i will be on every render');
    // });

    // the useEffect wont be carried out unless i change the value of the counter, also it is executed the first time i mount the component
    useEffect(() => {
        console.log('**************')
    }, [counter]);              
    // useEffect(() => {
    //     console.log('//////////')
    // }, [name])
    // useEffect(() => {
    //     console.log('&&&&&&&&')
    // }, [name, counter]);     // the useEffect wont be carried out unless i change the value of the counter or the name or both, also it is executed the first time i mount the component
    // useEffect(() => {
    //     console.log('****')
    // }, []);                  /// here it wont print because i didnt specify somthing to change so it will only be printed once i mount the component
    useEffect(() => {        // This is essentially equivalent to the componentWillUnmount lifecycle method in class components.
        return () => { 
            console.log('component unmounted');
        }
    }, []); // this wont work if you uncomment the one with the same []
    return (
        <>
            <h2>function based Counter loaded  {Math.floor(Math.random()*100)}</h2> {/* here as you can see the random number change every time i hit the clicks button, that means it re-render the whole return every time i hit clicks but it mount the component once i load the component the first time */ }
            <p>number of clicks {counter}</p>
            <p>My name is {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <button onClick={() => setCounter(counter + 1)}>
                click me!!
            </button>
        </>
    )
}