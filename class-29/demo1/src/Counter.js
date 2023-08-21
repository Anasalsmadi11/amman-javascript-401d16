import React, { useReducer } from 'react';
const reducer = (state, action) => { // the object you send in the dispatch it will be stored in the action , state represents the current state of the component(which is the "initialState")
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }; // this object is the updated initialState obj and it will return in to the reducer hook
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const initialState = {
        count: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decrement</button>
        </>
    )
}
export default Counter;

/* 
// take the code to chatGPT and write :trace the code what happen when i click on increment it will explain what happen


1- When you click the "Increment" button, the onClick handler is triggered, which calls the dispatch function with an action object containing the type 'INCREMENT':

onClick={() => dispatch({ type: 'INCREMENT' })}

2- The dispatch function passes the action to the reducer function you defined earlier. The reducer function takes the current state (which contains { count: 0 }) and the action { type: 'INCREMENT' }.

3- Inside the reducer, the switch statement matches the action type 'INCREMENT':


case 'INCREMENT':
    return { count: state.count + 1 };

4- The reducer returns a new state object with the count value incremented by 1. The returned state is { count: 1 }.

5- The useReducer() hook updates the component's state with the new state value { count: 1 }.

6- React detects the state change and triggers a re-render of the Counter component.

7- During the re-render, the new state { count: 1 } is used to update the UI. The updated count is displayed:

<p>Count: 1</p>
*/