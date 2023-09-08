'use strict';
const Vertex = require('./Vertex');
const Edge = require('./Edge');
class Graph {
    constructor() {
        this.adjacencyList = new Map();   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
        //  we are using three Map methods here:
        //  set: sets a new value
        //  has: check if the value exists
        //  get: get s avalue by its key
    }

    addVertex(vertex) {    
       //                 // in the read there is a type of graphs called adjacency list and it consist of key and value
        this.adjacencyList.set(vertex, []);  // set takes(key,value)
    }

                 // each edge connects between two vertexes,and the weight is the weight of the edge
    addDirectedEdge(start, end, weight) { // here it means by start ,the firt vertex the edge starts from
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) { // has is a built-in method in Map(built in too)
            console.log(`vertex does not exist`)
            return;
        }
        else {
            const adjacencies = this.adjacencyList.get(start); // get method will get the value of the vertex start wich is [] as we declared in line 15
            let edge = new Edge(end, weight);
            adjacencies.push(edge);
        }
    }
}

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);


const shihab = new Vertex('shihab');


const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

// console.log(myGraph);


myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);





myGraph.addDirectedEdge(shihab, one);


console.log("after", myGraph);

for (const [k, v] of myGraph.adjacencyList.entries()) {
    console.log('k=> ', k, 'v=> ', v);
    
}

