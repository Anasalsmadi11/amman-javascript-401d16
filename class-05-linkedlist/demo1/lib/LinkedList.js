'use strict';
const Node = require('./Node');
class Linkedlist {
    constructor() {
        this.head = null; //the values of the head and the tail are null because the first time i initialize it it will be empty
        // this.tail = null;
        // this.size=
    }
    append(value) { //sice the linkedlist is still empty i need to push nodes into it and since the node is containing value and next(the pointer) i need to add the value
        const newNode = new Node(value); //here we are creating a new object from the constructor Node nothing more or less
        if (!this.head) { //null is a falsy value that means it give false to the null values, and here i need to assign the head value ONLY if it was empty,here if the head has a value that means [this.head] is true thats why i added(!) to be false
            //if the linkedlist is empty
            this.head = newNode; //we are appointing a new value to the head since it is empty
       
            // console.log(`${this} this`)
            return this;
        }
        let currentNode = this.head; // i need to add a new node to the linkedlist but i dont no where the current linked list ends so i need to specify it , thats why i start traversing from the start(the head node)
        while (currentNode.next  /*[see the example below]*/) { //here the currentNode.next will always be true as long as there is a next node , the last node wont have next (or the next will point to null) which means currentNode.next will be false, i used while not for because i dont know how many nodes i have
            currentNode = currentNode.next; // here i need to move the current node to the next node
        }
        currentNode.next = newNode; //once i reachd to the last node i need to add the new node i created 
        return this; // we need to return the modified linked list
    }
    
}

module.exports = Linkedlist;



// here an example to simplify things
let n1={
    data:100
}
let n2={
    data:200
}
n1.next=n2 // next is not a reserved word so i can put whatever the word instead of it
// n1.nex=n2
/// result for console appeare in terminal
console.log(n1)  // { data: 100, next: { data: 200 } }
// it gave us this result because i added an object to another object like we used to for example:
let n3={
    name:"anas",
    namiwa: "kyoko"
}
n3.sureName="alsmadi" // here im adding a new property to an object
n3["sureName2"]="Otonashi" // here im adding a new property to an object
console.log(n3) // {
//     name: 'anas',
//     namiwa: 'kyoko',
//     sureName: 'alsmadi',
//     sureName2: 'Otonashi'
//   }