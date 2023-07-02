const Node = require('./Node.js');

class Stack {
    constructor() {
        this.top = null; // null because the initial value if the stack is empty
        this.length = 0;
    }
    isEmpty() {
        if (this.top === null) {
            return true;
        } else {
            return false;
        }

        // return this.top === null;
    }

    // push(value) {
    //     if (this.isEmpty()) { //here wether you put the if statement or not it is not neccessary cuz the solution will still the same, shihab put it to make things clearer(what inside else is the basic solution)
    //         const newNode = new Node(value);
    //         this.top = newNode;
    //         this.length++;
    //     }
    //     else {
    //         const newNode = new Node(value); // see your Notes
    //         newNode.next = this.top;
    //         this.top = newNode;
    //         this.length++;
    //     }
    // }
    
    //or
    
    push(value){
        const newNode= new Node(value)
        newNode.next= this.top
        this.top= newNode
        this.length++
    }

    pop() {
        if (this.isEmpty()) { //// i used this to isEmpty cus isEmpty is part of the class, here it is mandetory to check if the stack is empty or not
            console.log('empty stack');
            return false;
        }
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }

    peek() { // i peek on the stack from the top
        if (this.isEmpty()) {
            return 'sorry stack is empty';
        }
        return this.top.value;
    }
}

module.exports = Stack;