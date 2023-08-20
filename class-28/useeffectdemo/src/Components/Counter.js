// import React from "react";
// export default function Counter() {
//     return (
//         <>
//             <h2>Function based Counter loaded</h2>
//             <p>number of clicks 0</p>

//         </>
//     )
// }


import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    increaseCount = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    componentDidMount() { // these three Mounting methods are built-in methods ONLY in class based componenets
        console.log('the component mounted!!')
    }
    componentDidUpdate() {
        console.log(`you clicked ${this.state.counter} of time(s)`)
    }
    componentWillUnmount() { // when i click hide it removes the componenet from the DOM
        console.log('unmounted')
    }

   
    render() {
        return (
            <>
            {/* { console.log("hello;")} */}
                <h2>class based Counter loaded {Math.floor(Math.random()*100)}</h2> {/* here as you can see the random number change every time i hit the clicks button, that means it re-render the whole return every time i hit clicks but it mount the component once i load the component the first time */ }
                <p>number of clicks {this.state.counter}</p>
                <button onClick={() => this.increaseCount()}>
                    click me!!
                </button>
            </>
        )
    }
}



export default Counter;