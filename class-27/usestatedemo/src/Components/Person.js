// import React, { useState } from "react";

// function Person(props) {
//     const [age, setAge] = useState(props.age || 36)
//     const [name, setName] = useState(props.name || "shihab");
//     const handleChange = (e) => {
//         setName(e.target.value);
//     }
//     return (
//         <>
//             <h2 data-testid="name">My name is {name}</h2>
//             <h3>My age is {age}</h3>

//             <input data-testid="changedName" onChange={handleChange} />
//         </>
//     )
// }

// export default Person;

import react ,{useState} from 'react'
function Person(props){

    const [name, setName]= useState(props.name || "kyoko")
    const [age, setAge]= useState(props.age || "26")
    
    let handleChange=(e)=>{
        setName(e.target.value)
        console.log(e.target.value)
    }
    return (
        <>
              <h2 >My name is {name}</h2>
              <h3>My age is {age}</h3>

              <input onChange={handleChange}/>
        </>
    )
}
export default Person