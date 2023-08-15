import React, { useState } from "react";
import Person from './Person';
function App() {
    const [counter, setCounter] = useState(0);
    const [divisible, setDivisible] = useState(false);
   // let increamentCount= ()=>{
  //      setCounter(counter +1)
  //  } either write it like this and put only increamentCount inside the onClick(without the anonymos function) in the commented  button  or write it as anonymous function as showen in the butten tag

    const updateCounter = () => {
        let newCount = counter + 1;
        setCounter(newCount)
        if (newCount % 5 === 0) {
            setDivisible(true);
        } else {
            setDivisible(false);
        }
    }
    return (
        <>
            <h1>Hello Everyone from function based component</h1>
            <p data-testid="counter-value">Number of Clicks {counter}</p>
            <p data-testid="divisible">it is a divisible of five {divisible ? "yes" : "no"}</p>
            <button data-testid="update-counter" onClick={() => updateCounter()}>Click Me</button>
            {/* <button onClick={()=>setCounter(counter+1)}>Click Me</button> {/* here the anonymos function is triggered once i hit click ,without it the setCount wont be triggered */}
            <br></br>
            <br></br>
            <br></br>
            <Person name='abuessa' age='28' />
            {/* <Person /> */}
        </>
    )
}

export default App;
