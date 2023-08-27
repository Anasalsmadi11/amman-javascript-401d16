
// if you want to see the result type in terminal node hashmap.js
class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size); // this.map is the array i want to store the data in
    }
    // key="Cat" split ['C','a','t']
    makeHash(key) {
        const asciiCodeSum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt();  // charCodeAt is a built in that  gives you the number of the charecter
        }, 0);
        const multiPrime = asciiCodeSum * 599; // 599 is a prime number , prime numbers are all the numbers greater than 1 and have no divisors other than 1 and themselves.  
        const theIndex = multiPrime % this.size;
        return theIndex;   // note that the index cannot be greater than the size of the array
    }
    add(key, value) {
        const hash = this.makeHash(key);
        this.map[hash] = { [key]: value };
    }
}
