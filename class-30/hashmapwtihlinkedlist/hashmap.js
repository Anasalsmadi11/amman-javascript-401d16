"use strict";
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    // returning the all the values  from the linkedList
    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    makeHash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0);
        const multiPrime = asciiCodeSum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }
    add(key, value) {
        const hash = this.makeHash(key);
        if(!this.map[hash]){
            this.map[hash] = new LinkedList();
        }  // here beware of putting else here it wont work unless you put  this.map[hash].append({ [key]: value }) inside the if statement too 
// console.log(this.map[hash].hea)
        this.map[hash].append({ [key]: value })
    }
}

const myHashmap = new Hashmap(10);
// console.log(myHashmap.makeHash('ahmad'));
// console.log(myHashmap.makeHash('mohamad'));

myHashmap.add("esam", "401d15 student");
myHashmap.add("ahmad", "401d15 student");
myHashmap.add("mohamad", "401d15 student");
myHashmap.add("samah", "401d15 student");
myHashmap.add("laith", "401d15 student");
myHashmap.add("shihab", "401d15 student");

myHashmap.map.forEach((ll) => { /// notice here the map is not the method,rather it is the array i defined above
    console.log(ll.print());
})
