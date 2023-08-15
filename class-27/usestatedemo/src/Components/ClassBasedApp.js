import React, { Component } from "react"; // In JavaScript, when importing modules, you can choose to import specific parts of a module using curly braces {} or import the entire module directly without using curly braces. 

class App extends Component {
    constructor(props) {
        super(props); // see how to convert from constructor function to class to know more about super
        this.state = {
            counter: 0,
            age: 37
        }
    }
    incrementCount = () => {
        // this.state.counter += 1; // with this only it will change the value of counter but it wont rerender again
        this.setState({ counter: this.state.counter + 1 }); // setState here is a built-in method in react library
        console.log('counter ', this.state.counter)
    }
    render() {
        return (
            <>
                <h1>Hello Everyone</h1>
                <p>Number of Clicks {this.state.counter}</p>
                 <button onClick={this.incrementCount}>Click Me</button> {/* here as you remember in trees or linked list..  when we need to use a method (like increamentCount) inside another method(like render) we put "this" */}
            </>
        )
    }
}
export default App;


